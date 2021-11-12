import Model from "./model.js";
import Controller from "./controller.js";
import View from "./view.js";

const wordDisplay = document.getElementById("secret-word");
// const letterInput = document.getElementById("entered-leters");
const bodyElement = document.querySelector("body");

const ModelInstance = new Model();
const ControllerInstance = new Controller(ModelInstance);
const ViewInstance = new View(ControllerInstance, wordDisplay);

(function run() {
  ControllerInstance.handleNewGame();
  ViewInstance.renderObfuscatedWord(wordDisplay, true);
  ViewInstance.captureEnteredLetter(bodyElement);
})();
