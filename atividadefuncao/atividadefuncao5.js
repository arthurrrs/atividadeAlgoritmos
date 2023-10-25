//atividade 5

const calcularHipotenusa = (cateto1, cateto2) => {
    const hipotenusa = Math.sqrt(cateto1 * 2 + cateto2 * 2);
    return hipotenusa;
  };
  
  const resultado = calcularHipotenusa(3, 4);
  console.log("O valor da hipotenusa é:", resultado);