(function ($) {
  initJugs = function(options) {
    window.jugs = new Juggernaut(options);
  }

  jugsDispatcher = (function() {
    var subscribers = {}, jugsCallbacks = {};
    return {
      subscribe: function(token, action, callback) {
        subscribers[token] = subscribers[token] || {};
        subscribers[token][action] = subscribers[token][action] || [];
        subscribers[token][action].push(callback);

        var that = this;
        jugsCallbacks[token] = function(payload) {
          that.processEvent(token, payload);
        };
          window.jugs.subscribe(token, _.bind(jugsCallbacks[token], this));
      },

      processEvent: function(token, payload) {
        payload = JSON.parse(payload);
        _(subscribers[token][payload.action]).each(function(callback) {
          callback(payload.data);
        });
      },

      unsubscribe: function(token) {
        window.jugs.unsubscribe(token);
        subscribers[token] = null;
      },

      __reset:function() {
        //for specs
        subscribers = {};
      }
    }
  });

})(jQuery);