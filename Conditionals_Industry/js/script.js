// Adrian Velazquez
// October 17th 2013
// Conditionals_Industry

//the nice client

//if the client is nice, i will work hard for him on this project, if the client is a bad client, i wont work as hard for him

var niceClient = false;//this variable states that a seemingly nice client is false and therefore not true

(niceClient = true) ? console.log("You\'re a bad client, I wont work as hard for you") : console.log("You\'re a nice client, I\'ll work hard for you");/*if the client is bad and thats a true statement, print the string in the first action. If the client is nice and thats a true statement, print the string in the second action*/

//the above code in Conditional Logic using if else statements

var niceClient = true;//this variable states that a seemingly nice client is really true and therefore true

if(niceClient = false)/*states that the niceClient is a lie and therefore a false statement*/{
	console.log("You\'re a bad client, I wont work as hard for you");//if the above condition is true, print the string in the action
}else{
	console.log("You\'re a nice client, I\'ll work hard for you");//if the condition in the if statement is false, print the string in this action
}