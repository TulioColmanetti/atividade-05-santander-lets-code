import { animals } from "../data/animals.js";

export default class DataHandler {
  constructor() {}
  get data() {
    return animals;
  }
}
