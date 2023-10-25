//atividade 3

function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
   
  function multiplicacao(a, b) {
    return a * b;
  }
 
  function divisao(a, b) {
    return a / b;
  }
  
  var numero1 = parseFloat(prompt("Digite o primeiro número:"));
  var numero2 = parseFloat(prompt("Digite o segundo número:"));
   
  var resultadoSoma = soma(numero1, numero2);
  var resultadoSubtracao = subtracao(numero1, numero2);
  var resultadoMultiplicacao = multiplicacao(numero1, numero2);
  var resultadoDivisao = divisao(numero1, numero2);
  
  console.log("Resultado da soma:", resultadoSoma);
  console.log("Resultado da subtração:", resultadoSubtracao);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);
  console.log("Resultado da divisão:", resultadoDivisao);