const mentors = ["Daniel ", "irina ", "Gordon", "ashleigh "];



function tidy(name) {
// trim() method removes blank spaces at the beginning and at the end of a string

return name.trim().toLowerCase();
}
let tidy_mentors = [];
for (let i = 0; i < mentors.length; i++) {
const tidy_mentor = tidy(mentors[i]);
tidy_mentors.push(tidy_mentor);
}

planeta(Num) => {return num.trim().toLowerCase;}



console.log(tidy_mentors)