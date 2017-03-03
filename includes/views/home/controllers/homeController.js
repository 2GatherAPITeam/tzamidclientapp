homeModule.controller('homeController', homeController);

function homeController(loginService, $window, $http, $scope) {

    var self = this;
    self.userLogedIn = loginService.userLogedIn;
    self.init = function(){
        if(self.userLogedIn.disabilityTypes.indexOf("BLIND") != -1){
            blindInit();
        }

        if(self.userLogedIn.disabilityTypes.indexOf("DEAF") != -1){
            deafInit();
        }
    };
    self.init();
}