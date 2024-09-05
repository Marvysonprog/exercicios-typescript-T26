function numerosArmstrong(numero: number) {
    let arrayCaracteres: number[] = [];

    let stringDoNumero = numero.toString();
  
    for (let i = 0; i < stringDoNumero.length; i++) {
      let numeroConvertido = parseInt(stringDoNumero[i]);
      arrayCaracteres.push(numeroConvertido);
    }
  
    let quantidadeDeCaracteres = arrayCaracteres.length;
  
    let somaDosvalores = 0;
  
    arrayCaracteres.forEach(function (item) {
      somaDosvalores += item ** quantidadeDeCaracteres;
    });
  
    if (somaDosvalores == numero) {
      return "Este eh um numero de Armstrong!";
    } else {
      return "Este nao eh um numero de Armstrong!";
    }
}
module.exports = numerosArmstrong;