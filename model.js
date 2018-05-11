(function(window) {
  function Chat(message, userid, username, timestamp) {
    this.message = message;
    this.userid = userid;
    this.username = username;
    this.timestamp = timestamp;
  }

  function Model(store) {
    var self = this;
    self.chats = [];
  }

  Model.prototype.addChat = function(message, userid, username) {
    var self = this;
    self.chats.push(new Chat(message, userid, username));
  };

  Model.prototype.getChats = function() {
    return this.chats;
  };

  window.app = window.app || {};
  window.app.model = Model;
})(window);
