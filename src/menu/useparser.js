import {FB2Reader} from './parser.js'
import './stil.css'
import '../common.blocks/tile/__image/book.png'
import '../common.blocks/tile/__image/explorer.png'


document
  .querySelector("#file-input")
  .addEventListener("change", (event) => {FB2Reader.fillLibrary(event)})

// document.addEventListener("DOMContentLoaded", addBookLibrary)
