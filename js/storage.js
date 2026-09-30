function salvarCadastro(dados) {
    localStorage.setItem("cadastroONG", JSON.stringify(dados));
}

function obterCadastro() {
    const dados = localStorage.getItem("cadastroONG");

    if (dados) {
        return JSON.parse(dados);
    }

    return null;
}