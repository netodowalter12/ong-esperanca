import { obterCadastro, salvarCadastro } from "./storage.js";

function configurarFormulario() {
    const formulario = document.getElementById("formCadastro");

    if (!formulario) {
        return;
    }

    const cadastroSalvo = obterCadastro();

    if (cadastroSalvo) {
        document.getElementById("nome").value = cadastroSalvo.nome;
        document.getElementById("email").value = cadastroSalvo.email;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem");

        if (nome === "" || email === "") {
            Swal.fire({
    icon: "error",
    title: "Atenção",
    text: "Preencha todos os campos."
});
        }

        const cadastro = {
            nome: nome,
            email: email
        };

        salvarCadastro(cadastro);

       Swal.fire({
    icon: "success",
    title: "Cadastro realizado!",
    text: "Seus dados foram salvos com sucesso."
});
    });
}
export { configurarFormulario };