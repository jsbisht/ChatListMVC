(function(window) {
  var onDoneEvntLtnr;
  var onDeleteEvntLtnr;

  function Controller(model, view) {
    var self = this;
    self.model = model;
    self.views = [];

    var chatWindows = [
      { username: "John", userid: 1 },
      { username: "Jane", userid: 2 },
      { username: "Jack", userid: 3 }
    ];
    chatWindows.forEach(function(chatWindow, index) {
      var currentIndex = index;
      var view = new app.View(chatWindow.username, chatWindow.userid);
      view.onload();
      /**
       * EVENT LISTENERS
       * Event listeners that work with both model and view.
       */
      view.addEventListner("onAdd", function onAdd(event) {
        var message = view.getInputMessage();
        var userid = view.getUserId();
        var username = view.getUserName();
        var currentTime = new Date();
        var timestamp = currentTime.getHours() + " " + currentTime.getMinutes();

        self.model.addChat(message, userid, username, timestamp);

        view.renderChat(message, "You", timestamp);

        self.views.forEach(function(view, index) {
          if (index != currentIndex) {
            view.renderChat(message, username, timestamp);
          }
        });
      });
      self.views.push(view);
    });
  }

  window.app = window.app || {};
  window.app.controller = Controller;
})(window);
