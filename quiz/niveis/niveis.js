const facil = document.querySelector(".b_facil")
const medio = document.querySelector(".b_medio")
const dificil = document.querySelector(".b_dificil")
let nivel = 0


facil.addEventListener("click", function(){
    localStorage.setItem('nivel', "Fácil")
    nivel = 1
})

medio.addEventListener("mouseover", function(){
    console.log(nivel)
    nivel = 2
})

dificil.addEventListener("mouseover", function(){
    console.log(nivel)
    nivel = 3
})

