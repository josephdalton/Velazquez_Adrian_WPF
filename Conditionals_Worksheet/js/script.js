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
var efficiency = 20;
var gasTank = 25;
var tankCap = 15;

if(gasTank > tankCap / efficiency){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have X gallons of gas in your tank, better get gas now while you can!");
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

/*Tire Pressure I

To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec. 
    
Given:
Pressure for each tire of the car (in psi) in an array.
Result To Print Out:
“The tires pass spec!” Or  “ Get your tires checked out!”*/

var tires = ["LF 40 psi", "RF 35 psi", "LR 45 psi", "RR 45 psi"];

if(tires[0] >= tires[1]+5 && tires[2] >= tires[3]+5){
	console.log("Get your tires checked out!");
}else{
	console.log("The tires pass spec!");
}