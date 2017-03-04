loginModule.service("loginService", loginService);

function loginService() {

    var self = this;

    self.loginUser = function(username){
        //goes to db and verifies that there is user like the one inserted

        if(username == "שלומי"){
            self.userLogedIn = {
                username: username,
                userType: "ADMIN",
                disabilityTypes: ["BLIND"]
            }
        }else if(username == "a"){
            self.userLogedIn = {
                username: username,
                userType: "TZOFE",
                disabilityTypes: ["DEAF", "BLIND"]
            }
        }else{
            self.userLogedIn = "nouser";
        }
        return self.userLogedIn;
    };

};