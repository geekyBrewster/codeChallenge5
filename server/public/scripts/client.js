console.log('NGage!');

var myApp = angular.module('myApp', []);

myApp.controller('MessageController', ['$http', function($http){
  var mc = this;
  mc.messages = {};
  mc.newMessage = {};

getMessages();

  // GET messages from the DB
function getMessages(){
  $http.get('/messages')
    .then(function(response){
      console.log('Messages found:', response);
      mc.messages = response.data;
    });
}

  // POST new message to the DB
mc.addMessage = function(){
  console.log("Message to post to DB: ", mc.newMessage);
  $http.post('/messages', mc.newMessage)
    .then(function(response){
      console.log('Message posted to DB');
      getMessages();
    });
};


}]); // end of controller
