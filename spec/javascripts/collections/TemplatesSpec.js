describe("Templates", function() {
  var templates, fakeTemplate;

  beforeEach(function() {
    fakeTemplate = "{source: '<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}}'"
    spyOn($, "ajax").andCallFake(function (e) {
      e.success(fakeTemplate)
    });
    templates = new Templates();
  });

  describe("initialize", function() {
    it("should be correctly structured", function() {
      expect(templates).toHaveConstructorName("Templates");
      expect(templates.directory).toEqual("templates");
      expect(templates.length).toEqual(0);
    });
  });

  describe("loadTemplate", function() {
    it("should load one template once and return it", function() {
      var template = templates.loadTemplate("TestTemplate");

      expect($.ajax).toHaveBeenCalled();
      expect(templates.length).toEqual(1);
      $.ajax.reset();
      expect(template.get("source")).toEqual(fakeTemplate);
      expect(template.get("name")).toEqual("TestTemplate");

      templates.loadTemplate("TestTemplate");
      expect($.ajax).not.toHaveBeenCalled();
    })
  });
})