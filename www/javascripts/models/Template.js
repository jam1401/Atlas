(function ($) {
  Template = Backbone.Model.extend({
    constructorName:"Template",
    directory: "templates",

    initialize:function () {
      var id = Math.floor(Math.random()*1000);
      this.set({ "id": id });
      var name = this.get("name");
      that = this;
      if(name != "") {
        var url = "/" + this.get("directory") + "/" + name + ".mustache";
        $.get(url, function(data) {
          that.set("source", data);
          that.set("compiled", Hogan.compile(data));
        });
      }
      return this;
    }

  });
}(jQuery));