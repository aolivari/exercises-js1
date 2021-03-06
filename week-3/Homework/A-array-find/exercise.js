/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here


var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];


var sname =[]
var lname =[]

function findLongNameThatStartsWithA(params) {
  for (let i = 0; i <params.length; i++) {
    var starta = params[i].startsWith("A") && params[i].length>7;
    var casi =[]
        if (starta===true){
       casi.push(params[i])
       return casi[0]
       }
}
}
var longNameThatStartsWithA = findLongNameThatStartsWithA(names);



console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
//completed