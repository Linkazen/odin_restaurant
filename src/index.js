import { aboutGen } from "./about";
import './style.css';

let aboutbtn = document.querySelector("#about") 
let menubtn = document.querySelector("#menu")
let contactbtn = document.querySelector("#contact")

aboutbtn.addEventListener("click", aboutGen)
// menubtn.addEventListener("click", )
// contactbtn.addEventListener("click", )



aboutGen()

