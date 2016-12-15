// var request = require('request');
// var cheerio = require('cheerio');
// var fs = require('fs');
//
// request("https://www.reddit.com", function(error, response, body) {
//   if(error) {
//     console.log("Error: " + error);
//   }
//   console.log("Status code: " + response.statusCode);
//
//   var $ = cheerio.load(body);
//
//   $('div#siteTable > div.link').each(function( index ) {
//     var title = $(this).find('p.title > a.title').text().trim();
//     var score = $(this).find('div.score.unvoted').text().trim();
//     var user = $(this).find('a.author').text().trim();
//     console.log("Title: " + title);
//     console.log("Score: " + score);
//     console.log("User: " + user);
//     fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
//   });
//
// });

var tabApp = angular.module('demo', []);

tabApp.controller('controller', function($scope) {
    $scope.tab= 1;

    $scope.setTab = function(newTab) {
      $scope.tab = newTab;
    };

  $scope.isSet = function(tabNum) {
    return $scope.tab === tabNum;
  };

});
document.getElementById('button');
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
document.getElementById('button').addEventListener("click", myFuction());
