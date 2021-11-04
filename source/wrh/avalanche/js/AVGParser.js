/**
 * 
 * 
 * @description - A class to parse out a standardized AVG Product and allow it to be displayed in all of its parts
 * separately on a webpage.  Deviating from the AVG product and its format may impact this.
 * 
 * @author Jeremy.Schulz@noaa.gov 
 *  * 
 *  @param {Object} // A response of products from the NWS API endpoint
 */
class AVGParser {
	constructor(productText) {
		this._productText = productText;
		this._discussion = this.parseDiscussion();
		this._forecast = this.parseForecastData();
		this._productTime = ''; //TODO Need to grab this from the API object.
		this._timeZone = ''; //TODO Grab this from API or at least parse from product.
	}

	/**
	 * Getter for the forecast discussion text.
	 */
	get discussion() { return this._discussion; }
	/** 
	 * Getter for a list of all available forecast locations.
	 */
	get locations() { return Object.keys(this._forecast); }
	/**
	 * Getter for the time the product was last issued.
	 */
	get productTime() { return this._productTime; }

	/**
	 * 
	 * @param {*} location - a location defined in the AVG
	 * @returns {Object} - Forecast object for a particular location 
	 */
	forecast(location) { 
		if (this.locations.includes(location)) { return this._forecast[location]; }
		else { 
			throw Error(`Location ${location} not available in AVG or is improperly formatted`);
		}
	}

	/**
	 * Parses out the discussion text based between the word '.DISCUSSION...' and the next '...' 
	 * @returns {String} - Trimmed up discussion text.
	 */	
	parseDiscussion() { 
		let discussion = this.textBetweenStrings(this._productText,String.raw`\n\.DISCUSSION\.\.\.`,String.raw`(\n\.\.\.|\*\*\*)`,'gsi');
		if (discussion) { 
			return discussion[0].trim().replaceAll('\n\n','<br><br>') //Get our new lines into a html friendly format.
		}
		else { return '' }; 
	}
	/**
	 * Parses out the forecast points into an object that holds the location and forecast data.
	 * @returns {Object} - Forecast and location data
	 */
	parseForecastData(){
		//Parse out the forecast points
		const forecastData = {};
		let avgFcsts = this.textBetweenStrings(this._productText,String.raw`\.\.\.`,String.raw`(\n\n\n|\$\$|\*\*\*)`,'gs');
		//For each parsed out forecast section, parse it out further into a location and forecast text. 
		//perhaps we also want to parse out the elevation from the location?
		let timesRegex = new RegExp(/^(TIME).*/im);		
		let datesRegex = new RegExp(/^(DATE).*/im);
		let tabularRegex = new RegExp(/(CLOUD)[\S\s]*/im)		
		if (avgFcsts) {
			//Because of the bass ackwards way we need to do this since safari doesnt support lookbacks,
			//Remove it if the discussion gets in there.
			if (avgFcsts[0].toLowerCase().includes('discussion')){ avgFcsts.shift(); }
			avgFcsts.forEach( avgFcst => {

				avgFcst = avgFcst.trim();
				let locationPart = avgFcst.split('\n')[0].trim();
				let location = this.parseLocation(locationPart);
				let timePart = avgFcst.match(timesRegex)[0];
				let datePart = avgFcst.match(datesRegex)[0];
				let times = this.parseForecastTimes(datePart,timePart)
				
				let tabularPart = avgFcst.match(tabularRegex)[0].trim();
				let forecast = this.parseForecastTable(tabularPart,times);
				let rawForecast = [datePart,timePart,tabularPart].join('\n');

				let id = String(location.name.toLowerCase());
				forecastData[id] ={
					elevation : location.elevation,
					id : id,
					name : location.name,
					forecast : forecast,
					raw : rawForecast
				};
			});
		}
		return forecastData;
	}

	
	/**
	 * Utility function to return a regex between two given strings
	 * @param {String} begin - Text of the first string to look for
	 * @param {String} end - Text of the last string to look for
	 * @param {String} flags - Unseparated list of which query flags to run in the regex(g,s,i,etc) 
	 * @returns {RegExp} - A Regex that can be matched off of.
	 */
	regexBetweenStrings(begin,end,flags){
		return new RegExp(`(?<=${begin}\s*).*?(?=\s*${end})`,flags);
	}
	/**
	 * Utility function to return a text between two given strings
	 * @param {String} text - Text to search through
	 * @param {String} begin - Text of the first string to look for
	 * @param {String} end - Text of the last string to look for
	 * @param {String} flags - Unseparated list of which query flags to run in the regex(g,s,i,etc) 
	 * @returns {String} - A Regex that can be matched off of.
	 */
	textBetweenStrings(text,begin,end,flags){
		let betweenRegex = new RegExp(`(${begin})(?<between>.*?)(${end})`,flags);
		let matches = [...text.matchAll(betweenRegex)];
		let matchesText = matches.map(m => m.groups.between);
		if (matchesText.length > 0) { return matchesText; }
		else { return false; }

		//return new RegExp(`(?<=${begin}\s*).*?(?=\s*${end})`,flags); //Unfortunately Safari doesn't support Lookbehind yet.

	}

	/**
	 * Location data parsed out into a name and elevation
	 * @returns {Object} - a parsed out location that includes the name and the elevation
	 * 
	 * Example locationPart:
	 * ...SQUAW FLAT SNOTEL (6240 FT)...
	 */
	parseLocation(locationPart){
		let name = this.textBetweenStrings(locationPart,'',String.raw`\(`,'gs')
		if (name) { name = name[0].trim(); }
		let elevation = this.textBetweenStrings(locationPart,String.raw`\(`,String.raw`\)`,'gs')[0];
		
		if (elevation) { 
			elevation = elevation.trim(); 
			if (elevation.includes('-')){ //TODO HANDLE elevation ranges
				elevation = elevation.replace(/[^0-9]/g, "");	
			}
			else { elevation = elevation.replace(/[^0-9]/g, "");	}
			//Convert to kft
			//elevation = Number(parseInt(elevation) / 1000).toFixed(1)
		}
		return { 
			name : name,
			elevation : elevation
		}
	}
	/**
	 * Parse out the forecast times into an array of objects that include positional data for each column.
	 * @param {String} timePart - Unparsed date/time headers from the AVG forecast table
	 * @returns {ObjectArray} - an array of objects that include the date of the forecast time as well as the start / end character locations
	 * 
	 * Example datePart: 
	 * DATE             THURSDAY 01/14          FRIDAY 01/15
	 * Example timePart: 	  
	 * TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
	 */
	parseForecastTimes(datePart,timePart){
		//Find all listed dates in the date string and convert to an array.
		let dPosRegex = new RegExp(/([A-Z]+ [0-9]{1,2}\/[0-9]{1,2})/ig);

		let dateMatches = [...datePart.matchAll(dPosRegex)];
		
		//This is going to be a bit hokey, but we're going to set previous and future dates in the dateMatches, essentially adding creating where 
		//they "should" be in the string index if they were in fact there.  We'll find out the length of the date based on character values between
		//the first and second date.
		let lengthBetweenDateText = dateMatches[1].index - dateMatches[0].index;

		let allAvailableDates = [{
			date: this.convertTextDateToObject(dateMatches[0][0],-1),
			start: dateMatches[0].index - lengthBetweenDateText,
			end: dateMatches[0].index
		}]
		dateMatches.forEach(dMatch => {
			allAvailableDates.push({
				date: this.convertTextDateToObject(dMatch[0]),
				start: dMatch.index,
				end: dMatch.index	+ lengthBetweenDateText
			})
		});
		allAvailableDates.push({
			date: this.convertTextDateToObject(dateMatches[dateMatches.length - 1][0],1),
			start: dateMatches[dateMatches.length - 1].index + lengthBetweenDateText,
			end: dateMatches[dateMatches.length - 1].index + (lengthBetweenDateText * 2)
		})

		//Find all listed times in the time string and convert to an array.
		let tPosRegex = new RegExp(/([0-9]{1,2})/g);
		let timeMatches = [...timePart.matchAll(tPosRegex)];
		//Create a useable object that has the times and character indices of each hour
		let allAvailableTimes = [];
		timeMatches.forEach(tMatch => {
			allAvailableTimes.push({
				hour : parseInt(tMatch[0]),
				start : tMatch.index,
				end : tMatch.index + tMatch[0].length
			})
		});

		//Loop through the available timestamps, and determine the correct date and character placement
		let forecastTimes = [];		
		allAvailableTimes.forEach(availableTime => {
			let dMatchIndex = allAvailableDates.findIndex( availableDate => {
				if ((availableDate.start <= availableTime.start) && (availableDate.end > availableTime.end)) { return true; }
			});

			//If < 06Z use the "next" date because Datestamp text seems to always fall at 06Z instead of 00z. So if we're < 06Z, give it our next date.
			let forecastTimeDate;
			if (availableTime.hour < 6) { forecastTimeDate = new Date(+allAvailableDates[dMatchIndex + 1].date) }
			else { forecastTimeDate = new Date(+allAvailableDates[dMatchIndex].date); }
			forecastTimeDate.setHours(forecastTimeDate.getHours() + availableTime.hour);

			forecastTimes.push({
				date : forecastTimeDate,
				start : availableTime.start,
				end : availableTime.end
			})
		});
		return forecastTimes;
	}	
	/**
	 * Converts a AVG date format to a javascript date format.
	 * @param {String} dateText - string formatted date with out the year Example : MONDAY 9/18
	 * @param {Integer} dateOffset - number of days to add or subtract from the date given to help calculate unlisted dates
	 * @returns {Date} - A timezone aware Date object set to midnight of the given timezone.
	 */
	convertTextDateToObject(dateText,dateOffset = 0){
		let datestamp = dateText.split(' ')[1];
		let mon = datestamp.split('/')[0];
		let day = datestamp.split('/')[1];
		let now = new Date();
		//Need to account for a year change here.
		//TODO need to account for timezone here.
		let d = new Date(`${now.getFullYear()}-${mon}-${day}T00:00:00.000-07:00`)
		let dOff = new Date(+d);
		dOff.setDate(dOff.getDate()+dateOffset);
		return dOff;
	}
	/**
	 * 
	 * @param {String} forecastTable - Unparsed tabular forecast data from the AVG
	 * @param {ObjectArray} forecastTimes - Time and character position data from parseForecastTimes
	 * @returns {ObjectArray} - Listing of forecast data parsed out by weather type and time
	 * 
	 * Example forecastTable: 
	 * CLOUD COVER      SC SC SC SC FW FW SC SC SC SC BK BK OV OV SC SC SC
	 * CLOUD COVER (%)  30 30 25 25 15 15 35 35 40 40 70 70 80 80 40 40 35
	 * TEMPERATURE      15 17 30 32 26 24 25 23 23 24 33 32 28 27 26 24 22
	 * MAX/MIN TEMP                 32          19          34          20
	 * WIND DIR          W NW NW NW NW NW  S  S  S  S  S SW SW  W NE NE NE
	 * WIND (MPH)        1  2  2  1  1  2  3  4  3  3  3  2  2  1  1  2  2
	 * WIND GUST (MPH)
	 * PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0 20 20 30 30 30  5  5
	 * PRECIP TYPE                                     S  S  S  S
	 * 12 HOUR QPF                0.00        0.00        0.01        0.02
	 * 12 HOUR SNOW                0.0         0.0         0.1         0.2
	 * SNOW LEVEL (KFT)  2  2  3  3  3  3  3  3  3  3  4  4  4  4  4  4  3
	 */
	parseForecastTable(forecastTable,forecastTimes){

		let parsedForecastData = [];

		//Separate each line into an array that we can parse later.
		let forecastLines = forecastTable.split('\n');
		//The header text could be anything before the first time period. I'd love to regex this out, but probably impossible 
		//so just use a substring based on that index.

		forecastLines.forEach( forecastLine => {
			let weatherType = forecastLine.substring(0,forecastTimes[0].start-1).trim().toLowerCase();
			parsedForecastData[weatherType] = null; 
			let parsedForecastDataArray = [];
			for (let i=0; i < forecastTimes.length; i++){
				let parsedForecast = {
					val : '',
					date : forecastTimes[i].date
				};
				let columnValue = forecastLine.substring(forecastTimes[i].start-2,forecastTimes[i].end).trim();
				if (!weatherType.includes('12 hour')){ parsedForecast.val = columnValue; }
				else  { 
					let regex; 
					//Only look for ice and QPF where the data column starts with .## Then we know we have a start to 12 hour block. 
					if (weatherType.includes('qpf') || weatherType.includes('ice')) {  regex = new RegExp(/\.[0-9]{2}/); }
					//Only look for snow  where the data column starts with #.# 
					else if (weatherType.includes('snow')) { regex = new RegExp(/[0-9]{1}\.[0-9]{1}/); }	
					if (regex.test(columnValue)) { 
						//If our value is QPF look back an extra couple columns to get the full string.
						columnValue = forecastLine.substring(forecastTimes[i-2].start-1,forecastTimes[i].end).trim();
						//if (columnValue == '') { columnValue = null; }
						parsedForecast.val = columnValue;
						//12 hourly data is look behind not look forward, so search back through previous times and add when needed.
						let j = 0;
						do { 
							if (parsedForecast.date.getTime() - parsedForecastDataArray[j].date.getTime()  < 432e5 ) { 
								parsedForecastDataArray[j].val = columnValue;
							}
							j++;
						}
						while (i > j);
					}
				}
				parsedForecastDataArray.push(parsedForecast);
			};
			parsedForecastData[weatherType] = parsedForecastDataArray;
		});
		return parsedForecastData;
	}
}