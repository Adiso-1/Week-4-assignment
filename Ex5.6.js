console.time("maskify1");
const maskify = (string) => 
string
.split('')
.reverse()
.map((letter,i) => i > 3 ? letter = '#' : letter)
.reverse()
.join('');
console.timeEnd('maskify1')

//! this function is 100% more efficient
console.time('maskify2');
const maskify2 = (string) => {
    const reversedString = string.split("").reverse().join("");
    const [first, second, third, fourth, ...rest] = reversedString;
    return [...rest.map(_ => "#"), fourth, third, second, first].join('');
}
console.timeEnd('maskify2')


// tests
console.log(maskify("4556364607935616"));
console.log(maskify2("4556364607935616"));

//? more tests
// console.log(maskify("64607935616"));
// console.log(maskify2("64607935616"));
// console.log(maskify("1"));
// console.log(maskify2("1"));
// console.log(maskify(""));
// console.log(maskify2(""));
// console.log(maskify("Skippy"));
// console.log(maskify2("Skippy"));
// console.log(maskify("Nananananananananananananananana Batman!"));
// console.log(maskify2("Nananananananananananananananana Batman!"));