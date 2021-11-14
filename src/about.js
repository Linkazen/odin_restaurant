function aboutGen() {
    let maindiv = document.querySelector("#content")
    let pictures1 = document.createElement("div").setAttribute("class", "photocoll")
    let pictures2 = document.createElement("div").setAttribute("id", "photocoll")
    let textbox = document.createElement("div").setAttribute("id", "textbox")
    let img1 = document.createElement("img").setAttribute("src", "./bolognese.jpg")
    let img2 = document.createElement("img").setAttribute("src", "./pizza1.jpg")
    let img3 = document.createElement("img").setAttribute("src", "./steak.jpg")
    let img4 = document.createElement("img").setAttribute("src", "./pasta.jpg")
    let img5 = document.createElement("img").setAttribute("src", "./pizza2.jpg")
    let img6 = document.createElement("img").setAttribute("src", "./meatballs.jpg")

    maindiv.innerHTML = ""

    for (i = 1; i <= 6; i++) {
        img[i].setAttribute("class", "photos")
        if (i < 4) {
            pictures1.appendChild(img[i])
        } else {
            pictures2.appendChild(img[i])
        }
    }

    textbox.appendChild(document.createElement("h1").textContent = "The Ordalini Restaurant")
    textbox.appendChild(document.createElement("p").setAttribute("id", "aboutpara").innerHTML = `The Odin Restaurant is a Restaurant dedicated to letting you and your fmaily have an amazing time in our establishment,
    with our affordable prices and amazing chefs a time at Ordalini Restaurant will be an experience to never forget. <br> <br>
    The Ordalini Restaurant boasts a wide array of food including (but not limited to), Pizza, Steak, Meatballs, Spaghetti bolognase,
    Risotto and many more. <br><br>
    So, what are you waiting for? come on down to The Ordalini Restaurant today!`)

    maindiv.appendChild(pictures1)
    maindiv.appendChild(textbox)
    maindiv.appendChild(pictures2)
}