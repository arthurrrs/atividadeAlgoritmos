const leitor = require("readline-sync")

let a = leitor.questionFloat("Insira um valor")
let b = leitor.questionFloat("Insira outro valor")

function media(a,b) {
    return (a+b)/2
}
let teste = media(a,b)
console.log(teste)