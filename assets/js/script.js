const titulo = document.getElementById("titulo");
const gif = document.getElementById("imagem");
const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");

btnSim.addEventListener("click", () => {
    titulo.textContent = "Parabéns, você ganhou 1000 de Aura";
    gif.src = "../assets/img/yujiaura.gif";
});

btnNao.addEventListener("click", () => {
    titulo.textContent = "Deplorável, você perder 1000 de Aura";
    gif.src = "../assets/img/yujidepre.gif";
});