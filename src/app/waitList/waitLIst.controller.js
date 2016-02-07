(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['$firebaseArray'];
    
    function WaitListController($firebaseArray) {
        var vm = this;
        
        var fireParties = new Firebase('https://stacho-wait-and-eat.firebaseio.com/parties');
        var fireTextMessages = new Firebase('https://stacho-wait-and-eat.firebaseio.com/textmessages');
        
    function Party() {
        this.name = '';
        this.phone = '';
        this.size = '';
        this.done = false;
        this.notfifed = false;
        }
        
        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
        }
        
        function removeParty(party) {
            vm.parties.$remove(party);
        }
        
        function sendTextMessage(party) {
            var newTextMessage = {
                phoneNumber: party.phone,
                size: party.size,
                name: party.name
            };
            fireTextMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party);
        }
    }
    
})();