//Adrian Velazquez
//October 24th 2013
//Functions - Personal

/*Make sure each of the sub-projects follows this list of criteria:
As in the earlier assignments you will need to create code that calculates a result. You may not use the same formulas or code used in previous assignments.
Decide what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.
Information should be collected from the user with prompts
Calculate the result using the variables in an expression (NOT the literal values or numbers)
The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well.
Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.
 
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

//Logical Operators - && = and, || = or, ^ = Exclusive or (XOR), ! = not. 

//use for if and else

var kdRatio = .750;
var gun1 = "Scar 119";
var gun2 = "Vector KD";

if (kdRatio > 1.0){
	console.log("You can use the " + gun1);
}else{
	console.log("Sorry, you still have to use the " + gun2);
}

//The above code as a Ternary

(kdRatio > 1.0) ? console.log("You can use the " + gun1) : console.log("Sorry, you still have to use the " + gun2);

var gunClasses = ["Hammer", "LSat", ".50 cal", "Skorpion Evo", "MP5"];
var soldier = ["Sniper", "Infantry", "Gunner"];
var soldier[0] = true;
if (gunClasses(2) = soldier(0)){
	console.log();
}


