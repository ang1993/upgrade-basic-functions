'use strict';

// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
// - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
// Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(array, param) {
    let myName = false;
    let position = 'no existe'

    for (let i = 0; i < array.length; i++) {
      if (array[i] === param) {
        myName = true;
        position = [i];
        } 
    }
    return myName + ': ' + param + ' posición: ' + position;
  }

  console.log(finderName(nameFinder, 'Peter'));
  console.log(finderName(nameFinder, 'Andrea'));