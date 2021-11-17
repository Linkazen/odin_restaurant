import pizimg from '../images/menuimgs/pizzashot.jpg'

export function menuGen() {
    let menuMaindiv = document.querySelector("#content")
    let menuMaindivbox = document.createElement("div")
    let menu = document.createElement("div")
    let imgs = [pizimg]
    let foodheaderdesc = [""]
    let fooddesc = [""]

    for (let i = 0; i < imgs.length; i++) {
        let menuitem = document.createElement("div")
        let foodheader = document.createElement("h1")
        foodheader.textContent = foodheaderdesc[i]

        let foodpara = document.createElement("p")
        foodpara.textContent = fooddesc[i]

        let menuimage = new Image()
        menuimage.src = imgs[i]
        menuimage.className = 'menuphotos'
        menuimage.alt = 'pizzainoven'

        menuitem.className = 'menuitem'

        menuitem.appendChild(menuimage)
        menuitem.appendChild(foodheader)
        menuitem.appendChild(foodpara)

        menu.appendChild(menuitem)
    }
    
    menu.id = 'menu'
    menuMaindivbox.id = 'contentbox'

    menuMaindiv.innerHTML = ''
    console.log(menuMaindiv)
    console.log(menuMaindivbox)

    menuMaindivbox.appendChild(menu)
    menuMaindiv.appendChild(menuMaindivbox)
}