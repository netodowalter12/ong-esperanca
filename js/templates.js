function templateInicio() {
    return `
        <h2>Bem-vindo à ONG Esperança</h2>
        <p>Esta é a página inicial da nossa organização.</p>
    `;
}


function templateProjetos() {
    return `
        <section>
            <h2>Nossos Projetos</h2>

            <p>
                Conheça algumas das iniciativas realizadas
                pela ONG Esperança.
            </p>
        </section>

        <section>

            <article>
                <h3>Projeto Alimentar</h3>

                <img
                    src="img/pexels-rdne-6646981.jpg"
                    alt="Voluntários da ONG Esperança distribuindo alimentos para famílias"
                >

                <p>
                    Arrecadação e distribuição de alimentos
                    para famílias em situação de vulnerabilidade.
                </p>

                <p>
                    <strong>Objetivo:</strong>
                    combater a insegurança alimentar.
                </p>
            </article>

            <article>
                <h3>Educação para Todos</h3>

                <img
                    src="img/pexels-lagosfoodbank-9090747.jpg"
                    alt="Voluntários realizando atividades educativas com crianças"
                >

                <p>
                    Oficinas educativas gratuitas para crianças
                    e jovens.
                </p>

                <p>
                    <strong>Objetivo:</strong>
                    ampliar o acesso à educação.
                </p>
            </article>

            <article>
                <h3>Campanha do Agasalho</h3>

                <img
                    src="img/pexels-shkrabaanthony-7345399.jpg"
                    alt="Voluntários com cesta de doações de agasalhos"
                >

                <p>
                    Durante o inverno arrecadamos roupas e
                    cobertores para famílias que precisam.
                </p>

                <p>
                    <strong>Objetivo:</strong>
                    ajudar pessoas durante os períodos de frio.
                </p>
            </article>

            <article>
                <h3>Voluntariado Comunitário</h3>

                <img
                    src="img/pexels-rdne-6646917.jpg"
                    alt="Voluntários atendendo uma pessoa necessitada"
                >

                <p>
                    Reunimos voluntários para realizar ações
                    sociais em diferentes comunidades.
                </p>

                <p>
                    <strong>Objetivo:</strong>
                    fortalecer a participação social.
                </p>
            </article>

        </section>
    `;
}


function templateCadastro() {
    return `
        <h2>Cadastro de Voluntário</h2>

        <form id="formCadastro">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Cadastrar</button>
        </form>

        <div id="mensagem"></div>
    `;
}