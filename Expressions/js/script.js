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


