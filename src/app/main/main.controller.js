(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453375630500;
    vm.showToastr = showToastr;

    activate();
    activateLealetMap();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function activateLealetMap(){
      /*global L*/

        var map = L.map('map', {
            zoomControl: true,
            attributionControl: true
        }).setView([51.5252, -0.0902], 15);

        var tileUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';

        var ostrLayer = L.tileLayer(tileUrl, {
                id: 'OSTR',
                minZoom: 7,
                maxZoom: 18,
                detectRetina: 'False'});

        ostrLayer.addTo(map);

    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
