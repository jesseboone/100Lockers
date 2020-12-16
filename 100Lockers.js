// Jesse Boone
// 100 Lockers Problem javascript analysis

// Initializing lockers
let numLockers = 15;
let lockers = [];
for (var i = 0; i < numLockers; i++) {
 	lockers.push(i);
}
console.log(lockers);

function findChains() {
	let chains = [];
	let chain = [];
	let ndx = 0;
	for (var i = 0; i < numLockers; i++) {
		// if visited, skip
		// else if (lockers[ndx] == chain[0])
		  // complete chain (append to chains and reset to [])
		  // CONSIDER CASE OF INDIVIDUAL CHAINS (like 9 -> 9)
		// else 
		  // append to chain, & set ndx to current pointer
	}
	return chains;
}

function analyze_Lockers() {
	// Shuffling order of lockers
	lockers = shuffle(lockers);
	console.log(lockers);

	// Find Chains
	chains = findChains();

	// Show chains
	console.log(chains);

	// Decide victory if largest chain is <= search size
}

function setup() {
	createCanvas(600, 600);
	analyze_Lockers();
}





function draw() {
	background(255);

}