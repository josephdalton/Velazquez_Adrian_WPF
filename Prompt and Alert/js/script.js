 //Prompt and Alert
 
 var userInput = prompt("Enter your year of birth:");
 console.log(userInput);
 
 var width = prompt("We are calculating the area of a rectangle.\nPlease enter the width:");
 var height = prompt("Please enter the height:");
 
 var area = width * height; //calculates with the given from variables width and height
 console.log(area);
 
 //another way to get the answer for the user is to use an alert
 
 alert("The area of your rectangle is" + area + " sq feet"); //this is a concactenated example, it adds a string to a variable and displays in that order.
 
 //yet another way to do this would be to substitute the concatenation expression into a result variable, then alerting the variable
 var result = "The area of your rectangle is" + area + " sq feet";
alert(result);



