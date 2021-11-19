import { aboutGen } from "./modules/about";
import { menuGen } from "./modules/menu";
import { contactGen } from "./modules/contact";
import './style.css';

let aboutbtn = document.querySelector("#aboutbtn") 
let menubtn = document.querySelector("#menubtn")
let contactbtn = document.querySelector("#contactbtn")
let content = document.querySelector("#content")
let contentbox = undefined

var myfunc = {
    one: function() {aboutGen()},
    two: function() {menuGen()},
    three: function() {contactGen()}
}

function delayedfunc(num) {
    switch (num) {
        case 1:
            myfunc.one()
            break;
        case 2:
            myfunc.two()
            contentbox = document.querySelector("#contentbox")
            contentbox.addEventListener("animationend", function() {
                contentbox.style.overflow = "auto"
            })
            break;
        case 3:
            myfunc.three()
            break;
    }
    contentbox = document.querySelector("#contentbox")
    contentbox.style.animation = "moveup 0.8s"
}

aboutbtn.addEventListener("click", function() {
    contentbox = document.querySelector("#contentbox")
    content.style.overflow = "hidden"
    contentbox.addEventListener("animationend", function() {
        delayedfunc(1)
    })
    contentbox.style.animation = "movedown 0.8s"
})

menubtn.addEventListener("click", function() {
    contentbox = document.querySelector("#contentbox")
    contentbox.addEventListener("animationend", function() {
        delayedfunc(2)
    })
    contentbox.style.animation = "movedown 0.8s"
})

contactbtn.addEventListener("click", function() {
    contentbox = document.querySelector("#contentbox")
    contentbox.addEventListener("animationend", function() {
        delayedfunc(3)
    })
    contentbox.style.animation = "movedown 0.8s"
})

myfunc.one()