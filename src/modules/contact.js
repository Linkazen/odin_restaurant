import guyimg from '../images/contactimgs/guy.jpg'

export function contactGen() {
    let conMaindiv = document.querySelector("#content")
    let conMaindivbox = document.createElement("div")
    let conTextbox = document.createElement("div")
    let conPara = document.createElement("p")
    let listShell = document.createElement("ul")
    let list1 = document.createElement("li")
    let list2 = document.createElement("li")
    let conGuyimg = new Image()

    conTextbox.className = 'textbox'
    conTextbox.style.backgroundColor = 'white'
    
    conPara.className = 'para'
    conPara.textContent = 'Chrisi Prati is a world renouned chef capable of cooking many esquisite dishes and even winning awards for his amazing meals.'

    list1.textContent = 'chrisipratifakestmanalive@gmail.com'
    list2.textContent = '12345678910'

    listShell.appendChild(list1)
    listShell.appendChild(list2)

    conGuyimg.src = guyimg
    conGuyimg.alt = 'man crossing arms'
    conGuyimg.id = 'guyphoto'

    conTextbox.appendChild(conGuyimg)
    conTextbox.appendChild(conPara)
    conTextbox.appendChild(listShell)

    conMaindivbox.id = 'contentbox'
    conMaindivbox.appendChild(conTextbox)

    conMaindiv.innerHTML = ''
    conMaindiv.appendChild(conMaindivbox)
}