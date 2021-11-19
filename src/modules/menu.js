import pizimg from '../images/menuimgs/pizzashot.jpg'
import risotto from '../images/menuimgs/risotto.jpg'
import spaghetti from '../images/menuimgs/spaghet.jpg'
import steak from '../images/menuimgs/steak.jpg'

export function menuGen() {
    let menuMaindiv = document.querySelector("#content")
    let menuMaindivbox = document.createElement("div")
    let menu = document.createElement("div")
    let imgs = [pizimg, risotto, spaghetti, steak]
    let foodheaderdesc = [
        "Authentic Italian Pizza",
        "Risotto", 
        "Spaghetti Bolognese",
        "Steak"
    ]
    let fooddesc = [
        "Our Pizzas are made from the finest ingrediants directly from Italy, we handmake all our dough to make sure it is the best for each customer. Available with a multitude of toppings this dish is something you don't wanna miss out on!",
        "Our Risottos are amazing. Accepted by multiple Italian professionals our rice dish is sure to keep you on the edge of your seat trying to get the next bite!",
        "Our Spaghetti Bolognese are made with the finest sauce in the lands. Healthy and fresh, our sauce will cause you to experience a taste so out of this world, you'll keep coming back again and again!",
        "Our Steaks are cooked by a meat connoisseur able to make any type of cooked meat from rare to well done, this meat melts in your mouth and will make your tastebuds itself melt making you want more!"
    ]

    for (let i = 0; i < imgs.length; i++) {
        let menuitem = document.createElement("div")
        let foodheader = document.createElement("h1")
        foodheader.textContent = foodheaderdesc[i]

        let foodpara = document.createElement("p")
        foodpara.textContent = fooddesc[i]
        foodpara.className = "fooddesc"

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

    menuMaindivbox.appendChild(menu)
    menuMaindiv.appendChild(menuMaindivbox)
}