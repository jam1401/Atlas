describe("Template", function () {
  var template, fakeTemplate;

  beforeEach(function() {
    fakeTemplate = "{source: '<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}}'"
    spyOn($, "ajax").andCallFake(function (e) {
      e.success(fakeTemplate)
    });

    template = new Template({name:'TestTemplate'});
  });

  describe("initialize", function () {
    it("should have the required properties", function () {
      expect(template).toHaveConstructorName("Template");
      expect(template.get("name")).toEqual("TestTemplate");
    });

    it("should load itself", function() {
      expect($.ajax).toHaveBeenCalled();
      expect(template.get("source")).toEqual(fakeTemplate);
    });

    it("should compile itself", function() {
      expect(template.get("source")).toBeTruthy();
      expect(template.get("compiled")).toBeTruthy();
    });
  })
});