;(function(ng) {
  'use strict';

  ng.module('address-book')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
