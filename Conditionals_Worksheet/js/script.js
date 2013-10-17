//Adrian Velazquez
//October 15th 2013
//Conditionals Worksheet



//EXPRESSIONS WITH CONDITIONALS

//Last Chance for Gas!

var efficiency = 20;//variable efficiency holds the gas mileage of the car
var gasTank = 25;//variable holds the value for the amount of gas in the tank
var tankCap = 15;//variable tank cap holds the value for the tanks gas capacity

//if the percentage of gas in my tank, is more than the capacity of gallons in my tank, divided by the mpg efficiency, i can make it across.
if(gasTank > tankCap / efficiency){
	console.log("Yes, you can make it without stopping for gas!");//print out if the condition is true
}else{
	console.log("You only have X gallons of gas in your tank, better get gas now while you can!");//print out if the condition is false
};


//MULTIPLE RESULTS

//Check the login

var userName = larissa;//the user name is larissa
var passWord = iLoveKittens;//the users password is true
var larissa = true;//larissa is a recognized member and is equal to true
var iLoveKittens = false;//i love kittens is not a recognized password for user larissa and is equal to false

//if the username matches our records, and the password mathces our records, you can log in
if(userName = larissa){
	console.log("Welcome, Larissa!");//print if the condition is true
}else if(passWord == iLoveKittens){
	console.log("User not found, please try again");//print if the condition is false
}else{
	console.log("Password does not match our records");//print if the condition is true but the password is false
}

//MULTIPLE CONDITIONS

//Tire Pressure I

var tires = ["LF 40 psi", "RF 35 psi", "LR 45 psi", "RR 45 psi"];//an array that holds the values of each tires pressure in psi
/*if the lf tires pressure is less than or equals to the rf tire and if the lr tires pressure is less than or equal to the rr tire, get your tires
checked out*/
if(tires[0] <= tires[1] && tires[2] <= tires[3]){
	console.log("Get your tires checked out!");//print if the condition returns a false statement
}else{
	console.log("The tires pass spec!");//print if the condition returns a true statement
}