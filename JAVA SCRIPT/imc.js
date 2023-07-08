let peso= 56;
let altura= 1.58;

let imc= peso / (altura *altura);

if (imc <= 18.4 ){
    console.log("Essa pessoa é magra");
}else if(imc >=18.5 && imc <= 24.9){
    console.log("Essa pessoa é normal");
}else if(imc>= 25 && imc <= 29.9){
    console.log("Essa pessoa é sobrepeso");
}else if (imc>=30 &&  imc <=34.9) {
    console.log(" Essa pessoa é Obesidade grau 1");
}else if (imc> =35 && imc<= 39.9) {
    console.log("Essa pessoa é obesidade grau 2 ");
}else{
    console.log("Essa pessoa e obesidade grau 3");
}

