// To Do Application
var window, $, dna;

var app = {
   doLunch: function() {
      dna.clone('task', { title: 'Order bulgogi' });
      dna.clone('task', { title: 'Eat bulgogi' });
      },
   init: function(thisWindow, this$, thisDna) {
      window = thisWindow;
      $ = this$,
      dna = thisDna;
      return app;
      }
   }

module.exports = app.init;  //var app = require('./app.js')(window, $, dna);
