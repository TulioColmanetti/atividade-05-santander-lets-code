import Model from "./model.js";
import Controller from "./controller.js";
import View from "./view.js";

const ModelInstance = new Model();
const ControllerInstance = new Controller(ModelInstance);
const ViewInstance = new View(ControllerInstance);

function run() {
  console.log(ControllerInstance.word);
}

run();
