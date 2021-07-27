////////////////////////////////
// dnajs-node-jsdom-tape-spec //
////////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-tape-spec
//    $ npm test

// Imports
import colorize         from 'tap-spec';
import jQuery           from 'jquery';
import spec             from 'tape';
import { dna }          from 'dna.js';
import { JSDOM }        from 'jsdom';
import { readFileSync } from 'fs';
import { app }          from '../app.js';

// Setup
const html = readFileSync('spec/fixtures/sample.html', 'utf8');
const dom =  new JSDOM(html);
const $ =    jQuery(dom.window);
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
