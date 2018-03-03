//  WE ARE GOING TO USE THIS TO DISPLAY THE WHEATHER DATA
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
           weatherData: "=",
           convertToTempFunc: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});