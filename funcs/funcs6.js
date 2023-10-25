function main() {
    const nomeUsuario = "João da Silva";
    const sistemaOperacional = "Windows 10";
  
   
    displayAlertMessage(nomeUsuario, sistemaOperacional);
  }
  
  function displayAlertMessage(nomeUsuario, sistemaOperacional) {
    
    const mensagem = `There's a new sign-in request on ${sistemaOperacional} for your Google Account ${nomeUsuario}.`;
  
    alert(mensagem);
  }
  

  main();