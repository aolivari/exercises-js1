// Ejercicio G (10 mins)
// Crea una función que:
// ● Reciba como parámetro un arreglo con años de nacimiento birthYears
// ● Imprima el mensaje Estos son los años de nacimiento de las personas que pueden manejar: <años de
// nacimiento filtrados>
// ● Retorne un arreglo con los años de nacimientos de las personas que pueden conducir

let birth = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]

let filtro = birth.filter(año=> año<2003)

console.log(filtro)
    
//completed