function binaryValue(array) {
return array.reverse()
.map((digit, index) => 2 ** index * digit)
.reduce((a, b) => a + b, 0);
}
console.log(binaryValue([0, 0, 0, 1]));
console.log(binaryValue([0, 0, 1, 0]));
console.log(binaryValue([1, 1, 1, 1]));
console.log(binaryValue([1, 0, 1, 1]));