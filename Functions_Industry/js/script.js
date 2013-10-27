////Adrian Velazquez
//October 24th 2013
//Functions - Industry

/*
Each of the following requirements must exist in at least one of the 3 subprojects:
A ternary
An else if
An anonymous function
A normal "named" function
An expression with two arithmetic operators
A function with three parameters.
At least one logical operator
Don't forget!:

Test your code! Do the calculations on your own calculator. Check that the computer is producing the same result.
Remember that functions are sub factories or sub programs of the entire program.
You are required to make a minimum of 20 commits to your Git repository as you progress and write your code. Failing to do so will result in an automatic 0 for the assignment.*/

function highDemand(programmer){
	console.log("Be a RockStar, Change the world, Become a " +programmer);
}
highDemand("Computer Programmer");

//to become a programmer, you have to be 1% genius and 99% determined
var programmer = function(genius, determined){
	var superPower = genius + determined;
	return superPower;
}
programmer(1, 99);
var a = programmer(1, 99);
console.log("To become a programmer, you have to be 1% genius and 99% determined. For a total of " + a + "%" + " AWESOME");






