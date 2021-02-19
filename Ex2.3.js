const findNextSquare = (n) => n ** 0.5 % 1 === 0 ? (n ** 0.5 + 1) ** 2 : 1

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
// function findNextSquare (n) {
//     if (n ** 0.5 % 1 === 0) {
//         return (n ** 0.5 + 1) ** 2;
//     } else {
//         return -1;
//     }
// }