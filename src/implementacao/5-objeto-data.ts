function criaObjeto(data: string): Object {
    let dia : string
    let mes : string
    let ano : string 

    dia = data.slice(0,2)
    mes = data.slice(3,5)
    ano = data.slice(6,10)

    let calendario : {dia: string, mes: string, ano: string} = {
        dia: "",
        mes: "",
        ano: ""
    };
    
    calendario.dia = dia;
    calendario.mes = mes;
    calendario.ano = ano;

    return calendario;

}
module.exports = criaObjeto;