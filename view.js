(function(window) {
  function View(username, userid) {
    var self = this;
    self.username = username;
    self.userid = userid;
  }

  View.prototype.onload = function() {
    var self = this;
    self.chatWindow = document.querySelector("[userid='" + this.userid + "']");
    self.chatListItems = self.chatWindow.querySelector(".chat-list-items");
    self.chatInputButton = self.chatWindow.querySelector(".chat-input-button");
    self.chatInputMessage = self.chatWindow.querySelector(
      ".chat-input-message"
    );
  };

  View.prototype.addEventListner = function(eventName, callbackFn) {
    var self = this;
    if (eventName === "onAdd") {
      self.chatInputButton.addEventListener("click", callbackFn);
    }
  };

  View.prototype.renderChat = function(message, username, timestamp) {
    var self = this;

    // <div class="chat-list-item"></div>
    var chatListItem = document.createElement("div");
    chatListItem.classList.add("chat-list-item");

    // <div class="username"></div>
    var chatUser = document.createElement("div");
    chatUser.classList.add("username");
    var title = document.createTextNode(username);
    chatUser.appendChild(title);

    // <div class="message-text"></div>
    var chatMessage = document.createElement("div");
    chatMessage.classList.add("message-text");
    var message = document.createTextNode(message);
    chatMessage.appendChild(message);

    // <div class="timestamp"></div>
    var chatTime = document.createElement("div");
    chatTime.classList.add("timestamp");
    var timestamp = document.createTextNode(timestamp);
    chatTime.appendChild(timestamp);

    // Add items to <div class="chat-list-item"></div>
    chatListItem.appendChild(chatUser);
    chatListItem.appendChild(chatMessage);
    chatListItem.appendChild(chatTime);

    self.chatListItems.appendChild(chatListItem);
  };

  /**
   * UTILITY FUNCTIONS
   */
  View.prototype.getInputMessage = function() {
    var self = this;
    var message = self.chatInputMessage.value;

    // clear message
    self.chatInputMessage.value = "";

    return message;
  };

  View.prototype.getUserId = function() {
    var self = this;
    return self.userid;
  };

  View.prototype.getUserName = function() {
    var self = this;
    return self.username;
  };

  window.app = window.app || {};
  window.app.View = View;
})(window);
