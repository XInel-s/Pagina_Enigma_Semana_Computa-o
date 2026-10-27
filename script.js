document.getElementById('senhas').addEventListener('submit', function(event) {
  event.preventDefault();

  const senhaDigitada = document.getElementById('Senha').value;
  
  // Lista de senhas válidas no seu sistema
  const senhasValidas = ["senha1", "senha2", "senha3"];

  // Verifica se o que foi digitado está na lista
  if (senhasValidas.includes(senhaDigitada)) {
    window.location.href = `${senhaDigitada}.html`;
  } else {
    alert("Codigo errado >:(");
    window.location.href = "index.html";
  }
}); 
