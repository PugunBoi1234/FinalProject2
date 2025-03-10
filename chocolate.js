let chocolatemode = getCookie('chocolatemode')

let StrawberryMenu = document.getElementById('strawberry-menu')
let ChocolateMenu = document.getElementById('chocolate-menu')
let MainImage = document.getElementsByClassName('main-image')

let themeSwitch = document.getElementById('theme-switch')

const switchMainImages = (theme) => {
  var mainImageDirectory = `Pictures/Main/`
  var chocolateFiles = [
    'CCmain.jpg',
    'CCmain2.jpg',
    'CCmain3.jpg',
    'CCmain4.jpg',
    'CCmain5.jpg',
    'CCmain6.jpg',
  ]
  var strawberryFiles = [
    'SBmain.jpg',
    'SBmain2.jpg',
    'SBmain3.jpg',
    'SBmain4.jpg',
    'SBmain5.jpg',
    'SBmain6.jpg',
  ]
  for (let i = 0; i < MainImage.length; i++) {
    MainImage[i].src = `${mainImageDirectory}${theme === 'chocolate' ? chocolateFiles[i] : strawberryFiles[i]}`
  }
}

const enableChocolatemode = () => {
  document.body.classList.add('chocolatemode')
  StrawberryMenu.classList.add('hidden')
  ChocolateMenu.classList.remove('hidden')

  switchMainImages('chocolate')

  document.cookie = "chocolatemode=active"
}

const disableChocolatemode = () => {
  console.log(document.body.classList)
  if (document.body.classList.contains('chocolatemode'))
    document.body.classList.remove('chocolatemode')
  ChocolateMenu.classList.add('hidden')
  StrawberryMenu.classList.remove('hidden')

  switchMainImages('strawberry')
  document.cookie = "chocolatemode=null"
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

document.addEventListener('DOMContentLoaded', () => {
  StrawberryMenu = document.getElementById('strawberry-menu')
  ChocolateMenu = document.getElementById('chocolate-menu')
  themeSwitch = document.getElementById('theme-switch')
  if(chocolatemode === "active") 
    enableChocolatemode() 
  else 
    disableChocolatemode()

  themeSwitch.addEventListener("click", () => {
      chocolatemode = getCookie('chocolatemode')
      chocolatemode !== "active" ? enableChocolatemode() : disableChocolatemode()
  })
})