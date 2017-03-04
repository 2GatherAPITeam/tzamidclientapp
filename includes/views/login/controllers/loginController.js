loginModule.controller('loginController', loginController);

function loginController(loginService, $window) {

    var self = this;

    self.doWhenNameSaid = function(value){
        self.username = value;
        self.login();
    };

    startToListen(self.doWhenNameSaid);

    self.login = function(){
        self.user = loginService.loginUser(self.username);
        if(self.user != "nouser") {
            $window.location.assign("/#!/home");
        }else{
            alert("user doesn't exist in our repository");
        }
    };
}