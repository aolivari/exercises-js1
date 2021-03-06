
//funcion para hacer todo en mayuscula

function mayus(param) {
    return param.toUpperCase()
}


//funcion para mapear un array en mayusculas
function strin(param){
   return param.map(mayus).sort()
}
 


// function abracaFunction(yourFunc)
//  {
//     console.log(
//     "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
//     );
   
//     const abracaArray = ["James","Elamin","Ismael","Sanyia","Chris","Antigoni",
//     ];
//     const abracaOutput = yourFunc(abracaArray)
//     return abracaOutput;
//     }
    





function abracaFunction(yourFunc) {
    console.log(
    "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");

    const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
    ];
    const abracaOutput = yourFunc(abracaArray);
    return abracaOutput;
    }

    console.log(abracaFunction(strin))
  