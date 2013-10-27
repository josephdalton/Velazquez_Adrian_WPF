//Ternarys

//TERNARY OPERATORS - DECISION MAKING ON ONE LINE - A ONE LINE WAY TO WRITE AN IF ELSE CONDITIONAL STATEMENT
//This operator requires 3 components
//The ternary operator is represented by a question mark ?
//It works to shorten conditionals

/*if(condition){
	do if true;
}else{
	do if false;
}*/

//to shorten this conditional statement using ternary operators it would look like this: (condition) ? do if true : do if false; 

//example:
//if the min gpa is over the 2.0 score, the student can graduate

var gpa = 48;
if(gpa > 2.0){
	console.log("you can graduate!");
}else{
	console.log("sorry but youve got some studying to do!");
}

//the above code using a ternary operator:

var gpa2 = 48;
(gpa2 > 2.0) ? console.log("you can graduate!") : console.log("sorry but youve got some studying to do!");
//^condition ? ^what happens if its true        : ^what happens if its false

var age = 10;
var book;
//If the child is under 10, they get green eggs and ham, otherwise they get the time machine.

if(age<10){
	book = "Green eggs and ham";
}else{
	book = "The time machine";
}
console.log(book);

//the above code as a ternary:
var age = 14;
var book;
book = (age<10) ? "Dr.Seuss" : "Hamlet"; 
//NOTE: if youre dealing with larhe blocks of code, you may want to del with it in more traditional ways like using if else statements.
//Ternaries are good when you are using assignments "var = book;"

//Example 1 --------------------------------------------------------------------------------------------------------------------
//my kill death ratio equals .750, gun1 equals the scar 119, gun2 = the vector kd
var kdRatio = .750;
var gun1 = "Scar 119";
var gun2 = "Vector KD";

if (kdRatio > 1.0)/*if my kill death ratio is greater than 1.0*/{
	console.log("You can use the " + gun1);//I can use the Scar 119
}else{
	console.log("Sorry, you still have to use the " + gun2);//if the above statement is false, I will have to use the Vector KD
}

//The above code as a Ternary
(kdRatio > 1.0) ? console.log("You can use the " + gun1) : console.log("Sorry, you still have to use the " + gun2);


//Example 2 --------------------------------------------------------------------------------------------------------------------
//two arrays that hold soldier types and gunclasses
var gunClasses = ["Hammer", "LSat", ".50 cal", "Skorpion Evo", "MP5"];
var soldier = ["Sniper", "Infantry", "Gunner"];


if (gunClasses[2] = soldier[0])/*if the .50cal equals the sniper*/{
	console.log("You are a " + soldier[0] + " and can use the " + gunClasses[2]);//I am a sniper and can use the .50cal
}else{
	console.log("You are a " + soldier[2] + " and should use the " + gunClasses[0]);/*if the above statement is false, I am an infantry and should use the hammer*/
}

//the above code as a ternary
(gunClasses[2] = soldier[0]) ?
console.log("You are a " + soldier[0] + " and can use the " + gunClasses[2]):
console.log("You are a " + soldier[2] + " and should use the " + gunClasses[0]);



