// Jesse Boone
// 100 Lockers Problem javascript analysis


let numLockers = 100;
let lockers = [];
for (var i = 1; i <= numLockers; i++) {
 	lockers.push(i);
}
	console.log(lockers);



function setup() {
	createCanvas(600, 600);

	// shuffling order of lockers
	lockers = shuffle(lockers);
	console.log(lockers);

}




function draw() {
	background(255);

}