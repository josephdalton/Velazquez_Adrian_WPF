//Adrian Velazquez
//October 24th 2013
//Functions - Personal

var kdRatio = .750;
var gun1 = "Scar 119";
var gun2 = "Vector KD";

if (kdRatio > 1.0){
	console.log("You can use the " + gun1);
}else{
	console.log("Sorry, you still have to use the " + gun2);
}

//The above code as a Ternary

(kdRatio > 1.0) ? console.log("You can use the " + gun1) : console.log("Sorry, you still have to use the " + gun2);


//two arrays that hold soldier types and gunclasses

var gunClasses = ["Hammer", "LSat", ".50 cal", "Skorpion Evo", "MP5"];
var soldier = ["Sniper", "Infantry", "Gunner"];


if (gunClasses[2] = soldier[0]){
	console.log("You are a " + soldier[0] + " and can use the " + gunClasses[2]);
}else{
	console.log("You are a " + soldier[2] + " and should use the " + gunClasses[0]);
}

(gunClasses[2] = soldier[0]) ?
console.log("You are a " + soldier[0] + " and can use the " + gunClasses[2]):
console.log("You are a " + soldier[2] + " and should use the " + gunClasses[0]);


