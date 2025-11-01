# Organização Solidária

## Descrição do Projeto
O projeto **Organização Solidária** é uma aplicação web que visa conectar pessoas e comunidades através de projetos sociais, voluntariado e doações. Ele apresenta informações institucionais, detalhes dos projetos e um formulário de cadastro de voluntários, utilizando HTML5, CSS3 e JavaScript.

O projeto inclui:
- Navegação entre páginas sem recarregar a página inteira (SPA simples com JavaScript).
- Modo escuro acessível.
- Estrutura semântica e acessível (conforme WCAG 2.1 Nível AA).
- Validação de formulário com feedback visual.
- Armazenamento de cadastros no `localStorage`.

## Tecnologias Utilizadas
- HTML5
- CSS3 (com variáveis CSS e responsividade)
- JavaScript (ES6+)
- Git/GitHub para versionamento
- LocalStorage para persistência de dados do formulário

## Funcionalidades
1. **Navegação SPA**  
   As páginas `index.html`, `projetos.html` e `cadastro.html` são carregadas dinamicamente sem recarregar toda a página, utilizando `fetch` e manipulação do DOM.

2. **Modo Escuro**  
   Implementação de modo escuro acessível através de um botão, utilizando classe `dark-mode`.

3. **Formulário de Cadastro**  
   - Campos obrigatórios e validação de formatos (CPF, telefone, CEP).  
   - Feedback visual em caso de erro ou sucesso.  
   - Dados salvos no `localStorage`.

4. **Responsividade**  
   Layout totalmente responsivo utilizando CSS Grid e media queries.

5. **Acessibilidade**  
   - Navegação por teclado.  
   - Contraste adequado de cores.  
   - Estrutura semântica (`header`, `main`, `section`, `footer`, `form`, `fieldset`).

## Estrutura do Projeto
