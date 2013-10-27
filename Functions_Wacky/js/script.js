//Adrian Velazquez
//October 24th 2013
//Functions - Wacky

/*Make sure each of the sub-projects follows this list of criteria:
As in the earlier assignments you will need to create code that calculates a result. You may not use the same formulas or code used in previous assignments.
Decide what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.
Information should be collected from the user with prompts
Calculate the result using the variables in an expression (NOT the literal values or numbers)
The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well.
Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.
*/

//Friday is right around the corner. False! Chronological distance cannot be measured geometrically. lol 

var humpDay = true;//boolean variable with a definition of humpDay and a declaration of true
var friday = false;//boolean variable with a definition of friday and a declaration of false
var thursday = false;//boolean variable with a definition of thursday and a declaration of false
var partyTime = true;//boolean variable with a definition of partyTime and a declaration of true
var notYet = true;//boolean variable with a definition of notYet and a declaration of true
var lol = "Chronological distance cannot be measured geometrically";//a string variable with a definition of lol and a string declaration

if(thursday >= humpDay && friday == partyTime)/*if statement: if thursday is greater than or equals to friday AND friday is exactly equals to PartyTime*/{
	console.log("It\'s party Time!!!");//print to the console that "It's party time"
}else if(partyTime < friday || thursday > humpDay)/*if partyTime is less than friday OR thrsday is greater than humpDay*/{
	console.log(notYet);//print to the console the declaration of the variable with the definition of notYet
}else{
	console.log(lol + " but the math for that must be awesome");/*print to the console the declaration of the variable with the definition of lol, along with the string*/
}




