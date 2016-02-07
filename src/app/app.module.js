(function() {
    'use strict';
    
    angular
    .module('app', [
        //Angular deps
        'ngRoute',

        //Third-party modules
        'firebase',
        
        //Custom modules
        'app.landing',
        'app.waitList',
        'app.auth'
    ]);
    
 })();