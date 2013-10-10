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

Dog Years

Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
     Givens:
Sparky’s age.
     Result Varable:
Sparky’s age in dog years.
    Result to Print:
“Sparky is X human years old which is X in dog years.

Slice of Pie part 1

A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
     Given:
Number of slices per pizza
Number of people at the party
Number of pizzas ordered.
     Result Variables:
Number of slices per person. (Can be a decimal or floating point).
    Result to Print:
“Each person ate X slices of pizza at the party.”

Slice of Pie part II

At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
     Given:
Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.
     Result Variables:
Number of slices Sparky gets to eat.
    Result to Print:
“Sparky got X slices of pizza.”

Average shopping bill

You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.
Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.
     Givens:
An array with five weekly grocery totals.
     Result Variable:
Total amount spent on groceries.
Average weekly grocery spending.
    Result to Print:
“You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”

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


