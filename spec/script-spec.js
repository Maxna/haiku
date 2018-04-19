import { wordTest } from './../src/scripts.js';

describe('wordTest', function() {

  it('Should split word', function() {
    let bla = new wordTest('at');
    bla.splitWord();
    expect(bla.result).toEqual(["a", "t"]);
    console.log(bla.result);
  });
});
