(function() {
  'use strict';

  angular
    .module('insight-imaging-webapp')
    .service('firebaseService', firebaseService);

  /** @ngInject */
  function firebaseService($firebaseAuth, Firebase) {
    var firebaseRef = new Firebase("https://insight-imaging-dev.firebaseio.com");
    var service = {
      firebaseRef : firebaseRef,
      auth : $firebaseAuth(firebaseRef),
      getUserLayersRef : getUserLayersRef
    };

    return service;
    //////////

    function getUserLayersRef() {
      var uid = service.auth.$getAuth().uid;
      return service.firebaseRef
        .child("users")
        .child(uid)
        .child("layers");
    }
  }


})();
