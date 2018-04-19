import { DoubleTest } from './../src/scripts.js';
// import {CountSyl} from './../src/countSyl.js';
import { FixTest } from './../src/fixes.js';

describe('Word Splitter', function() {

  it('Should split word', function() {
    let word = "buubble";
    let bla = new DoubleTest(word);

    bla.doubleSplit();
    expect(bla.result).toEqual(["u","b"]);

  });

  it('Should split word by prefix', function() {
    let word = "preview";
    let pre = new FixTest(word);

    pre.preSplit();
    console.log(pre.result);
    // expect(pre.result).toEqual(["pre"]);
  });

  // it('Should count characters in WordTest', function() {
  //
  //   let counter = new CountSyl(long);
  //
  //   counter.letterCount();
  //   console.log(long);
  //
  // });
});
