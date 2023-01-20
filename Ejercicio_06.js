'use strict';
//**Iteración #6: Valores únicos**

/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. 
Puedes usar este array para probar tu función:*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(array){
    let dobles = [];
    for (let i = 0; i < array.length; i++) {
      if (dobles.includes(array[i])) {
      } else {
        dobles.push(array[i]);
      }
    }
    return dobles;
  }

  console.log(removeDuplicates(duplicates));