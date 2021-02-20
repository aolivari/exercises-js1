//año nacimiento
function año1981(edad) {
    return 2021-edad
}

function mensake(nombre,edad) {
    const naci = año1981(edad)
    var mensaje = "Hola me llamo "+nombre+" Naci el año "+naci+" tengo "+edad+" años"
    return mensaje
    
}

console.log(mensake("toño",39))