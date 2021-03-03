//funcion para hacer todo en mayuscula

function mayus(param) {
    return param.toUpperCase()
}


//funcion para mapear un array en mayusculas
function strin(param){
   return param.map(mayus)
}
 


function abracaFunction(yourFunc)
 {
    console.log(
    "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
   
    const abracaArray = ["James","Elamin","Ismael","Sanyia","Chris","Antigoni",
    ];
    const abracaOutput = yourFunc(abracaArray)
    return abracaOutput;
    }
    
console.log(abracaFunction(strin))




//     Ejercicio C (10 minutos)
// 1. Dada la función de la derecha, pasa una
// función callback como parámetro que
// modifique el arreglo abracaArray tal que:
// ● Transforme a mayúscula todas las letras
// de los elementos del arreglo

//completed
