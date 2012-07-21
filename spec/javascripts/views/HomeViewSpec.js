describe("HomeView", function() {
  var view;
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'www/templates';
    var fakeTemplate = readFixtures('HomeViewTemplate.mustache');
    spyOn($, "ajax").andCallFake(function (e) {
      e.success(fakeTemplate)
    });

    view = new HomeView({el: "#jasmine_content"});
  });

  it("initialize", function() {
    expect(view).toHaveConstructorName("HomeView");
  });

  it("renders the correct template", function() {
    view.render();
    console.log($("#jasmine_content").html());
    expect(view.$("div[data-role]").length).toEqual(2);
    expect(view.$("div[data-role]").eq(0).data("role")).toEqual("header");
    expect(view.$("div[data-role]").eq(1).data("role")).toEqual("content");
    expect(view.$("ul[data-role]").length).toEqual(1);
    expect(view.$("ul").data("role")).toEqual("listview");
  })
});