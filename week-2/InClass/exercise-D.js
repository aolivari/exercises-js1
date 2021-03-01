function great(entry) {
   
        if (entry==="happy"){
           return "Good job, you're doing great!"
        }
        else if (entry ==="sad"){
          return "Every cloud has a silver lining"
        }
        else if (typeof entry ==="number"){
            return "Beep beep boop"
        }

        else{ 
            return "I am sorry, I'm still learning about feelings!"
        }
     
}  


console.log(great("happy"))
console.log(great("sad"))
console.log(great(38))
console.log(great("hola"))
