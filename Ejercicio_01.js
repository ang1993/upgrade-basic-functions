'use strict'
//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo){
        return numberOne + ' es el número más alto';
    } else if (numberOne == numberTwo){
        return 'son iguales!';
    } else {
        return numberTwo + ' es el número más alto';
    }
  }

console.log(sum(3,4));
console.log(sum(9,4));
console.log(sum(3,3));