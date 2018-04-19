import { wordTest } from './../src/scripts.js';

describe('wordTest', function() {

  it('Should split word', function() {
    let word = "bubble"
    let bla = new wordTest(word);

    bla.splitWord();
    console.log(bla.result);
    expect(bla.result).toEqual(["b"]);

  });
});
