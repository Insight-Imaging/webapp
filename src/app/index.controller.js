(function() {
  'use strict';

  angular
    .module('test')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($firebaseAuth) {
    var vm = this;
    var ref = new Firebase("https://insight-imaging-dev.firebaseio.com");
    vm.userAuthenticated = false;
    vm.authenticate = authenticate;
    vm.register = register;

    ////////
    function authenticate(){

      // Or with an email/password combination
      var auth = $firebaseAuth(ref);

      auth.$authWithPassword({
        email    : vm.email,
        password : vm.password
      })
      .then(authHandler)
      .catch(authErrorHandler)
    }

    function authHandler(/*authData*/){
        vm.userAuthenticated = true;
    }

    function authErrorHandler(/*error*/){
        vm.userAuthenticated = false;
    }

    function register(){
      var ref = new Firebase("https://insight-imaging-dev.firebaseio.com");

      ref.createUser({
        email    : vm.email,
        password : vm.password
      })
      .then(registeredHandler)
      .catch(registerErrorHandler)

    }

    function registeredHandler(/*authData*/){
        vm.authenticate();
    }

    function registerErrorHandler(/*error*/){
        vm.userAuthenticated = false;
    }


  }
})();
