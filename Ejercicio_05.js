"use strict";
// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
// y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let Numbers = 0;
    let Strings = 0;
  
    for (let element of param) {
      if (typeof(element) === 'number') {
        Numbers += element;
      } else if (typeof(element) === 'string'){
        Strings += element.length;
      }
    }  return Numbers + Strings;
  }
  
  console.log(averageWord(mixedElements))

