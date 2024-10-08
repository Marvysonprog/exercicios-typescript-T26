const criaObjeto = require('../src/implementacao/5-objeto-data')
describe('Objeto data', () => {
    test('Cria objeto de data a partir de uma string', () => {
        expect(criaObjeto('12/08/2020')).toStrictEqual({ dia: '12', mes: '08', ano: '2020' });
        expect(criaObjeto('08/01/2012')).toStrictEqual({ dia: '08', mes: '01', ano: '2012' });
        expect(criaObjeto('24/03/2000')).toStrictEqual({ dia: '24', mes: '03', ano: '2000' });
    });
})