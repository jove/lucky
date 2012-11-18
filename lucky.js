if (Meteor.isClient) {
  var Router = Backbone.Router.extend({
    routes: {
      "":                 "main", //this will be http://your_domain/
      "m":             "mobile"  // http://your_domain/help
    },

    main: function() {
      console.log("this is main page");
      Session.set("mobileUI", false);
    },

    mobile: function() {
      console.log("this is mobile page");
      Session.set("mobileUI", true);
    }
  });
  var app = new Router;
  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });

  Template.main.mobileUI = function () {
    return Session.get("mobileUI");
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
