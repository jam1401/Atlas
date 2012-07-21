(function ($){
  HomeView = Backbone.View.extend({
    constructorName: "HomeView",
    className: "home-view",
    template: null,

    initialize: function() {
      this.template = window.templateCache.loadTemplate("HomeViewTemplate");
    },

    render: function() {
     $(this.el).html(this.template.get("compiled").render());
     return this;
    }
  });
}(jQuery));