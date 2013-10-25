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
console.log(a);//
