// Crea una función tal que:
// ● Reciba un arreglo de nombres y nombre como parámetro
// ● Revise si el nombre está en el arreglo
// ● Si está en el arreglo, que retorne Found me!; sino, retorne Haven't found me :(

    let names =["Daniel","Mozafar","irina","Javier","Harold","Paolo","Natalia"]

function sistaki(arr,persona) {
    message1 = "Found me!"
    message2 = "Haven't found me :("
    
    if (arr.find((ton) => persona === ton)){
        return message1
    }
    else {
        return message2
    }
}

console.log(sistaki(names,"Daniel"))

//completed