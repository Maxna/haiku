class FixTest {
  constructor(word) {
    this.word = word;
    this.prefix = /\b(pre|re)/;
    this.suffix = ['ing', 'less', 'ism'];
    this.result = this.prefix.test(this.word);
  }
  preSplit() {
      // this.word.split("");
      // for (let i = 0; i < this.word.length; i++) {
      if (this.result === true) {
        // if (this.word.includes(this.prefix)); {
          this.result = "true";
        //  this.result.push('true');
      }
      else {
        this.result = "false";
      }
    }
  // if (word.includes(this.prefix)); {
  //   return this.prefix;
  // }
  }

export {FixTest};
