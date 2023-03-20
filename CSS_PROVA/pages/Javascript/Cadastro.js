const modalCadastro = document.getElementById('modal-cadastro');
const inputNome = document.getElementById('input-nome');
const btnCadastro = document.getElementById('btn-cadastro');
const inputEmail = document.getElementById('input-email');
const msgEmail = document.getElementById('msg-email');
const inputCheckbox = document.getElementById('input-termos');
const msgCheckbox = document.getElementById('msg-checkbox');

btnCadastro.addEventListener('click', (event) => {
  event.preventDefault(); 

  if (inputEmail.value === '') {
    msgEmail.classList.remove('is-hidden');
    inputEmail.classList.add('is-danger');
    inputEmail.focus();
    return;
  } else {
    msgEmail.classList.add('is-hidden');
    inputEmail.classList.remove('is-danger');
  }

  if (!inputCheckbox.checked) {
    msgCheckbox.classList.remove('is-hidden');
    inputCheckbox.classList.add('is-danger');
    inputCheckbox.focus();
    return;
  } else {
    msgCheckbox.classList.add('is-hidden');
    inputCheckbox.classList.remove('is-danger');
  }

  let mensagem = 'Cadastro realizado com sucesso!';

  if (inputNome.value !== '') {
    mensagem = `${inputNome.value} cadastrado com sucesso!`;
  }

  modalCadastro.classList.add('is-active');

  const mensagemCadastro = document.getElementById('modal-msg');
  mensagemCadastro.textContent = mensagem;

  setTimeout(() => {
    modalCadastro.classList.remove('is-active');
    mensagemCadastro.textContent = 'Usuário Cadastrado';
  }, 5000);
});

const deleteBtn = document.querySelector('.modal .delete');
deleteBtn.addEventListener('click', () => {
  modalCadastro.classList.remove('is-active');
  mensagemCadastro.textContent = 'Usuário Cadastrado';
});

