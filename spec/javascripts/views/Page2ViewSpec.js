describe("Page2View", function() {
  var view;
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'www/templates';
    var fakeTemplate = readFixtures('Page2ViewTemplate.mustache');
    spyOn($, "ajax").andCallFake(function (e) {
      e.success(fakeTemplate)
    });

    view = new Page2View({el: "#jasmine_content"});
  });

  it("initialize", function() {
    expect(view).toHaveConstructorName("Page2View");
  });

  it("renders the correct template", function() {
    view.render();

    expect(view.$("div[data-role]").length).toEqual(2);
    expect(view.$("div[data-role]").eq(0).data("role")).toEqual("header");
    expect(view.$("div[data-role]").eq(1).data("role")).toEqual("content");
    expect(view.$("ul[data-role]").length).toEqual(1);
    expect(view.$("ul").data("role")).toEqual("listview");
  })
});