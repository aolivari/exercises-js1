

//Esta funcion determina la cantidad de gente vacunada por cada 100 introduciendo los siguientes datos, nombre del pais, total de habitantes y total de dosis vacunadas

function vacuna100(pais,poblacion,vacunados){
return "en "+pais+" se han vacunado "+(vacunados/poblacion)*100+" por cada cien habitantes"

}


//suma dos elementos
function suma(num1,num2) {
return (num1+num2)    
}
// resta dos elementos
function rest(num1,num2) {
    return num1-num2
}
// multiplica dos elementos
function mult(num1,num2) {
    return num1*num2
}
//divide dos elementos
function div(num1,num2) {
    return num1/num2
}

console.log(vacuna100("España",46940000,2690457));
console.log(vacuna100("Chile",20000000,2375725));


console.log(mult(24,2))
console.log(suma(24,2))
console.log(div(24,2))
console.log(rest(24,2))
