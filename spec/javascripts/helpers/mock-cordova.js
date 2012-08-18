jasmine.Cordova = {
  useMock: function(device) {
    window.cordova = cordova;
    window.device = cordova_device;
  },

  reset: function() {
    window.device = undefined;
  },

  deviceIsReady: function() {
    document.dispatchEvent(deviceReady);
  },

  pauseApp: function() {
    if(!device.paused) {
      document.dispatchEvent(pauseApp);
    }
  },

  resumeApp: function() {
    if(device.paused) {
      document.dispatchEvent(resumeApp);
    }
  },

  online: function() {
    if(!device.online) {
      document.dispatchEvent(deviceOnline);
    }
  },

  offline: function() {
    if(device.online) {
      document.dispatchEvent(deviceOffline);
    }
  },

  pressBackButton: function() {
    document.dispatchEvent(backButton);
  },

  pressMenuButton: function() {
    document.dispatchEvent(menuButton);
  },

  pressSearchButton: function() {
    document.dispatchEvent(searchButton);
  }


}

var cordova = {}
var cordova_device = {
  paused: false,
  online: true
}

// Cordova Events
var deviceReady = document.createEvent("Events");
deviceReady.initEvent("deviceready", false, false);
var pauseApp = document.createEvent("Events");
pauseApp.initEvent("pause", false, false);
var resumeApp = document.createEvent("Events");
resumeApp.initEvent("resume", false, false);
var deviceOnline = document.createEvent("Events");
deviceOnline.initEvent("online", false, false);
var deviceOffline = document.createEvent("Events");
deviceOffline.initEvent("offline", false, false);
var backButton = document.createEvent("Events");
backButton.initEvent("backbutton", false, false);
var menuButton = document.createEvent("Events");
menuButton.initEvent("menuButton", false, false);
var searchButton = document.createEvent("Events");
searchButton.initEvent("searchButton", false, false);