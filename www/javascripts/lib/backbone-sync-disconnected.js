(function() {
  var online = checkConnection();

  function checkConnection() {
    if (window.cordova && window.device) {
      // figure out current connection status then initialize events
      online = navigator.network.connection.type == "none" ? false : true;
      document.addEventListener("online", onDeviceOnline, false);
      document.addEventListener("offline", onDeviceOffline, false);
    } else {
      return true; // non mobile device
    }
  };

  function onDeviceOnline() {
    online = true;
  };

  function onDeviceOffline() {
    online = false;
  };

})(jQuery);