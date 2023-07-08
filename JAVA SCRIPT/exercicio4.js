function calcularimposto(salario){
    let aliquota;
    if( salario >=0 && salario <=1100){
        return aliquota = 0.05;
    
}else if(salario >=1100 && salario <=2500){
    return aliquota = 0.1;
}else{
    return aliquota = 0.15
}}

const valorsalario=2000;
const valorbeneficio=250;
const valordesconto= calcularimposto(valorsalario) * valorsalario;

const salariofinal=valorsalario - valordesconto + valorbeneficio;

console.log (salariofinal)





