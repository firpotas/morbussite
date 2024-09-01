import { data } from "../dadosniveis/data.js";
let nivel = localStorage.getItem("nivel")

let quiz = data.quizzes[0];
let pontos = 0;
let pergunta = 1;
let resposta = "";
let idInputResposta = "";
let respostaCorretaId = "";

function montarPergunta() {
    const main = document.querySelector("main");
    if (quiz && quiz.questões && quiz.questões.length < 1000) {
        const questao = quiz.questões[pergunta - 1];
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

    const questao = quiz.questões[pergunta - 1];
    const respostaCerta = questao.certa;
    
    if (resposta === respostaCerta) {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "correta");
        pontos += 1;
    } else {
        document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "errada");
        respostaCorretaId = questao.respostas.findIndex(r => r === respostaCerta);
        document.querySelector(`label[for='alternativa_${respostaCorretaId}']`).setAttribute("id", "correta");
    }

    document.querySelectorAll(".alternativas input").forEach(input => {
        input.disabled = true;
    });

    setTimeout(() => {
        botaoEnviar.innerText = pergunta === quiz.questões.length ? "Finalizar" : "Próxima";
        botaoEnviar.removeEventListener("click", validarResposta);
        botaoEnviar.addEventListener("click", pergunta === quiz.questões.length ? finalizar : proximaPergunta);
    }, 1000);
} 

function finalizar() {
    localStorage.setItem("pontos", pontos);
    window.location.href = "../resultado/resultado.html";
}

function proximaPergunta() {
    pergunta += 1;
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
    console.log("iniciando quiz...");
    montarPergunta();
    adicionarEventoInputs();
}

iniciar();
