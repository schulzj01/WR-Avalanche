function loadButtonBar () {
  $.getJSON('/source/slc/avalanche/config.json', function (INFO) {
    var ButtonRow = '<ul id="areaSelect">';
    var numAreas = INFO.Centers.length;
    for (i = 0; i < numAreas; i++) {
      let AREA   = INFO.Centers[i].Area; 
      ButtonRow += '<li class="areaSEL" id="UL1-'+i+'" onclick="loadArea(\''+i+'\',\''+numAreas+'\')">'+AREA+'</li> ';
    }
    ButtonRow += '</ul>';
    console.log(ButtonRow)
    document.getElementById('RecButtonBar').innerHTML ='<p>'+ButtonRow+'</p>';
  });
}

function loadArea(SEQ,AREAS) {
  for (i = 0; i < AREAS; i++) {  
    if (SEQ == i) {
      $( '#UL1-'+SEQ ).css('background-color', '#104070');
      $( '#UL1-'+SEQ ).css('color', 'white');
    } else {
      $( '#UL1-'+i ).css('background-color', 'white');
      $( '#UL1-'+i ).css('color', '#104070');
    }  
  }
  document.getElementById('RecLocationBar').innerHTML =''
  document.getElementById('FCSTICONS').innerHTML =''
  $.getJSON('/source/slc/avalanche/config.json', function (INFO) {
    let AREA = INFO.Centers[SEQ].Area; 
    let ZONE = INFO.Centers[SEQ].Information.wwaZone;
    let numPoints = INFO.Centers[SEQ].Points.length;
    let PointRow = '<ul id="locationSelect">'; 
    for (i = 0; i < numPoints; i++) {
      let LAT = INFO.Centers[SEQ].Points[i].LocationLat;
      let LON = INFO.Centers[SEQ].Points[i].LocationLon;
      let SITE = INFO.Centers[SEQ].Points[i].LocationName;
      PointRow += '<li class="locSEL" id="UL2-'+i+'" onclick="highlightArea(\''+LAT+'\',\''+LON+'\',\'4\',\''+i+'\',\''+numPoints+'\')">'+SITE+'</li> ';
    }
    PointRow += '</ul>';
    document.getElementById('RecLocationBar').innerHTML = PointRow;
    getAVYrating(INFO.Centers[SEQ].Information.ratingSource);
    getWWA(ZONE);
    makeLocalRecContent(AREA);
  })
}

function highlightArea(LAT,LON,PERIODS,SEQ,numPoints) {
  document.getElementById('FCSTICONS').innerHTML =''
  for (i = 0; i < numPoints; i++) {
    if (SEQ == i) {
      $( '#UL2-'+SEQ ).css('background-color', '#104070');
      $( '#UL2-'+SEQ ).css('color', 'white');
    } else {
      $( '#UL2-'+i ).css('background-color', 'white');
      $( '#UL2-'+i ).css('color', '#104070');
    }
  }
  makeIconbar(LAT,LON,'FCSTICONS',PERIODS);
}

function getAVYrating(SRC) {
  $.getJSON(SRC, function (avyInfo) {
    var issued = avyInfo.advisories[0].advisory.date_issued;
    var cutoff = avyInfo.advisories[0].advisory.date_issued_timestamp;
    var comment = avyInfo.advisories[0].advisory.bottom_line;
    var image = '<img src="/images/slc/snow/'+avyInfo.advisories[0].advisory.overall_danger_rating+'.png">';
    var note = '<a href="https://utahavalanchecenter.org/avalanche-danger-scale">Learn more about this rating</a>';
    if (comment === undefined) {
      comment = 'No comments at this time';
    }
/*    if (avyInfo.advisories[0].advisory.overall_danger_rating == 'Low') {
      $( ".BOTTOM_LINE" ).css('background-color', 'green');
      $( ".BOTTOM_LINE" ).css('color', 'white');
    } else if (avyInfo.advisories[0].advisory.overall_danger_rating == 'Moderate') {
      $( ".BOTTOM_LINE" ).css('background-color', 'yellow');
      $( ".BOTTOM_LINE" ).css('color', 'black');
    } else if (avyInfo.advisories[0].advisory.overall_danger_rating == 'Considerable') {
      $( ".BOTTOM_LINE" ).css('background-color', 'orange');
      $( ".BOTTOM_LINE" ).css('color', 'black');
    } else if (avyInfo.advisories[0].advisory.overall_danger_rating == 'Extreme') {
      $( ".BOTTOM_LINE" ).css('background-color', 'red');
      $( ".BOTTOM_LINE" ).css('color', 'white');
    } else if (avyInfo.advisories[0].advisory.overall_danger_rating == 'High') {
      $( ".BOTTOM_LINE" ).css('background-color', 'red');
      $( ".BOTTOM_LINE" ).css('color', 'white');
    }  else {
      $( ".BOTTOM_LINE" ).css('background-color', '#104070');
      $( ".BOTTOM_LINE" ).css('color', 'white');
    }
*/
    var infoLine = '<table> <tr><th width="200px">Narrative created: </th><th align="left">'+issued+'</th></tr>';
        infoLine = infoLine + '<tr><td>'+image+'</td><td> '+comment+'</td></tr>';
        infoLine = infoLine + '<tr><td>'+note+'</td><td> More avalanche information can be found at <a href="https://www.weather.gov/nwsexit.php?url=https://www.utahavalanchecenter.org" target="_blank">https://www.utahavalanchecenter.org</a></td></tr></table>';
    document.getElementById("AVY_RATING").innerHTML = infoLine;
  });
}

function getWWA(ZONE) {
  document.getElementById("WWA").innerHTML = '<p align="center"><img src="/images/slc/common_images/spinner.gif" height="100px"></p>';
  console.log(ZONE)
//  $( ".ACTIVE_WARNINGS" ).css('background-color', '#104070');
//  $( ".ACTIVE_WARNINGS" ).css('color', 'white');
  $.getJSON('https://api.weather.gov/alerts/active/area/UT', function(WWA) {
    var NUM = WWA.features.length;
    if (NUM == "0") {
      document.getElementById("WWA").innerHTML = '<p>Currently, there are no watches, warnings, or adviories';
    } else {
      console.log("There are ",NUM," WWA products");
      var headline= '';
      for (i=0; i<NUM; i++) {
        if ((WWA.features[i].properties.parameters.PIL[0]).substr(0,3) == "SLC") {
          var Phenom = (WWA.features[i].properties.parameters.PIL[0]).substr(3,2);
          var K = i + 1;
          console.log("# ",K," relevant to our CWA");
          if (Phenom =="WW" || Phenom == "WS" || Phenom == "WI" || Phenom == "HW" || Phenom == "IF" || Phenom == "IS" || Phenom == "BS" || Phenom == "BZ" || Phenom == "EC" || Phenom == "HS" || Phenom == "SN" || Phenom == "AV") {
            var ZONES = WWA.features[i].properties.geocode.UGC.length;
            console.log("There are ",ZONES," zones in this WWA product")
            for (j=0; j< ZONES; j++) {
              var Affected = (WWA.features[i].properties.geocode.UGC[j])
              console.log(ZONE,Affected)
              if(Affected == ZONE) {
                console.log("Match");
                var  header = WWA.features[i].properties.headline.replace(/ by NWS Salt Lake City UT/g,'');;
                var  description =  WWA.features[i].properties.description.replace(/(?:\r\n|\r|\n)/g,"<br>&nbsp;");
                headline += '<tr><td style="text-align: Left;">' + header + '</td><td id="WarnButton" style="text-align:right;"><button id="WWA_BUTTON" onClick="modal(\''+header+'\',\''+description+'\')">Details</button></td></tr>';
              } else {
                console.log("Zone is not a match.");
              }
            }
          } else {
            console.log("Product type is not a match.");
          } 
        } else {
          console.log("Product is not from our CWA.");
        }
      }
      if (headline) {
        document.getElementById("WWA").innerHTML = '<table id="ACTIVE" width="100%">' + headline + '</table>';
      } else {
        document.getElementById("WWA").innerHTML = '<p>Currently, there are no watches, warnings, or adviories';
      }    }
  });
}

function modal(header,description) {
  $('<div id="PopUp"></div>').dialog({
    modal: true,
    position:{
                my: 'center',
                at: 'top',
                of: window,
                collision: 'fit'
    },
    title:  "Warnings, Watches and Advisories",
    height: 520,
    width:  700,
    open: function () {
      $(this).html('<p>'+header+'<p>'+description);
    }
  });
};
















/* All Above Function Are From Version 1 - When we verify they're still needed, move them below this line. */

/**
 *  PARSED_AVG - Global variable that stores all parts of a parsed AVG forecast product.
 */
let PARSED_AVG = {};


//Parse out the AVG product text, assign it to a global, and populate the appropriate divs
function parseAndPopulateAvg(avgProducts){
	// If the NWS API times out, throw an error
	if (!avgProducts) { throw Error('Weather.gov API is Unavailable')}
	// For testing, if no avg is available in the database, use the dummy test data in avgTestData.js
	// //TODO Once done testing, we have to set some stuff in here so the page isn't empty come summer.
	else if (avgProducts.length == 0) { PARSED_AVG = new AVGParser(avg.pih); }
	//If our avg query from the API is successful, parse it out with the AVG parser.
	else { PARSED_AVG = new AVGParser(avgProducts[0]); }

	//Populate the discussion display, and show the tab if there is a discussion.
	if (PARSED_AVG.discussion) { 
		$('#forecastDiscussionTabContent').html(PARSED_AVG.discussion);
		$('#forecastDiscussionTab').removeClass('hidden');
		$('#forecastDiscussionTabContent').removeClass('hidden');
	}

	//List of locations in the AVG and also serves as a list of keys to reference the parsed product.  
	//These keys are what the map/config can use.
	let locations = PARSED_AVG.locations;

	//Add the locations to the map
	//Placeholder for Al			
	

	
	// TEMPORARY DEVELOPMENT DEBUGGING INFO 
	//This is just to populate the avgForecast for testing until the map and drop down is ready;
	populateForecast(locations[0]);

	//The below is just some debugging stuff to see the the output of a AVGParser Object and populate it in the forecast table.
	console.log('List of the AVG Locations: ' +locations);
	locations.forEach(location => {
		let fcst = PARSED_AVG.forecast(location);
		console.log('Below is the forecast for '+location);
		console.log(fcst);
	});
	// TEMPORARY DEVELOPMENT DEBUGGING INFO 	
}

//TODO 
function parseAndPopulateAlerts(alerts){
	let alertDivHtml = '';
	// If the NWS API times out, throw an error
	if (!alerts) { throw Error('Weather.gov API is Unavailable')}
	else if (alerts.features.length === 0) { alertDivHtml = 'No active watches or warnings'; }
	//If our query from the API is successful, indicate it to the user.
	else { 
		alertDivHtml = 'Active Watches & Warnings In Effect.  Click on map above (below?) for more information';
		alertDivHtml+= `<pre>${JSON.stringify(alerts,null,2)}</pre>`
		//Add the alerts to the map
		//Placeholder for Al
	} 

	$('#forecastAlertsTabContent').html(alertDivHtml)
}

/**
 * 
 * @param {*} location 
 */
function populateForecast(location){
	let locationForecast = PARSED_AVG.forecast(location);
	let tabularRawFcst = locationForecast.raw;
	let tabularHtml = `<pre>${tabularRawFcst}</pre>`

	$('#forecastTabularTabContent').html(tabularHtml)

	//Change the forecast label to the location name
	$('#forecastLocationInfo').html(locationForecast.name)
}


//Fill our staticContent with the base html then opulate and manipulate the base html with content
function populateStaticContent(cwa){
	$('#staticContent').html(pageHtml.staticContent);

	//Initialize the forecast tabs
	let t = tabs({
    el: '#forecastTabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab',
  });
	t.init();
	t.goToTab(3);	



	// Pull in an AVG Product, and run a parser on it to populate the page.
	let avgProduct = new NwsApi.Product({ 
		//location : 'BTV',  //TODO This setting will eventually want to be the CWA variable.  It's not set at the moment, and should randomize to whichever CWA the API grabs first.  Useful for testing!
		type: 'AVG',
		limit : 1
	}).getAll(parseAndPopulateAvg)

	//Alerts filtered out by active CWA
	let cwaAlerts = new NwsApi.Alert({
		active: true,
		event: ['Avalanche Advisory','Avalanche Warning','Avalanche Watch', 
		        'Winter Storm Advisory','Winter Storm Warning','Winter Storm Watch',
		        'Wind Advisory','Wind Chill Advisory','Wind Chill Warning','Wind Chill Watch',
		        'Winter Storm Advisory','Winter Storm Warning','Winter Storm Watch',
		        'High Wind Warning','High Wind Watch','Extreme Wind Warning',
		        'Ice Storm Warning','Extreme Cold Warning','Extreme Cold Watch',
		        'Blizzard Warning','Blizzard Watch','Snow Squall Warning','Freezing Rain Advisory']
		}).getByCwa(cwa,parseAndPopulateAlerts);						
//		}).getAll(parseAndPopulateAlerts); //Switch to getAll instead of getByCwa to get all alerts over the country.  Good for testing.

}


//National Standard Content Html 
const pageHtml = {};
pageHtml.staticContent= `
<h1> Avalanche Weather Information </h1>

<div id="map">Map Placeholder</div>

<h3><span id="forecastLocationInfo"></span> Forecast</h3>
<div id="forecastDisplay" class="outline">
	<div class="c-tabs" id="forecastTabs">
		<div class="c-tabs-nav">
			<div id="forecastAlertsTab" class="c-tabs-nav__link"><span>Active Alerts</span></div>
			<div id="forecastTabularTab" class="c-tabs-nav__link"><span>Tabular Forecast</span></div>
			<div id="forecastGraphicalTab" class="c-tabs-nav__link"><span>Graphical Forecast</span></div>			
			<div id="forecastDiscussionTab" class="c-tabs-nav__link hidden"><span>Discussion</span></div>
		</div>
		<div class="c-tab">	
			<div id="forecastAlertsTabContent" class="c-tab__content">When operational, this will display the active warnings when a user selects a forecast point. By default this tab should have the "hidden" class unless active.</div>
		</div>		
		<div class="c-tab">	
			<div id="forecastTabularTabContent" class="c-tab__content">Select a forecast point from the map or drop down menu above.</div>
		</div>
		<div class="c-tab">
			<div id="forecastGraphicalTabContent" class="c-tab__content">Select a forecast point from the map or drop down menu above.</div>
		</div>
		<div class="c-tab">
			<div id="forecastDiscussionTabContent" class="c-tab__content hidden"></div>
		</div>		
	</div>
	</div>
</div>


<h3>Local Content </h3>
<div id="forecastGroupRadioButtons"></div>
<div id="forecastGroupInfo" class="outline">
	<h4>Active Watches and Warnings</h4>
	<div id="forecastGroupWWA" class="section"></div>
	<h4>Local Area Forecasts</h4>
	<div id="forecastGroupForecasts" class="section"></div>
</div>
`;