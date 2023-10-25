//atividade 2

function somaNumeros(num1, num2) {
  var resultado = num1 + num2;
  return resultado;
}

var resultadoSoma = somaNumeros(5, 3);
console.log(resultadoSoma);

function verificarMaiorIgual(num1, num2) {
  if (num1 >= num2) {
    return true;
  } else {
    return false;
  }
}

var resultadoVerificacao = verificarMaiorIgual(5, 3);
console.log(resultadoVerificacao);

function verificarPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var resultadoVerificacao = verificarPar(6);
console.log(resultadoVerificacao);

function imprimirTamanhoMensagem(mensagem) {
  var tamanho = mensagem.length;
  var mensagemMaiuscula = mensagem.toUpperCase();
  console.log("Tamanho da mensagem:", tamanho);
  console.log("Mensagem em letras maiúsculas:", mensagemMaiuscula);
}

imprimirTamanhoMensagem("Olá, mundo!");