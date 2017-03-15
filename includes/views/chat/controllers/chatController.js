chatModule.controller('chatController', chatController);

function chatController() {

    var self = this;

    self.chat = getChatInstace();
    self.options = {
        height:10,
        width:200,
        id:"#chat-instance"
    };
    self.chat.init(self.options);
}