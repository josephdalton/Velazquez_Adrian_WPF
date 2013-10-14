//Casting - Treating strings like numbers and numbers like strings
//Casting types: arrays, numbers, booleans, strings, etc.
//CASTING STRINGS AS NUMBERS
var stringVar = "6"; //This holds he string 6 not the numerical character 6. (its in parenthesis)
var result = 7 + stringVar;
console.log(result);

/*in order to get a computer to treat this result variable as a number rather than a string, you enclose the variable in parenthesis and add the word Number (capital N)*/

var stringVar2 = "6";
var result2 = 7 + Number(stringVar2); // treats stringVar like a number rather than a string because of (Number and ())
console.log(result2);
//this tells the machine to treat it or cast it as a number rather than a string

//CASTING NUMBERS AS STRINGS
 var areaCode = 718;
 var firstPart = 585;
 var secondPart = 8987;
 var phoneNo = String(areaCode) + String(firstPart) + String(secondPart); //remember to use capital letters when casting
 console.log(phoneNo);

//to take it a step farther and add formatting to the number, we can concatenate using "quotation marks"
//(718) 585-8987
var area = 718;
var first = 585;
var second = 8987;
var fullPhone = "(" + String(area) + ")" + String(first) + "-" + String(second);
console.log(fullPhone);

