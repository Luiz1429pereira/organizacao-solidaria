// js/formulario.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  const alertaSucesso = document.querySelector('.alerta.sucesso');
  const alertaErro = document.querySelector('.alerta.erro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    alertaSucesso.style.display = 'none';
    alertaErro.style.display = 'none';

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();

    // Validação de consistência
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    const telefoneValido = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone);

    if (!nome || !emailValido || !cpfValido || !telefoneValido) {
      alertaErro.style.display = 'block';
      return;
    }

    const dados = {
      nome,
      email,
      cpf,
      telefone,
      nascimento: form.nascimento.value,
      endereco: form.endereco.value,
      cep: form.cep.value,
      cidade: form.cidade.value,
      estado: form.estado.value
    };

    salvarCadastro(dados);
    alertaSucesso.style.display = 'block';
    form.reset();

    setTimeout(() => {
      alertaSucesso.style.display = 'none';
      alertaErro.style.display = 'none';
    }, 3000);
  });
});
