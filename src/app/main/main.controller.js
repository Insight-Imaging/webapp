(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(L) {
    //var vm = this;

    activateLeafletMap();

    function activateLeafletMap(){

        var map = L.map('map', {
            zoomControl: true,
            attributionControl: true
        }).setView([51.5252, -0.0902], 15);

        var tileUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>';

        var ostrLayer = L.tileLayer(tileUrl, {
                id: 'OSTR',
                minZoom: 7,
                maxZoom: 18,
                detectRetina: 'False',
                attribution: osmAttrib});

        ostrLayer.addTo(map);

    }

  }
})();
