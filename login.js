const API_IP = "10.99.0.253"; // Coloque o IP da sua máquina
const URL_SUBMETER = `http://${API_IP}:8080/api/enigma/submeter`;
const EQUIPE_ID = "pc1"; // Alterar para pc2, pc3, pc4 em cada computador

const form = document.getElementById('senhas');
const campo = document.getElementById('Senha');
const aviso = document.getElementById('aviso');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const senhaDigitada = campo.value.trim();

  const payload = {
      equipeId: EQUIPE_ID,
      senha: senhaDigitada
  };

  try {
      const resposta = await fetch(URL_SUBMETER, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      });

      const dadosRetorno = await resposta.json();

      if (dadosRetorno.sucesso) {
          // Guardamos o conteúdo devolvido pela API na memória do navegador
          sessionStorage.setItem('conteudo_fase', dadosRetorno.conteudo);
          
          // Redireciona sempre para a MESMA página única
          window.location.href = 'pagina.html';
      } else {
          aviso.textContent = dadosRetorno.mensagem;
          campo.value = '';
          campo.focus();
      }
  } catch (erro) {
      console.error("Erro na API:", erro);
      aviso.textContent = "Erro de conexão com o servidor.";
  }
});

campo.addEventListener('input', () => {
  aviso.textContent = '';
});