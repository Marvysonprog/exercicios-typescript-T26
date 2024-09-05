function apuraVotacao(votos: Array<number>): string {

    let candidato1: number = 0;
    let candidato2: number = 0;
    let candidato3: number = 0;

    votos.forEach(function (voto) {
        if (voto == 1) {
            candidato1++;
        } else if (voto == 2) {
            candidato2++;
        } else {
            candidato3++;
        }
    });

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        return "Vencedor: 1"
    } else if (candidato2 > candidato1 && candidato2 > candidato3) {
        return "Vencedor: 2"
    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        return "Vencedor: 3"
    } else {
        return "Empate"
    }
}
module.exports = apuraVotacao;