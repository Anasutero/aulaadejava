function imc (peso, altura) {
    const resultado= peso/ (altura* altura)
    
    if(resultado <=18.4){
        return "A pessoa esta magra"
    }else if(resultado >=18.5 && resultado <= 24.9){
        return "A pessoa esta normal"
    }else if( resultado>= 25 && resultado<= 29.9){
        return "Essa pessoa esta sobrepeso"
    }else if(resultado >= 30  && resultado <=34.9){
        return " Essa pessoa é Obesidade grau 1"
    }else if( resultado >= 35 && resultado <= 39.9){
        return "Essa pessoa é obesidade grau 2 "
    }else{
        return "Essa pessoa tem obesidade grau 3"
    }
