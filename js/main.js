document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.querySelector('main');

  function aplicarEventosLinks() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const url = link.getAttribute('href');
        if (!url.endsWith('.html')) return;
        e.preventDefault();
        carregarPagina(url);
      });
    });
  }

  function carregarPagina(url) {
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

  window.addEventListener('popstate', () => {
    carregarPagina(location.pathname.split('/').pop() || 'index.html');
  });

  aplicarEventosLinks();

  const btnDark = document.createElement('button');
  btnDark.textContent = "Modo Escuro";
  document.body.prepend(btnDark);

  btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
