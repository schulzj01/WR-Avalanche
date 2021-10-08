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
  })
  getWWA(WFO);
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
        marker.bindPopup( button, {
          maxWidth : 1260
        });
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

// Get Winter Wx Specific WWA for the CWA, plot on map
function getWWA(WFO) {
  $.getJSON('/source/slc/common_data/support.json', function (support) {
    $.getJSON('https://api.weather.gov/alerts/active', function(WWA) {
      var NUM = WWA.features.length;
      if (NUM != "0") {
        for (i=0; i<NUM; i++) {
          var Phenom = (WWA.features[i].properties.event);
          var issuingOffice = (WWA.features[i].properties.parameters.PIL[0]);
              issuingOffice = (issuingOffice.substring(issuingOffice.length - 3));
          if (issuingOffice == WFO) {
            console.log(issuingOffice);
            if (Phenom == 'Avalanche Advisory' || Phenom == 'Avalanche Warning' || Phenom == 'Avalanche Watch' || Phenom == 'Winter Weather Advisory' || Phenom == 'Winter Storm Advisory' || Phenom == 'Winter Storm Warning' || Phenom == 'Winter Storm Watch' || Phenom == 'Wind Advisory' || Phenom == 'Wind Chill Advisory' || Phenom == 'Wind Chill Warning' || Phenom == 'Wind Chill Watch' || Phenom == 'Winter Storm Advisory' || Phenom == 'Winter Storm Warning' || Phenom == 'Winter Storm Watch' || Phenom == 'High Wind Warning' || Phenom == 'High Wind Watch' || Phenom == 'Extreme Wind Warning' || Phenom == 'Ice Storm Warning' || Phenom == 'Extreme Cold Warning' || Phenom == 'Extreme Cold Watch' || Phenom == 'Blizzard Warning' || Phenom == 'Blizzard Watch' || Phenom == 'Snow Squall Warning' || Phenom == 'Freezing Rain Advisory)') {
              for (m=0; m < support.fill.length; m++) {
                if (Phenom == support.fill[m].product) {
                  FC = support.fill[m].hex;
                  var ZONES = WWA.features[i].properties.affectedZones.length;
                  for (j=0; j< ZONES; j++) {
                    var Affected = (WWA.features[i].properties.affectedZones[j])
                    console.log(Affected); 
                    showCountyZone(Affected,FC)
                  }
                } 
              }
            }
          }
        }
      } else {
        console.log('Zero warnings to plot');
      }
    });
  });
}


// Polygon based warnings
function showPolygon (STATE,ID,COLOR,OPAC) {
  if (!standardLayer) {
    var standardLayer = L.layerGroup().addTo(mainMap);
  }
  $.getJSON('https://api.weather.gov/alerts/active/area/'+STATE, function(WWA) {
    plot = WWA.features[ID].geometry
    var color_style={"color": "black", "weight":2,"fillColor":COLOR,"fillOpacity": OPAC};
    var foreFront = L.geoJson(plot, {style: color_style});
    foreFront.addTo(standardLayer);
  });
};

// COunty/Zone based warnings
function showCountyZone (LOCATION,COLOR) {
  if (!standardLayer) {
    var standardLayer = L.layerGroup().addTo(mainMap);
  }
  $.getJSON(LOCATION, function(plot) {
     var color_style={"color": "black", "weight":2,"fillColor":COLOR,"fillOpacity": 0.5};
     var foreFront = L.geoJson(plot, {style: color_style});
     foreFront.addTo(standardLayer);
  })
};

