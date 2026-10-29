const SENHAS_VALIDAS = ['senha1', 'senha2', 'senha3'];

const form = document.getElementById('senhas');
const campo = document.getElementById('Senha');
const aviso = document.getElementById('aviso');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const senhaDigitada = campo.value.trim();

  if (SENHAS_VALIDAS.includes(senhaDigitada)) {
    window.location.href = `${senhaDigitada}.html`;
  } else {
    aviso.textContent = 'Chave inválida';
    campo.value = '';
    campo.focus();
  }
});

campo.addEventListener('input', () => {
  aviso.textContent = '';
});