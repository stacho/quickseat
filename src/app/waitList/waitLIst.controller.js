(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['partyService', 'user'];
    
    function WaitListController(partyService, user) {
        var vm = this;
        
        // Log user to the console.
        console.log(user);
        
        vm.parties = partyService.getPartiesByUser(user.uid);
    }
    
})();