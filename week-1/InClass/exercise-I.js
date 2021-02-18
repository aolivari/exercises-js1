// Function definition
function año0(age) {
    return 2021-(age);
}

// Function definition
function añonacimiento(name, age) {
    const año = año0(age);
    const message = "my nombre es " + name + " y nací el año " +(año)+ " o sea tengo "+age+" Años";
    return message;
}
console.log(añonacimiento("toño",39))
