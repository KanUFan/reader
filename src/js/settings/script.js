let boxtext     = document.querySelector('.box__text')
let colorpage   = document.getElementById('colorPage')
let colortext   = document.getElementById('colorText')
let fontfamily  = document.getElementById('fontFamily')
let fontsize    = document.getElementById('fontSize')
let fullwindow  = document.getElementById('fullWindow')
let lineheight  = document.getElementById('lineHeight')
let paddinghor  = document.getElementById('paddingHorizontal')
let paddingver  = document.getElementById('paddingVertical')
let textalign  = document.getElementById('textAlign')
let asdfasdf

function changeColorPage(event) {
  boxtext.style.backgroundColor = event.target.value
}

function changeColorText(event) {
  boxtext.style.color = event.target.value
}

function changeFontFamily(event) {
  boxtext.style.fontFamily = event.target.value
}

function changeFontSize(event) {
  boxtext.style.fontSize = event.target.value + 'px'
}

function toggleFullWindow() {
  if (fullwindow.value === 'no') {
    fullwindow.value = 'yes'
    document.documentElement.requestFullscreen()
  } else {
    fullwindow.value = 'no'
    document.exitFullscreen()
  }
}

function changeLineHeight(event) {
  boxtext.style.lineHeight = event.target.value + 'px'
}

function changePaddingHor(event) {
  let valuepx = event.target.value + 'px'
  boxtext.style.paddingLeft = valuepx
  boxtext.style.paddingRight = valuepx
}

function changePaddingVer(event) {
  let valuepx = event.target.value + 'px'
  boxtext.style.paddingTop = valuepx
  boxtext.style.paddingBottom = valuepx
}

function changeTextalign(event) {
  boxtext.style.textAlign = event.target.value
}

colorpage.addEventListener("input", changeColorPage)
colortext.addEventListener("input", changeColorText)
fontfamily.addEventListener("input", changeFontFamily)
fontsize.addEventListener("input", changeFontSize)
fullwindow.addEventListener("click", toggleFullWindow)
lineheight.addEventListener("input", changeLineHeight)
paddinghor.addEventListener("input", changePaddingHor)
paddingver.addEventListener("input", changePaddingVer)
textalign.addEventListener("input", changeTextalign)



let fixedleft = document.querySelector('.box_fixed_left')
let navtripleleft = document.querySelector('.nav-triple__left')

function toggleFixedLeft() {
  if (navtripleleft.value === 'hide') {
    navtripleleft.value = 'show'
    fixedleft.style.transform = 'translate(400px, 0)'
  } else {
    navtripleleft.value = 'hide'
    fixedleft.style.transform = 'translate(0, 0)'
  }
}

navtripleleft.addEventListener("click", toggleFixedLeft)

let fixedright = document.querySelector('.box_fixed_right')
let navtripleright = document.querySelector('.nav-triple__right')

function toggleFixedRight() {
  if (navtripleright.value === 'hide') {
    navtripleright.value = 'show'
    fixedright.style.transform = 'translate(-400px, 0)'
  } else {
    navtripleright.value = 'hide'
    fixedright.style.transform = 'translate(0, 0)'
  }
}

navtripleright.addEventListener("click", toggleFixedRight)