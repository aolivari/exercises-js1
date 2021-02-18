

//esta funcion determina la cantidad de gente vacunada por cada 100 introduciendo los siguientes datos, nombre del pais, total de habitantes y total de gente vacunada

function vacuna100(pais,poblacion,vacunados){
let cmil = "en "+pais+" se han vacunado "+(vacunados/poblacion)*100+" por cada cien habitantes"
console.log(cmil);
}

vacuna100("España",46940000,2690457);
vacuna100("Chile",20000000,2375725);


