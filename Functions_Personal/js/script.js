//Adrian Velazquez
//October 24th 2013
//Functions - Personal

//Example 1 --------------------------------------------------------------------------------------------------------------------
//my kill death ratio equals .750, gun1 equals the scar 119, gun2 = the vector kd
var kdRatio = .750;
var gun1 = "Scar 119";
var gun2 = "Vector KD";

if (kdRatio > 1.0)/*if my kill death ratio is greater than 1.0*/{
	console.log("You can use the " + gun1);//I can use the Scar 119
}else{
	console.log("Sorry, you still have to use the " + gun2);//if the above statement is false, I will have to use the Vector KD
}

//The above code as a Ternary
(kdRatio > 1.0) ? console.log("You can use the " + gun1) : console.log("Sorry, you still have to use the " + gun2);


//Example 2 --------------------------------------------------------------------------------------------------------------------
//two arrays that hold soldier types and gunclasses
var gunClasses = ["Hammer", "LSat", ".50 cal", "Skorpion Evo", "MP5"];
var soldier = ["Sniper", "Infantry", "Gunner"];


if (gunClasses[2] = soldier[0])/*if the .50cal equals the sniper*/{
	console.log("You are a " + soldier[0] + " and can use the " + gunClasses[2]);//I am a sniper and can use the .50cal
}else{
	console.log("You are a " + soldier[2] + " and should use the " + gunClasses[0]);/*if th above statement is false, I am an infantry and should use the hammer*/
}

//the above code as a ternary
(gunClasses[2] = soldier[0]) ?
console.log("You are a " + soldier[0] + " and can use the " + gunClasses[2]):
console.log("You are a " + soldier[2] + " and should use the " + gunClasses[0]);


