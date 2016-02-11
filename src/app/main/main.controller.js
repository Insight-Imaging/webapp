(function() {
  'use strict';

  angular
    .module('insight-imaging-webapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(L) {
    //var vm = this;

    activateLeafletMap();

    function activateLeafletMap(){
/*
        var map = L.map('map', {
            zoomControl: true,
            attributionControl: true
        }).setView([51.5252, -0.0902], 15);

        var tileUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        var ostrLayer = L.tileLayer(tileUrl, {
                id: 'OSTR',
                minZoom: 7,
                maxZoom: 18,
                detectRetina: 'False',
                attribution: osmAttrib});

        ostrLayer.addTo(map);
*/
      var osAttrib = '&copy; <a href="https://www.os.uk/copyright">Ordnance Survey</a>';
      var osKey = 'FBgTnDiN4gVpi2a1tGAnWpvXEXcnHOlN'
      var osUrlRoad = 'https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Road 3857/{z}/{x}/{y}.png?key='+osKey;
      var osRoad = L.tileLayer(osUrlRoad, {id: 'OS Road', maxZoom: 18, attribution: osAttrib});

      var osUrlOutdoor = 'https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Outdoor 3857/{z}/{x}/{y}.png?key='+osKey;
      var osOutdoor = L.tileLayer(osUrlOutdoor, {id: 'OS Outdoor', maxZoom: 18, attribution: osAttrib});

      var osUrlLight = 'https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Light 3857/{z}/{x}/{y}.png?key='+osKey;
      var osLight = L.tileLayer(osUrlLight, {id: 'OS Light', maxZoom: 18, attribution: osAttrib});

      var osUrlNight = 'https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Night 3857/{z}/{x}/{y}.png?key='+osKey;
      var osNight = L.tileLayer(osUrlNight, {id: 'OS Night', maxZoom: 18, attribution: osAttrib});

      //var osUrlOpenData = 'https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/OpenData 3857/{z}/{x}/{y}.png?key='+osKey;
      //var osOpenData = L.tileLayer(osUrlOpenData, {id: 'OS OpenData', maxZoom: 18, attribution: osAttrib});

      var googleAttrib = '&copy; <a href="http://maps.google.com">Google</a>'
      var googleTileUrl = 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}';
      var google = L.tileLayer(googleTileUrl, {id: 'Google', maxZoom: 18, attribution: googleAttrib});

      var osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      var osmTileUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
      var osm = L.tileLayer(osmTileUrl, {id: 'OSM', maxZoom: 18, attribution: osmAttrib})

      var baseLayers = {
          "OS Outdoor": osOutdoor,
          "OS Road": osRoad,
          "OS Light": osLight,
          "OS Night": osNight,
          //"OS OpenData": osOpenData
          "OpenStreetMap" : osm,
          "Google Maps" : google
      };

      var overlays = {

      };

      var map = L.map('map', {
        center: [51.5252, -0.0902],
        zoom: 18,
        layers: [osRoad]
      });

      L.control.layers(baseLayers, overlays).addTo(map);

    }

  }
})();
