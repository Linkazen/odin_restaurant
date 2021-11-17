import { aboutGen } from "./modules/about";
import { menuGen } from "./modules/menu";
import { contactGen } from "./modules/contact";
import './style.css';

let aboutbtn = document.querySelector("#aboutbtn") 
let menubtn = document.querySelector("#menubtn")
let contactbtn = document.querySelector("#contactbtn")

aboutbtn.addEventListener("click", aboutGen)
menubtn.addEventListener("click", menuGen)
contactbtn.addEventListener("click", contactGen)



aboutGen()

