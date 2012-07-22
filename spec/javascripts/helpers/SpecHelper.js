beforeEach(function () {
  this.addMatchers({
    toHaveConstructorName:function (expectedName) {
      var actualName = this.actual.constructorName;
      this.message = function () {
        return "Expected object constructor name to be '" + expectedName + "' but was '" + actualName + "'";
      };
      return actualName == expectedName;
    }
  });
  window.location.hash = "";
  initJugs();
  jugsDispatcher.__reset();
  clearAjaxRequests();
  window.templateCache.reset();
});

afterEach(function () {
  window.jugs = null;
});

window.triggerJugs = function (channel, data) {
  if (window.jugs) {
    window.jugs.trigger(channel + ':data', JSON.stringify(data));
  }
};
