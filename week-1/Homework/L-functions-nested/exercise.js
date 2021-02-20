var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//var students = 15
//var mentors = 23
//var textstudent = Math.round(students/(students+mentors)*100)
//var textmentors = Math.round(mentors/(mentors+students)*100)




function percentage (cmentores) {
    let mentors =cmentores
    let students=(65*cmentores)/35
    console.log ("Percentage Students:"+Math.round(students/(students+mentors)*100)+"%")
    return "Percentage Mentors:"+Math.round(mentors/(students+mentors)*100)+"%"
   


}


console.log(percentage(5))


function greeting(name) {
    let hello= "hello "+name
    return hello.toUpperCase()
    
}

console.log(greeting(mentor1))
console.log(greeting(mentor2))
console.log(greeting(mentor3))
console.log(greeting(mentor4))
console.log(greeting(mentor5))


//completed

