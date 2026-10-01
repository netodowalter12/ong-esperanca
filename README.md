# ONG Esperança

Site desenvolvido para a ONG Esperança como parte das atividades acadêmicas de desenvolvimento web.

O projeto apresenta informações sobre a organização, seus projetos sociais e disponibiliza um formulário para cadastro de voluntários.

## 🌐 Site publicado

https://netodowalter12.github.io/ong-esperanca/

## 📋 Funcionalidades

- Página inicial da ONG;
- Navegação entre as seções do site;
- Apresentação de projetos sociais;
- Formulário de cadastro de voluntários;
- Validação dos campos do formulário;
- Armazenamento dos dados utilizando `localStorage`;
- Mensagens de confirmação utilizando SweetAlert2;
- Layout desenvolvido com HTML e CSS;
- Manipulação da interface utilizando JavaScript.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages
- SweetAlert2

## 📁 Estrutura do projeto

```text
ong-esperanca/
├── css/
│   └── style.css
├── img/
│   ├── imagens dos projetos
│   └── outras imagens utilizadas no projeto
├── js/
│   ├── app.js
│   ├── form.js
│   ├── storage.js
│   └── templates.js
├── index.html
├── cadastro.html
├── projetos.html
└── README.md
```

## ▶️ Como executar o projeto

### Execução local

1. Baixe ou clone este repositório.
2. Abra a pasta `ong-esperanca` no Visual Studio Code.
3. Abra o arquivo `index.html`.
4. Para uma melhor experiência, utilize uma extensão como o Live Server para executar o projeto no navegador.

### Execução online

O projeto também está disponível no GitHub Pages:

https://netodowalter12.github.io/ong-esperanca/

## 💾 Armazenamento de dados

Os dados preenchidos no formulário de cadastro são armazenados no navegador utilizando a API `localStorage`.

Isso permite que os dados permaneçam disponíveis mesmo após atualizar a página.

## ♿ Acessibilidade

Foram realizadas melhorias relacionadas à acessibilidade e à estrutura semântica do projeto.

Entre os cuidados adotados estão:

- utilização de HTML semântico;
- hierarquia adequada de títulos;
- textos alternativos (`alt`) nas imagens;
- associação entre campos e seus respectivos `label`;
- utilização de validações nativas do HTML;
- testes realizados com ferramentas de validação e auditoria.

O projeto obteve **100 pontos em Accessibility no Lighthouse** durante os testes realizados.

## ⚡ Performance

Foram realizadas melhorias para otimizar o carregamento dos arquivos JavaScript, incluindo o uso do atributo `defer` nos scripts.

Os resultados do Lighthouse podem variar entre diferentes execuções. Nos testes realizados, o projeto apresentou aproximadamente:

- Performance: 69–70
- Accessibility: 100
- Best Practices: 81
- SEO: 90

## 🧪 Testes realizados

Foram realizados testes para verificar o funcionamento do projeto:

- validação do HTML utilizando o W3C Validator;
- auditoria de acessibilidade utilizando Lighthouse;
- teste de navegação entre as páginas;
- teste das imagens dos projetos;
- teste de validação do formulário;
- teste de cadastro de voluntário;
- teste do armazenamento com `localStorage`;
- teste das mensagens utilizando SweetAlert2;
- teste do site publicado no GitHub Pages.

O `index.html` foi validado pelo W3C sem erros ou avisos.

## 🌿 Controle de versão

O projeto utiliza Git e GitHub para controle de versão.

Foi utilizado um fluxo com:

- branch principal `main`;
- branch de desenvolvimento para melhorias de acessibilidade;
- commits organizados;
- Pull Request;
- revisão das alterações;
- merge das alterações na branch `main`.

## 🚀 Deploy

O projeto foi publicado utilizando o GitHub Pages.

URL de produção:

https://netodowalter12.github.io/ong-esperanca/

👨‍💻 Projeto acadêmico

Projeto desenvolvido como atividade acadêmica do curso de Análise e Desenvolvimento de Sistemas.