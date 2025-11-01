// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.querySelector('main');

  // Função principal que aplica eventos nos links do menu
  function aplicarEventosLinks() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const url = link.getAttribute('href');

        // Só intercepta se for um .html
        if (!url.endsWith('.html')) return;

        e.preventDefault();
        carregarPagina(url);
      });
    });
  }

  // Função que carrega o conteúdo de outra página sem recarregar o site
  function carregarPagina(url) {
    console.log("Carregando:", url);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar página");
        return res.text();
      })
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const novoMain = doc.querySelector('main');

        if (!novoMain) throw new Error("Tag <main> não encontrada em " + url);

        conteudo.innerHTML = novoMain.innerHTML;
        window.history.pushState({}, '', url);

        // Se for a página de cadastro, carrega os scripts do formulário
        if (url.includes('cadastro')) {
          const scriptForm = document.createElement('script');
          scriptForm.src = 'js/formulario.js';
          document.body.appendChild(scriptForm);

          const scriptStorage = document.createElement('script');
          scriptStorage.src = 'js/storage.js';
          document.body.appendChild(scriptStorage);
        }

        aplicarEventosLinks();
      })
      .catch(err => {
        conteudo.innerHTML = `<p style="color:red;">${err.message}</p>`;
        console.error(err);
      });
  }

  // Reaplica eventos ao mudar o histórico (botões de voltar/avançar)
  window.addEventListener('popstate', () => {
    carregarPagina(location.pathname.split('/').pop() || 'index.html');
  });

  // Ativa os links no primeiro carregamento
  aplicarEventosLinks();
});
