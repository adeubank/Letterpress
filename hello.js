if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  UI.registerHelper('bookTitle', function () {
    return Meteor.settings.public.book.title;
  });

  Template.header.helpers({
    imageSrc: function () {
      return Meteor.settings.public.book.header.imageSrc;
    },
    imageCaption: function () {
      return Meteor.settings.public.book.header.imageCaption;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("What a world!");
  });
}
