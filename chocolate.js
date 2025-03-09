// We make cookies !!! 🍪🍪🍪🍪🍪🍪
// We also have a theme switcher for the chocolate mode 🍫🍫🍫🍫🍫🍫

let chocolatemode = getCookie('chocolatemode')

let StrawberryMenu = document.getElementById('strawberry-menu')
let ChocolateMenu = document.getElementById('chocolate-menu')
let MainImage = document.getElementById('main-image')

const themeSwitch = document.getElementById('theme-switch')

const enableChocolatemode = () => {
    document.body.classList.add('chocolatemode')
    StrawberryMenu.classList.add('hidden')
    ChocolateMenu.classList.remove('hidden')

    MainImages.forEach((img, index) => {
      img.src = index === 0 ? "./Pictures/Main/CCmain.jpg" : "./Pictures/Main/CCmain2.jpg"
  })

    document.cookie = "chocolatemode=active"
}

const disableChocolatemode = () => {
    document.body.classList.remove('chocolatemode')
    ChocolateMenu.classList.add('hidden')
    StrawberryMenu.classList.remove('hidden')
    
    MainImages.forEach((img, index) => {
      img.src = index === 0 ? "./Pictures/Main/SBmain.jpg" : "./Pictures/Main/SBmain2.jpg"
  })

    document.cookie = "chocolatemode=null"
}

if(chocolatemode === "active") 
    enableChocolatemode() 
else 
    disableChocolatemode()

themeSwitch.addEventListener("click", () => {
    chocolatemode = getCookie('chocolatemode')
    chocolatemode !== "active" ? enableChocolatemode() : disableChocolatemode()
})

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