import image1 from './bolognese.jpg'
import image2 from './pizza1.jpg'
import image3 from './steak.jpg'
import image4 from './pasta.jpg'
import image5 from './pizza2.jpg'
import image6 from './meatballs.jpg'

export function aboutGen() {
    let maindiv = document.querySelector("#content")
    let pictures1 = document.createElement("div")
    pictures1.setAttribute("class", "photocoll")

    let pictures2 = document.createElement("div")
    pictures2.setAttribute("class", "photocoll")

    let textbox = document.createElement("div")
    textbox.setAttribute("id", "textbox")

    let img = undefined
    let images = [image1, image2, image3, image4, image5, image6]

    maindiv.innerHTML = ""

    for (let i = 0; i < 6; i++) {
        img = new Image();
        img.src = images[i]
        img.className = "photos"
        if (i < 3) {
            pictures1.appendChild(img)
        } else {
            pictures2.appendChild(img)
        }
    }

    let headline = document.createElement("h1")
    headline.textContent = "The Ordalini Restaurant"

    let paragraph = document.createElement("p")
    paragraph.setAttribute("id", "aboutpara")
    paragraph.innerHTML = `The Odin Restaurant is a Restaurant dedicated to letting you and your fmaily have an amazing time in our establishment,
    with our affordable prices and amazing chefs a time at Ordalini Restaurant will be an experience to never forget. <br> <br>
    The Ordalini Restaurant boasts a wide array of food including (but not limited to), Pizza, Steak, Meatballs, Spaghetti bolognase,
    Risotto and many more. <br><br>
    So, what are you waiting for? come on down to The Ordalini Restaurant today!`

    textbox.appendChild(headline)
    textbox.appendChild(paragraph)

    

    maindiv.appendChild(pictures1)
    maindiv.appendChild(textbox)
    maindiv.appendChild(pictures2)
}