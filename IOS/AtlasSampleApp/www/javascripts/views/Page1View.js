(function ($){
  Page1View = Backbone.View.extend({
    constructorName: "Page1View",
    template: null,

    initialize: function() {
      this.template = window.templateCache.loadTemplate("Page1ViewTemplate");
    },

    render: function() {
      if(this.template.get("compiled"))
        $(this.el).html(this.template.get("compiled").render());
      return this;
    }
  });
}(jQuery));