var estuesp = ["Juan","Antonio","Emilio","Adrian","Ronar","Giomar","Jaime","leon","Diego","Diana","Fode","Manuel","Jaider"]
var estufant =["Patricio","Igor","Pablo","victor","Manel","Andrea","Fabiana","Ricardo","Paola","Karen","Rodrigo","Ariel"]

var todosjuntos = estuesp.concat(estufant) 

console.log(todosjuntos.sort())
//primera parte hecha


function classindicator(name, clase) {
    var mensaje1 = name + " está en la clase con " + estuesp
    var mensaje2 = name + " no esta en la case de Migracode Español";
    if (clase.includes(name)){
        return mensaje1 
     }
    else {
      return  mensaje2}
}



console.log(classindicator("Ronar", estuesp))
console.log(classindicator("Pepe",estuesp))



//completed