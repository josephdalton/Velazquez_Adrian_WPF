//Variables

alert("Hello world!");

var yearBorn = 1955; 

console.log("Hello World"); //prints out in the console

console.log(yearBorn); //prints out in the console

alert(yearBorn);

alert("yearBorn");

//declaring and defining on two lines
var age; //declaration
age = 33; //definition
//Storage container = value

//declaring and defining on the same line
var age = 33;

console.log(age); //prints out in the console

//Types of variables
var age = 33; //Number Variable
var firstName = "Adrian"; //String Variable
var isStudent = true; //Boolean variable

var phrase = "I don\'t know\, \n you\'ll have to ask the professor"; //Escape operator, new line operator

//Arrays

var muppetNames = ["Kermit", "Miss Piggy", "Gonzo", "Beaker", "Animal"]; //index 0,1,2,3,4

console.log(muppetNames); //prints out in the console
console.log(muppetNames[3]); //Array access notation lets me see whats in the index number 3

muppetNames [1] = "Beaker"; //Change index 1 to Beaker
console.log(muppetNames[1]);

var num = 4;
console.log(muppetNames[num]); //Allows me to use the declaration "num" to access index number 4