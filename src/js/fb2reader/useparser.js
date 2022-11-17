import {FB2Reader} from './parser.js'


document
  .querySelector("#file-input")
  .addEventListener("change", (event) => {FB2Reader.fillLibrary(event)})