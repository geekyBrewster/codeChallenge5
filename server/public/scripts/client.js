console.log('NGage!');

var myApp = angular.module('myApp', []);

myApp.controller('MessageController', ['$http', function($http){
  var mc = this;
  mc.messages = {};

getMessages();

  // GET messages from the DB
function getMessages(){
  $http.get('/messages')
    .then(function(response){
      console.log('Messages found.');
    });
}

  // POST new message to the DB

}]);
