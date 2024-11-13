const helloWorld = require('../helloWorld');

describe('helloWorld function', () => {
    test('returns "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });
});