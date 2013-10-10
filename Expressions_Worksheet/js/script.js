//Adrian Velazquez
//October 9th 2013
// Expressions Worksheet



//Dog Years
var age = 1; //given - this represents sparky's age.
age *= 7; //sparky is 1 human years old which is 7 in dog years - this represents sparky's age in dog years times 7 human years.
var b = age + "years";
console.log(b); //this will print the dogs years out in human years.

//Slice of Pie part 1
var slices = 12; //this variable represents the given number of slices per pizza.
var people = 20; //this variable represents the given number of people at the party.
var pizzas = 4; //this variable represents the given number of pizzas delivered to the party.
var perPerson = slices * pizzas / people; /*this variable multiplies the slices 12, and pizzas 4, to give me the total number of slices 48, then divides the answer by the number of people 20, to give me the amount of slices per people at the party 2.4 */
var b = perPerson + "Per Person";
console.log(b); //this will print the amount of slices per person at the party.

// Slice of Pie part 2
//Please see givens for Slice of Pie part 1
var sparky = 48 % 20; /*the total number of slices divided by the number of even slices per person leave a remainder of 8 slices for sparky.*/
var b = sparky + "slices";
console.log(b); //sparky got 8 slices of pizza

//Average shopping bill
var budget = [34, 42, 39, 44, 46]; //my array with my 5 weekly grocery total spending
var total = 34 + 42 + 39 + 44 + 46; //the total amount of money spent the last 5 weeks
var average = total / 5; //the total amount spent divided by the number of weeks
var b = average + "Dollars";
console.log(b); //prints the average amount spent over the past 5 weeks

//Discounts
var originalPrice = 120; //the original price of the shirt
var discount = 20; //the amount of the discount
var item = "Shirt"; //the shirt is the item
shirt = originalPrice; //the shirt equals the original price
var tax = 7; //the amount of sales tax in my state
var withDiscount = shirt - 20; // the price of the shirt minus a 20% discount
var withoutTax = shirt - tax; //the price of the shirt minus state tax
var withTax = shirt + tax; //price of the shirt with state tax
console.log(shirt, withDiscount, withoutTax, withTax); //prints original price, discounted price, price minus tax, price with tax





