var Waterline = require('waterline');
 
// Define your collection (aka model) 
var User = Waterline.Collection.extend({
 
  attributes: {
 
    firstName: {
      type: 'string',
      required: true
    },
 
    lastName: {
      type: 'string',
      required: true
    }
  }
});
