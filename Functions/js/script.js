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

var width = 50;

function calcArea(){
	var width = 50;
	var height = 10;
	var area = width * height;
	console.log(area);
}

calcArea();

//A function will always prefer to use a variable inside of it even if another variable outside of the function with the same name exists



