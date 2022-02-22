let mainMap,clickLayer,standardLayer;

//An list of event types ordered by priority on the map
let queryEventTypes = ['Snow Squall Warning','Avalanche Warning','Avalanche Advisory','Avalanche Watch',
'Winter Storm Warning','Blizzard Warning','Blizzard Watch','Extreme Wind Warning','High Wind Warning',
'High Wind Watch','Ice Storm Warning','Extreme Cold Warning','Extreme Cold Watch','Winter Storm Watch',
'Freezing Rain Advisory','Winter Weather Advisory','Wind Chill Warning','Wind Advisory','Wind Chill Watch','Wind Chill Advisory']

function makeMap(wfo) {
  var WFO = wfo.toUpperCase();
  $.getJSON('/source/'+wfo+'/avalanche/siteConfig.json', function (cwaINFO) {
    var lat  = cwaINFO.MAPPING.centerLat;
    var lon  = cwaINFO.MAPPING.centerLon;
    var zoom = cwaINFO.MAPPING.mapZoom;
    mainMap = L.map('map',{
			zoomControl: false,
			zoomSnap: 0.1,
		}).setView([lat, lon],zoom);
    L.esri.basemapLayer('Topographic',).addTo(mainMap);
    L.control.zoom({
      position:'topright'
    }).addTo(mainMap);
    for (i=0; i<cwaINFO.AVG_Sites.length; i++) {
      plotAVGlocations(cwaINFO.AVG_Sites[i],wfo)
    }

		//Set an initial opacity on the overlays.
		mainMap.getPane('overlayPane').style.opacity = 0.65

		//var outline = BOUNDARY.features[0].geometry;
		var options={
			color: '#2981ca',
			width:'1px',
			fillOpacity:1,
			fillColor: '#303030',
			restrictBounds: false,
			fitBounds: false,
		};
		var border = L.mask('https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS/nws_reference_map/MapServer/1/query?where=CWA+LIKE+%27'+WFO+'%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=4&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=geojson', options).addTo(mainMap);
  })
  queryWWA(WFO);
}

function plotAVGlocations(locationData,wfo) {
  if (!clickLayer) {
    clickLayer = L.layerGroup().addTo(mainMap);
  }
  var type = locationData.geometry.type;
  var name = locationData.location;
  if (type == 'GridPoint') {
    let icon = ImageRepo.asUrl('snowflakeBlue')
    var image = L.icon({
        iconUrl: icon,
				iconSize: [25,25]
    });
    var point = [locationData.geometry.coordinates[1],locationData.geometry.coordinates[0]];	// Used to position the marker on the map
    var marker = L.marker( point, { icon: image });
    marker.locationId = locationData.location.toLowerCase();
		marker.layerType = 'marker';
    marker.on('click', populateAvgContentFromMap)
    marker.bindTooltip(name,{
      direction: 'top',
      offset: [0,-7],
    });
    marker.addTo(clickLayer);
  // Need to test with a shapefile from an officee using shapefiles
  } else if (type == 'ShapeFile') {
    $.getJSON('/source/'+wfo+'/avalanche/'+locationData.geometry.coordinates, function(shape) {
      let color_style={color: "#0000FF", fillColor:"white",fillOpacity:0, weight:2};
			let border = L.GeoJSON.geometryToLayer(shape.features[0],color_style)
			border.locationId = locationData.location.toLowerCase();
			border.layerType = 'polygon';
      border.on('click', populateAvgContentFromMap)
      border.bindTooltip(name,{
        direction: 'top',
      });
      border.addTo(clickLayer);
		})
  }
}
/**
 * Queries the NWS API to pull out active alerts for a single CWA
 * @param {String} WFO - 3 character NWS site identifier
 */
function queryWWA(WFO){
	//Alerts filtered out by active CWA. We probably want to move this to a map call? Or better yet, use it to populate the map with the CWA hazards?
	let cwaAlerts = new NwsApi.Alert({
		active: true,
		event: queryEventTypes
	}).getByCwa(WFO,getWwa,WFO);
	//}).getAll(getWWA,WFO); //Switch to getAll instead of getByCwa to get all alerts over the country.  Good for testing.
}

// Get Winter Wx Specific WWA for the CWA, plot on map
function getWwa(WWA,WFO) {
  $.getJSON('/source/slc/common_data/support.json', function (support) {
		var Legend = '<table bgcolor="white" border="1px"><tr><td colspan="2">Winter Related Watches & Warnings<br>Displayed Only in the Highlighted Area';
		var NUM = WWA.features.length;
		if (NUM != "0") {
			//Sort hazards into highest to lowest priority so the highest priority show up on the map last.
			let sortedWWAFeatures = WWA.features.sort((featA,featB) => queryEventTypes.indexOf(featA.properties.event) - queryEventTypes.indexOf(featB.properties.event));
			sortedWWAFeatures.forEach(feat => {
				let props = feat.properties;
				if (props.event == 'Avalanche Advisory' && props.description.toLowerCase().replace(/(?:\r\n|\r|\n)/g," ").includes('issued an avalanche warning')) { props.event = 'Avalanche Warning'; }
				let Phenom = (props.event);
				let ZONES = props.affectedZones.length;
				//let description = (props.description) ? props.description.replace(/(?:\r\n|\r|\n)/g,"<br>&nbsp;") : '';
				//This is a temporary fix because NCO does not correctly parse "issued an avalanche warning"
				for (m=0; m < support.fill.length; m++) {
					if (Phenom == support.fill[m].product) {
						FC = support.fill[m].hex;

						if (Legend.includes(Phenom)) {
							Legend += ''
						} else {
							Legend += '<tr class="interactiveLegend" onClick="toggleLegend(this)"><td bgcolor="'+FC+'" width="10px"></td><td>'+Phenom+'</td></tr>';
						}
						for (j=0; j< ZONES; j++) {
							let Affected = (props.affectedZones[j])
							showCountyZone(Affected,FC,props)
						}
					}
				}
			});
			Legend += '</table>';
			legend(Legend);
		} else {
			Legend += '<tr><td colspan="2">-- No Active Watches/Warnings -- </td></tr></table>';
			legend(Legend);
		}
  });
}


// Polygon based warnings
function showPolygon (DATA,COLOR,OPAC) {
  if (!standardLayer) {
    standardLayer = L.featureGroup().addTo(mainMap);

  }
  plot = DATA.features[0].geometry;
  var originalMsg = JSON.stringify(plot);
  originalMsg = originalMsg.replace('rings','Polygon');
  var newObj = JSON.parse(originalMsg);
  var color_style={"color": COLOR, "weight":2,"fillColor":COLOR, fillOpacity: 0.9};
  var foreFront = L.geoJson(newObj, {style: color_style});
  foreFront.addTo(standardLayer);
	standardLayer.bringToBack();
};

// COunty/Zone based warnings
function showCountyZone (LOCATION,COLOR,alertProduct) {
  if (!standardLayer) {
    standardLayer = L.featureGroup().addTo(mainMap);
  }
  $.getJSON(LOCATION, function(plot) {
    var color_style={"color": COLOR, "weight":1,"fillColor":COLOR, fillOpacity: 0.9};
    var foreFront = L.geoJson(plot, {
			style: color_style,
			interactive:false,
		});
		foreFront.getLayers()[0].alertProduct = alertProduct;
    foreFront.addTo(standardLayer);
		standardLayer.bringToBack();
  })
};

function legend(Legend) {
	var logo = L.control({position: 'bottomleft'});
	logo.onAdd = function(mainMap){
	var div = L.DomUtil.create('div', 'myclass');
			div.innerHTML= Legend;
		return div;
	}
	logo.addTo(mainMap);
}

/**
 * Find a leaflet layer based on the associated location id from the parsed AVG and matching config file.
 * @param {String} location - The location identifier for the avalanche product
 */
function getLayerByLocationId(locationId){
	let layer;
	layer = clickLayer.getLayers().find(l => l.locationId == locationId);
	return layer;
}

/**
 * Handle the population of the AVG forecast from a select menu choice.  Note that in order to query alerts, the select
 * menu will actually trigger the populateAvgContentFromMap with a click event.  This function just handles moving the
 * map.
 * @param {String} location - the location id that matches the AVG and siteConfig files.
 *
 */
function populateAvgContentFromSelectMenu(locationId){
	layer = getLayerByLocationId(locationId);
	let center;
	//Depending on if it's a marker or polygon layer, find the location differently
	if (layer.layerType == 'marker') { center = layer.getLatLng(); }
	else { center = layer.getBounds().getCenter(); }

	//Change the map view to center on the location
	mainMap.setView(center,10);

	//Clear any previous tooltips out of the layergroup
	clickLayer.getLayers().forEach(l => l.closeTooltip());

	//Change our layer, trigger the new tooltip, and switch the forecast by triggering the click.
	//This is essentially just calling populateAvgContentFromMap;
	layer.fire('click');
}
/**
 * Handle the population of the AVG forecast and alerts from a click event on the map (programatically or user interactive)
 * This will also query the area under the "clicked" location to determine if there are any alert areas under the click, and
 * populate the alert areas with them.
 * @param {Leaflet Eventd} e - Click event object
 */
function populateAvgContentFromMap(e){
	$('#forecastTabs').removeClass('hidden')
	let layer = e.target;
	let locationId = layer.locationId;

	//Update select menu.  Note that select menu protects against inifinite loops by only triggering a forecast change on an actual user interaction
	$('#forecastPointSelectMenu').val(locationId);

	populateForecast(locationId);

	//Determine if this is a map based click or select menu.  Map clicks have a e.latlng,
	let latlng;
	if (layer.layerType == 'marker') { latlng = layer.getLatLng(); }
	else { latlng = layer.getBounds().getCenter(); } //TODO Need to switch this from Center to entire polygon.

	//Query Alert polygons below marker to determine whether or not to display alerts
	let alerts = findAlertsByLatLng(latlng);
	populateAlerts(alerts,locationId)
}

function findAlertsByLatLng(latlng){
	let alerts = [];
	if (standardLayer){
		standardLayer.getLayers().forEach(l =>{
			let results = leafletPip.pointInLayer(latlng, l);
			if (results.length) { alerts.push(results[0].alertProduct); }
		})
	}
	return alerts;
}

function toggleLegend(el){
	let color = el.firstChild.getAttribute('bgcolor');
	if (el.classList.contains('disabledLegend')) {
		el.classList.remove('disabledLegend');
		toggleLeafletLayerByColor(true,color);
	}
	else {
		el.classList.add('disabledLegend');
		toggleLeafletLayerByColor(false,color);
	}
}

function toggleLeafletLayerByColor(show = true, color){
	if (standardLayer){
		standardLayer.getLayers().forEach(lg =>{
			if (lg.options.style.fillColor == color) {
				let opacity = 0 ;
				let stroke = 0;
				if (show) {
					opacity = 0.9;
					stroke = 1;
				}
				lg.setStyle({
					fillOpacity : opacity,
					stroke: stroke
				});
			}
		})
	}
}
