export default class View {
  constructor(Controller, wordDisplay) {
    this.controller = Controller;
    this.wordDisplay = wordDisplay;
    this.secretWord = [];
  }

  async renderRevealedLetter() {
    const matchedLetters = this.controller.matchedLetters;
    console.log(matchedLetters);
    for (let i = 0; i < matchedLetters.length; i++) {
      this.wordDisplay.innerHTML = `<span id="${i}">${matchedLetters[i]}</span>`;
    }
  }

  captureEnteredLetter(element) {
    element.addEventListener("keyup", (event) => {
      this.controller.checkLetterExists(event.key);
      this.renderRevealedLetter();
    });
  }

  looser() {}

  async renderObfuscatedWord(element, flag = false) {
    const word = await this.controller.getSavedWord();
    for (let i = 0; i < word.length; i++) {
      flag ? (element.innerHTML += `<span id="${i}">_</span>`) : (element.innerHTML += `<span id="${i}">${word[i]}</span>`);
    }
  }
}

// View tem acesso a controller
// Controller tem acesso a model
// Model nao tem acesso a ninguém
// Main arquivo que instancia e passa os MVCs para os outros
