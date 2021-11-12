export default class DataHandler {
  constructor() {
    this._word = "";
  }

  async getData() {
    // Asynchronous fetch data from JSON file
    const res = await fetch("./data/animals.json");

    // Parse data to JS object
    const json = await res.json();

    return json.animals.map((animal) => animal.toLowerCase());
  }

  saveWord() {
    const local = JSON.stringify(this.word);
    localStorage.setItem("word", local);
  }

  get word() {
    return this._word;
  }

  set word(newWord) {
    this._word = newWord;
  }
}

// export default class DataHandler {
//   constructor() {}

//   static newWord = "";

//   async getData() {
//     // Asynchronous fetch data from JSON file
//     const res = await fetch("./data/animals.json");

//     // Parse data to JS object
//     const json = await res.json();

//     return json.animals.map((animal) => animal.toLowerCase());
//   }

//   static getNewWord() {
//     const local = JSON.stringify(this.newWord);
//     console.log(local);
//     localStorage.setItem("word", local);
//     return this.newWord;
//   }

//   static setNewWord(word) {
//     this.newWord = word;
//   }
// }
