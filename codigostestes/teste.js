const leitor = require( "readline-sync");

let a = true
let b = false
let c = true 

console.log(a && b);
console.log(b && a);
console.log(a && c);
console.log(a && b && c);


console.log(!a || b);
console.log(b || a);
console.log(a || c);
console.log(a || b || c);


let idade = leitor.questionInt("digite sua idade: ;")
let idade