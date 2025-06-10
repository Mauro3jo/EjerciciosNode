// Importamos el módulo 'readline' de Node.js para leer datos del usuario desde la consola
const readline = require('readline');

// Creamos una interfaz para interactuar con el usuario a través de la consola
const rl = readline.createInterface({
  input: process.stdin, // Entrada estándar (teclado)
  output: process.stdout // Salida estándar (pantalla)
});

// Esta función muestra el menú de opciones al usuario
function mostrarMenu() {
  console.log('\nElige un ejercicio (1-50):');
  // Listamos los ejercicios disponibles
  console.log('1. Sumar dos números');
  console.log('2. Calcular el factorial de un número');
  console.log('3. Verificar si un número es par o impar');
  console.log('4. Encontrar el mayor de tres números');
  console.log('5. Calcular el promedio de un array');
  console.log('6. Revertir una palabra');
  console.log('7. Verificar si una palabra es palíndromo');
  console.log('8. Sumar todos los números pares de un array');
  console.log('9. Eliminar duplicados de un array');
  console.log('10. Contar ocurrencias de un elemento en array');
  console.log('11. Buscar elemento en array');
  console.log('12. Multiplicar dos números');
  console.log('13. Ordenar un array de menor a mayor');
  console.log('14. Obtener la primera letra en mayúscula de una palabra');
  console.log('15. Filtrar solo los números impares de un array');
  console.log('16. Encontrar el elemento más pequeño de un array');
  console.log('17. Calcular la suma de dígitos de un número');
  console.log('18. Invertir un array');
  console.log('19. Encontrar el primer elemento mayor a X en un array');
  console.log('20. Convertir array de números a string separado por comas');
  console.log('21. Encontrar el índice de un elemento en un array');
  console.log('22. Sumar todos los elementos de una matriz 2D');
  console.log('23. Generar un array de N números aleatorios');
  console.log('24. Calcular el producto de todos los elementos en un array');
  console.log('25. Verificar si todos los elementos son mayores a X en un array');
  console.log('26. Contar cuántos elementos son mayores a X en un array');
  console.log('27. Concatenar dos arrays');
  console.log('28. Encontrar el segundo número más grande de un array');
  console.log('29. Elevar cada elemento de un array al cuadrado');
  console.log('30. Reemplazar un elemento por otro en un array');
  console.log('31. Obtener los primeros N elementos de un array');
  console.log('32. Obtener los últimos N elementos de un array');
  console.log('33. Dividir un array en dos partes iguales');
  console.log('34. Generar la tabla de multiplicar de un número');
  console.log('35. Calcular la mediana de un array');
  console.log('36. Calcular la moda de un array');
  console.log('37. Verificar si un array está ordenado ascendentemente');
  console.log('38. Convertir grados Celsius a Fahrenheit');
  console.log('39. Encontrar el elemento más frecuente en un array');
  console.log('40. Encontrar los números primos hasta N');
  console.log('41. Verificar si un número es primo');
  console.log('42. Calcular el máximo común divisor (MCD) de dos números');
  console.log('43. Calcular el mínimo común múltiplo (MCM) de dos números');
  console.log('44. Generar una secuencia de Fibonacci hasta N');
  console.log('45. Sumar los dígitos pares de un número');
  console.log('46. Encontrar el carácter más frecuente en una palabra');
  console.log('47. Repetir una palabra N veces');
  console.log('48. Contar vocales y consonantes en una palabra');
  console.log('49. Reemplazar todas las vocales por * en una palabra');
  console.log('50. Intercambiar el valor de dos variables');
  console.log('0. Salir');
}

// Ejercicio 1: Sumar dos números
function ejercicio1() {
  rl.question('Ingresa el primer número: ', n1 => {
    rl.question('Ingresa el segundo número: ', n2 => {
      // Convertimos ambos valores a número y los sumamos
      console.log(`La suma es: ${Number(n1) + Number(n2)}`);
      ciclo(); // Volvemos al menú
    });
  });
}

// Ejercicio 2: Calcular el factorial de un número
function ejercicio2() {
  rl.question('Ingresa un número: ', n => {
    let num = Number(n); // Convertimos el valor a número
    let f = 1;
    for (let i = 2; i <= num; i++) f *= i; // Multiplicamos desde 2 hasta el número ingresado
    console.log(`El factorial de ${num} es: ${f}`);
    ciclo();
  });
}

// Ejercicio 3: Verificar si un número es par o impar
function ejercicio3() {
  rl.question('Ingresa un número: ', n => {
    // Usamos el operador módulo (%) para saber si es par o impar
    console.log(Number(n) % 2 === 0 ? 'Es par' : 'Es impar');
    ciclo();
  });
}

// Ejercicio 4: Encontrar el mayor de tres números
function ejercicio4() {
  rl.question('Ingresa el primer número: ', n1 => {
    rl.question('Ingresa el segundo número: ', n2 => {
      rl.question('Ingresa el tercer número: ', n3 => {
        // Usamos Math.max para encontrar el mayor de los tres números
        const max = Math.max(Number(n1), Number(n2), Number(n3));
        console.log(`El mayor es: ${max}`);
        ciclo();
      });
    });
  });
}

// Ejercicio 5: Calcular el promedio de un array
function ejercicio5() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    // Convertimos la cadena en un array de números
    const arr = entrada.split(',').map(Number);
    // Sumamos todos y dividimos por la cantidad de elementos
    const promedio = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(`El promedio es: ${promedio}`);
    ciclo();
  });
}

// Ejercicio 6: Revertir una palabra
function ejercicio6() {
  rl.question('Ingresa una palabra: ', palabra => {
    // Separamos la palabra en letras, la invertimos y la unimos de nuevo
    console.log(`Revertida: ${palabra.split('').reverse().join('')}`);
    ciclo();
  });
}

// Ejercicio 7: Verificar si una palabra es palíndromo
function ejercicio7() {
  rl.question('Ingresa una palabra: ', palabra => {
    // Eliminamos caracteres no alfanuméricos y pasamos a minúsculas
    const limpio = palabra.replace(/\W/g, '').toLowerCase();
    // Comparamos la palabra con su reverso
    const esPalindromo = limpio === limpio.split('').reverse().join('');
    console.log(esPalindromo ? 'Es palíndromo' : 'No es palíndromo');
    ciclo();
  });
}

// Ejercicio 8: Sumar todos los números pares de un array
function ejercicio8() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    // Filtramos los pares y los sumamos
    const sumaPares = arr.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
    console.log(`La suma de los pares es: ${sumaPares}`);
    ciclo();
  });
}

// Ejercicio 9: Eliminar duplicados de un array
function ejercicio9() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    // Creamos un Set para eliminar duplicados y luego lo convertimos a array
    const sinDuplicados = [...new Set(arr)];
    console.log(`Array sin duplicados: ${sinDuplicados.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 10: Contar ocurrencias de un elemento en array
function ejercicio10() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    rl.question('¿Qué elemento quieres contar?: ', el => {
      // Filtramos los elementos iguales y contamos su longitud
      const count = arr.filter(x => x === el).length;
      console.log(`El elemento "${el}" aparece ${count} veces`);
      ciclo();
    });
  });
}

// Ejercicio 11: Buscar elemento en array
function ejercicio11() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    rl.question('¿Qué elemento buscas?: ', el => {
      // Verificamos si el elemento está en el array
      const incluye = arr.includes(el);
      console.log(incluye ? 'Sí está en el array' : 'No está en el array');
      ciclo();
    });
  });
}

// Ejercicio 12: Multiplicar dos números
function ejercicio12() {
  rl.question('Ingresa el primer número: ', n1 => {
    rl.question('Ingresa el segundo número: ', n2 => {
      // Multiplicamos ambos números
      console.log(`El producto es: ${Number(n1) * Number(n2)}`);
      ciclo();
    });
  });
}

// Ejercicio 13: Ordenar un array de menor a mayor
function ejercicio13() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    // Convertimos a números y ordenamos
    const arr = entrada.split(',').map(Number).sort((a, b) => a - b);
    console.log(`Ordenado: ${arr.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 14: Obtener la primera letra en mayúscula de una palabra
function ejercicio14() {
  rl.question('Ingresa una palabra: ', palabra => {
    // Capitalizamos la primera letra
    const cap = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    console.log(`Capitalizado: ${cap}`);
    ciclo();
  });
}

// Ejercicio 15: Filtrar solo los números impares de un array
function ejercicio15() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    // Filtramos los impares
    const impares = arr.filter(x => x % 2 !== 0);
    console.log(`Impares: ${impares.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 16: Encontrar el elemento más pequeño de un array
function ejercicio16() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    // Buscamos el menor con Math.min
    const min = Math.min(...arr);
    console.log(`El menor es: ${min}`);
    ciclo();
  });
}

// Ejercicio 17: Calcular la suma de dígitos de un número
function ejercicio17() {
  rl.question('Ingresa un número: ', n => {
    // Separamos los dígitos y los sumamos
    const suma = n.split('').reduce((a, b) => a + Number(b), 0);
    console.log(`La suma de los dígitos es: ${suma}`);
    ciclo();
  });
}
// Ejercicio 18: Invertir un array
function ejercicio18() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    // Separamos los elementos, los invertimos y los mostramos
    const arr = entrada.split(',').reverse();
    console.log(`Invertido: ${arr.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 19: Encontrar el primer elemento mayor a X en un array
function ejercicio19() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    rl.question('¿Mayor a qué número buscas?: ', x => {
      // Buscamos el primer número mayor a X
      const mayor = arr.find(n => n > Number(x));
      console.log(mayor !== undefined ? `El primero mayor a ${x} es ${mayor}` : `No hay mayor a ${x}`);
      ciclo();
    });
  });
}

// Ejercicio 20: Convertir array de números a string separado por comas
function ejercicio20() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    // Convertimos el array a string usando join
    const arr = entrada.split(',').map(Number);
    console.log(`String: ${arr.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 21: Encontrar el índice de un elemento en un array
function ejercicio21() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    rl.question('¿Qué elemento buscas?: ', el => {
      // Obtenemos el índice del elemento
      const idx = arr.indexOf(el);
      console.log(idx !== -1 ? `Índice: ${idx}` : 'Elemento no encontrado');
      ciclo();
    });
  });
}

// Ejercicio 22: Sumar todos los elementos de una matriz 2D
function ejercicio22() {
  rl.question('Ingresa filas de números separadas por punto y coma (;): ', entrada => {
    // Convertimos la entrada en una matriz de números
    const matriz = entrada.split(';').map(fila => fila.split(',').map(Number));
    // Sumamos todos los elementos
    const suma = matriz.flat().reduce((a, b) => a + b, 0);
    console.log(`La suma de todos los elementos es: ${suma}`);
    ciclo();
  });
}

// Ejercicio 23: Generar un array de N números aleatorios
function ejercicio23() {
  rl.question('¿Cuántos números aleatorios quieres?: ', n => {
    rl.question('¿Máximo valor?: ', max => {
      // Generamos un array con N números aleatorios entre 0 y max
      const arr = Array.from({length: Number(n)}, () => Math.floor(Math.random() * (Number(max) + 1)));
      console.log(`Array aleatorio: ${arr.join(', ')}`);
      ciclo();
    });
  });
}

// Ejercicio 24: Calcular el producto de todos los elementos en un array
function ejercicio24() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    // Multiplicamos todos los elementos
    const prod = arr.reduce((a, b) => a * b, 1);
    console.log(`El producto es: ${prod}`);
    ciclo();
  });
}

// Ejercicio 25: Verificar si todos los elementos son mayores a X en un array
function ejercicio25() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    rl.question('¿El valor de X?: ', x => {
      // Verificamos si todos los elementos son mayores a X
      const todos = arr.every(n => n > Number(x));
      console.log(todos ? 'Todos son mayores a X' : 'No todos son mayores a X');
      ciclo();
    });
  });
}

// Ejercicio 26: Contar cuántos elementos son mayores a X en un array
function ejercicio26() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    rl.question('¿El valor de X?: ', x => {
      // Contamos los elementos mayores a X
      const cantidad = arr.filter(n => n > Number(x)).length;
      console.log(`Cantidad de elementos mayores a X: ${cantidad}`);
      ciclo();
    });
  });
}

// Ejercicio 27: Concatenar dos arrays
function ejercicio27() {
  rl.question('Ingresa el primer array (elementos separados por comas): ', a1 => {
    rl.question('Ingresa el segundo array (elementos separados por comas): ', a2 => {
      // Concatenamos ambos arrays
      const arr1 = a1.split(',');
      const arr2 = a2.split(',');
      const resultado = arr1.concat(arr2);
      console.log(`Array concatenado: ${resultado.join(', ')}`);
      ciclo();
    });
  });
}

// Ejercicio 28: Encontrar el segundo número más grande de un array
function ejercicio28() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = Array.from(new Set(entrada.split(',').map(Number))); // Quitamos duplicados
    arr.sort((a, b) => b - a); // Ordenamos de mayor a menor
    console.log(arr.length >= 2 ? `El segundo número más grande es: ${arr[1]}` : 'No hay segundo número más grande');
    ciclo();
  });
}

// Ejercicio 29: Elevar cada elemento de un array al cuadrado
function ejercicio29() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    const arr = entrada.split(',').map(Number);
    // Elevamos cada elemento al cuadrado
    const cuadrados = arr.map(x => x * x);
    console.log(`Array al cuadrado: ${cuadrados.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 30: Reemplazar un elemento por otro en un array
function ejercicio30() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    rl.question('¿Qué elemento quieres reemplazar?: ', viejo => {
      rl.question('¿Por cuál elemento?: ', nuevo => {
        // Reemplazamos todas las ocurrencias
        const resultado = arr.map(x => x === viejo ? nuevo : x);
        console.log(`Array resultante: ${resultado.join(', ')}`);
        ciclo();
      });
    });
  });
}

// Ejercicio 31: Obtener los primeros N elementos de un array
function ejercicio31() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    rl.question('¿Cuántos elementos quieres?: ', n => {
      // Obtenemos los primeros N elementos
      const primeros = arr.slice(0, Number(n));
      console.log(`Primeros ${n} elementos: ${primeros.join(', ')}`);
      ciclo();
    });
  });
}

// Ejercicio 32: Obtener los últimos N elementos de un array
function ejercicio32() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    rl.question('¿Cuántos elementos quieres?: ', n => {
      // Obtenemos los últimos N elementos
      const ultimos = arr.slice(-Number(n));
      console.log(`Últimos ${n} elementos: ${ultimos.join(', ')}`);
      ciclo();
    });
  });
}

// Ejercicio 33: Dividir un array en dos partes iguales
function ejercicio33() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    const arr = entrada.split(',');
    const mitad = Math.ceil(arr.length / 2);
    // Dividimos el array en dos partes
    const parte1 = arr.slice(0, mitad);
    const parte2 = arr.slice(mitad);
    console.log(`Primera parte: ${parte1.join(', ')}`);
    console.log(`Segunda parte: ${parte2.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 34: Generar la tabla de multiplicar de un número
function ejercicio34() {
  rl.question('Ingresa el número para la tabla de multiplicar: ', n => {
    const num = Number(n);
    // Mostramos la tabla del 1 al 10
    for(let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
    ciclo();
  });
}
// Ejercicio 35: Calcular la mediana de un array
function ejercicio35() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    let arr = entrada.split(',').map(Number).sort((a, b) => a - b);
    let mediana;
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      mediana = (arr[mid - 1] + arr[mid]) / 2;
    } else {
      mediana = arr[mid];
    }
    console.log(`La mediana es: ${mediana}`);
    ciclo();
  });
}

// Ejercicio 36: Calcular la moda de un array
function ejercicio36() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    let arr = entrada.split(',').map(Number);
    let conteo = {};
    arr.forEach(num => conteo[num] = (conteo[num] || 0) + 1);
    let max = Math.max(...Object.values(conteo));
    let modas = Object.keys(conteo).filter(k => conteo[k] === max);
    console.log(`La moda es: ${modas.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 37: Verificar si un array está ordenado ascendentemente
function ejercicio37() {
  rl.question('Ingresa números separados por comas: ', entrada => {
    let arr = entrada.split(',').map(Number);
    let ordenado = arr.every((n, i, a) => !i || a[i - 1] <= n);
    console.log(ordenado ? 'El array está ordenado ascendentemente' : 'El array NO está ordenado ascendentemente');
    ciclo();
  });
}

// Ejercicio 38: Convertir grados Celsius a Fahrenheit
function ejercicio38() {
  rl.question('Ingresa los grados Celsius: ', c => {
    let f = (Number(c) * 9 / 5) + 32;
    console.log(`${c}°C equivalen a ${f}°F`);
    ciclo();
  });
}

// Ejercicio 39: Encontrar el elemento más frecuente en un array
function ejercicio39() {
  rl.question('Ingresa elementos separados por comas: ', entrada => {
    let arr = entrada.split(',');
    let conteo = {};
    arr.forEach(x => conteo[x] = (conteo[x] || 0) + 1);
    let max = Math.max(...Object.values(conteo));
    let frecuentes = Object.keys(conteo).filter(k => conteo[k] === max);
    console.log(`Elemento(s) más frecuente(s): ${frecuentes.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 40: Encontrar los números primos hasta N
function ejercicio40() {
  rl.question('Ingresa el valor de N: ', n => {
    n = Number(n);
    let primos = [];
    for (let i = 2; i <= n; i++) {
      let esPrimo = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) primos.push(i);
    }
    console.log(`Números primos hasta ${n}: ${primos.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 41: Verificar si un número es primo
function ejercicio41() {
  rl.question('Ingresa un número: ', n => {
    n = Number(n);
    if (n < 2) {
      console.log('No es primo');
      ciclo();
      return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        console.log('No es primo');
        ciclo();
        return;
      }
    }
    console.log('Es primo');
    ciclo();
  });
}

// Ejercicio 42: Calcular el máximo común divisor (MCD) de dos números
function ejercicio42() {
  rl.question('Ingresa el primer número: ', n1 => {
    rl.question('Ingresa el segundo número: ', n2 => {
      let a = Number(n1), b = Number(n2);
      while (b !== 0) {
        [a, b] = [b, a % b];
      }
      console.log(`El MCD es: ${a}`);
      ciclo();
    });
  });
}

// Ejercicio 43: Calcular el mínimo común múltiplo (MCM) de dos números
function ejercicio43() {
  rl.question('Ingresa el primer número: ', n1 => {
    rl.question('Ingresa el segundo número: ', n2 => {
      let a = Number(n1), b = Number(n2);
      let origA = a, origB = b;
      while (b !== 0) {
        [a, b] = [b, a % b];
      }
      let mcd = a;
      let mcm = (Number(n1) * Number(n2)) / mcd;
      console.log(`El MCM es: ${mcm}`);
      ciclo();
    });
  });
}

// Ejercicio 44: Generar una secuencia de Fibonacci hasta N
function ejercicio44() {
  rl.question('Ingresa el valor de N: ', n => {
    n = Number(n);
    let fib = [0, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    console.log(`Secuencia de Fibonacci hasta ${n}: ${fib.filter(x=>x<=n).join(', ')}`);
    ciclo();
  });
}

// Ejercicio 45: Sumar los dígitos pares de un número
function ejercicio45() {
  rl.question('Ingresa un número: ', n => {
    const suma = n.split('').filter(d => Number(d) % 2 === 0).reduce((a, b) => a + Number(b), 0);
    console.log(`La suma de los dígitos pares es: ${suma}`);
    ciclo();
  });
}

// Ejercicio 46: Encontrar el carácter más frecuente en una palabra
function ejercicio46() {
  rl.question('Ingresa una palabra: ', palabra => {
    let conteo = {};
    for (let c of palabra) conteo[c] = (conteo[c] || 0) + 1;
    let max = Math.max(...Object.values(conteo));
    let frecuentes = Object.keys(conteo).filter(k => conteo[k] === max);
    console.log(`Carácter(es) más frecuente(s): ${frecuentes.join(', ')}`);
    ciclo();
  });
}

// Ejercicio 47: Repetir una palabra N veces
function ejercicio47() {
  rl.question('Ingresa la palabra: ', palabra => {
    rl.question('¿Cuántas veces?: ', n => {
      console.log(palabra.repeat(Number(n)));
      ciclo();
    });
  });
}

// Ejercicio 48: Contar vocales y consonantes en una palabra
function ejercicio48() {
  rl.question('Ingresa una palabra: ', palabra => {
    let vocales = palabra.match(/[aeiouáéíóúü]/gi) || [];
    let consonantes = palabra.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || [];
    console.log(`Vocales: ${vocales.length}, Consonantes: ${consonantes.length}`);
    ciclo();
  });
}

// Ejercicio 49: Reemplazar todas las vocales por * en una palabra
function ejercicio49() {
  rl.question('Ingresa una palabra: ', palabra => {
    let resultado = palabra.replace(/[aeiouáéíóúü]/gi, '*');
    console.log(`Resultado: ${resultado}`);
    ciclo();
  });
}

// Ejercicio 50: Intercambiar el valor de dos variables
function ejercicio50() {
  rl.question('Ingresa el primer valor: ', a => {
    rl.question('Ingresa el segundo valor: ', b => {
      // Intercambiamos los valores usando una variable temporal
      let temp = a;
      a = b;
      b = temp;
      console.log(`Ahora el primer valor es: ${a} y el segundo valor es: ${b}`);
      ciclo();
    });
  });
}
// Esta función controla el ciclo principal del programa: muestra el menú y ejecuta el ejercicio elegido
function ciclo() {
  mostrarMenu();
  rl.question('Opción: ', opcion => {
    switch (opcion) {
      case '1': ejercicio1(); break;
      case '2': ejercicio2(); break;
      case '3': ejercicio3(); break;
      case '4': ejercicio4(); break;
      case '5': ejercicio5(); break;
      case '6': ejercicio6(); break;
      case '7': ejercicio7(); break;
      case '8': ejercicio8(); break;
      case '9': ejercicio9(); break;
      case '10': ejercicio10(); break;
      case '11': ejercicio11(); break;
      case '12': ejercicio12(); break;
      case '13': ejercicio13(); break;
      case '14': ejercicio14(); break;
      case '15': ejercicio15(); break;
      case '16': ejercicio16(); break;
      case '17': ejercicio17(); break;
      case '18': ejercicio18(); break;
      case '19': ejercicio19(); break;
      case '20': ejercicio20(); break;
      case '21': ejercicio21(); break;
      case '22': ejercicio22(); break;
      case '23': ejercicio23(); break;
      case '24': ejercicio24(); break;
      case '25': ejercicio25(); break;
      case '26': ejercicio26(); break;
      case '27': ejercicio27(); break;
      case '28': ejercicio28(); break;
      case '29': ejercicio29(); break;
      case '30': ejercicio30(); break;
      case '31': ejercicio31(); break;
      case '32': ejercicio32(); break;
      case '33': ejercicio33(); break;
      case '34': ejercicio34(); break;
      case '35': ejercicio35(); break;
      case '36': ejercicio36(); break;
      case '37': ejercicio37(); break;
      case '38': ejercicio38(); break;
      case '39': ejercicio39(); break;
      case '40': ejercicio40(); break;
      case '41': ejercicio41(); break;
      case '42': ejercicio42(); break;
      case '43': ejercicio43(); break;
      case '44': ejercicio44(); break;
      case '45': ejercicio45(); break;
      case '46': ejercicio46(); break;
      case '47': ejercicio47(); break;
      case '48': ejercicio48(); break;
      case '49': ejercicio49(); break;
      case '50': ejercicio50(); break;
      case '0':
        // Salir del programa
        console.log('¡Hasta luego!');
        rl.close();
        break;
      default:
        // Manejar opción inválida
        console.log('Opción inválida.');
        ciclo();
    }
  });
}

// Iniciamos el ciclo principal al ejecutar el programa
ciclo();