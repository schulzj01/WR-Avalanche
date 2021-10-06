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



//Parse out the AVG product text, and populate the appropriate divs
function parseAndPopulateAvg(avgProducts){
	let parsedAvg;
	// If the NWS API times out, throw an error
	if (!avgProducts) { throw Error('Weather.gov API is Unavailable')}
	// For testing, if no avg is available in the database, use the dummy test data in avgTestData.js
	else if (avgProducts.length == 0) { parsedAvg = new AVGParser(avg.pih); }
	//If our avg query from the API is successful, parse it out with the AVG parser.
	else { parsedAvg = new AVGParser(avgProducts[0]); }

	//Populate the discussion display
	$('#discussionDisplay').html(parsedAvg.discussion);


	//Add the locations to the map
	//Placeholder for Al			
	
	//The below is just some debugging stuff to see the the output of a AVGParser Object.
	let locations = parsedAvg.locations;
	console.log('List of the AVG Locations: ' +locations);
	locations.forEach(location => {

		let fcst = parsedAvg.forecast(location);
		console.log('Below is the forecast for '+location);
		console.log(fcst);
	});
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
		//Add the alerts to the map
		//Placeholder for Al

	} 

	alertDivHtml+='<br><br>Perhaps we use the Forecast Data display as the warning information display like what you do with the fire pages?';
	alertDivHtml+='<br><br>This way we can just keep this div as a informational banner and keep it less complicated?';
	alertDivHtml+='<br><br>Thinking similar to a Bootstrap Alert ';
	$('#alertDisplay').html(alertDivHtml)
}

function populateStaticContent(){
	//Fill our staticContent with the base html
	$('#staticContent').html(pageHtml.staticContent);

	//Populate and manipulate the base html with content

	// Pull in an AVG Product, and run a parser on it to populate the page.
	let avgProduct = new NwsApi.Product({ 
		//location : 'BTV',  //TODO This setting will eventually want to be the CWA variable.  It's not set at the moment, and should randomize to whichever CWA the API grabs first.  Useful for testing!
		type: 'AVG',
		limit : 1
	}).getAll(parseAndPopulateAvg)

	let cwaAlerts = new NwsApi.Alert({
		//What am I missing here?  Can't we filter warnings by office?  Wasn't that an option at one point? 
		siteid: 'PIH',
		event: ['Avalanche Warning','Blizzard Warning','Winter Storm Warning','Winter Storm Watch']
	}).getAll(parseAndPopulateAlerts); //TODO Jeremy work on an edit to the NwsApi wrapper to have a function getByCWA() which will do cwa filtering without an extra call.
}





//National Standard Content Html 

const pageHtml = {};
pageHtml.staticContent= `
<h1> Avalanche Weather Information </h1>

<div id="map" class="outline">Map Placeholder</div>

<h3>Forecast Data</h3>
<div id="selectedAvgDisplay" class="outline">
	Here is where the AVG tabular product and the meteogram type product can go?
	<br><br>
	Perhaps a tabbed approach with both tabular and graph data available?
	<br><br>
	We could even include the watch/warning text here, or even the Avalanche.org bottom line for that location?
	<div id="outputTest" style=" font-family: monospace; white-space: pre;"></div>
</div>

<h3>Active Winter Watches & Warnings (Should this be above the map?)</h3>
<div id="alertDisplay"  class="outline">
	
</div>

<h3>Recent Discussion</h3>
<div id="discussionDisplay"  class="outline"></div>

<h3>Local Content </h3>
<div id="forecastGroupRadioButtons"></div>
<div id="forecastGroupInfo" class="outline">
	<h4>Active Watches and Warnings</h4>
	<div id="forecastGroupWWA" class="section"></div>
	<h4>Local Area Forecasts </h4>
	<div id="forecastGroupForecasts" class="section"></div>
</div>
`;