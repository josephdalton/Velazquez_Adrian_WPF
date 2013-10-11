// Adrian Velazquez
// October 10th 2013
// Expressions_Wacky

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