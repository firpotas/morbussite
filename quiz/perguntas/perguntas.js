import { data } from "../dadosniveis/data.js";

let quiz = data.quizzes[0]; // Definindo quiz com o primeiro nível
let pontos = 0;
let pergunta = 1;
let resposta = "";
let idInputResposta = "";
let respostaCorretaId = "";

function montarPergunta() {
    const main = document.querySelector("main");
    console.log("Montando pergunta...");

    if (quiz && quiz.questões && quiz.questões.length > 0) {
        const questao = quiz.questões[pergunta - 1]; // Ajustando para o índice correto
        main.innerHTML = 
        ` 
        <section class="pergunta">
            <div class="emcima"> 
                <p1>${pergunta}</p1>
                <h2>${questao.pergunta}</h2>
            </div>
            <section class="alternativas">
                <form action="">
                    ${questao.respostas.map((resposta, index) => `
                        <label for="alternativa_${index}">
                            <input type="radio" id="alternativa_${index}" name="alternativa" value="${resposta}">
                            <div>
                                <span>${String.fromCharCode(65 + index)}</span>
                                ${resposta}
                            </div>
                        </label>
                    `).join('')}
                </form>
                <button>Enviar</button>
            </section>
        </section>`;
    } else {
        console.error("Não há perguntas disponíveis.");
    }
}

function guardarResposta(evento) {
    resposta = evento.target.value;
    idInputResposta = evento.target.id;
    const botaoEnviar = document.querySelector(".alternativas button");
    botaoEnviar.addEventListener("click", validarResposta);
}

function validarResposta() {
    const botaoEnviar = document.querySelector(".alternativas button"); 
    botaoEnviar.innerText = "Próxima";
    botaoEnviar.removeEventListener("click", validarResposta);

    if (pergunta === quiz.questões.length) {
        botaoEnviar.innerText = "Finalizar";
        botaoEnviar.addEventListener("click", finalizar);
    } else {
        botaoEnviar.addEventListener("click", proximaPergunta);
    }

    const questao = quiz.questões[pergunta - 1];
    if (resposta === questao.certa) {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "correta");
        pontos += 1;
    } else {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "errada");
        respostaCorretaId = quiz.questões[pergunta - 1].respostas.findIndex(r => r === questao.certa);
        document.querySelector(`label[for='alternativa_${respostaCorretaId}']`).setAttribute("id", "correta");
    }

    pergunta += 1;
} 

function finalizar() {
    localStorage.setItem("pontos", pontos);
    window.location.href = "../resultado/resultado.html";
}

function proximaPergunta() {
    montarPergunta();
    adicionarEventoInputs();
}

function adicionarEventoInputs() {
    const inputsResposta = document.querySelectorAll(".alternativas input");
    inputsResposta.forEach(input => {
        input.addEventListener("click", guardarResposta);

        if (input.value === quiz.questões[pergunta - 1].certa) {
            respostaCorretaId = input.id;
        }
    });
}

async function iniciar() {
    console.log("Iniciando quiz...");
    montarPergunta();
    adicionarEventoInputs();
}

iniciar();
