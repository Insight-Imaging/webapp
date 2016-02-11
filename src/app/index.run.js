(function() {
  'use strict';

  angular
    .module('insight-imaging-webapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
