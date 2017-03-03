loginModule.controller('loginController', loginController);

function loginController(loginService, $location) {

    var self = this;
    self.login = function(){
        self.user = loginService.loginUser(self.username);

        if(self.user != "nouser") {
            $location.path("/home");
        }else{
            alert("user doesn't exist in our repository");
        }
    };
}