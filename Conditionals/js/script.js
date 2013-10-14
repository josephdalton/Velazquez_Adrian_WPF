//Adrian Velazquez
//FullSail University
//Web Programming Fundamentals
//October 2013
//Conditionals

//Conditional statements are one of the four types of procedural code: sequential, CONDITIONAL, reusable, and repetitive

//Conditional Logic

var oldEnough = true;
//Always write out the conditional statements in plain english first. This will help better understand the code you are writing or reading

//If the child is old enough, print to the console, "you can ride!"

if(oldEnough){
	console.log("You can ride the coaster!");
	}//code performed if the condition is true
	
//Relational Expressions (comparing objects for decision making)
//conditional operators: > greater than, < less than, >= greater than or equal to, <= less than or equal to,!= not equal to, == equal to.

var kidHeight = 30;

//if kid height is over 48 inches

if(kidHeight > 48){
	console.log("You can ride the coaster!");
	}//code performed if the condition is true

//the above statement is false and will not print

var kidHeight = 50;

//if kid height is over 50 inches

if(kidHeight > 20){
	console.log("You can ride the coaster!");
	}
	
//the above statement is true and will print


//comparing a variable to another variable in the conditions

var kidHeight = 50;
var minheight = 22;

//if the kidHeight is greater than the minHeight, print to the console
if(kidHeight > minHeight){
	console.log("You can ride the coaster!");
	}
	
//the above statement is true and will print

