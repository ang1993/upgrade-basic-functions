'use strict';

// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
// Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  function repeatCounter(array) {
    let count = [];
    for (const word of array) {
      if (count[word]){
        count[word]++
      } else {
        count[word] = 1
      }
    }
    return count;
  }

console.log(repeatCounter(counterWords));