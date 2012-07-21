beforeEach(function() {
  this.addMatchers({
    toHaveConstructorName: function(expectedName) {
      var actualName = this.actual.constructorName;
      this.message = function() {
        return "Expected object constructor name to be '" + expectedName + "' but was '" + actualName +"'";
      };
      return actualName == expectedName;
    }
  });
});
