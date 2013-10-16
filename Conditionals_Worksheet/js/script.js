//Adrian Velazquez
//October 15th 2013
//Conditionals Worksheet

/*Criteria:
For each solution you will need the following:
Label the section of code appropriately
Write the givens as variables
The result should be calculated using variables, not literal values when possible.
Create code that will make decisions based on the value of the givens
Print the result of the decision-making to the console.
Use only code and techniques learned in this class.
*/



//EXPRESSIONS WITH CONDITIONALS

//Last Chance for Gas!

//if the percentage of gas in my tank, is more than the capacity of gallons in my tank, divided by the mpg efficiency, i can make it across.
var efficiency = 20;//variable efficiency holds the gas mileage of the car
var gasTank = 25;//variable holds the value for the amount of gas in the tank
var tankCap = 15;//variable tank cap holds the value for the tanks gas capacity

if(gasTank > tankCap / efficiency){
	console.log("Yes, you can make it without stopping for gas!");//print out if the condition is true
}else{
	console.log("You only have X gallons of gas in your tank, better get gas now while you can!");//print out if the condition is false
};


//MULTIPLE RESULTS

//Check the login

//if the username matches our records, and the password mathces our records, you can log in
var userName = larissa;
var passWord = iLoveKittens;
var larissa = true;
var iLoveKittens = true;

if(userName = larissa){
	console.log("Welcome, Larissa!");
}else if(passWord == iLoveKittens){
	console.log("User not found, please try again");
}else{
	console.log("Password does not match our records");
}





//MULTIPLE CONDITIONS

//Tire Pressure I

/*if the lf tires pressure is less than or equals to the rf tire and if the lr tires pressure is less than or equal to the rr tire, get your tires
checked out*/
var tires = ["LF 40 psi", "RF 35 psi", "LR 45 psi", "RR 45 psi"];

if(tires[0] <= tires[1] && tires[2] <= tires[3]){
	console.log("Get your tires checked out!");
}else{
	console.log("The tires pass spec!");
}