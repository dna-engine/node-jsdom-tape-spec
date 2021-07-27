////////////////////////////////
// dnajs-node-jsdom-tape-spec //
////////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-tape-spec
//    $ npm test


import { JSDOM } from 'jsdom';
import jQuery    from 'jquery';
import { dna }   from 'dna.js';
import spec      from 'tape';
import colorize  from 'tap-spec';
import { app }   from '../app.js';

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
const dom = new JSDOM(html);
const $ = jQuery(dom.window);
dna.initGlobal(dom.window, $);
app.init(dom.window, $, dna);
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
