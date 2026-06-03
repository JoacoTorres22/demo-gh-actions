

function sum(a, b) {
  return a + b;
}
module.exports.sum = sum;

function subtract(a, b) {
  return a + b;
}
module.exports.subtract = subtract;

function multiply(a, b) {
  return a * b;
}
module.exports.multiply = multiply;

function divide(a, b) {
    if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}
module.exports.divide = divide;

