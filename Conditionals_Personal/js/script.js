// Adrian Velazquez
// October 17th 2013
// Conditionals_Personal

//Buying my BMW

var savings = 3000;//this variable holds the value of how much i have in my savings account
var bmw = 4500;//this variable holds the value of how much the bmw costs
var payCheck =1500;//this variable holds the value of how much my average paycheck is
var payDay = friday;//this variable holds the value of when payday is
var friday = false;//this variable holds the value of whether it is friday or not

//if today is payday and if i get paid 1500 dollars i can buy the bmw, if not i have to wait

if(payDay == true && payCheck >= 1500)/*if today is payday, and if my check is greater than or equal to 1500*/{
	console.log("I can buy my BMW!");//if the above conditions are met, print "I can buy my BMW"
}else if(friday = true || payCheck < 1500)/*If today is friday, then it is payday or if my paycheck is less than 1500*/{
	console.log("I have to wait till next payday");//if the above conditions are met, print "I have to wait till next payday"
}else{
	console.log("I cant buy my BMW");//if both conditions are not met or true, print "I cant buy my BMW"
}
