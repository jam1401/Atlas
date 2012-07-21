describe("AppRouter", function() {
  var router;

  beforeEach(function() {
    router = new AppRouter();
    //Backbone.history.start();
  });

  describe("initialize", function() {
    it("should be routed to the first page", function() {
      expect(window.location.hash).toEqual("");
      expect(router).toHaveConstructorName("AppRouter");
    });
  })
});