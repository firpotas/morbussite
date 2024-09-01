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