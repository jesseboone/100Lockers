// Jesse Boone
// 100 Lockers Problem javascript analysis

let numLockers = 100;

let lockers = [];
for (var i = 1; i <= numLockers; i++) {
  lockers.push(i);
}
lockers = shuffle(lockers);

console.log(lockers);
