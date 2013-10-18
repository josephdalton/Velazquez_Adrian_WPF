// Adrian Velazquez
// October 17th 2013
// Conditionals_Wacky

//Car Club - A member wants to join a car club. He can join only if he has a specific type of car.
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
	console.log("Sorry but you cant join!");//if both conditions are false print the action
}