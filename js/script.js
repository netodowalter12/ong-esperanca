const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");

const formulario = document.getElementById("formCadastro");
const erroCpf = document.getElementById("erroCpf");

const endereco = document.getElementById("endereco");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const mensagemCep = document.getElementById("mensagemCep");


// ==============================
// MÁSCARA DO CPF
// ==============================

cpf.addEventListener("input", function () {

    let valor = cpf.value;

    valor = valor.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;

});


// ==============================
// MÁSCARA DO TELEFONE
// ==============================

telefone.addEventListener("input", function () {

    let valor = telefone.value;

    valor = valor.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    telefone.value = valor;

});


// ==============================
// MÁSCARA DO CEP
// ==============================

cep.addEventListener("input", function () {

    let valor = cep.value;

    valor = valor.replace(/\D/g, "");

    valor = valor.substring(0, 8);

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    cep.value = valor;

});


// ==============================
// VALIDAÇÃO DO CPF
// ==============================

function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {

        soma += Number(cpf.charAt(i)) * (10 - i);

    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf.charAt(9))) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {

        soma += Number(cpf.charAt(i)) * (11 - i);

    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf.charAt(10))) {
        return false;
    }

    return true;

}


// ==============================
// VALIDAÇÃO DO FORMULÁRIO
// ==============================

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();


    // Validação do CPF

    if (!validarCPF(cpf.value)) {

        erroCpf.textContent = "CPF inválido.";

        cpf.classList.remove("campo-correto");

        cpf.classList.add("campo-erro");

        cpf.focus();

        return;

    }


    erroCpf.textContent = "";

    cpf.classList.remove("campo-erro");

    cpf.classList.add("campo-correto");


    // Validação do telefone

    const numerosTelefone = telefone.value.replace(/\D/g, "");

    if (numerosTelefone.length !== 11) {

        alert("Digite um telefone válido.");

        telefone.focus();

        return;

    }


    // Validação do CEP

    const numerosCep = cep.value.replace(/\D/g, "");

    if (numerosCep.length !== 8) {

        alert("Digite um CEP válido.");

        cep.focus();

        return;

    }


    // Se tudo estiver correto

    alert("Cadastro realizado com sucesso!");

});

// ==============================
// CONSULTA DO CEP
// ==============================

cep.addEventListener("blur", function() {

    const numerosCep = cep.value.replace(/\D/g, "");


    // Verifica se o CEP possui 8 números

    if (numerosCep.length !== 8) {

        mensagemCep.textContent = "Digite um CEP válido.";

        return;

    }


    mensagemCep.textContent = "Consultando CEP...";


    fetch(`https://viacep.com.br/ws/${numerosCep}/json/`)

        .then(function(resposta) {

            return resposta.json();

        })

        .then(function(dados) {

            if (dados.erro) {

                mensagemCep.textContent = "CEP não encontrado.";

                endereco.value = "";
                cidade.value = "";
                estado.value = "";

                return;

                

            }
               endereco.value = dados.logradouro;

               cidade.value = dados.localidade;

               estado.value = dados.uf;

               mensagemCep.textContent = "Endereço encontrado!";

            
        })

        .catch(function() {

            mensagemCep.textContent =
                "Não foi possível consultar o CEP.";

        });
             fetch(`https://viacep.com.br/ws/${numerosCep}/json/`)
});