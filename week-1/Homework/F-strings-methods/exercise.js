// cual es la diferencia entre var y const y let

function cantidad(name){
    var nameLength = name.length;
    return nameLength
}

function uyquelargo(name) {
    const palabras = cantidad(name);
    const message = "my nombre es " + name + " y mi nombre tiene " +(palabras)+ " caracteres de longitud"
    return message;
}

console.log(uyquelargo("jose antonio"))
