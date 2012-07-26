(function ($){
  HomeView = Backbone.View.extend({
    constructorName: "HomeView",
    template: null,

    initialize: function() {
      this.template = window.templateCache.loadTemplate("HomeViewTemplate");
    },

    render: function() {
     if(this.template.get("compiled"))
       $(this.el).html(this.template.get("compiled").render());
     return this;
    }
  });
}(jQuery));