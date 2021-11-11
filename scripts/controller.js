export default class Controller {
  constructor(ModelInstance) {
    this.model = ModelInstance;
  }
  randomizeWord() {
    const data = this.model.data;
    return Math.floor(Math.random() * data.length);
  }
  get word() {
    return this.randomizeWord();
  }
}
