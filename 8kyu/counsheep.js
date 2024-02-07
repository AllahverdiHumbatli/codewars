// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// solution 
var countSheep = function (num) {
  let sheepCounter = "";
  for (let count = 1; count <= num; count++) {
    sheepCounter += `${count} sheep...`;
  }
  return sheepCounter;
};