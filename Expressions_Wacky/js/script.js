// Adrian Velazquez
// October 10th 2013
// Expressions_Wacky

/* Make sure each of the projects follows this list of criteria:
You will need to create code that calculates a solution. The actual values don't matter here. Anyone should be able to open your JavaScript file, change the values in your variables and the calculation should still be accurate!
Decide on what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.
Your calculation should use a minimum of three factors or givens.
Good example: Using width, height and depth to calculate volume.
Bad example: Using time and distance to calculate speed.
All three factors must be essential for the calculation. If one of the factors (the pieces of information you are collecting with the prompts) is not needed in order to calculate the result then it is not essential.
There should be a minimum of 3 prompts to collect user information. The prompts should include labels so the user knows what information they need to enter. These prompts should assign the information collected into variables you have set up.
Your calculation should be original.

Write the givens as appropriately named variables.

Declare a variable for the resulting value of the calculation.

Calculate the result using the variables in an expression (NOT the literal values or numbers)

Assign the calculation to the resulting variable.

The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well. */

//Who done it - using if and else as an experiment, an array is present, trying to find the guilty part in a group of suspects to a murder

var suspects = ["theCook", "theMaid", "theButler", "theNanny"]; //this array holds a list of suspects

var notHome = "notGuilty"; //this string states that whom ever is not home is not guilty
var home = "guilty"; //this string states that whom ever is home is guilty

var theButler = "home"; //this variable states that the butler is home. theButler is the storage container for the value of home
var theCook = "notHome"; //this variable states that the cook is not home. TheCook is the storage container for the value of not home
var theMaid = "notHome"; //this variable states that the maid is not home. TheMaid is the storage container for the value of not home
var theNanny = "notHome"; //this variable states that the nanny is not home. TheNanny is the storage container for the value of not home


if(theButler > home){
	console.log("The Butler Done It!");
}//this code calculates the answer, if the butler is home, he is guilty.
else{
	console.log("Who Done It?");
}//this code states if the butler is not home he is innocent.

if(theCook < home){
	console.log("Who Done It?");
}//this code states if the cook is not home he is innocent.
else{
	console.log("The Cook is Innocent!");
}//this code calculates the answer, if the cook is home, he is guilty.

if(theMaid < home){
	console.log("Who Done It?");
}//this code states if the maid is not home she is innocent.
else{
	console.log("The Maid is Innocent!");
}//this code calculates the answer, if the maid is home, she is guilty.

if(theNanny < home){
	console.log("Who Done It?");
}//this code states if the nanny is not home she is innocent.
else{
	console.log("The Nanny is Innocent!");
}//this code calculates the answer, if the nanny is home, she is guilty.



console.log(home);//states that the guilty party that is present at home is guilty