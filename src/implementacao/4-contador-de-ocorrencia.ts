function contadorDeOcorrencia(texto: string, busca: string):number {
    
    let arrayTexto : string[] = [];

    for (let i = 0; i < texto.length; i++) {
        arrayTexto.push(texto[i]);
    }

    let contador = 0;

    for (let j = 0; j < arrayTexto.length; j++) {
    
        if (arrayTexto[j] == busca) {
            contador++;
        }
    }
    return contador;

}
module.exports = contadorDeOcorrencia;