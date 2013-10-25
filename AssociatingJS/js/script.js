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
var c; //stores the result
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

//Expressions - PEMDAS - The order of operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// The average is the sum of all items divided by the number of items
//Certain operations happen before other operations
//PEMDAS = Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4; //this is the result variable
console.log(average);
/*In order for this to work, you must consider the order of operations. the variables to the quizzes must be put in
parenthesis so that they are calculated before they are divided by four*/

//Expressions - Expressions with arrays

var orangeBins = [234, 567, 883]; //This is my array
var total = orangeBins[0] + orangeBins[1] + orangeBins[2]; //This is my expression
console.log(total);

//Expressions - Concatenating Strings
var firstName = "Adrian";
var lastName = "Sane";
var fullName = firstName + " " + lastName; /*adding a second + and a blank space inside of quotation marks allows me to put a space between my
first name and my last name*/
console.log(fullName);

//Casting - Treating strings like numbers and numbers like strings
//Casting types: arrays, numbers, booleans, strings, etc.
//CASTING STRINGS AS NUMBERS
var stringVar = "6"; //This holds he string 6 not the numerical character 6. (its in parenthesis)
var result = 7 + stringVar;
console.log(result);

/*in order to get a computer to treat this result variable as a number rather than a string, you enclose the variable in parenthesis and add the word Number (capital N)*/

var stringVar2 = "6";
var result2 = 7 + Number(stringVar2); // treats stringVar like a number rather than a string because of (Number and ())
console.log(result2);
//this tells the machine to treat it or cast it as a number rather than a string

//CASTING NUMBERS AS STRINGS
 var areaCode = 718;
 var firstPart = 585;
 var secondPart = 8987;
 var phoneNo = String(areaCode) + String(firstPart) + String(secondPart); //remember to use capital letters when casting
 console.log(phoneNo);

//to take it a step farther and add formatting to the number, we can concatenate using "quotation marks"
//(718) 585-8987
var area = 718;
var first = 585;
var second = 8987;
var fullPhone = "(" + String(area) + ")" + String(first) + "-" + String(second);
console.log(fullPhone);

//Expressions - assignment operators: * + - / += *= /+ -=

var a = 3;
a = a + 4; //this arithmetic expression adds the value of a to 4 a = 3 + 4 = 7 and also assigns the expression tag with a value of 3 by using a
console.log(a);

//another way to write this expresion would be to use the += assignment operator
 var a = 4;
 a += 6; // this tells the machine to add the value of a to 6. the answer of 4 is stored within the a.
 //a = a + 4; is the same as writing a += 4;
 console.log(a);
 
 //remember you have to assign expressions to variables - whats a? a = 4
 
 // += this operator adds and changes the value
 // -= this operator subtracts and changes the value
 // *= this operator multiplies and changes the value
 // /= this operator divides and changes the value
 
 //Expressions - increment and decrement operators only work with values of 1
 //To increment we use ++
 //To decrement we use --
 
 var a = 1000;
 a ++; //++ adds 1 to 1000
 console.log(a);
 
 var a = 2000;
 a --; //-- subtracts 2000 to 1999
 console.log(a);
 
 //Prompt and Alert
 
 var userInput = prompt("Enter your year of birth:");
 console.log(userInput);
 
 var width = prompt("We are calculating the area of a rectangle.\nPlease enter the width:");
 var height = prompt("Please enter the height:");
 
 var area = width * height; //calculates with the given from variables width and height
 console.log(area);
 
 //another way to get the answer for the user is to use an alert
 
 alert("The area of your rectangle is" + area + " sq feet"); //this is a concactenated example, it adds a string to a variable and displays in that order.
 
 //yet another way to do this would be to substitute the concatenation expression into a result variable, then alerting the variable
 var result = "The area of your rectangle is" + area + " sq feet";
alert(result);



//FUNCTIONS
//Reusable code type
//Functions allow us to have code that is written once, but able to be used again and again by the machine.
//A function is used for storage just like a variable.
//Variables are used for storing values, 
//Functions are used for storing lines of code
//Functions are like little modular factories
//Stuff can go in, stuff can come out.
//You can have code in one location and use a function to reference that code.
//Functions also organize code

//Types of Functions:
//Functions
//Procedures
//Anonymous Functions

//Basic layout of a normal function:

function functionName(){
	//code the function runs;
}

//the basic structure of functions is not unlike conditionals 
//Curly braces{} are for blocks of code
//Parenthesis () are for parameters
//The element after the function keyword is the name of the function. functionName

function outptMsg(){
	console.log("Hello Earth");
}

function calcArea(){
	var width = 20;
	var height = 10;
	var area = width * height;
	console.log(area);
}

//Invoking the function "Execute"
//To call a function, simply write out the name of the function followed by two parenthesis and a semicoloin ();

outptMsg();
calcArea();

//call the reuseable function more than once and it will run the funtion as many times as you need it to run
outptMsg();
calcArea();
outptMsg();
calcArea();
outptMsg();
calcArea();
//The function itself is the definition, when you call it, you use the function name to call it.

//Variable Scope - Inside and outside of functions
//you can have variables with the same name inside of a function and outside of a function as well

var width = 50;//scoped outside
//The variable width is scoped to the function calcArea. The function will use this variable, not the one outside of the function.
function calcArea(){
	var width = 50;//scoped inside
	var height = 10;
	var area = width * height;
	console.log(area);
}

calcArea();

//A function will always prefer to use a variable inside of it even if another variable outside of the function with the same name exists

//Arguments and Parameters - getting stuff into a function
//Arguments and Parameters are a fundamental solution to keeping our functions from being the same exact thing every single time
//Allows you to switch one or two things to make functions a little more flexible.
//Parameters allow you to store different materials you can use when you need them
//NOTE - Not all functions have to have parameters or arguments.
//NOTE - an argument is information you send to the function.
//NOTE - a parameter is a storage container
//NOTE - variable declarations are the only things that go in as parameters!
//ARGUMENTS ARE THE ELEMENTS GOING IN TO A FUNCTION

//basic structure of a function with parameters and arguments.
//funcName (argument1, argument2);//function call

function funcName(Parameter1, Parameter2)/*function definition*/{
	//code the function runs
}

calcArea(30, 20);/*30 is the first argument. It is stored in the first parameter which is defined as w. 20 is the second argument and is stored in the second parameter*/
function calcArea(w, h)/*w(first parameter)= 30, h(second parameter)= 20*/{
	var area = w * h;
	console.log(area);
}

function dogYears(age){
	var dogYears = age * 7;
	console.log("Sparky is" + dogYears + " years old");
}
dogYears(4);

//using it more than once:
dogYears(6);
dogYears(8);
dogYears(11);

//NOTE - the variable used in the parameter stores the value in the argument
//NOTE - CALL THE ARGUMENT, DEFINE THE PARAMETER!!!!!!!

//Passing
dogYears(6);//passes the value 6 to the parameter age
dogYears(8);//passes the value 8 to the parameter age
dogYears(11);//passesthe value 11 to the parameter age

//NOTE - using a value is the same thing as using a variable that represents that value

var age1 = 4;
dogYears(age1);

//Arguments - the information being passed in. Always in the function invokation or the function call
//Parameter - the storage container for that information. Always in the functions definition.
//Send Arguments to Parameters.

//RETURN VALUES - the things coming out of a function
//returns get information out of a function once it has been calculated.
//functions that are returnin, shuld be assigned to variables

var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area;//this spits out the value of area from the variable above to the variable outside of the function on the top line
}

/*console.log(total);*/

//PROCEDURES
//Never return values
//Are a more specific type of function

//Procedures just contain a list of things to do
//Functions actually calculate and return values

//This is a function
function calcArea(width, height){
	var area = width * height;
	return area;//returns
}

//This is a procedure
function calcArea(width, height){
	var area = width * height;
	console.log(area);//will not return without calling it
}
calcArea(20,50);

//ANONYMOUS FUNTIONS (CLOSURES) - 
//created and given a name at the same time the code is actually executed.
//it will execute the function at the same time the function is created.
//these types of functions still need to be called.

var functionName = function(){
	//code the function runs.
}

functionName();//you call the function by assigning a name to the function.

//example

var calcArea = function(width, height){
	//code to run
	var area = width * height;
	return area;
}
//only works if you assign it a variable name

calcArea(20, 30);
//to make sure its working, assign it to a variable and log it to the screen to see if you get the same result.
var a = calcArea(20, 30);
console.log(a);

//NOTE - WITH ANONYMOUS FUNCTIONS YOU HAVE TO DEFINE BEFORE YOU ENVOKE!!!
