const summation = (n) => {
    return [...Array(n + 1).keys()].reduce((a,b) => a + b,0);
}
console.log(summation(10));

