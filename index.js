const buttonChapter1 = document.getElementById("button-chapter1")
const navTitle1 = document.getElementById("nav-title1")
const divider1  = document.getElementById("divider1")
const panel1 = document.querySelector("#target-spirited-away > div.story")

const posterContainer = document.getElementsByClassName("poster-container")
const instaImg = document.querySelectorAll(".logo-insta a img")
const logoInsta = document.getElementsByClassName("logo-insta")
const both = document.querySelectorAll(".logo-insta .insta-mel")

posterContainer[0].addEventListener("mouseover", e =>{
    logoInsta[0].style.display = 'block'
    instaImg[0].style.display = 'block'
    both[0].style.display = "block"
})
posterContainer[1].addEventListener("mouseover", e =>{
    logoInsta[1].style.display = 'block'
    instaImg[1].style.display = 'block'
    both[1].style.display = "block"
})
posterContainer[2].addEventListener("mouseover", e =>{
    logoInsta[2].style.display = 'block'
    instaImg[2].style.display = 'block'
    both[2].style.display = "block"
})
/*posterContainer[1].addEventListener("mouseover", e =>{
    logoInsta.style.display = 'block'
})
posterContainer[2].addEventListener("mouseover", e =>{
    logoInsta.style.display = 'block'
})*/

/*buttonChapter1.addEventListener("mouseover", (event) => {
    navTitle1.style.top = "25%"
    divider1.style.width = "20%"
    divider1.style.height = "3%"
    divider1.style.position = "absolute"
    divider1.style.backgroundColor = "rgba(23,23,23,1)"
    buttonChapter1.addEventListener("mouseleave", (event) => {
        navTitle1.style.top = ""
        divider1.style.backgroundColor = "rgba(23,23,23,0)"
    })
}, false)

buttonChapter1.addEventListener("click", (event) => {
    panel1.style.right = "0"
})*/
