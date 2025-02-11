// Jesse Boone
// Ryan Brightwell
// 100 Lockers Problem javascript analysis

// Cycling option and settings
let cycling = false;
let cycles = 1000;

// ADD SLIDERS FOR:
// NUMBER OF LOCKERS INCLUDED (could be tough, not always a square)
// LENGTH OF ALLOWED CHAIN (easier)
// ANYTHING ELSE?

// Record keeping
let released = 0;
let wins_losses = [0, 0];
let maxes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let victory = false;
let resultP;


// Initializing lockers
let numLockers = 100;
let lockers1 = [];
for (var i = 0; i < numLockers; i++) {
 	lockers1.push(i);
}

// colors used later
let colors = [
[0,0,255],
[0,255,0],
[255,0,0],
[0,255,255],
[255,0,255],
[255,255,0],
[0,0,128],
[0,128,0],
[128,0,0],
[0,128,128],
[128,0,128],
[128,128,0],
[128,128,128],
[130,60,180]
]

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
	// console.log(lockers1);

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
	// console.log(maximum);
	if(maximum <= numLockers/2) {
		resultP = createP('');
    	resultP.style('font-size', '32pt');
    	victory = true;
		wins_losses[0]+=1;
	}
	else wins_losses[1]+=1;

	maxes[maximum]+=1;

}

function setup() {
	createCanvas(600, 600);
	if (cycling) {
		for (var i = 0; i < cycles; i++) {
			analyze_Lockers(lockers1);
		}
	}
	else analyze_Lockers(lockers1);
	// console.log(lockers1);
	// console.log(wins_losses);
	// console.log(maxes);
}

function drawChain(chain, curr, R, G, B, w10, w20, h10) {
	// let rand = random(3);
	// if (rand == 0) R = 0;
	// else if (rand == 1) B = 0;
	// else G = 0;
	console.log(chain);
	console.log(R,G,B);
	// let curr = 0;
	let next = chain[0];
	fill(R,G,B);
	for (let i = 0; i < chain.length; i++) {
		// This part needs to be fixed if we keep it like this, not sure why
		// the start of every chain is white most of the time
		// let r = map(i, chain.length-1, 0, 0, R);
		// let g = map(i, chain.length-1, 0, 0, G);
		// let b = map(i, chain.length-1, 0, 0, B);
		// fill(r,g,b);
		rect( (curr%10)*w10, int(curr/10)*h10, w10,h10 );
		curr = next;
		next = lockers1[curr];
	}
	// console.log(chain);

}

function draw() {
	background(255);
	let w10 = width / 10;
	let w20 = w10/2;
  	let h10 = height / 10;
  	strokeWeight(2);
  
  for (let i = 0; i < 11; i++) {
  // draw horizontal lines -> line(x1,y1,x2,y2)
  	line(0, i*w10, width, i*h10);
  // draw vertical lines
  	line(i*w10, 0, i*h10, height);
  }

  // color squares of the chains
  for (let i = 0; i < chains.length; i++) {
  	let R = colors[i][0]; let G = colors[i][1]; let B = colors[i][2];
  	drawChain(chains[i],i,R,G,B,w10,w20,h10);
  }

  // fills lockers with the text of numbers assigned to them
  textSize(32); textAlign(CENTER, TOP); fill(255);
  strokeWeight(2.5); stroke(2);
  for (let i=0; i<100; i++) {
  	text(lockers1[i],(i%10)*w10+w20,int(i/10)*h10+15);
  }

  if (victory) {
	resultP.html(`Victory!`);
  }

  noLoop();
}