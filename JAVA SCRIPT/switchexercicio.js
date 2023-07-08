let pagamento="Debito";

switch (pagamento){
    case "Debito":
    console.log("Recebe 10% de desconto");
    break;
    case "Dinheiro ou pix":
        console.log("Recebe 15% de desconto");
        break;
        case"2x = preço":
        console.log("Normal sem juros");
        break;
        case "Mais de 2x":
            console.log("Juros de 10%");
            
 default:
console.log("Essa forma de pagamento não esta na lista")
 break;
}
