// Adrian Velazquez
// October 10th 2013
// Expressions_Industry

//for industry, i will create a list of duties issued to designers, developers, team leads, and clients

var duties = ["Discovery", "Design Structure", "Design Visual", "Build and Integrate", "Test", "Launch"]; //this is my array of duties

var a = "developers"; //this depicts a developers responsability 
var b = "designers"; //this depicts a designers responsability
var c = "team lead\'s"; //this depicts a teamLeads responsability
var d = "client\'s"; //this depicts the clients position in the production process

console.log(duties[0] + " is a " + b + " duty "); //prints out a duty for designers
console.log(duties[1] + " is a " + b + " duty "); //prints out a duty for designers
console.log(duties[2] + " is a " + b + " duty "); //prints out a duty for designers
console.log(duties[3] + " is a " + a + " duty "); //prints out a duty for developers
console.log(duties[4] + " is a " + a + ", " + b + ", " + "and " +  c  + " duties "); //prints out a duty for all members of the team
console.log(duties[5] + " is a " + c + " duty "); //prints out a duty for team leads

var subDuties = ["CLient Meetings", "Wire Frames", "Mockup\'s", "Front-End Development", "UI and Design", "Launch to Server"];

console.log(subDuties[0] + " are performed in the " + duties[0] + " phase with " + a + ", " + b + ", " + "and " + c); //prints out steps
console.log(subDuties[1] + " are performed in the " + duties[1] + " phase with " + b + ", " + c + ", " + "and " + d); //prints out steps
console.log(subDuties[2] + " are performed in the " + duties[2] + " phase with " + b + ", " + c + ", " + "and " + d); //prints out steps
console.log(subDuties[3] + " is performed in the " + duties[3] + " phase with " + a + ", " + c + ", " + "and " + d); //prints out steps
console.log(subDuties[4] + " are performed in the " + duties[4] + " phase with " + a + ", " + b + ", " + "and " + c); //prints out steps
console.log(subDuties[5] + " duties are perfomed in the " + duties[5] + " phase with the " + a + ", "+ c + ", " + "and " + "the " + d); /*prints out steps*/

/*NOTE TO INSTRUCTOR: THIS IS MY LATE, FINAL, SUBMISSION FOR THIS ASSIGNMENT. SUNDAY, OCTOBER 13TH 2013. THANKS YOU FOR YOUR PATIENCE AND UNDERSTANDING*/ 