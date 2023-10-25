function main() {
  
    var tempoOntem = parseInt(prompt("Digite o tempo gasto no celular ontem (em minutos):"));
    var tempoHoje = parseInt(prompt("Digite o tempo gasto no celular hoje (em minutos):"));

    var ehMaior = timeSpent(tempoOntem, tempoHoje);
  
    if (ehMaior) {
      console.log("O tempo gasto hoje é maior que ontem");

    } else {
      console.log("O tempo gasto hoje é menor ou igual ao tempo gasto ontem.");
    
    }
  }
  
 
  function timeSpent(tempoOntem, tempoHoje) {
   
    return tempoHoje > tempoOntem;
  } 

main(); 


