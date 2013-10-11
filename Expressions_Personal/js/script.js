// Adrian Velazquez
// October 10th 2013
// Expressions_Personal

/* Make sure each of the projects follows this list of criteria:
You will need to create code that calculates a solution. The actual values don't matter here. Anyone should be able to open your JavaScript file, change the values in your variables and the calculation should still be accurate!
Decide on what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.
Your calculation should use a minimum of three factors or givens.
Good example: Using width, height and depth to calculate volume.
Bad example: Using time and distance to calculate speed.
All three factors must be essential for the calculation. If one of the factors (the pieces of information you are collecting with the prompts) is not needed in order to calculate the result then it is not essential.
There should be a minimum of 3 prompts to collect user information. The prompts should include labels so the user knows what information they need to enter. These prompts should assign the information collected into variables you have set up.
Your calculation should be original.

Write the givens as appropriately named variables.

Declare a variable for the resulting value of the calculation.

Calculate the result using the variables in an expression (NOT the literal values or numbers)

Assign the calculation to the resulting variable.

The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well.

Good example of console print out: The volume of the sphere is 26 feet cubed.
Bad example of console print out: 26
Show at least one example of string concatenation (this will be useful for that console print out mentioned above).
Comment every line of code (describe what each line is doing in English). Do NOT just label sections of your code.
Each of the following requirements must exist in at least one of the 3 subprojects:
An example of 3 different arithmetic operators.
An example of an array. This array must be used as part of the calculation.
A string variable
At least 2 assignment operators (not including the = symbol)
Committing to your repository:
You are required to make at least 20 commits to your repository for each project as you develop your code.
Failing to do so will result in a 0 for the assignment. */

//how many gallons of gasoline do I need to travel 100 miles

var tankCap = 13; //the variable tank cap is the storage container for 13 gallons of gasoline

var trip1 = 122; //the variable trip1 shows the number of miles I went on one tank of gas
var trip2 = 119; //the variable trip2 shows the number of miles I went on one tank of gas the following week
var trip3 = 110; //the variable trip3 shows the number of miles I went on one tank of gas the following week
var trip4 = 126;

var average = (trip1 + trip2 + trip3 + trip4)/4; //this adds the average mileage for four fill ups and divides by 4 to find the average mileage

var miles = (average / tankCap); //this divides the average mileage by the capacity of the tank to find my miles per gallon

var per100 = (100 / miles);


console.log(miles);
console.log("It would take", per100, "to travel 100 miles"); //the answer to the question



