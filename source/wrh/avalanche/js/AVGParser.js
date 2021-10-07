/**
 *  Base class to allow combination of both API and AWIPS endpoints and manage the threat matrix data structure
 *  @constructor
 */
class AVGParser {
	constructor(productText) {
		this._productText = productText;
		this._discussion = this.parseDiscussion();
		this._forecast = this.parseForecastData();
		this._productTime = ''; //TODO Need to grab this from the API object.
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
		let regex = this.regexBetweenStrings(String.raw`\n\.DISCUSSION\.\.\.`,String.raw`\n\.\.\.`,'gsi');
		let match = this._productText.match(regex);
		if (match) { match = match[0].trim(); }
		return match;
	}
	/**
	 * Parses out the forecast points into an object that holds the location and forecast data.
	 * @returns {Object} - Forecast and location data
	 */
	parseForecastData(){
		//Parse out the forecast points
		const forecastData = {};
		let regex = this.regexBetweenStrings(String.raw`\n\.\.\.`,String.raw`\n\.\.\.`,'gs');
		let matches = this._productText.match(regex);
		//For each parsed out forecast section, parse it out further into a location and forecast text. 
		//perhaps we also want to parse out the elevation from the location?
		if (matches) {
			matches.forEach( match => {
				//Forecast parts are split up by double new lines as location,time,and tabular data;
				let forecastDataParts = match.split('\n\n'); 
				let locationPart = forecastDataParts[0].trim();
				let location = this.parseLocation(locationPart);

				let timePart = forecastDataParts[1].trim();
				let times = this.parseForecastTimes(timePart)
				let tabularPart = forecastDataParts[2].trim();
				let forecast = this.parseForecastTable(tabularPart,times);

				let rawForecast = [timePart,tabularPart].join('\n\n');

				forecastData[String(location.name)] ={
					elevation : location.elevation,
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
	 * Location data parsed out into a name and elevation
	 * @returns {Object} - a parsed out location that includes the name and the elevation
	 * 
	 * Example locationPart:
	 * ...SQUAW FLAT SNOTEL (6240 FT)...
	 */
	parseLocation(locationPart){
		let nRegex = this.regexBetweenStrings('',String.raw`\(`,'s');
		let name = locationPart.match(nRegex);
		if (name) { name = name[0].trim(); }
		let eRegex = this.regexBetweenStrings(String.raw`\(`,String.raw`\)`,'s');
		let elevation = locationPart.match(eRegex);
		if (elevation) { elevation = elevation[0].trim(); }
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
	 * Example timePart: 
	 * DATE             THURSDAY 01/14          FRIDAY 01/15
	 * TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
	 */
	parseForecastTimes(timePart){
		let dateString = timePart.split('\n')[0];
		let timeString = timePart.split('\n')[1];
		//Find all listed dates in the date string and convert to an array.
		let dPosRegex = new RegExp(/([A-Z]+ [0-9]{1,2}\/[0-9]{1,2})/g);
		let dateMatches = [...dateString.matchAll(dPosRegex)];
		
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
			date: this.convertTextDateToObject(dateMatches[dateMatches.length - 1][0]),
			start: dateMatches[dateMatches.length - 1].index + lengthBetweenDateText,
			end: dateMatches[dateMatches.length - 1].index + (lengthBetweenDateText * 2)
		})

		//Find all listed times in the time string and convert to an array.
		let tPosRegex = new RegExp(/([0-9]{1,2})/g);
		let timeMatches = [...timeString.matchAll(tPosRegex)];
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
			let weatherType = forecastLine.substring(0,forecastTimes[0].start).trim().toLowerCase();
			parsedForecastData[weatherType] = [];
			for (let i=0; i < forecastTimes.length; i++){
				let parsedForecast = {
					date : null,
					val : null,
				}
				//Cover the weather elements that are 12 hours.  
				//TODO right now this is hard coded for 3 hourly data.  Are other offices going to change this?  If so, this needs to be dynamic
				let columnValue = forecastLine.substring(forecastTimes[i].start-1,forecastTimes[i].end).trim();
				if (weatherType.includes('12 hour')) { 
					if (weatherType.includes('qpf')) { 
						let regex = new RegExp(/\.[0-9]{2}/);
						//Only look for QPF where the data column starts with .## Then we know we have a 12 hour block.  Look back 12 hours from there.
						if (regex.test(columnValue)) { 
							columnValue = forecastLine.substring(forecastTimes[i-3].start-1,forecastTimes[i].end).trim();
							parsedForecastData[weatherType].push({
								val : columnValue,
								date : forecastTimes[i].date,
							});
						}
					}
					else { 
						if (columnValue !== ''){
							parsedForecastData[weatherType].push({
								val : columnValue,
								date : forecastTimes[i].date,
							});
						}
					}
				}
				else { 
					parsedForecastData[weatherType].push({
						val : columnValue,
						date : forecastTimes[i].date
					});
				}

			};
		});
		return parsedForecastData;
	}
}