// Function definition
function getAgeInDays(age) {
    return age * 365;
}

// Function definition
function createGreeting(name, age) {
    const ageInDays = getAgeInDays(age);
    const message = "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
}
console.log(createGreeting("toño",39))
console.log(getAgeInDays(39))