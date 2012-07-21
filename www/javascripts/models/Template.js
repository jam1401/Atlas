(function ($) {
  Template = Backbone.Model.extend({
    constructorName:"Template",
    directory:"templates",

    initialize:function () {
      var id = Math.floor(Math.random() * 1000);
      this.set({ "id":id });
      var name = this.get("name");
      that = this;
      if (name != "") {
        var url = "" + this.get("directory") + "/" + name + ".mustache";
        $.ajax({
          url:url,
          success:function (result) {
            that.set("source", result);
            that.set("compiled", Hogan.compile(result));
          },
          async:false
        });
      }
      return this;
    }

  });
}(jQuery));