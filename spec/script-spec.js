import { WordTest } from './../src/scripts.js';
import {CountSyl} from './../src/countSyl.js';

describe('WordTest', function() {

  it('Should split word', function() {
    let word = "buubble"
    let bla = new WordTest(word);

    bla.splitWord();
    console.log(bla.result);
    expect(bla.result).toEqual(["u","b"]);

  });

  it('Should split word', function() {
    let word = "bubble"
    let bla = new WordTest(word);

    bla.splitWord();
    console.log(bla.result);
    expect(bla.result).toEqual([1]);

  });
});
