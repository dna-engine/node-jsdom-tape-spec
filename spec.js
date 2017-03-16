////////////////////////////////
// dnajs-node-jsdom-tape-spec //
////////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-tape-spec
//    $ npm update
//    $ node spec.js

var html = `
<!doctype html>
<html lang=en>
   <head>
      <meta charset=utf-8>
      <title>Specification Runner</title>
   </head>
   <body>
      <p id=task class=dna-template>~~title~~</p>
   </body>
</html>
`;

var document = require('jsdom').jsdom(html);
var window =   document.defaultView;
var $ =        require('jquery')(window);
var dna =      require('dna.js')(window, $);
var app =      require('./app.js')(window, $, dna);
var spec =     require('tape');
var colorize = require('tap-spec');
spec.createStream().pipe(colorize()).pipe(process.stdout);

////////////////////////////////////////////////////////////////////////////////////////////////////
spec('Utility function dna.array.fromMap()', (assert) => {
   var does = 'converts a map into an array of maps';
   var map = { a: { word: 'Ant' }, b: { word: 'Bat' } };
   var actual = dna.array.fromMap(map, 'letter');
   var expected = [{ word: 'Ant', letter: 'a' }, { word: 'Bat', letter: 'b' }];
   assert.deepEqual(actual, expected, does);
   assert.end();
   });

////////////////////////////////////////////////////////////////////////////////////////////////////
spec('Lunch', (assert) => {
   var does = 'is ording and eating bulgogi';
   app.doLunch();
   var actual = dna.getModel('task');
   var expected = [{ title: 'Order bulgogi' }, { title: 'Eat bulgogi' }];
   assert.deepEqual(actual, expected, does);
   assert.end();
   });
