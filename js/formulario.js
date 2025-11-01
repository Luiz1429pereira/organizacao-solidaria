document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  const alertaSucesso = form.querySelector('.alerta.sucesso');
  const alertaErro = form.querySelector('.alerta.erro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alertaErro.style.display = 'block';
      alertaSucesso.style.display = 'none';
      return;
    }

    const dados = {
      nome: form.nome.value,
      email: form.email.value,
      cpf: form.cpf.value,
      telefone: form.telefone.value,
      nascimento: form.nascimento.value,
      endereco: form.endereco.value,
      cep: form.cep.value,
      cidade: form.cidade.value,
      estado: form.estado.value
    };

    salvarCadastro(dados);

    alertaSucesso.style.display = 'block';
    alertaErro.style.display = 'none';
    form.reset();
  });
});
