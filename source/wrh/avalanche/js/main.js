/**
 * 
 * National Avalanche Webpage Template (www.weather.gov/{cwa}/avalancheweather/)
 * 
 * Developed for the National Avalanche Coordination Team (NACT)
 * 
 * Authors: Allister.Martinelli@noaa.gov
 *          Jeremy.Schulz@noaa.gov
 * 
 * 
 */


/**
 *  PARSED_AVG - Global variable that stores all parts of a parsed AVG forecast product.
 */
let PARSED_AVG;
/**
 *  CHART_MANAGER - Global variable that stores the Chart JS objects and updates the data.
 */
let CHART_MANAGER;


/**
 * This is a callback that recieves an AVG product from the API, attempts to parse it out, and then 
 * populate the following elements in the page - Discussion, Tabular & Graphical Forecasts, Leaflet Map
 * 
 * At the moment, this will default back to test data since the API isn't returning anything. 
 * 
 * @param {NwsApi.Product} avgProducts - An AVG Product from the NWS API
 */
//Parse out the AVG product text, assign it to a global, and populate the appropriate divs
function parseAndPopulateAvg(avgProducts){
	// If the NWS API times out, throw an error
	if (!avgProducts) { throw Error('Weather.gov API is Unavailable')}

	let avgToParse;
	try {
		// For testing, if no avg is available in the database, use the dummy test data in avgTestData.js
		// //TODO Once done testing, we have to set some stuff in here so the page isn't empty come summer.
		if (avgProducts.length == 0) { avgToParse = avg.slc; }
		//If our avg query from the API is successful, parse it out with the AVG parser.
		else { avgToParse = avgProducts[0]; }
		PARSED_AVG = new AVGParser(avgToParse);
	} catch (error) {
		$('#forecastDisplayParserFailure').html(avgToParse);
		$('#forecastDisplayParserFailure').removeClass('hidden');
		$('#forecastDisplay').addClass('hidden');
		throw Error('Parsing of the AVG Product Failed.  This is likely the result of non-standardized AVG Product. Please reach out to wr.web.support@noaa.gov for help resolving this');
	}
	
	//Populate the discussion display, and show the tab if there is a discussion.
	if (PARSED_AVG.discussion) { 
		$('#forecastDiscussionTabContent').html(`<div class="alertSection">${PARSED_AVG.discussion}</div>`);
		$('#forecastDiscussionTab').removeClass('hidden');
		$('#forecastDiscussionTabContent').removeClass('hidden');
	}

	//List of locations in the AVG and also serves as a list of keys to reference the parsed product.  
	//These keys are what the map/config can use.
	let locations = PARSED_AVG.locations;

	//Add the locations to the map
	makeMap();

	//Initialize the graphical forecast charts
	CHART_MANAGER = new ChartManager();

	//Add the locations to the select menu, and populate the first location
	initializeSelectMenu();

	// TEMPORARY DEVELOPMENT DEBUGGING INFO 
	//The below is just some debugging stuff to see the the output of a AVGParser Object and populate it in the forecast table.
	locations.forEach(locationId => {
		let fcst = PARSED_AVG.forecast(locationId);
	});
	// TEMPORARY DEVELOPMENT DEBUGGING INFO 	
}

//TODO We'll likely want to populate this with the map click?
/**
 * 
 * Parses out active the NWS Alerts, and will populate the the Alert information with the products.
 * If there are active alerts, add the alert class to style the tab and content
 * @param {NwsApi.Alert} alerts - A set of NWS API alert products. 
 */
function populateAlerts(alerts){
//	let alertDivHtml = '';
//	// If the NWS API times out, throw an error
//	if (!alerts) { throw Error('Weather.gov API is Unavailable')}
//	else if (alerts.features.length === 0) { alertDivHtml = 'No active watches or warnings'; }
//	//If our query from the API is successful, indicate it to the user.
//	else { 
//		alertDivHtml = 'Active Watches & Warnings In Effect.  Click on map above (below?) for more information';
//		alertDivHtml+= `<pre>${JSON.stringify(alerts,null,2)}</pre>`
//		//Add the alerts to the map
//		//Placeholder for Al
//	} 

	if (alerts.length > 0) { 
		$('#forecastAlertsTab').addClass('activeAlerts');
		$('#forecastAlertsTabContent').addClass('activeAlerts');
		$('#forecastAlertsTab').html('<span>Active Alerts</span>');
		let alertHtmls = [];
		alerts.forEach(alert => {
			let $div = $('<div>')
			$div.addClass('alertSection');
			$div.append(`<h3>${alert.event}</h3>`);
			$div.append(alert.description.replace(/(?:\r\n|\r|\n)/g,"<br>&nbsp;"))
			alertHtmls.push($div);
		});
		$('#forecastAlertsTabContent').html(alertHtmls)
	}
	else { 
		$('#forecastAlertsTab').removeClass('activeAlerts');
		$('#forecastAlertsTabContent').removeClass('activeAlerts');
		$('#forecastAlertsTab').html('<span>No Active Alerts</span>');
		$('#forecastAlertsTabContent').html('<div class="alertSection">There are no currently active weather alerts for this location.<br><br>For additional information on winter hazards for this location, visit <a href="https://www.avalanche.org">Avalanche.org</a></div>')
	}
}

/**
 * Pulls the forecast out of the PARSED_AVG object and then populates the page with forecast info
 * 
 * @param {String} location - A text string of an AVG location. Also found by a PARSED_AVG.locations call.
 */
function populateForecast(locationId){
	console.log('Switching Forecast to '+locationId)
	var locationForecast = PARSED_AVG.forecast(locationId);
	let tabularRawFcst = locationForecast.raw;
	let tabularHtml = `<pre>${tabularRawFcst}</pre>`
	$('#forecastTable').html(tabularHtml)
	CHART_MANAGER.updateChartData(locationForecast);
}

function changeForecastSelectMenu(e,force = false){

	//Only fire this change event if a user selects
	if (e.originalEvent || force) { populateAvgContentFromSelectMenu(e.target.value) }
}

//Initialize Select Menu with AVG locations 
function initializeSelectMenu(){
	let locations = PARSED_AVG.locations; 
	$selectMenu = $('#forecastPointSelectMenu');
	locations.forEach( loc => {
		let fcst = PARSED_AVG.forecast(loc);
		let $option = $('<option>', {
			value: fcst.id,
			text: `${fcst.name} (${fcst.elevation} ft)`
		})
		$selectMenu.append($option);
	});
	$selectMenu.init
	$selectMenu.change(changeForecastSelectMenu);
}


//Fill our staticContent with the base html then opulate and manipulate the base html with content
function populateStaticContent(cwa){
	cwa = cwa.toLowerCase();
	$('#staticContent').html(pageHtml.staticContent);

	//Initialize the forecast tabs
	let t = tabs({
    el: '#forecastTabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab',
  });
	t.init();
	t.goToTab(2);	

	// Pull in an AVG Product, and run a parser on it to populate the page.
	let avgProduct = new NwsApi.Product({ 
		//location : 'BTV',  //TODO This setting will eventually want to be the CWA variable.  It's not set at the moment, and should randomize to whichever CWA the API grabs first.  Useful for testing!
		type: 'AVG',
		limit : 1
	}).getAll(parseAndPopulateAvg)

	//Set the correct full product URL. 
	$('#fullProductLink').attr('href',`https://forecast.weather.gov/product.php?site=${cwa}&issuedby=${cwa}&product=AVG&format=txt&version=1&glossary=0`);
}


//National Standard Content Html 
const pageHtml = {};
pageHtml.staticContent= `
<div id="forecastDisplay" class="center-content text-center">
	<h2 style="margin-bottom:40px;">** Experimental Webpage - For Evaluation Only ** </h2>
	<p style="text-align:left">
		The following page is designed to provide snow safety officials with a weather forecast over areas of backcountry recreation interest.  
		This forecast is not meant to be indicative of actual snow and avalanche conditions in the backcountry.  For the latest Avalanche Danger Rating and Avalanche Forecasts, visit <a href="https://www.avalanche.org">Avalanche.org</a>. 
	</p>
	<p>{{{Some sort of avalanche.org branding}}}</p>
	<small style="font-style:italic">Choose an avalanche weather forecast location from the map or select menu below.</small>
	<div id="map">Map Placeholder</div>
	<h3>
		Avalanche Weather Forecast For: 
		<select class="select-css" id="forecastPointSelectMenu">
			<option value="" disabled selected hidden>Select a Forecast Location</option>
		</select>
	</h3>
	<div class="c-tabs outline hidden" id="forecastTabs">
		<div class="c-tabs-nav">
			<div id="forecastAlertsTab" class="c-tabs-nav__link"><span>Active Alerts</span></div>
			<div id="forecastTabularTab" class="c-tabs-nav__link"><span>Tabular Forecast</span></div>
			<div id="forecastGraphicalTab" class="c-tabs-nav__link"><span>Graphical Forecast</span></div>			
			<div id="forecastDiscussionTab" class="c-tabs-nav__link hidden"><span>Discussion</span></div>
		</div>
		<div class="c-tab">	
			<div id="forecastAlertsTabContent" class="c-tab__content"></div>
		</div>		
		<div class="c-tab">	
			<div id="forecastTabularTabContent" class="c-tab__content">
				<div id="forecastTable" class="preFormatted"></div>
				<br>
				<small><a id="fullProductLink" target="_blank" href="">Full Avalanche Weather Guidance Forecast</a></small>
			</div>
		</div>
		<div class="c-tab">
			<div id="forecastGraphicalTabContent" class="c-tab__content">
			<div id="forecastChart"></div>
			</div>
		</div>
		<div class="c-tab">
			<div id="forecastDiscussionTabContent" class="c-tab__content hidden"></div>
		</div>		
	</div>
</div>
<div id="forecastDisplayParserFailure" class="hidden outline preFormatted"></div>

</div>
`;
