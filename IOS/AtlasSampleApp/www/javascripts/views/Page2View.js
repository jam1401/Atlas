(function ($){
  Page2View = Backbone.View.extend({
    constructorName: "Page2View",
    template: null,

    initialize: function() {
      this.template = window.templateCache.loadTemplate("Page2ViewTemplate");
    },

    render: function() {
      if(this.template.get("compiled"))
        $(this.el).html(this.template.get("compiled").render());
      return this;
    }
  });
}(jQuery));