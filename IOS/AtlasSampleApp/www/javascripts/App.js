function onBodyLoad() {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    document.addEventListener("deviceready", onDeviceReady, false);
  } else {
    onDeviceReady();
  }
 // document.addEventListener("deviceready", onDeviceReady, false);
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
 see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
 for more details -jm */
function onDeviceReady() {
  // do your thing!
  //navigator.notification.alert("PhoneGap is working")

  console.log('document ready');
  app = new AppRouter();
  Backbone.history.start();
}

// If you want to prevent dragging, uncomment this section
function preventBehavior(e)
{
  e.preventDefault();
};

document.addEventListener("touchmove", preventBehavior, false);

