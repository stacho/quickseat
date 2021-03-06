(function() {
    'use strict';
    
    angular
        .module('app.auth')
        .controller('AuthController', AuthController);
    
    AuthController.$inject = ['$location', 'authService'];
    
    function AuthController($location, authService) {
        var vm = this;

        vm.error = null;
        
        vm.register = register;
        vm.login = login;
        
        function register(user) {
            return authService.register(user)
                .then(function() {
                    return vm.login(user);
                })
                .then(function() {
                    return authService.sendWelcomeEmail(user.email);
                })
                .catch(function(error) {
                    console.log(error);
                    vm.error = error;
                });
        }
        
        function login(user) {
            return authService.login(user)
            .then(function(loggedInUser) {
                console.log(loggedInUser);
                $location.path('/waitlist');
            })
            .catch(function(error) {
                console.log(error);
                vm.error = error;
            });
        }
        
    }
    
})();