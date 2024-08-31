const p2 = document.querySelector(".p2")
const corona = document.querySelector(".botao-corona")
const vsr = document.querySelector(".botao-vsr")
const influenza = document.querySelector(".botao-influenza")
const arbo = document.querySelector(".botao-arbovirus")
const herpes = document.querySelector(".botao-herpesvirus")
const entero = document.querySelector(".botao-enterovirus")
const setaVoltar = document.querySelector(".seta-voltar")
const setaVoltar1 = document.querySelector(".seta-voltar1")
const setaVoltar2 = document.querySelector(".seta-voltar2")
const setaVoltar3 = document.querySelector(".seta-voltar3")
const setaVoltar4 = document.querySelector(".seta-voltar4")
const setaVoltar5 = document.querySelector(".seta-voltar5")
const div1 = document.querySelector(".geral-2")
const div8 = document.querySelector(".geral-4")
const div2 = document.querySelector(".aparecerCorona")
const div3 = document.querySelector(".aparecerVSR")
const div4 = document.querySelector(".aparecerPara")
const div5 = document.querySelector(".aparecerArbo")
const div6 = document.querySelector(".aparecerHerpes")
const div7 = document.querySelector(".aparecerEntero")

corona.addEventListener("click", function() {
    div1.style.display = "none"; 
    div2.style.display = "block"; 
});
setaVoltar.addEventListener("click", function() {
    div2.style.display = "none"; 
    div1.style.display = "flex"; 
});
vsr.addEventListener("click", function() {
    div1.style.display = "none"; 
    div3.style.display = "block"; 
});
setaVoltar1.addEventListener("click", function() {
    div3.style.display = "none"; 
    div1.style.display = "flex"; 
});
influenza.addEventListener("click", function() {
    div1.style.display = "none"; 
    div4.style.display = "block"; 
});
setaVoltar2.addEventListener("click", function() {
    div4.style.display = "none"; 
    div1.style.display = "flex"; 
});
arbo.addEventListener("click", function() {
    div8.style.display = "none"; 
    div5.style.display = "block"; 
});
setaVoltar3.addEventListener("click", function() {
    div5.style.display = "none"; 
    div8.style.display = "flex"; 
});
herpes.addEventListener("click", function() {
    div8.style.display = "none"; 
    div6.style.display = "block"; 
});
setaVoltar4.addEventListener("click", function() {
    div6.style.display = "none"; 
    div8.style.display = "flex"; 
});
entero.addEventListener("click", function() {
    div8.style.display = "none"; 
    div7.style.display = "block"; 
});
setaVoltar5.addEventListener("click", function() {
    div7.style.display = "none"; 
    div8.style.display = "flex"; 
});

const corpo = document.querySelector(".corpo-original")
const botaoCorpoCorona = document.querySelector(".corpo-corona")
const botaoCorpoVSR = document.querySelector(".corpo-vsr")
const botaoCorpoShigella = document.querySelector(".corpo-shigella")
const botaoCorpoPara = document.querySelector(".corpo-para")
const botaoCorpoSalmonella = document.querySelector(".corpo-salmonella")
const botaoCorpoColi = document.querySelector(".corpo-coli")
const corpoCoronaImg = document.querySelector(".corpo-coronaImg")
const corpoVsrImg = document.querySelector(".corpo-vsrImg")
const corpoShigellaImg = document.querySelector(".corpo-shigellaImg")
const corpoParaImg = document.querySelector(".corpo-paraImg")
const corpoSalmonellaImg = document.querySelector(".corpo-salmonellaImg")
const corpoColiImg = document.querySelector(".corpo-coliImg")
const p5 = document.querySelector(".p5")

botaoCorpoCorona.addEventListener("click", function() {
    corpoShigellaImg.style.display = "none";
    corpoVsrImg.style.display = "none";
    corpoSalmonellaImg.style.display = "none";
    corpoColiImg.style.display = "none";
    corpoParaImg.style.display = "none";
    corpo.style.display = "none";
    corpoCoronaImg.style.display = "flex";
    verMais.style.display="flex"
})
botaoCorpoCorona.addEventListener("dblclick", function() {
        corpoCoronaImg.style.display = "none";
        corpo.style.display = "flex"
        verMais.style.display="none"
})
botaoCorpoVSR.addEventListener("click", function() {
    corpoShigellaImg.style.display = "none";
    corpoColiImg.style.display = "none";
    corpoParaImg.style.display = "none";
    corpoCoronaImg.style.display = "none";
    corpoSalmonellaImg.style.display = "none";
    corpo.style.display = "none";
    corpoVsrImg.style.display = "flex";
    verMais.style.display="flex"
})
botaoCorpoVSR.addEventListener("dblclick", function() {
    corpoVsrImg.style.display = "none";
    corpo.style.display = "flex"
    verMais.style.display="none"
})
botaoCorpoShigella.addEventListener("click", function() {
    corpoColiImg.style.display = "none";
    corpoCoronaImg.style.display = "none";
    corpoVsrImg.style.display = "none";
    corpoSalmonellaImg.style.display = "none";
    corpoParaImg.style.display = "none";
    corpo.style.display = "none";
    corpoShigellaImg.style.display = "flex";
    verMais.style.display="flex"
})
botaoCorpoShigella.addEventListener("dblclick", function() {
    corpoShigellaImg.style.display = "none";
    corpo.style.display = "flex"
    verMais.style.display="none"
})
botaoCorpoPara.addEventListener("click", function() {
    corpoVsrImg.style.display = "none";
    corpoColiImg.style.display = "none";
    corpoParaImg.style.display = "none";
    corpoSalmonellaImg.style.display = "none";
    corpoCoronaImg.style.display = "none";
    corpoShigellaImg.style.display = "none";
    verMais.style.display="flex"
    corpo.style.display = "none";
    corpoParaImg.style.display = "flex";
})
botaoCorpoPara.addEventListener("dblclick", function() {
    corpoParaImg.style.display = "none";
    corpo.style.display = "flex"
    verMais.style.display="none"
})
botaoCorpoSalmonella.addEventListener("click", function() {
    corpoVsrImg.style.display = "none";
    corpoShigellaImg.style.display = "none";
    corpoColiImg.style.display = "none";
    corpoCoronaImg.style.display = "none";
    corpoParaImg.style.display = "none";
    corpo.style.display = "none";
    corpoSalmonellaImg.style.display = "flex";
    verMais.style.display="flex"
})
botaoCorpoSalmonella.addEventListener("dblclick", function() {
    corpoSalmonellaImg.style.display = "none";
    corpo.style.display = "flex"
    verMais.style.display="none"
})
botaoCorpoColi.addEventListener("click", function() {
    corpoVsrImg.style.display = "none";
    corpoCoronaImg.style.display = "none";
    corpoSalmonellaImg.style.display = "none";
    corpoParaImg.style.display = "none";
    corpoShigellaImg.style.display = "none";
    corpo.style.display = "none";
    corpoColiImg.style.display = "flex";
    verMais.style.display="flex"
})
botaoCorpoColi.addEventListener("dblclick", function() {
    corpoColiImg.style.display = "none";
    corpo.style.display = "flex"
    verMais.style.display="none"
})

const popup = document.querySelector(".popup")
const popup1 = document.querySelector(".popup1")
const popup2 = document.querySelector(".popup2")
const popup3 = document.querySelector(".popup3")
const popup4 = document.querySelector(".popup4")
const popup5 = document.querySelector(".popup5")
const verMais= document.querySelector(".paravermais")

corpoCoronaImg.addEventListener("mouseover", function(event) {
    popup.style.display="block"
    verMais.style.display="none"
})
corpoCoronaImg.addEventListener("mouseout", function(event) {
    popup.style.display="none"
    verMais.style.display="flex"
})
corpoVsrImg.addEventListener("mouseover", function(event) {
    popup1.style.display="block"
    verMais.style.display="none"
})
corpoVsrImg.addEventListener("mouseout", function(event) {
    popup1.style.display="none"
    verMais.style.display="flex"
})
corpoShigellaImg.addEventListener("mouseover", function(event) {
    popup2.style.display="block"
    verMais.style.display="none"
})
corpoShigellaImg.addEventListener("mouseout", function(event) {
    popup2.style.display="none"
    verMais.style.display="flex"
})
corpoParaImg.addEventListener("mouseover", function(event) {
    popup3.style.display="block"
    verMais.style.display="none"
})
corpoParaImg.addEventListener("mouseout", function(event) {
    popup3.style.display="none"
    verMais.style.display="flex"
})
corpoColiImg.addEventListener("mouseover", function(event) {
    popup5.style.display="block"
    verMais.style.display="none"
})
corpoColiImg.addEventListener("mouseout", function(event) {
    popup5.style.display="none"
    verMais.style.display="flex"
})
corpoSalmonellaImg.addEventListener("mouseover", function(event) {
    popup4.style.display="block"
    verMais.style.display="none"
})
corpoSalmonellaImg.addEventListener("mouseout", function(event) {
    popup4.style.display="none"
    verMais.style.display="flex"
})


