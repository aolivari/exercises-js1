

function validname(user,type) {
    if (type === "admin" || "manager")
    var vocals = "aeiouAEIOU"
    var start   = user [0]
    if (vocals.includes(start) && user.length>=5 && user.length<=10)  {
    return "valid user"
    }
    else return "Username invalid";
 }


 function validname2(user,type) {
    if (type === "admin" || "manager")
    if (user[0]===user[0].toUpperCase() && user.length>=5 && user.length<=10)  {
    return "valid user"
    }
    else return "Username invalid";
 }

console.log(validname("Olivos","manager"))




//completed

//(user.lenght=<10&&user.lenght=>5))
// (word.includes("Amy")