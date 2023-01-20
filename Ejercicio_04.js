"use strict";
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
    let i = 0;
    let sum = 0;
    while (i < array.length){
        sum += array[i++]
    }
    return sum/array.length;
}

console.log('El promedio de mi array es ' + average(numbers));
