import { Meteor } from 'meteor/meteor';
import '../imports/api/collections.js'; // Import collection on both server and client side else
// it will give error.
Meteor.startup(() => {
  // code to run on server at startup
});
