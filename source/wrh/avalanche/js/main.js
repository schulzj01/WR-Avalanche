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
let CHART_MANAGERS = [];

/**
 * PERIOD - Global variable that stores which time period the users are viewing (short term or extended)
 */
let TIME_GROUP = 0;


/**
 * This is a callback that recieves an AVG product from the API, attempts to parse it out, and then
 * populate the following elements in the page - Discussion, Tabular & Graphical Forecasts, Leaflet Map
 *
 * At the moment, this will default back to test data since the API isn't returning anything.
 *
 * @param {NwsApi.Product} avgProducts - An AVG Product from the NWS API
 */
//Parse out the AVG product text, assign it to a global, and populate the appropriate divs
function parseAndPopulateAvg(avgProducts,cwa){
	// If the NWS API times out, throw an error

	let avgToParse;
	try {
		if (!avgProducts) { throw Error('Weather.gov API is Unavailable')}

		// For testing, if no avg is available in the database, use the dummy test data in avgTestData.js
		// TODO.  This if statement is only here because of the lack of AVG in the API, this can eventually be removed and replaced with what is in the if statement.
		if ((typeof avgProducts) == 'string') { avgToParse = avgProducts; }
		//If our avg query from the API is successful, parse it out with the AVG parser.
		else { avgToParse = avgProducts[0]; }
		PARSED_AVG = new AVGParser(avgToParse);
	} catch (error) {
		$('#forecastDisplayParserFailure').html(avgToParse);
		$('#forecastDisplayParserFailure').removeClass('hidden');
		$('#forecastDisplay').addClass('hidden');
		throw Error(`Parsing of the AVG Product Failed.  This is likely the result of non-standardized AVG Product. Please reach out to wr.web.support@noaa.gov for help resolving this.  Error: ${error}`);
	}

	//Populate the discussion display, and show the tab if there is a discussion.
	if (PARSED_AVG.discussion) {
		let issuedDateStr = formatDate(PARSED_AVG.productTime.time);
		$('#forecastDiscussionContent').html(`<h4>Forecast Discussion<br><br><small><small>Issued: ${issuedDateStr}</small></small></h4><div class="alertSection">${PARSED_AVG.discussion}</div>`);
		$('#forecastDiscussionContent').removeClass('hidden');
	}

	//List of locations in the AVG and also serves as a list of keys to reference the parsed product.
	//These keys are what the map/config can use.
	//let locations = PARSED_AVG.locations;

	//Add the locations to the map
	makeMap(cwa);

	//Initialize the graphical forecast charts
	CHART_MANAGERS = [new ChartManager(0)]
	if (PARSED_AVG.hasExtended()) { CHART_MANAGERS.push(new ChartManager(1)); }
	else {
		$('#forecastTabularTabContent2').hide();
		$('#forecastGraphicalTabContent2').hide();
	}

	//Add the locations to the select menu, and populate the first location
	initializeSelectMenu();

	//Add forecast snowfall data to overview table;
	makeSnowfallSummaryTable();

}

//TODO We'll likely want to populate this with the map click?
/**
 *
 * Parses out active the NWS Alerts, and will populate the the Alert information with the products.
 * If there are active alerts, add the alert class to style the tab and content
 * @param {NwsApi.Alert} alerts - A set of NWS API alert products.
 */
function populateAlerts(alerts,locationId){
	let locationName = PARSED_AVG.locationName(locationId);

	if (alerts.length > 0) {
		$('#forecastAlertsTab').addClass('activeAlerts');
		$('#forecastAlertsTabContent').addClass('activeAlerts');
		$('#forecastAlertsTab').html('<span>Active Alerts</span>');
		let alertHtmls = [];
		alerts.forEach(alert => {
			let $div = $('<div>')
			$div.addClass('alertSection');
			$div.append(`<h3>${alert.event}</h3>`);
			let content = '<p>'
			content+= alert.description.replace(/(?:\r\n\n|\r\r|\n\n)/g,"<p>");
			boldText = ['* WHAT...','* WHERE...', '* WHEN...','* IMPACTS...','* ADDITIONAL DETAILS...']
			boldText.forEach(text => {
				content = content.replace(text,`<strong>${text}</strong>`)
			})
			$div.append(content)
			alertHtmls.push($div);
		});
		$('#forecastAlertsTabContent').html(alertHtmls)
	}
	else {
		$('#forecastAlertsTab').removeClass('activeAlerts');
		$('#forecastAlertsTabContent').removeClass('activeAlerts');
		$('#forecastAlertsTab').html('<span>No Active Alerts</span>');
		$('#forecastAlertsTabContent').html(`<div class="alertSection">There are no currently active weather alerts for ${locationName}.<br><br>For additional information on winter hazards for this location, visit <a href="https://www.avalanche.org">Avalanche.org</a></div>`)
	}
}

/**
 * Pulls the forecast out of the PARSED_AVG object and then populates the page with forecast info
 *
 * @param {String} location - A text string of an AVG location. Also found by a PARSED_AVG.locations call.
 */
function populateForecast(locationId){

	let productTime =  PARSED_AVG.productTime.formatted;
	$('.productTime').html(productTime);

	let locationForecast = PARSED_AVG.forecast(locationId);
	locationForecast.forecastTimeGroups.forEach((forecastTimeGroup,i) => {
		let tabularRawFcst = forecastTimeGroup.raw;
		let tabularHtml = `<pre>${tabularRawFcst}</pre>`
		$(`#forecastTable${i}`).html(tabularHtml)
		CHART_MANAGERS[i].updateChartData(locationForecast,productTime);
	});
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
		let elevationTitleText = (fcst.elevation.text !== '') ? `(${fcst.elevation.text})` : '';
		let $option = $('<option>', {
			value: fcst.id,
			text: `${fcst.name} ${elevationTitleText}`
		})
		$selectMenu.append($option);
	});
	$selectMenu.init
	$selectMenu.change(changeForecastSelectMenu);
}

function makeSnowfallSummaryTable(){
		//Loop through each location and add it to our overview snowfall table.
	//$('#forecastOverviewTab').removeClass('hidden');	//	@todo remove this line and force overview to be shown for all sites

	let table = document.createElement('table');
	table.id = 'summaryTable';
	let tBody = table.createTBody();
	let locations = PARSED_AVG.locations;
	let hourLength,startDateStr,endDateStr;
	let hasSnow = false, hasQpf = false, hasIce = false;
	locations.forEach((locationId,i) => {
		let location = PARSED_AVG.forecast(locationId);
		let name = location.name
		let elevation = (location.elevation.low) ? parseInt(location.elevation.low * 1000)
		                : (location.elevation.high) ? parseInt(location.elevation.high * 1000)
										: null;
		if (i == 0){
			//hourLength = location.forecastTimeGroups[0].hourLength;
			startDateStr = formatDate(location.forecastTimeGroups[0].startDate)
			if (location.forecastTimeGroups.length > 1) { endDateStr = formatDate(location.forecastTimeGroups[1].endDate);	}
			else { endDateStr = formatDate(location.forecastTimeGroups[0].endDate); }
			if (location.forecastTimeGroups[0].forecast.hasOwnProperty('12 hour snow')) { hasSnow = true; }
			if (location.forecastTimeGroups[0].forecast.hasOwnProperty('12 hour qpf')) { hasQpf = true; }
			if (location.forecastTimeGroups[0].forecast.hasOwnProperty('12 hour ice')) { hasIce = true; }
		}

		let row = tBody.insertRow();
		row.insertCell().innerHTML = name
		row.insertCell().innerHTML = elevation
		if (hasSnow) {
			let snowAccum = getAccumulation(location.forecastTimeGroups,'12 hour snow',1)
			row.insertCell().innerHTML = snowAccum;
		}
		if (hasQpf){
			let qpfAccum =  getAccumulation(location.forecastTimeGroups,'12 hour qpf',2)
			row.insertCell().innerHTML = qpfAccum;
		}
		if (hasIce){
			let iceAccum =  getAccumulation(location.forecastTimeGroups,'12 hour ice',2)
			row.insertCell().innerHTML = iceAccum;
		}
	});

	let headRow = table.createTHead().insertRow(0);


	let headerRows = ['Location','Elevation<br>(feet)'];
	if (hasSnow){ headerRows.push('Total Snowfall<br>(inches)'); }
	if (hasQpf){ headerRows.push('Total Liquid Precip<br>(inches)') }
	if (hasIce) { headerRows.push('Total Ice Accum<br>(inches)'); }

	headerRows.map((rowText,i) => {
		let headLocation = headRow.insertCell();
		headLocation.innerHTML = rowText;
		headLocation.classList.add("clickable");
		headLocation.addEventListener('click',function () { sortTable(i,table) });
	})

	let header = document.createElement('h4');
	//header.innerHTML = `${hourLength} Hour Precipitation Forecast Summary<br><br><small><small>Valid: ${startDateStr} &nbsp; - &nbsp; ${endDateStr}</small></small>`;
	header.innerHTML = `Precipitation Forecast Summary<br><br><small><small>Valid: ${startDateStr} &nbsp; - &nbsp; ${endDateStr}</small></small>`;
	let summaryTableWrapper = document.getElementById('summaryTableWrapper');
	summaryTableWrapper.appendChild(header);
	summaryTableWrapper.appendChild(table);
}
/**
 * Just a quick/simple sortable table element from https://www.w3schools.com/howto/howto_js_sort_table.asp
 * @param {Integer} n - row index to sort
 * @param {HTMLTableElement} table - table html element to sort.
 */
function sortTable(n,table) {
	var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	//table = document.getElementById("tableId");
	switching = true;
	// Set the sorting direction to ascending:
	dir = "desc";
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/* Loop through all table rows (except the
		first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
			one from current row and one from the next: */
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/* Check if the two rows should switch place,
			based on the direction, asc or desc: */
			if (dir == "asc") {
				if (!isNaN(x.innerHTML) && !isNaN(y.innerHTML)){
					if (Number(x.innerHTML) > Number(y.innerHTML)){
						shouldSwitch = true;
						break;
					}
				}
				else if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (!isNaN(x.innerHTML) && !isNaN(y.innerHTML)){
					if (Number(x.innerHTML) < Number(y.innerHTML)){
						shouldSwitch = true;
						break;
					}
				}
				else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch
			and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			// Each time a switch is done, increase this count by 1:
			switchcount++;
		} else {
			/* If no switching has been done AND the direction is "desc",
			set the direction to "asc" and run the while loop again. */
			if (switchcount == 0 && dir == "desc") {
				dir = "asc";
				switching = true;
			}
		}
	}
}

function getAccumulation(forecastTimeGroups,key,precision) {
	let accumVal = 0;
	forecastTimeGroups.forEach(ftg => {
		let we = ftg.forecast[key];
		let lastAccum = we.slice().reverse().find(w => typeof w.accum == "number");
		if (lastAccum) { accumVal = lastAccum.accum; }
	});
	return accumVal.toFixed(precision);
}

function formatDate(myDate){
	let dateOptions = { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
	return myDate.toLocaleString('en-US',dateOptions);
}

//Fill our staticContent with the base html then opulate and manipulate the base html with content
function populateStaticContent(cwa){
	cwa = cwa.toLowerCase();
	let CWA = cwa.toUpperCase();
	$('#staticContent').html(pageHtml.staticContent);

	//Initialize the forecast tabs
	let t = tabs({
    el: '#forecastTabs',
    tabNavigationLinks: '.navlink1',
    tabContentContainers: '.content1',
  });
	t.init();
	t.goToTab(2);
	//Initialize the forecast period tabs
	let t2 = tabs({
    el: '#forecastTabularTabContent',
    tabNavigationLinks: '.navlink2',
    tabContentContainers: '.content2',
  });
	t2.init();
	//Initialize the chart period tabs
	let t3 = tabs({
		el: '#forecastGraphicalTabContent',
		tabNavigationLinks: '.navlink3',
		tabContentContainers: '.content3',
	});
	t3.init();

	// Pull in an AVG Product, and run a parser on it to populate the page.
	// TODO <- Reopen this up once the AVG is in the API.
/*	let avgProduct = new NwsApi.Product({
		location : cwa,
		type: 'AVG',
		limit : 1
	}).getAll(parseAndPopulateAvg,cwa)*/

	//The below fetch is in leiu of the AVG not in the API.  This should eventually get converted.
	let url = `https://w1.weather.gov/data/${CWA}/AVG${CWA}`;
	let avgProduct = fetch(url)
  .then(response => {
		if (response.ok) { return response.text(); }
		else {
			console.error(`Unable to view product from URL: ${url}.  Is the CWA variable incorrect?`)
			parseAndPopulateAvg(false,cwa);
			throw new Error(response);
		}
	})
	.then(text => { parseAndPopulateAvg(text,cwa)})
	//The above fetch is in leiu of the AVG not in the API.  This should eventually get converted.
	//parseAndPopulateAvg(avg.riw,'riw')
	//Set the correct full product URL.
	$('.fullProductLink').attr('href',`https://forecast.weather.gov/product.php?site=${cwa}&issuedby=${cwa}&product=AVG&format=txt&version=1&glossary=0`);
}







//National Standard Content Html
const pageHtml = {};
pageHtml.staticContent= `
<div id="forecastDisplay" class="center-content text-center">
	<h2 style="margin-bottom:0px; color:firebrick;">** Experimental Webpage (For Evaluation Only) ** <a href="https://www.surveymonkey.com/r/wfoavalanchewebpages2022-2023">Provide Feedback</a></h2>
	<div id="introductionText">
		<p style="text-align:left;">
			The following page is designed to provide snow safety officials with a weather forecast over specific areas of backcountry recreation interest. This forecast is not meant to be indicative of actual snow and avalanche conditions in the backcountry. <a href="https://nws.weather.gov/products/PDD/PDD_ExpWFOAvalancheWebpages_2022-2023.pdf" target="_blank">More information.</a>
		</p>
		<br>
		<div>
			<a alt="Avalanche.org" title="Avalanche.org" href="https://www.avalanche.org"><img width="350" src="/images/wrh/avalanche/avy-org-logo-dark.png"></a><br>
			<small>For the latest official Avalanche Danger Rating and Avalanche Forecasts for your area, visit <a href="https://www.avalanche.org">Avalanche.org</a></small>
		</div>
	</div>


	<div class="clear"></div>
	<small style="font-style:italic">Choose an avalanche weather forecast location from the map or select menu below.</small>
	<div id="map">Map Placeholder</div>
	<h3>
		Avalanche Weather Forecast For:
		<select class="select-css" id="forecastPointSelectMenu">
			<option value="" disabled selected hidden>Select a Forecast Location</option>
		</select>
	</h3>
	<div class="outline hidden" id="forecastTabs">
		<div class="c-tabs-nav">
			<div id="forecastAlertsTab" class="c-tabs-nav__link navlink1"><span>Active Alerts</span></div>
			<div id="forecastTabularTab" class="c-tabs-nav__link navlink1"><span>Tabular Forecast</span></div>
			<div id="forecastGraphicalTab" class="c-tabs-nav__link navlink1"><span>Graphical Forecast</span></div>
			<div id="forecastOverviewTab" class="c-tabs-nav__link navlink1"><span>Overview</span></div>
		</div>
		<div class="c-tab content1">
			<div id="forecastAlertsTabContent" class="c-tab__content"></div>
		</div>
		<div class="c-tab content1">
			<div id="forecastTabularTabContent" class="c-tab__content">
				<div class="c-tabs-nav">
					<div id="forecastTabularTabContent1" class="c-tabs-nav__link navlink2 is-active"><span>Near Term Forecast</span></div>
					<div id="forecastTabularTabContent2" class="c-tabs-nav__link navlink2"><span>Extended Forecast</span></div>
				</div>
				<div class="c-tab content2 is-active">
					<div class="c-tab__content">
						<small>
							<a class="fullProductLink" target="_blank" href="">
								Forecast Issued: <span class="productTime"></span>
							</a>
						</small>
						<div id="forecastTable0" class="preFormatted"></div>
					</div>
				</div>
				<div class="c-tab content2">
					<div class="c-tab__content">
						<small>
							<a class="fullProductLink" target="_blank" href="">
								Forecast Issued: <span class="productTime"></span>
							</a>
						</small>
						<div id="forecastTable1" class="preFormatted"></div>
					</div>
				</div>
					<small><span style="color:#00A3E3;">&#9432;</span> <a target="_blank" href="/media/wrh/avalanche/AVG_Guide.pdf"> How to decode this Avalanche Weather Guidance product</a></small>
			</div>
		</div>
		<div class="c-tab content1">
			<div id="forecastGraphicalTabContent" class="c-tab__content">
				<div class="c-tabs-nav">
					<div id="forecastGraphicalTabContent1" class="c-tabs-nav__link navlink3 is-active"><span>Near Term Forecast</span></div>
					<div id="forecastGraphicalTabContent2" class="c-tabs-nav__link navlink3"><span>Extended Forecast</span></div>
				</div>
				<div class="c-tab content3 is-active">
					<div class="c-tab__content">
						<div id="forecastChart0"></div>
					</div>
				</div>
				<div class="c-tab content3">
					<div class="c-tab__content">
						<div id="forecastChart1"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="c-tab content1">
			<div id="forecastOverviewTabContent" class="c-tab__content">
				<div id="forecastDiscussionContent" class="c-tab__content"></div>
				<div id="summaryTableWrapper"></div>
			</div>
		</div>
	</div>
</div>
<div id="forecastDisplayParserFailure" class="hidden outline preFormatted"></div>

</div>
`;
