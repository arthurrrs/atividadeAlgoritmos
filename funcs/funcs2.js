
function main() {
  let nomeItem = "Camiseta";
  let valor = 50;
  let desconto = 10;

  let valorComDesconto = valor - (valor * (desconto / 100));

  console.log("Nome do item: " + nomeItem);
  console.log("Valor original: R$" + valor);
  console.log("Valor com desconto: R$" + valorComDesconto);
}

main();