chatModule.controller('chatController', chatController);

function chatController(loginService, $window, $http, $scope) {

    var self = this;
    self.commands = {
        'yaniv':function(){

        }
    };

    initVoiceCommands(self.commands);
}