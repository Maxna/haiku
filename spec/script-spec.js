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

  it('Should count characters in WordTest', function() {

    let counter = new CountSyl(long);

    counter.letterCount();
    console.log(long);

  });
});
