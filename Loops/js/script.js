//LOOPS - 3 TYPES OF LOOPS: WHILE, DO WHILE, FOR
//While loops look similar to "if" conditional statements


//WHILE LOOPS
var b = 10;//setsup the index

while (b > 0){//checks the condition
	console.log(b + "kegs on the wall");
	b--//this decrements or increments the loop (index). Otherwise it would loop for infinity
}

//DO WHILE LOOPS
var c = 10;

do {
	console.log(c + "kegs on the wall");
	c--;
}//this code will run

while (c > 0);//as long as this condition is true