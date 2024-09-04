const hello = require('../src/implementacao/1-hello-world');
describe('Hello world', () => {
    test('Diz Hello World', () => {
        expect(hello()).toBe('Hello world');
    });
})