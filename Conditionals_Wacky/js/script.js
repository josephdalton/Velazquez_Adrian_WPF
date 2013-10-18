// Adrian Velazquez
// October 17th 2013
// Conditionals_Wacky

/*Criteria:

Make sure each of the sub-projects follows this list of criteria:
As in the Expressions assignment you will need to create code that calculates a result. You can not use the same formulas or code used in that previous assignment, however.

Decide what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.

Your calculation should use a minimum of two factors or givens.

At least two factors must be essential for the calculation. If one of the factors (the pieces of information you are collecting with the prompts) is not needed in order to calculate the result then it is not essential.
There should be a minimum of two prompts to collect user information. The prompts should include labels so the user knows what information they need to enter. These prompts should assign the information collected into variables you have set up.

Write the givens as appropriately named variables.
Declare a variable for the resulting value of the calculation.
Calculate the result using the variables in an expression (NOT the literal values or numbers)
Assign the calculation to the resulting variable.
The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well.
Validation
In each of the sub-projects you must use conditionals to validate the information the user enters into the prompts.
For example, if the user does not enter a value for the first prompt, make a conditional that checks if the value is empty. You can do this by evaluating if the contents of the prompt are the same as an empty string (which looks like "" i.e. thats two quotations with no character between them)
Comment every line of code (describe what each line is doing in English). Do NOT just label sections of your code.
Each of the following requirements must exist in at least one of the 3 subprojects:
A ternary
An else if
A logical operator
At least one relational operator other than ==*/
var carTypes = ["Foreign Car", "Domestic Car", "Euro Car"];//an array that holds the different types of cars
var haveCar = true;//a variable that states whether a user has a car or not
var yourCar = true;//a variable that states where your car will be true or false if asked if it is a certain type of car
carTypes[0] = false;//states that the first string in the array is false
carTypes[1] = false;//states that the second string in the array is false
carTypes[2] = true;//states that the third string in the array is true
var wantToJoin = true;//a variable that states that a user wants to join

//if you have a car, and want to join, AND if your car is a euro car type
if(haveCar == wantToJoin && yourCar == carTypes[2]){
	console.log("Welcome to the club!");//if the above condition is true, print the action
}else if(haveCar > carTypes[0] || haveCar > carTypes[1])/*if the users car is greater than a foreign car OR if the users car is greater than a domestic car*/{
	console.log("We\'ll consider your application!");//if the above condition is true, print the action
}else{
	console.log("Sorry but you cant join!");
}