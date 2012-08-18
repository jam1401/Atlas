(function ($) {
    AppRouter = Backbone.Router.extend({
    constructorName: "AppRouter",
    routes:{
      "":"home",
      "page1":"page1",
      "page2":"page2"
    },

    initialize:function () {
      // Handle back button throughout the application
      $('.back').live('click', function(event) {
        window.history.back();
        return false;
      });
      this.firstPage = true;
    },

    home:function () {
      this.changePage(new HomeView());
    },

    page1:function () {
      this.changePage(new Page1View());
    },

    page2:function () {
      this.changePage(new Page2View());
    },

    changePage:function (page) {
      $(page.el).attr('data-role', 'page');
      page.render();
      $('body').append($(page.el));
      var transition = $.mobile.defaultPageTransition;
      // We don't want to slide the first page
      if (this.firstPage) {
        transition = 'none';
        this.firstPage = false;
      }
      $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
  });
}(jQuery));