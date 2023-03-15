const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const submenuone = document.querySelector(".submenu");
const submenutwo = document.querySelector(".submenu2")
const arrwodirection1=document.querySelector(".up1")
const arrwodirection2=document.querySelector(".up2")
link1.addEventListener("click", function () {
    submenuone.classList.toggle("show");
    arrwodirection1.classList.toggle("down");
})
link2.addEventListener("click", function () {
    submenutwo.classList.toggle("show")
    arrwodirection2.classList.toggle("down");
})
const menu = document.querySelector(".menu")
const closee = document.querySelector(".close")
const list = document.querySelector(".navlist")
const body=document.querySelector("body")
menu.addEventListener("click", function () {
    list.classList.add("show")
    closee.classList.add("show")
    menu.classList.add("hide")
    body.classList.add("shadow")
})
closee.addEventListener("click", function () {
    list.classList.remove("show")
    closee.classList.remove("show")
    menu.classList.remove("hide")
    body.classList.remove("shadow")
})