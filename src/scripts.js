class wordTest {
  constructor(word) {
    this.word = word;
		this.result = [];
  }
  splitWord() {
    this.word.split('');
    for (let i = 0; i < this.word.length -1; i++) {
      if (this.word[i +1] === this.word[i]) {
        this.result.push(this.word[i]);
      }
    }
  }
}

export {wordTest};
