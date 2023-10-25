function calcularSalarioLiquido(salarioBruto) {

  const inss = 0.1;
  const irrf = 0.2;

  const descontoInss = salarioBruto * inss;
  const descontoIrrf = salarioBruto * irrf;

  const salarioLiquido = salarioBruto - descontoInss - descontoIrrf;

  console.log("Salário bruto:", salarioBruto);
  console.log("Desconto INSS:", descontoInss);
  console.log("Desconto IRRF:", descontoIrrf);
  console.log("Salário líquido:", salarioLiquido);

  return salarioLiquido;
}

const salarioBruto = 1000;
const salarioLiquido = calcularSalarioLiquido(salarioBruto);