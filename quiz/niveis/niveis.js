const botoesAssunto = document.querySelectorAll(".botoes a")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto (evento) {
    const classeBotao = evento.target.className
    const assunto = document.querySelector(`.${classeBotao} span`).innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./perguntas/perguntas.html"
}

const botaoFacil = document.querySelector("b_facil")
const botaoMedio = document.querySelector("b_medio")
const botaoDificl = document.querySelector("b_dificil")

botaoFacil.addEventListener("click", function() {
    localStorage.setItem("nivel", 0);
})

botaoMedio.addEventListener("click", function() {
    localStorage.setItem("nivel", 1);
})

botaoDificl.addEventListener("click", function() {
    localStorage.setItem("nivel", 2);
})