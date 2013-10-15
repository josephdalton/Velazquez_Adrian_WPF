//Adrian Velazquez
//FullSail University
//Web Programming Fundamentals
//October 2013
//Conditionals

//Conditional statements are one of the four types of procedural code: sequential, CONDITIONAL, reusable, and repetitive

//IF STATEMENTS - CONDITIONAL LOGIC - FOR THE MACHINE TO CHOOSE WHEATHER TO DO A BLOCK OF CODE OR TO SKIP IT.

/*if(condition){
	action;
	}//the barebones of the conditional statement*/

var oldEnough = true;
//Always write out the conditional statements in plain english first. This will help better understand the code you are writing or reading

//If the child is old enough, print to the console, "you can ride!"

if(oldEnough){
	console.log("You can ride the coaster!");
	}//code performed if the condition is true
	
//RELATIONAL EXPRESSIONS (comparing objects for decision making)

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
var minHeight = 22;

//if the kidHeight is greater than the minHeight, print to the console
if(kidHeight > minHeight){
	console.log("You can ride the coaster!");
	}
	
//the above statement is true and will print

//CONDITIONS WITH EXPRESSIONS

var kidHeight = 50;//+2 from condition below = 52
var minheight = 22;

//if the kidHeight is greater than the minHeight, print to the console
if(kidHeight + 2 /* <-- this is and expression*/ > minHeight){
	console.log("You can ride the coaster!");
	} //this condition is true an will print
	
// you can compare it with a variable that represents the value of the expression (+2) as well

var kidHeight = 50;//+2 from condition below = 52
var minheight = 22;
var sneakerLift = 2;

//if the kidHeight is greater than the minHeight, print to the console
if(kidHeight + sneakerLift /* <-- this is and expression*/ > minHeight){
	console.log("You can ride the coaster!");
	} //this condition is true an will print
	

//IF ELSE - FOR THE MACHINE TO CHOOSE BETWEEN TWO BLOCKS OF CODE


var kidHeight = 50;
var minHeight = 50;

if(kidHeight > minHeight){
	console.log("You can ride the coaster!");//This is the code performed if the condition is true
	}else{//you can put else lines on the same line as the end of if statements. 
	console.log("Sorry kid, you cant ride the coaster yet!");//This is the code performed if the condition is false
	}
	
//ELSE IF - CHOOSING BETWEEN THREE OR MORE BLOCKS OF CODE
//NOTE: elseif always requires a condition, else should never have a condition attached to it
// in order for else if to work, each statement needs a condition. there should be a variable condition for each statement. Enter wParentHeight
var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45;

if(kidHeight > minHeight){
	console.log("You can ride the coaster!");//you can ride
}else if(kidHeight > wParentHeight){ 
	console.log("You can ride with a parent");//you can ride with a parent present
}else{
	console.log("Sorry kid, you cant ride the coaster yet!");//sorry kid you cant ride the coaster yet

		}
//as soon as the program comes to a true statement, it will coose that block of code and ignore th others

/*RELATIONAL OPERATORS - COMPARING TWO VALUES OR VARIABLES - conditional operators: > greater than, < less than, >= greater than or equal to, <= less than or equal to,!= not equal to, == equal to (or the same as), === strictly equal to.*/
//These compare two (AND ONLY TWO) values or variables
//The comparison results in "true" or "false"

// === compares the same value AND the same type (are these two "strings" or are they "numbers"?






	
