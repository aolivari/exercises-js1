let students = 15
let mentors = 23
let text = "porcentage of"
let textstudent = text+" Students: "+Math.round(students/(students+mentors)*100)+"%"
let textmentors = text+" Mentors: "+Math.round(mentors/(mentors+students)*100)+"%"


console.log(textstudent);
console.log(textmentors);
