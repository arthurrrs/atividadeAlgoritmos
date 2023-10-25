function main() {
    
    let n1 = 10;
    let n2 = 20;
    let n3 = 30;
  
    function somar(n1, n2) {
      return n1 + n2;
    }
  
    function subtrair(n1, n2) {
      return n1 - n2;
    }
  
    function multiplicar(n1, n2) {
      return n1 * n2;
    }
  
    function dividir(n1, n2) {
      return n1 / n2;
    }
  
    console.log("Soma:", somar(n1, n2));
    console.log("Subtração:", subtrair(n1, n2));
    console.log("Multiplicação:", multiplicar(n1, n2));
    console.log("Divisão:", dividir(n1, n2));
  }
  
  main();