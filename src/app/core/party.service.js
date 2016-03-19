(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('partyService', partyService);
    
    partyService.$inject = ['$firebaseArray', 'firebaseDataService'];
    
    function partyService($firebaseArray, firebaseDataService) {
        
        var parties = null;
        
        var service = {
            Party: Party,
            getPartiesByUser: getPartiesByUser,
            reset: reset
        };
        
        return service;
        
        ///////////
        
        function Party() {
        this.name = '';
        this.phone = '';
        this.size = '';
        this.done = false;
        this.notfifed = false;
        }
        
        function getPartiesByUser(uid) {
            if(!parties) {
                patires = $firebaseArray(firebaseDataService.users.child(uid).child('parties'))
            }
            return parties;
        }
        
        function reset() {
            if (parties) {
                parties.$destroy();
                parties = null;
            }
        }
        
    }
    
})();