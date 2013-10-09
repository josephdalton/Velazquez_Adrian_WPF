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

//Expressions

var a = 2; //sets up our variable (a) and defines it with a value of 2
a = a + 3; //the assignment operator "=" actually changes the value of (a), stores the result
console.log(a);
// The answer to c = b + 75; is stored in var c; b = 25 and the question is line 41, it gets the answer from var c in line 40
var b = 25;
var c; //tores the result
c = b + 75;
console.log(c);

//Expressions Age Example
var yearBorn = 1980; //the expression that uses my year of birth to calculate my age
var age = 2013 - yearBorn; //stores the result and the answer is stored in the age variable or var age
console.log(age);

//Expressions Arithmetic Operators

//area of the triangle is half of the width times the height (4 / 2 = 2 x 5 = 10)

var width = 4; //given
var height = 5; //given
var area = width * height/2; //result
console.log(area);

//Expressions Modulo operator

var remainder = 32 % 10; // modulo uses the % symbol to find the remainder of a division.
console.log(remainder);

//test

var remainder2 = 12 % 554;
console.log(remainder2);
