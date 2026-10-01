import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

import { configurarFormulario } from "./form.js";

const app = document.getElementById("app");

function mostrarInicio() {
    app.innerHTML = templateInicio();
}

function mostrarProjetos() {
    app.innerHTML = templateProjetos();
}

function mostrarCadastro() {
    app.innerHTML = templateCadastro();
    configurarFormulario();
}


function carregarRota() {
    const rota = window.location.hash;

    if (rota === "#projetos") {
        mostrarProjetos();
    } else if (rota === "#cadastro") {
        mostrarCadastro();
    } else {
        mostrarInicio();
    }
}

carregarRota();

window.addEventListener("hashchange", carregarRota);

const botaoContraste = document.getElementById("alto-contraste");

if (botaoContraste) {
    botaoContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");
    });
}