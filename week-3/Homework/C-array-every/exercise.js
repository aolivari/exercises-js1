/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function buscar(name) {
  
  if (students.includes(name))  {
    return name
  }  
}



var groupIsOnlyStudents = group.map(buscar) // complete this statement
// let nen =groupIsOnlyStudents.split("yes")
  

if (groupIsOnlyStudents.join() === group.join()) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}



/* EXPECTED RESULT */

// The group does not contain only students

//completed
