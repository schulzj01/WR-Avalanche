function makeMap() {
//  var wfo = (window.location.pathname.replace('/','').replace('/avalanche','')).toLowerCase();
  var wfo = (window.location.pathname.replace('/source/','').replace('/avalanche/','')).toLowerCase(); //test
  var wfo = 'slc'; //test
  var WFO = wfo.toUpperCase();
  $.getJSON('/source/'+wfo+'/avalanche/siteConfig.json', function (cwaINFO) {
    var lat  = cwaINFO.MAPPING.centerLat;  
    var lon  = cwaINFO.MAPPING.centerLon;  
    var zoom = cwaINFO.MAPPING.mapZoom;  
    mainMap = L.map('map',{ zoomControl: false }).setView([lat, lon],zoom);
    L.esri.basemapLayer('Topographic',).addTo(mainMap);
    L.control.zoom({
       position:'topright'
    }).addTo(mainMap);
    for (i=0; i<cwaINFO.AVG_Sites.length; i++) {
      plotAVGlocations(cwaINFO.AVG_Sites[i])
    }
    var queryString = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS/nws_reference_map/MapServer/1';
    var mapData = L.esri.featureLayer({ url: queryString, style: { fillOpacity: 0, color: "BLUE", weight: 2 }, transparent: true });
    mapData.addTo(mainMap);
  })
  queryWWA(WFO);
}

function plotAVGlocations(locationData) {
  var type = locationData.geometry.type;
  var name = locationData.location;
  if (type == 'GridPoint') {
    console.log(name, type);
    var icon  = 'https://unpkg.com/leaflet@1.2.0/dist/images/marker-icon.png';
    var image = L.icon({
        iconUrl: icon,
        iconSize:     [15, 20], // size of the icon
        iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    });
    var point = [locationData.geometry.coordinates[1],locationData.geometry.coordinates[0]];	// Used to position the marker on the map
    var marker = L.marker( point, { icon: image });
    var button = '<div onClick="populateForecast(\''+name+'\')">'+name+'</div>';
    marker.on('click', function(e) {
      populateForecast(name);
    })
    /*marker.on('mouseover', function(e) {
    var tooltip = L.popup()
       .setLatLng(e.latlng) 
       .setContent(button)
       .openOn(mainMap);
    });*/
		marker.bindTooltip(name,{
			direction: 'top',
			offset: [-2,-18]
		});
//    marker.bindPopup( button, {
//        maxWidth : 1260
//    });
    marker.addTo(mainMap);
  } else if (type == 'Polygon') {
    console.log(name, type);
    var outline = locationData.geometry.coordinates;
    var color_style={"color": "blue", "fillColor":"blue","fillOpacity":0.5,"width":"1px"};
    var border = L.geoJson(outline, {style: color_style});
        border.addTo(mainMap);
  } else if (type == 'Zone/County') {
    console.log(name, type);

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
		event: ['Avalanche Advisory','Avalanche Warning','Avalanche Watch', 
						'Winter Storm Advisory','Winter Storm Warning','Winter Storm Watch',
						'Wind Advisory','Wind Chill Advisory','Wind Chill Warning','Wind Chill Watch',
						'Winter Storm Advisory','Winter Storm Warning','Winter Storm Watch',
						'High Wind Warning','High Wind Watch','Extreme Wind Warning',
						'Ice Storm Warning','Extreme Cold Warning','Extreme Cold Watch',
						'Blizzard Warning','Blizzard Watch','Snow Squall Warning','Freezing Rain Advisory']
	//}).getByCwa(WFO,getWWA,WFO);	 //TODO Make sure to switch back to CWA filtered WWAs before going live.
	}).getAll(getWWA,WFO); //Switch to getAll instead of getByCwa to get all alerts over the country.  Good for testing.
}

// Get Winter Wx Specific WWA for the CWA, plot on map
function getWWA(WWA,WFO) {
  $.getJSON('/source/slc/common_data/support.json', function (support) {
		var Legend = '<table bgcolor="white" border="1px"><tr><td colspan="2">Watches, Warnings and Advisories<br>are for the '+WFO+' County Warning Area only';
		var NUM = WWA.features.length;
		if (NUM != "0") {
			for (i=0; i<NUM; i++) {
				var Phenom = (WWA.features[i].properties.event);					
				for (m=0; m < support.fill.length; m++) {
					if (Phenom == support.fill[m].product) {
						FC = support.fill[m].hex;
						var ZONES = WWA.features[i].properties.affectedZones.length;
						if (Legend.includes(Phenom)) {
							Legend += '' 
						} else {
							Legend += '<tr><td bgcolor="'+FC+'" width="10px">&nbsp;</td><td>'+Phenom+'</td></tr>';
						}
						for (j=0; j< ZONES; j++) {
							var Affected = (WWA.features[i].properties.affectedZones[j])
							console.log(Affected); 
							showCountyZone(Affected,FC)
						}
					} 
				}
			}
			Legend += '</table>';
			legend(Legend);
			console.log(Legend);
		} else {
			Legend += '<tr><td colspan="2">There are no watches, warnings <br>or advisories in effect.</td></tr></table>';
			legend(Legend);
		}
  });
}


// Polygon based warnings
function showPolygon (DATA,COLOR,OPAC) {
  if (!standardLayer) {
    var standardLayer = L.layerGroup().addTo(mainMap);
  }
  plot = DATA.features[0].geometry;
  var originalMsg = JSON.stringify(plot);
  originalMsg = originalMsg.replace('rings','Polygon');
  var newObj = JSON.parse(originalMsg); 
  var color_style={"color": COLOR, "weight":2,"fillColor":COLOR,"fillOpacity": OPAC};
  var foreFront = L.geoJson(newObj, {style: color_style});
  foreFront.addTo(standardLayer);
};

// COunty/Zone based warnings
function showCountyZone (LOCATION,COLOR) {
  if (!standardLayer) {
    var standardLayer = L.layerGroup().addTo(mainMap);
  }
  $.getJSON(LOCATION, function(plot) {
     var color_style={"color": COLOR, "weight":0,"fillColor":COLOR,"fillOpacity": 0.5};
     var foreFront = L.geoJson(plot, {style: color_style});
     foreFront.addTo(standardLayer);
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

