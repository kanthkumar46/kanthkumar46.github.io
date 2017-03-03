$(function() {
    $('.nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});

var portfolioApp = angular.module('kanth-app', []);