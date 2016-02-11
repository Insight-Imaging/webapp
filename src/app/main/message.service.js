(function() {
  'use strict';

  angular
    .module('insight-imaging-webapp')
    .factory('messageService', messageService);

  /** @ngInject */
  function messageService($document, $mdDialog) {
    var modalConfig;

    var service = {
      error: errorFn,
      message: messageFn
    };

    return service;
    ////////// public functions //////////////

    function errorFn(error) {
      $mdDialog.hide(modalConfig);
      modalConfig = $mdDialog
        .alert()
        .title(error)
        .ok('Close');
      $mdDialog.show(modalConfig);
    }

    function messageFn(message) {
      $mdDialog.show({
        parent: angular.element($document.body),
        template:
          '<md-dialog>' +
          '  <md-dialog-content>' +
          '    <md-content layout-padding layout="column">' +
          '      <p flex>' + message + '</p>' +
          '      <md-progress-linear flex md-mode="indeterminate"></md-progress-linear>' +
          '    </md-content>' +
          '  </md-dialog-content>' +
          '  <md-dialog-actions>' +
          '  </md-dialog-actions>' +
          '</md-dialog>'
      });
    }


    //////////// privates ////////////////

  }

})();
