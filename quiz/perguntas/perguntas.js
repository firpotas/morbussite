import { perguntas } from "../dadosniveis/dadosniveis.json";
const container = document.querySelector(".container")
let assunto = localStorage.getItem('nivel')
let perguntaValor = 1
let resposta = ""

async function buscarPerguntas() {
    const urlDados = "../dadosniveis/dadosniveis.json";
    const resposta = await fetch(urlDados);
    const dados = await resposta.json();

    dados.questões.forEach(dado => {
        if (dado.title === assunto) {
            quiz = dado;
        }
    });
}


if (nivel = assunto) {
    container.innerHTML = `
    <div class="emcima"> 
                <p1>1</p1>
                <h2>${(quiz.questões[0].pergunta)}
                </h2>
            </div>
            <section class="alternativas">
                <form action="">
                    <label for="alternativa_a">
                        <input type="radio" id="alternativa_a" name="alternativa"
                            value="#">
                        <div>
                            <span>A</span>
                            Causam infecções latentes
                        </div>
                    </label>
                    <label for="alternativa_b">
                        <input type="radio" id="alternativa_b" name="alternativa"
                            value="#">
                        <div>
                            <span>B</span>
                            São transmitidos por água
                        </div>
                    </label>
                    <label for="alternativa_c">
                        <input type="radio" id="alternativa_c" name="alternativa"
                            value="#">
                        <div>
                            <span>C</span>
                            Causam doenças respiratórias
                        </div>
                    </label>
                    <label for="alternativa_d">
                        <input type="radio" id="alternativa_d" name="alternativa"
                            value="#">
                        <div>
                            <span>D</span>
                            São vírus de RNA
                        </div>
                    </label>
                </form>
    `
}
