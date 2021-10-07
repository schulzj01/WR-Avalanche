function makeMap() {
//  var wfo = (window.location.pathname.replace('/','').replace('/avalanche','')).toLowerCase();
  var wfo = (window.location.pathname.replace('/source/','').replace('/avalanche/','')).toLowerCase(); //test
  console.log(wfo);
  var wfo = 'slc'; //test
  $.getJSON('/source/'+wfo+'/avalanche/siteConfig.json', function (cwaINFO) {
    var lat  = cwaINFO.MAPPING.centerLat;  
    var lon  = cwaINFO.MAPPING.centerLon;  
    var zoom = cwaINFO.MAPPING.mapZoom;  
    mainMap = L.map('map',{ zoomControl: false }).setView([lat, lon],zoom);
    L.esri.basemapLayer('Topographic',).addTo(mainMap);
    for (i=0; i<cwaINFO.AVG_Sites.length; i++) {
      plotAVGlocations(cwaINFO.AVG_Sites[i])
    }
  })
//  getWWA();
}

function plotAVGlocations(locationData) {
  var type = locationData.geometry.type;
  var name = locationData.location;
  if (type == 'GridPoint') {
    console.log(name, type);
    var icon  = 'https://unpkg.com/leaflet@1.2.0/dist/images/marker-icon.png';
    var image = L.icon({
        iconUrl: icon,
        iconSize:     [20, 25], // size of the icon
        iconAnchor:   [12, 25], // point of the icon which will correspond to marker's location
    });
    var point = [locationData.geometry.coordinates[1],locationData.geometry.coordinates[0]];	// Used to position the marker on the map
    var marker = L.marker( point, { icon: image }).on('click',populateForecast(name));
        marker.bindPopup(name, {
   	  maxWidth : 1060
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
