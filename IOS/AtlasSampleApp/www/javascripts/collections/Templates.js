(function ($) {
  Templates = Backbone.Collection.extend({
    model:Template,
    constructorName:"Templates",
    directory:"templates",

    loadTemplate: function(templateName) {
       var templates = this.where({name: templateName});
       if(templates.length == 0) {
         this.add(new Template({directory: this.directory, name: templateName}));
         templates = this.where({name: templateName});
       }
      return templates[0];
    }
  });
  window.templateCache = new Templates();
}(jQuery));