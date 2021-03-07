// Crea una función que acepte un arreglo de
// strings "sucios". Ejemplo a la derecha ->
// Esta función debe:
// ● Quitar todos los elementos que no sean
// strings
// ● Cambiar a mayúscula todos los string y
// agregar un signo de exclamación al final
// En el ejemplo, el arreglo resultante contiene 2x
// ELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!

let nasty = [100, "iSMael", 55, 45, "sANyiA", 66,
"1JaMEs", "eLAmIn", 23, "IsMael", 67, 19,
"ElaMIN"]

function took(name) {
    if (typeof name==="string"){
        return console.log(name.toUpperCase()+"!")
    }
}

nasty.map(took)

//completed