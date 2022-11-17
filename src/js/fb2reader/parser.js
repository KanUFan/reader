export { FB2Reader }

let FB2Reader = {
  getFileFromInput: function (input) {
    return input.target.files[0]
  },

  getBookFromFile(file) {
    let reader = new FileReader()
    reader.readAsText(file)
    return new Promise((resolve) => {
      reader.onload = function () {
        let text = reader.result
        let parser = new DOMParser()
        let res = parser.parseFromString(text, "text/xml")
        resolve(res)
      }
    })
  },

  addBookToLibrary(coverpage, bookTitle) {
    let divTile = document.createElement("div")
    let divTileImage = document.createElement("div")
    let labelTile = document.createElement("label")
    let img = document.createElement("img")
    let library = document.querySelector("#library")

    img.setAttribute("src", `data:image/jpeg;base64,${coverpage}`)
    img.setAttribute("alt", "Coverpage does not exist")

    labelTile.classList.add("tile__label", "header_size_m")
    labelTile.textContent = bookTitle

    divTileImage.classList.add("tile__image")
    divTileImage.append(img)

    divTile.classList.add("tile", "header_size_m")
    divTile.addEventListener("click", (event) => {
      this.fillDescription(event)
    })
    divTile.setAttribute("id", "0_book")
    divTile.append(divTileImage, labelTile)

    library.prepend(divTile)
  },

  getBookCoverpage(book) {
    let binaryImage = book.getElementsByTagName("binary")["cover.jpg"].innerHTML
    return binaryImage
  },

  getBookTitle(book) {
    return book.querySelector("book-title").textContent
  },

  fillLibrary(event) {
    let file = this.getFileFromInput(event)
    let store = getObjectStore(DB_STORE_NAME, 'readwrite')
    let obj = {name: file.name, size: file.size}
    let request = store.add(obj)
    request.onsuccess = function() {
      console.log('Success');
    }
    request.onerror = function() {
      console.log('error');
    }
    // let book = this.getBookFromFile(file)

    // book.then((result) => {
    //   let coverpage = this.getBookCoverpage(result)
    //   let bookTitle = this.getBookTitle(result)
    //   this.addBookToLibrary(coverpage, bookTitle)
    // })
  },

  fillDescription(event) {
    let file = this.getFileFromInput(event)
    let book = this.getBookFromFile(file)
    const elementHeights = []
    book.then((result) => {
      document.querySelector("#genre").textContent = this.getGenre(result)
    })
  },

  getGenre(book) {
    let genreFile = book.querySelector("book-title").querySelectorAll("genre")
    console.log(genreFile)
  },

  getAuthor(book) {
    let authorFile = titleInfo.querySelectorAll("author")
    let authorSite = document.querySelector("#author")
    authorSite.textContent = ""
    for (let author of authorFile.values()) {
      var text = "string"
      authorSite.textContent += author.textContent
    }
    const body = document
  },

  getAnnotation(book) {
    let annotationFile = titleInfo.querySelector("annotation")
    let annotationSite = document.querySelector("#annotation")
    annotationSite.innerHTML = annotationFile.innerHTML
  },

  getDate(book) {
    let dateFile = titleInfo.querySelector("date")
    let dateSite = document.querySelector("#date")
    dateSite.textContent = dateFile.textContent
  },
}

let db
const DB_NAME = "readerDB"
const DB_VERSION = 1
const DB_STORE_NAME = "library"

function openDB() {
  let req = indexedDB.open(DB_NAME, DB_VERSION)

  req.onsuccess = function () {
    db = req.result
  }

  req.onerror = function (event) {
    console.error("openDB:", event.target.errorCode)
  }

  req.onupgradeneeded = function (event) {
    let store = event.currentTarget.result.createObjectStore(
      DB_STORE_NAME, 
      {keyPath: "name",}
    )
  }
}

function getObjectStore(storeName, mode) {
  let tx = db.transaction(storeName, mode)
  return tx.objectStore(storeName)
}

openDB()