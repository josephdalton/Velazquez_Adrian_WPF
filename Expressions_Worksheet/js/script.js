//Adrian Velazquez
//October 9th 2013
// Expressions Worksheet




/* Criteria:

For each solution you will need the following:
Label the section of code appropriately with comments
Write the givens as appropriately named variables or constants.
Declare a variable for your result.
Use the variables to calculate the result (NOT the literal values or numbers)
Calculate the result using the variables in an expression
Assign the calculation to the resulting variable.
Make sure to print the result in the console (Remember to include units like “feet” and “slices of pizza”)
Comment every line of code (describe what each line is doing in English)
Don't forget!

Test your code! Do the calculations on your own calculator. Check that the computer is producing the same result.
Commit often!
A "given" is a variable that is part of the initial set up of a formula. You should write your code so anyone can change the values of the givens and the result of the calculation should still be accurate.

Examples:

Problem: Calculate the area of a rectangle given the width and height of the rectangle.
Givens:
The width of the rectangle
The height of the rectangle.
Result Variable:
The area of the rectangle.
Result to Print:
“The circumference of the circle is x”;
Example problem as it should appear in your code.
//Calculate the Circumference of a Circle
var radius = 6;
const PI = 3.14159265;
//multiply 2, PI and the radius & assign to circ variable.
var circ = radius * 2 * PI;
//print out the output circumference
console.log(“The circumference of the circle is “ + circ );

Problems:

Discounts

Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)
     Givens:
Original price
Discount percentage (20% would be 20, for example)
Description of item
Sales tax percentage
     Result Variables:
Price of the item with tax
Price of the item without tax
     Result to Print:
“Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.” */


//Dog Years
var age = 1; //given - this represents sparky's age.
age *= 7; //sparky is 1 human years old which is 7 in dog years - this represents sparky's age in dog years times 7 human years.
console.log(age); //this will print the dogs years out in human years.

//Slice of Pie part 1
var slices = 12; //this variable represents the given number of slices per pizza.
var people = 20; //this variable represents the given number of people at the party.
var pizzas = 4; //this variable represents the given number of pizzas delivered to the party.
var perPerson = slices * pizzas / people; /*this variable multiplies the slices 12, and pizzas 4, to give me the total number of slices 48, then divides the answer by the number of people 20, to give me the amount of slices per people at the party 2.4 */
console.log(perPerson); //this will print the amount of slices per person at the party.

// Slice of Pie part II
//Please see givens for Slice of Pie part 1
var sparky = 48 % 20; /*the total number of slices divided by the number of even slices per person leave a remainder of 8 slices for sparky.*/
console.log(sparky); //sparky got 8 slices of pizza

//Average shopping bill

/*You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.
Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.
     Givens:
An array with five weekly grocery totals.
     Result Variable:
Total amount spent on groceries.
Average weekly grocery spending.
    Result to Print:
“You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”*/

