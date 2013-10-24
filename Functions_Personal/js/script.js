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

//do's in do while loops will be ran first, followed by the while. This means that a do will run even if a while is false.


//FOR LOOPS - ARE THE SHORTHAND VERSION OF LOOPS
//every thing can be scripted in one line: var, condition, increment, index, action...

for (var i = 10; i > 0; i--){
	console.log(i + "kegs of beer on the wall");
}




