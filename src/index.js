import { aboutGen } from "./modules/about";
import { contactGen } from "./modules/contact";
import './style.css';

let aboutbtn = document.querySelector("#about") 
let menubtn = document.querySelector("#menu")
let contactbtn = document.querySelector("#contact")

aboutbtn.addEventListener("click", aboutGen)
// menubtn.addEventListener("click", )
contactbtn.addEventListener("click", contactGen)



aboutGen()

