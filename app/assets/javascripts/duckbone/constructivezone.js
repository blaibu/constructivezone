//= require_self
//= require_tree ./models
//= require_tree ./views

// Setup top-level namespaces
window.Constructivezone = {
  Models: {},
  Collections: {},
  Views: {}
};
// Setup the application
Constructivezone.Application = Duckbone.Application.extend({

  initialize: function(options){

  // Create the routes
    this.mapRoutes({});
}
});

// Bootstrap Application on Document Ready
// Creates the application, assigns the container, and starts the history
$(document).ready(function(){
  Constructivezone.app = new Constructivezone.Application();
    Constructivezone.app.setContainer($('section#main_content').get(0));
  Constructivezone.app.configureFlash({ container: $('div#flashes').get(0)});

  Constructivezone.app.bindNavigationBars();
  // If you want to use hash URLs, just disable pushState
  Backbone.history.start({pushState: true});
  $(document).delegate('a[data-navigate]', 'click', function(e){
    Constructivezone.app.navigate($(e.currentTarget).attr('data-navigate'), true);
  });
});

