document.addEventListener("DOMContentLoaded", function(event) {
    // var mapDiv = document.createElement("DIV");
    // mapDiv.id = 'map-one';
    // mapDiv.className = 'map';
    // document.body.appendChild(mapDiv);

    // L.mapbox.accessToken = 'pk.eyJ1IjoiZmxlbWRpenpsZSIsImEiOiJaNmhWUzlZIn0.awEBJM2PvdRZYNjTt0PRVg';
    // var map = L.mapbox.map('map-one', 'examples.map-i86l3621', {
    //     scrollWheelZoom: false,
    //     legendControl: {
    //       position: 'topright'
    //     }
    // }).setView([38.8929, -77.0252], 14);

    // var myLayer = L.mapbox.featureLayer()
    //   .loadURL('js/geojson.geojson')
    //   .addTo(map);

    // map.legendControl.addLegend('Hello, World!');

  L.mapbox.accessToken = 'pk.eyJ1IjoiZmxlbWRpenpsZSIsImEiOiJaNmhWUzlZIn0.awEBJM2PvdRZYNjTt0PRVg';
  var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
      zoomControl: false
  }).setView([40, -74.50], 9);

  // move the attribution control out of the way
  map.attributionControl.setPosition('bottomleft');

  // create the initial directions object, from which the layer
  // and inputs will pull data.
  var directions = L.mapbox.directions();

  var directionsLayer = L.mapbox.directions.layer(directions)
      .addTo(map);

  var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
      .addTo(map);

  var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
      .addTo(map);

  var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
      .addTo(map);

  var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
      .addTo(map);
});