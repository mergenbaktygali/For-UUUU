let size = 24
let step = 0

const texts = [

"Нет",
"Ты уверена?",
"Подумай(",
"Может да?",
"Последний шанс",
"Я жду",
"Ну пожалуйста Кося(⁠╥⁠﹏⁠╥⁠) "

]

const photos = [

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg"

]

const yesBtn = document.getElementById("yes")
const noBtn = document.getElementById("no")
const photo = document.getElementById("photo")

noBtn.onclick = () => {

step++

size += 10
yesBtn.style.fontSize = size + "px"

noBtn.innerText = texts[step % texts.length]

photo.src = photos[step % photos.length]

}

yesBtn.onclick = () => {

document.getElementById("buttons").style.display="none"
photo.style.display="none"
document.getElementById("final").style.display="block"

}


const openBtn = document.getElementById("open")
const letterBox = document.getElementById("letterBox")

openBtn.onclick = () => {

document.getElementById("final").style.display="none"
letterBox.style.display="block"

}



