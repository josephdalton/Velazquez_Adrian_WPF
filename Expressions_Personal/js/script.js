// Adrian Velazquez
// October 10th 2013
// Expressions_Personal

//how many gallons of gasoline do I need to travel 100 miles

var tankCap = 13; //the variable tank cap is the storage container for 13 gallons of gasoline - This is a given.
var trip1 = 122; //the variable trip1 shows the number of miles I went on one tank of gas - This is a given.
var trip2 = 119; //the variable trip2 shows the number of miles I went on one tank of gas the following week - This is a given.
var trip3 = 110; //the variable trip3 shows the number of miles I went on one tank of gas the following week - This is a given.
var trip4 = 126; //the variable trip4 shows the number of miles I went on one tank of gas the last week - This is a given.

var average = (trip1 + trip2 + trip3 + trip4)/4; //this adds the average mileage for four fill ups and divides by 4 to find the average mileage

var miles = (average / tankCap); //this divides the average mileage by the capacity of the tank to find my miles per gallon

var per100 = (100 / miles); //this divides the number of miles I need to travel by the miles per gallon I get from my car
console.log("It would take", per100, "to travel 100 miles"); //the answer to the question


