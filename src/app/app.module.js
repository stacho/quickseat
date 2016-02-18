(function() {
    'use strict';
    
    angular
    .module('app', [
        //Angular deps
        'ngRoute',

        //Third-party modules
        'firebase',
        
        //Custom modules
        'app.auth',
        'app.core',
        'app.landing',
        'app.waitList' 
    ]);
    
 })();