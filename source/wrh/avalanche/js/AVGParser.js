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
		this._maxElevation = 0;
		this._hasExtended = false;
		this._productText = productText;
		this._productTime = this.parseProductTime(); //TODO Need to grab this from the API object once operational.
		this._discussion = this.parseDiscussion();
		this._forecast = this.parseForecastData();
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
	 * Get the forecast object for a particular location id
	 * @param {*} locationId - a locationId defined in the AVG
	 * @returns {Object} - Forecast object for a particular location
	 */
	forecast(locationId) {
		if (this.locations.includes(locationId)) {
			let forecast = this._forecast[locationId];
			forecast.elevation.max = this._maxElevation;
			return forecast;
		}
		else {
			throw Error(`Location ${locationId} not available in AVG or is improperly formatted`);
		}
	}
	hasExtended() {
		return this._hasExtended;
	}

	/**
	 * Shortcut to get the location name for a given id
	 * @param {*} locationId - a locationId defined in the AVG
	 * @returns {Object} - Forecast object for a particular location
	 */
	locationName(locationId) {
		if (this.locations.includes(locationId)) { return this._forecast[locationId].name; }
		else {
			throw Error(`Location ${locationId} not available in AVG or is improperly formatted`);
		}
	}

	/**
	 * Parses out the issuance time of the product.  This will need to be changed once the AVG is available in the API.
	 * @returns {Date} - time of the issuance (timezone enabled)
	 * Example timeParts: 324 AM MST TUE NOV 9 2021
	 *                   [0]: Time
	 *                   [1]: Meridian
	 *                   [2]: Timezone
	 *                   [3]: Day of the week
	 *                   [4]: Month
	 *                   [5]: Day
	 *                   [6]: Year
	 * new Date('Feb 28 2013 19:00:00 EST')
	 */
	parseProductTime() {
		let timeText = this.textBetweenStrings(this._productText,String.raw`(NATIONAL WEATHER SERVICE[^\n]*\n)`,String.raw`(\n)`,'gsi')[0];
		let timeParts = timeText.split(' ');
		//separate our hours and minutes
		let timeStrLen = timeParts[0].length;
		let hour = timeParts[0].substr(-timeStrLen,timeStrLen-2);
		let min = timeParts[0].substr(-2);
		//Change Time to 24 hour time;
		let hour24 = hour;
		if (timeParts[1] == 'PM') { hour24 = String(parseInt(hour)+12) }

		//Create a date using our string.
		//let productTime = new Date('Feb 28 2013 19:00:00 EST');
		let tzOffset = this.awipsTzHourOffset(timeParts[2])
		let productTime = new Date(`${timeParts[4]} ${timeParts[5]} ${timeParts[6]} ${hour24}:${min}:00 GMT-0${tzOffset}:00 `);
		let productHoomanTime = `${this.downslope(timeParts[3])} ${this.downslope(timeParts[4])} ${timeParts[5]} ${hour}:${min}${timeParts[1].toLowerCase()} ${timeParts[2]} `;
		return {
			time : productTime,
			tzOffset : tzOffset,
			formatted : productHoomanTime
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
		let avgFcsts = this.textBetweenStrings(this._productText,String.raw`^\.\.\.`,String.raw`(\n\n\n|\$\$|\*\*\*)`,'gms');

		if (avgFcsts) {
			//Because of the bass ackwards way we need to do this since safari doesnt support lookbacks,
			//Remove it if the discussion gets in there.
			if (avgFcsts[0].toLowerCase().includes('discussion')){ avgFcsts.shift(); }
			avgFcsts.forEach( avgFcst => {

				avgFcst = avgFcst.trim();
				let avgFcstParts = avgFcst.split('\n\n');
				let locationPart = avgFcstParts[0].trim();

				let location = this.parseLocation(locationPart);

				//Allow for both near term and extended AVGs by grouping them separately.
				let forecastTimeGroups = [];
				if (avgFcstParts.length >= 3){
					let pftg = this.parseForecastTimeGroup(avgFcstParts[1],avgFcstParts[2]);
					forecastTimeGroups.push(pftg)
				}
				if (avgFcstParts.length >= 5){
					let pftg = this.parseForecastTimeGroup(avgFcstParts[3],avgFcstParts[4]);
					forecastTimeGroups.push(pftg)
					this._hasExtended = true;
				}
				let id = String(location.name.toLowerCase());
				forecastData[id] ={
					elevation : location.elevation,
					id : id,
					name : location.name,
					forecastTimeGroups : forecastTimeGroups
				};
			});
		}
		return forecastData;
	}

	/**
	 *
	 * @returns
	 */
	parseForecastTimeGroup(timedatePart,forecastPart){
		let timesRegex = new RegExp(/^(TIME).*/im);
		let datesRegex = new RegExp(/^(DATE).*/im);

		let timePart = timedatePart.match(timesRegex)[0];
		let datePart = timedatePart.match(datesRegex)[0];
		let times = this.parseForecastTimes(datePart,timePart)

		let tabularPart = forecastPart.trim();
		let forecast = this.parseForecastTable(tabularPart,times);
		let rawForecast = [datePart,timePart,tabularPart].join('\n');

		//Total forecast length in hours
		let startDate = new Date(times[0].date);
		let endDate = new Date(times[times.length - 1].date);
		let hourLength = (endDate.getTime() - startDate.getTime()) / 36e5;
		return {
			forecast : forecast,
			raw : rawForecast,
			hourLength : hourLength,
			startDate : startDate,
			endDate : endDate
		}
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
		let name = this.textBetweenStrings(locationPart,'',String.raw`(\(|\.\.\.)`,'gs')
		if (name) { name = name[0].trim(); }

		//Try to parse out the elevation.  If we can't find it, set the text to null
		let parsedElevation = this.textBetweenStrings(locationPart,String.raw`\(`,String.raw`\)`,'gs')
		let elevationText = (parsedElevation) ?	parsedElevation[0] : '';
		let elevation = {
			low : null,
			high : null,
			text : elevationText,
		}
		//If we do have elevation text, try to parse it out depending on what the users have in there.
		//Parseable values include: (4000FT), (ABOVE 4000FT), (BELOW 4000 FT), (3500 TO 4000 FT), (3500-4000FT)
		if (elevationText) {
			elevationText = elevationText.toLowerCase().trim();

			//Try to handle elevation ranges.
			if (elevationText.includes(' to ')){
				let elevationParts = elevationText.split('to');
				elevation.low = this.strToKft(elevationParts[0]);
				elevation.high = this.strToKft(elevationParts[1]);
			}
			else if (elevationText.includes('-')){
				let elevationParts = elevationText.split('-');
				elevation.low = this.strToKft(elevationParts[0]);
				elevation.high = this.strToKft(elevationParts[1]);
			}
			else if (elevationText.includes('above')){
				elevation.low = this.strToKft(elevationText);
			}
			else if (elevationText.includes('below')){
				elevation.high = this.strToKft(elevationText);
			}
			else { elevation.high = this.strToKft(elevationText);	}

			//Update a maximum elevation for all the points that go through the parser.  This is to allow offices to have better snow level values along a chart y axis.
			this._maxElevation = Math.max(this._maxElevation, elevation.low, elevation.high);
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
		let lengthBetweenDateText = dateMatches[dateMatches.length-1].index - dateMatches[dateMatches.length-2].index;

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

		//Sometimes the length between the first and second dates isn't consistent. Loop through each date, and if it's successor has a starting index later on
		for(let i=0; i<allAvailableDates.length-2; i++){
			if (allAvailableDates[i].end > allAvailableDates[i+1].start) { allAvailableDates[i].end = allAvailableDates[i+1].start }
		}

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
			});
		});
		//Forecast data is actually left justified compared to the times. So instead of using the same start/end indices of the time
		//string.  We need to use the same end index, and then count back until the the previous end index.
		//The character distance between times. Could be 2-4 characters depending on the AVG version.
		//Note that the AVG changed so that the first time period may only be 3 characters if it's old or 4 if it's new. Gotta account for this till
		//everyone is on the latest formatter.
		let firstStartColumnLength = (allAvailableTimes[0].start <= 18) ? 3 : 4;
		let defaultLengthBetweenFcst = allAvailableTimes[1].end - allAvailableTimes[0].end;

		//Loop through the available timestamps, and determine the correct date and character placement of the tabular data.
		let forecastTimes = [];
+
		allAvailableTimes.forEach((availableTime,i) => {
			let dMatchIndex = allAvailableDates.findIndex( availableDate => {
				if ((availableDate.start <= availableTime.start) && (availableDate.end > availableTime.end)) { return true; }
			});

			//If < 06Z use the "next" date because Datestamp text seems to always fall at 06Z instead of 00z. So if we're < 06Z, give it our next date.
			let forecastTimeDate;
			if (availableTime.hour < 6) {
				forecastTimeDate = new Date(+allAvailableDates[dMatchIndex + 1].date)
			}
			else { forecastTimeDate = new Date(+allAvailableDates[dMatchIndex].date); }
			forecastTimeDate.setHours(forecastTimeDate.getHours() + availableTime.hour);

			//Forecast data is actually left justified compared to the times. So instead of using the same start/end indices of the time
			//string.  We need to use the same end index, and then count back until the the previous end index.
			//The character distance between times. Could be 2-4 characters depending on the AVG version.
			//Note that the AVG is odd in that every column it gives 2-4 characters, unless it's the first time period, where it only gets 3
			//in this situation just always make the first start index back 3.
			let end = availableTime.end;
			let len = (i === 0) ?  firstStartColumnLength : defaultLengthBetweenFcst;
			let start = end - len;

			forecastTimes.push({
				date : forecastTimeDate,
				start : start,
				end : end
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
		let tzOffset = this._productTime.tzOffset;
		let d = new Date(`${now.getFullYear()}-${mon}-${day}T00:00:00.000-0${tzOffset}:00`)
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
			parsedForecastData[weatherType] = null;
			let parsedForecastDataArray = [];
			let accumValue = 0.0;
			for (let i=0; i < forecastTimes.length; i++){
				let parsedForecast = {
					val : '',
					date : forecastTimes[i].date,
					accum : false
				};
				let columnValue = forecastLine.substring(forecastTimes[i].start,forecastTimes[i].end).trim();
				let columnWidth = forecastTimes[i].end - forecastTimes[i].start;
				if (!weatherType.includes('12 hour') && !weatherType.includes('snow')){ parsedForecast.val = columnValue; }
				else  {
					let regex;
					//Only look for ice and QPF where the data column starts with .## Then we know we have a start to 12 hour block.
					if (weatherType.includes('qpf') || weatherType.includes('ice')) {  regex = new RegExp(/\.[0-9]{2}/); }
					//Only look for snow  where the data column starts with #.#
					else if (weatherType.includes('snow')) { regex = new RegExp(/[0-9]{1}\.[0-9]{1}/); }

					if (regex.test(columnValue)) {
						//If our value is QPF look back an extra couple spaces to get the full string.
						if (columnWidth <= 4) {
							columnValue = forecastLine.substring(forecastTimes[i].start-2,forecastTimes[i].end).trim();
						}

						//We've successfully gotten the value for that column, assign it to our value for this time period.
						parsedForecast.val = columnValue;

						//If we need to find a total accumulation later on, this flag will allow us to know which fields are accumulatable;
						accumValue = parseFloat(parseFloat(parsedForecast.val) + accumValue);
						parsedForecast.accum = accumValue;

						//12 hourly data is look behind not look forward, so search back through previous times and add when needed. #Deprecated with the move to Prob Snow
						/*let j = 0;
						console.log(j)
						do {
							console.warn(parsedForecastDataArray[j])//.getTime(), parsedForecastDataArray[j].date.getTime())
							if (parsedForecast.date.getTime() - parsedForecastDataArray[j].date.getTime()  < 432e5 ) {
								parsedForecastDataArray[j].val = columnValue;
							}
							j++;
						}
						while (i > j);*/
					}
					else {
						parsedForecast.accum = accumValue;
					}
				}
				parsedForecastDataArray.push(parsedForecast);
			};
			parsedForecastData[weatherType] = parsedForecastDataArray;
		});

		//This is a hackish fix to get around those times when there is no forecast data loaded for an initial time period (e.g.).  Not really
		//sure where else to get this done, but it f's with our graphs
		//Date               Tuesday 09/13/22                        Wednesday 09/14/22
		//Time (LT)          06   09   12   15   18   21   00   03   06   09   12   15   18   21   00   03   06
		//Cloud Cover                  SC   OV   OV   BK   OV   OV   OV   OV   OV   BK   SC   SC   OV   OV   OV
		//Cloud Cover (%)              45   90   90   65   80   95  100   95   80   65   40   40   70   70   85
		let attempts = 0;
		while (attempts <= 3) {
			if ((parsedForecastData['cloud cover'][0].val == '') && (parsedForecastData['temperature'][0].val == '')){
				for (const property in parsedForecastData) {
					parsedForecastData[property].shift()
				}
			}
			attempts++;
		}

		console.log(parsedForecastData)
		return parsedForecastData;

	}
	/**
	 * A utility function to change a string to a capitalized first letter and lower case body
	 * I though the name of the function name was a fun twist on the fact this is an avalanche product.  Smile if you found this.
	 * @param {String} string - String to convert
	 * @returns {String} a string with the first letter uppercased, and the rest lowercast
	 */
	downslope(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
	/**
	 * Utility function to strip out anything but numbers from a string and convert ft to kft.
	 * @param {String} string - String to convert
	 * @returns {Float} - The elevation value in kft.
	 */
	strToKft(string){
		let int = parseInt(string.replace(/[^0-9]/g, ""));
		if (isNaN(int)) { int = 0; }
		return +Number(int / 1000);
	}
	/**
	 * Returns an hour offset from a given AWIPS timezone code
	 */
	awipsTzHourOffset(awipsTzCode){
		let offset;
		switch(awipsTzCode){
			case 'EDT':
				offset = 4;
				break;
			case 'CDT':
			case 'EST':
				offset = 5;
				break;
			case 'CST':
			case 'MDT':
				offset = 6;
				break;
			case 'MST':
			case 'PDT':
				offset = 7;
				break;
			case 'PST':
			case 'PDT':
				offset = 7;
				break;
			case 'AKDT':
				offset = 8;
				break;
			case 'AKST':
				offset = 9;
				break;
			default:
				offset = 0;
		}
		return offset;
	}
}