(function(window) {
  window.onload = function() {
    var chatList = new ChatList();
  };

  function ChatList() {
    this.model = new app.model(this.store);
    this.controller = new app.controller(this.model, this.View);
  }
})(window);
