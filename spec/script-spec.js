import { wordTest } from './../src/scripts.js';

describe('wordTest', function() {

  it('Should split word', function() {
    expect(wordTest).toEqual(["a", "t"]);
  });

//   it('is a meaningful fail', function() {
//     expect(meaningfulFail()).toEqual(1);
//   })
// });
