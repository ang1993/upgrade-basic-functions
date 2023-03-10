'use strict'

// **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
  let theLongestWord = array[0]; 
  for (let word of array) {   
    if (word.length > theLongestWord.length) {
     theLongestWord = word;
   }
  }
  return theLongestWord;
}

console.log('La palabra más larga es ' + findLongestWord(avengers));
