'use strict';

module.exports.register = function(Handlebars, options) {
  Handlebars.registerHelper('new-line', function(text) {
    return new Handlebars.SafeString(
      text.split(' ').map(word => word + '<br />').join('')
    );
  });
};
