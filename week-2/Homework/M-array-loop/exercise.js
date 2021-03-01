/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/




const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",]

  
  for (let i = 0; i < daysOfWeek.length; i++) {
      var Tdays = daysOfWeek[i].startsWith("T");
      var message = daysOfWeek[i] + " empieza con T";
          if (Tdays===true){
          console.log(message)
        }
      
    
    }
     
    
  //completed