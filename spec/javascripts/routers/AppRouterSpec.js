describe("AppRouter", function () {
  var router;

  beforeEach(function () {
    var mockRouter = AppRouter.extend({
      changePage:function(page) {}
    });

    router = new mockRouter();
    Backbone.history.start();
  });

  afterEach(function () {
    router.navigate("?");
    Backbone.history.stop();
  });

  describe("initialize", function () {
    it("should be routed to the home page", function () {
      router.navigate("#home"); //, false);
      expect(window.location.hash).toEqual("#home");
      expect(router).toHaveConstructorName("AppRouter");
    });
  });

  describe("navigate", function () {
    it("should be route to the first page", function () {
      router.navigate("#page1"); //, false);
      console.log(window.location.hash);
      expect(window.location.hash).toEqual("#page1");

      router.navigate("#page2"); //, false);
      expect(window.location.hash).toEqual("#page2");
    });
  });


});