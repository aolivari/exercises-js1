function cantidad(name){
    var sinespacio =name.trim()
    var nameLength = sinespacio.length
    return nameLength
}

function uyquelargo(name) {
    const palabras = cantidad(name);
    const message = "my nombre es " + name + " y mi nombre tiene " +(palabras)+ " caracteres de longitud"
    return message;
}

console.log(uyquelargo("jose antonio"))

//completado