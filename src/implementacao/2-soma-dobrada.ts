function somaDobrada(umValor: number, outroValor: number): number {

    if (umValor === outroValor) {
        const soma = umValor + outroValor;
        const dobroDaSoma = soma * 2;
        return dobroDaSoma;
    } else if (umValor < 1 || outroValor < 1) {
        return -1
    }else{
        const soma = umValor + outroValor;
        return soma;
    }
}
module.exports = somaDobrada;