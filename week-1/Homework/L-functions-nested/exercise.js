var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var students = 15
var mentors = 23
var textstudent = Math.round(students/(students+mentors)*100)
var textmentors = Math.round(mentors/(mentors+students)*100)

function percentage(num1,num2,name) {
    return "Percentage "+name+":"+Math.round(num1/(num1+num2)*100)+"%"
}


console.log(percentage(15,23,"mentors"))
console.log(percentage(23,15,"Students"))


function greeting(name) {
    const hello= "hello "+name
    return hello.toUpperCase()
    
}

console.log(greeting("daniel"))
console.log(greeting("irina"))
console.log(greeting("mimi"))
console.log(greeting("rob"))
console.log(greeting("yohannes"))


//completed

