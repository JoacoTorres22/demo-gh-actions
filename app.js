// 1. Importamos el módulo 'readline' nativo de Node.js para leer el teclado
const readline = require('readline');

// 2. Importamos nuestras funciones matemáticas desde math.js
const { sum, subtract, multiply, divide } = require('./math.js');

// 3. Configuramos la interfaz para leer la entrada (teclado) y la salida (pantalla)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 4. Creamos una función principal para estructurar nuestra aplicación
function iniciarCalculadora() {
  console.log('\n=== Mi Calculadora Interactiva en Node.js ===\n');

  // Preguntamos por el primer número. La respuesta se guarda en la variable 'input1'
  rl.question('Ingresa el primer número: ', (input1) => {
    
    // Convertimos el texto ingresado a un número decimal usando parseFloat
    const num1 = parseFloat(input1);

    // Preguntamos por el segundo número
    rl.question('Ingresa el segundo número: ', (input2) => {
      const num2 = parseFloat(input2);

      // Preguntamos qué operación desean realizar
      rl.question('Elige una operación (+, -, *, /): ', (operacion) => {
        
        let resultado;

        // Utilizamos un bloque try/catch por si el usuario divide por cero
        try {
          // Evaluamos el símbolo ingresado y llamamos a la función correcta
          if (operacion === '+') {
            resultado = sum(num1, num2);
          } else if (operacion === '-') {
            resultado = subtract(num1, num2);
          } else if (operacion === '*') {
            resultado = multiply(num1, num2);
          } else if (operacion === '/') {
            resultado = divide(num1, num2);
          } else {
            console.log('\nError: Operación no válida. Debe usar +, -, * o /');
            rl.close(); // Cerramos el programa si hay un error
            return;     // Detenemos la ejecución
          }

          // Mostramos el resultado final en la consola
          console.log(`\nEl resultado de ${num1} ${operacion} ${num2} es: ${resultado}\n`);
          
        } catch (error) {
          // Capturamos y mostramos el error de nuestra función 'divide'
          console.log('\nError:', error.message, '\n');
        }

        // 5. Cerramos la interfaz de readline para que el programa pueda finalizar
        rl.close();
      });
    });
  });
}

// 6. Ejecutamos la función para encender la calculadora
iniciarCalculadora();