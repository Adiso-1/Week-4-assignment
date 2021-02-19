const findUniq = (array) => array
.sort((a,b) => a - b)
.filter((number,i,array) => number !== array[0]);

//tests 
console.log(findUniq([1, 2, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

//TODO check for adding an edge case of all equals
