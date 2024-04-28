let btn = document.querySelector(".btn")
let contain=document.querySelector(".container")
let firstImage=document.querySelector(".first-image")
let secondImage=document.querySelector(".second-image")
let thiedImage=document.querySelector(".third-image")
console.log(secondImage)
btn.onclick=function(){
    if(contain.style.gap==="20px"){
    contain.style.gap="0"
    firstImage.style.gap="0"
    secondImage.style.gap="0"
    thiedImage.style.gap="0"
    }
    else{
        contain.style.gap="20px"
        firstImage.style.gap="20px"
        secondImage.style.gap="20px"
        thiedImage.style.gap="20px"
    }
}
let show = document.querySelector(".show")
let hide = document.querySelector(".hide")
let menu = document.querySelector(".menu")
hide.onclick=function(){
    menu.style.display="block"
}
show.onclick=function(){
    menu.style.display="none"
}
