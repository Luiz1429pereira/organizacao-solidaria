function salvarCadastro(dados) {
  let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  cadastros.push(dados);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));
  console.log('Cadastro salvo:', dados);
}

function listarCadastros() {
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  console.table(cadastros);
}
