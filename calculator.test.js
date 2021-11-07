const calculator = require('./calculator');

test('Somar 2 + 2 e o resultado ser 4', () => {
  expect(calculator.soma(2, 2)).toBe(4);
});

test('Subtrair 10 - 8 e o resultado ser 2', () => {
  expect(calculator.subtracao(10, 8)).toBe(2);
});

test('Multiplicar 4 por 8 e o resultado ser 32', () => {
  expect(calculator.muliplicacao(4, 8)).toBe(32);
});

test('Dividir 10 por 2 e o resultado ser 5', () => {
  expect(calculator.divisao(10, 2)).toBe(5);
});
