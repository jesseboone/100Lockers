// Jesse Boone
// Ryan Brightwell
// 100 Lockers Problem javascript analysis

// Initializing lockers
let numLockers = 100;
let lockers1 = [];
for (var i = 0; i < numLockers; i++) {
 	lockers1.push(i);
}
console.log(lockers1);

function findChains(lockers) {
	let chains = []; //Contains all loops
	let chain = []; //Used for one loop DFS
	let visited = []; //keeps track of nodes already visited by DFS
	let k = 0; //keeps track of number of unique loops (numloops = k + 1)

	//Initialize Visited
	for (var i = 0; i< lockers.length; i++) {
		visited.push(0);
	}
	
	for (var i = 0; i < numLockers; i++) {
		let ndx = i;
		// Already-Visited Case
		if (visited[i]) {
			continue; 
		}

		//Loop-Building Case
		do {
			visited[ndx] = 1;
			chain.push(lockers[ndx]);
			ndx = lockers[ndx];
		}
		while (lockers[ndx] != chain[0])

		// Loop-Completing Case 
		chains.push(chain);
		chain = [];
	}
	return chains;
}

function analyze_Lockers() {
	// Shuffling order of lockers
	lockers1 = shuffle(lockers1);
	console.log(lockers1);

	// Find Chains
	chains = findChains(lockers1);

	// Show chains
	console.log(chains);

	// Decide victory if largest chain is <= search size
	let lengths = [];
	for (var i = chains.length - 1; i >= 0; i--) {
		lengths.push(chains[i].length);
	}
	let maximum = max(lengths);
	console.log(maximum);
	if(maximum <= numLockers/2) print("Victory!");
}

function setup() {
	createCanvas(600, 600);
	analyze_Lockers();
}





function draw() {
	background(255);

}