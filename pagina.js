const texto = document.getElementById('meuTexto');
const aviso = document.getElementById('aviso');
const btnCopiar = document.getElementById('copiar');
const btnVoltar = document.getElementById('voltar');

// login.js guarda o código e a mensagem da etapa antes de abrir esta página
const conteudo = sessionStorage.getItem('conteudo_fase');
const mensagem = sessionStorage.getItem('mensagem_fase');

if (conteudo) {
  texto.value = conteudo;
  aviso.textContent = mensagem || '';
  aviso.style.color = '#16a34a';
} else {
  texto.value = 'Volte à página anterior e digite a senha correta.';
  aviso.textContent = 'Nenhum código recebido.';
  aviso.style.color = '#b00020';
}

function feedback(botao, msg) {
  const original = botao.textContent;
  botao.textContent = msg;
  setTimeout(() => { botao.textContent = original; }, 1200);
}

btnCopiar.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(texto.value);
  } catch {
    texto.select();
    document.execCommand('copy');
  }
  feedback(btnCopiar, 'Copiado!');
});

btnVoltar.addEventListener('click', () => {
  window.location.href = 'index.html';
});
