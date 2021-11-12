export default class Controller {
  constructor(ModelInstance) {
    this.model = ModelInstance;
    this.matchesIndex = {};
    this.enteredLetters = [];
    this.lifes = 6;
    this.hits = 0;
    this.secretWord = [];
  }

  checkValidLetter(letter) {
    if (letter.toLowerCase().match(/^[a-z]{1}$/) && !this.enteredLetters.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  // async checkLetterExists(letter) {
  //   const word = await this.getSavedWord();
  //   if (this.checkValidLetter(letter) && word.includes(letter)) {
  //     for (let i = 0; i < word.length; i++) {
  //       if (word[i] === letter) {
  //         this.matchesIndex = { ...this.matchesIndex, [i]: letter };
  //         this.matchedLetters.push(letter);
  //       }
  //     }
  //     console.log(this.matchesIndex, this.lifes);
  //   } else {
  //     this.lifes--;

  //     console.log(this.matchesIndex, this.lifes);
  //   }
  // }

  // async checkLetterExists(letter) {
  //   const word = await this.getSavedWord();
  //   let correct = false;
  //   let flag = true;
  //   if (this.checkValidLetter(letter)) {
  //     for (let i = 0; i < word.length; i++) {
  //       if (letter === word[i]) {
  //         this.matchesIndex = { ...this.matchesIndex, [i]: letter };
  //         flag ? (correct = true) : (correct = false);
  //       } else {
  //         !correct ? this.lifes-- : null;
  //         this.enteredLetters.includes(letter) ? null : this.enteredLetters.push(letter);
  //       }
  //     }
  //   } else {
  //     console.log("else");
  //   }
  // }

  async randomizeWord() {
    const data = await this.model.getData();
    return data[Math.floor(Math.random() * data.length)];
  }

  get word() {
    return this.randomizeWord();
  }

  getSavedWord() {
    const savedWord = JSON.parse(localStorage.getItem("word"));
    return savedWord;
  }

  async saveNewWord() {
    const word = await this.word;
    this.model.word = word;
    this.model.saveWord(word);
  }

  handleNewGame() {
    const word = this.word;
    this.saveNewWord(word);
  }
}
