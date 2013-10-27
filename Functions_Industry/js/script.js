////Adrian Velazquez
//October 24th 2013
//Functions - Industry

//Be a RockStar, Change the world, Become a Computer Programmer
function highDemand(programmer)/*the function named highDemand with the parameter of Programmer (definition)*/{
	console.log("Be a RockStar, Change the world, Become a " + programmer);//action the function performs when called
}
highDemand("Computer Programmer");//Calls the highDemand function and adds the string as an argument for the parameter definition of the function

//to become a programmer, you have to be 1% genius and 99% determined
var programmer = function(genius, determined)/*a variable named programmer equals a function with parameters genius and determined defined*/{
	var superPower = genius + determined;//a variable named superPower is equal to parameters genius + determined
	return superPower;//gets information out of the function once it has been calculated. This return is assigned to the superPower variable
}
programmer(1, 99);//argues that the programmer variable with the function containing genius and determined has a value of 1 and 99 for its parameters
var a = programmer(1, 99);//adds a variable to the call function
var odds = "I like those odds!";//a variable with a string as its definition
console.log("To become a programmer, you have to be 1% genius and 99% determined. For a total of " + a + "%" + " AWESOME" + " " + odds);/*finally prints out the result of the functions and variables*/






