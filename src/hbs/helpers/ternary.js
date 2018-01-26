'use strict';

module.exports.register = function(Handlebars, options) {
  Handlebars.registerHelper('ternary', function(test, yes, no) {
    return (typeof test === 'function' ? test.call(this) : test) ? yes : no;
  });
};
