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
//as soon as the program comes to a true statement, it will coose that block of code and ignore the others



/*RELATIONAL OPERATORS - COMPARING TWO VALUES OR VARIABLES - conditional operators: > greater than, < less than, >= greater than or equal to, <= less than or equal to,!= not equal to, == equal to (or the same as), === strictly equal to.*/
//These compare two (AND ONLY TWO) values or variables
//They are operators placed between two values or variables, in order to compare them, and resolve it to a true or a false.
//The comparison results in "true" or "false"

// === compares the same value AND the same type (are these two "strings" or are they "numbers"?)



//LOGICAL OPERATORS - COMPARING PAIRS OF TRUE AND FALSE
//They compare pairs of true or false values.
//They compair pairs of relational expressions.
//The comparison results in true or false.
/*You will only put logical operators in between Boolean variables, or between comparisons in between something that is already being used with relational expressions*/

//Logical Operators - && = and, || = or, ^ = Exclusive or (XOR), ! = not.

// && AND OPERATOR
// && requires that the boolean values each (both) be TRUE in order for the whole pair to be true.
// && is for going in between relational expressions
// && is only for going in between boolean expressions

//TRUTH TABLE: true && true = true, true && false = false, false && true = false, false && false = false.

var budget = 300;
var iphonePrice = 199.99;
var payCheck = 200;

//if the price of the phone is less than our budget and if our paycheck is over 300.
if(iphonePrice < budget && payCheck > 300)/*both these conditions must be true in order to get a true*/{
	console.log("We can buy the phone");
}else{
	console.log("No phone for you!");
}

//iphonePrice < budget is one relational expression
//&& //goes between two relational boolean expressions
//payCheck > 300 is another relational expression

// || OR OPERATOR
// || goes in between true of false values
// || requires that one or more pairs be true in order for the entire pair to be true

//TRUTH TABLE: true || true = true, true || false = true, false || true = true, false || false = false.

var budget = 100; //number variable
var iphonePrice = 199.99; //number variable
var wonLottery = true; //boolean variable (true)

//if the price of the phone is less than our budget or if we win the lottery.
if(iphonePrice < budget || wonLottery === true)/*only one of these conditions must be true in order to get a true*/{
	console.log("We can buy the phone");
}else{
	console.log("No phone for you!");
}

//NOTE: line 161, because the wonLottery varible is a boolean, you could simply write: if(iphonePrice < budget || wonLottery) and it would work because  wonLotery equals a true or false value and it is a boolean


// ^ EXCLUSIVE OR - (XOR) - 
// Requires that only one of the pair must be true for the entire statement to be true.


// ! NOT OPERATOR - (NEGATION)
// This operator flips a value.
// true becomes false
// false becomes true
// is NOT used for comparison.
// if more than one are true, te result is false.
// EXAMPLE: a ! = b is the same as ! (a === b)
//EXAMPLE: a<b is the same as ! (a<b)

/* COMMON MISCONCEPTIONS:

How do I see if a,b, and c have the same value?
a === b === c

This will NOT work properly. The machine will first do the comparison between a and b. it will determin the true or false then take that true or false and value and compares it to c. If c is not a boolean, then this will not work.

The correct way to do this would be to evaluate the items in pairs like so:
a === b && b === c
is a equal to b AND is b equal to c

if both pairs are true, the whole thing will be true (both pairs).
if one of the pairs is false, the whole thing will be false.

*****THINGS TO REMEMBER*****
*Relational operators (>, <, <=, >=, !, ===) go in between PAIRS of objects
*Logical operators (&&, ||) go in between RELATIONAL EXPRESSIONS or BOOLEAN VALUES
*ALWAYS work in pairs... if you need to do something with 3 objects, you need to brek it down into sets of pairs.

*/

//TERNARY OPERATORS - DECISION MAKING ON ONE LINE - A ONE LINE WAY TO WRITE AN IF ELSE CONDITIONAL STATEMENT
//This operator requires 3 components
//The ternary operator is represented by a question mark ?
//It works to shorten conditionals

	
