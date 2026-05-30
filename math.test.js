const sum = require('./math.js');
const subtract = require('./math.js');
const multiply = require('./math.js');
const divide = require('./math.js');


test('Sumar 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Restar 5 - 2 es igual a 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('Multiplicar 3 * 4 es igual a 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('Dividir 10 / 2 es igual a 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('Dividir por cero lanza un error', () => {
  expect(() => divide(10, 0)).toThrow('No se puede dividir por cero');
});