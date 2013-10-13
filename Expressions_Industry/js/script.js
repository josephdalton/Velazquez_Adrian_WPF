// Adrian Velazquez
// October 10th 2013
// Expressions_Industry

//for industry, i will create a list of duties issued to designers and developers

var duties = ["Discovery", "Design Structure", "Design Visual", "Build and Integrate", "Test", "Launch"]; //this is my array of duties

var a = "developers"; //this depicts a developers responsability 
var b = "designers"; //this depicts a designers responsability
var c = "team lead\'s"; //this depicts a teamLeads responsability

console.log(duties[0] + " is a " + b + " duty "); //prints out a duty for designers
console.log(duties[1] + " is a " + b + " duty "); //prints out a duty for designers
console.log(duties[2] + " is a " + b + " duty "); //prints out a duty for designers
console.log(duties[3] + " is a " + a + " duty "); //prints out a duty for developers
console.log(duties[4] + " is a " + a + ", " + b + ", " + "and " +  c  + " duties "); //prints out a duty for all members of the team
console.log(duties[5] + " is a " + c + " duty "); //prints out a duty for team leads

var subDuties = ["CLient Meetings", "Wire Frames", "Mockup\'s", "Front-End Development", "UI and Design", "Launch to Server"];