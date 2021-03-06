// La edad mínima de manejo en el Reino Unido es de 17 años.
// ● Escribe otra función que reciba el año de nacimiento birthYear y retorne el string Los
// nacidos en el año {birthYear} pueden manejar o Los nacidos en el año {birthYear} pueden manejar en {x}
// años
// ● Usa el arreglo de los años de nacimiento, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], para
// obtener un arreglo de strings que indiquen si estas personas pueden manejar
// ● Imprime el arreglo resultante

let birth = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]

function taxidriver(params) {
    year=2021-params
    let cumple1 = params+17
    let cumple2 =17-year
    
    let message = "Puede manejar desde el año "+cumple1
   
    let message2 = "Le faltan "+cumple2+" años para obener el permiso de conducir"

    

    if (17<=year){
        return console.log(message)
    }
    
    else {
        return console.log(message2)
    }
    
}

birth.map(taxidriver)

//edad minima es 17
//"pede manejar desde el año" 
//"no puede manejar hasta el año"

//completed



