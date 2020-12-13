////////////////////////////////
// dnajs-node-jsdom-tape-spec //
////////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-tape-spec
//    $ npm test

const html = `
<!doctype html>
<html lang=en>
   <head>
      <meta charset=utf-8>
      <title>Specification Runner</title>
   </head>
   <body>
      <h2 id=task class=dna-template>~~title~~</h2>
   </body>
</html>
`;

const { JSDOM } = require('jsdom');
const window =    new JSDOM(html).window;
const $ =         require('jquery')(window);
const dna =       require('dna.js')(window, $);
const app =       require('./app.js')(window, $, dna);
const spec =      require('tape');
const colorize =  require('tap-spec');
spec.createStream().pipe(colorize()).pipe(process.stdout);

////////////////////////////////////////////////////////////////////////////////////////////////////
spec('Utility function dna.array.fromMap()', (assert) => {
   const does = 'converts a map into an array of maps';
   const map =      { a: { word: 'Ant' }, b: { word: 'Bat' } };
   const actual =   dna.array.fromMap(map, { key: 'letter' });
   const expected = [{ word: 'Ant', letter: 'a' }, { word: 'Bat', letter: 'b' }];
   assert.deepEqual(actual, expected, does);
   assert.end();
   });

////////////////////////////////////////////////////////////////////////////////////////////////////
spec('Lunch', (assert) => {
   const does = 'is ording and eating bulgogi';
   app.doLunch();
   const actual =   dna.getModel('task');
   const expected = [{ title: 'Order bulgogi' }, { title: 'Eat bulgogi' }];
   assert.deepEqual(actual, expected, does);
   assert.end();
   });
