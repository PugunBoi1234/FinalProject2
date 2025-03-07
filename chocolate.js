let chocolatemode = localStorage.getItem('chocolatemode')
const themeSwitch = document.getElementById('theme-switch')

const enableChocolatemode = () => {
    document.body.classList.add('chocolatemode')
    localStorage.setItem('chocolatemode', 'active')
}

const disableChocolatemode = () => {
    document.body.classList.add('chocolatemode')
    localStorage.setItem('chocolatemode', null)
}

if(chocolatemode === "active") enableChocolatemode()

themeSwitch.addEventListener("click", () => {
    chocolatemode = localStorag.getItem('chocolatemode')
    chocolatemode !== "active" ? enableChocolatemode() : disableChocolatemode()
})