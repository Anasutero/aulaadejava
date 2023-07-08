function soma(x,y) {
    const resultado= x+y ;
    return resultado;
}
console.log (soma(20,40));
console.log (soma(10,80));
console.log (soma(200,50));
console.log (soma(2000,400));

function imc (peso, altura) {
    const resultado= peso/ (altura* altura)
    return resultado;
}
console.log(imc(80,1.80));
console.log(imc(70,1.50));

function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}
saudacao("Marcelo");

function saudacao2() {
    return "Boa noite pessoal"
}
console.log(saudacao2());