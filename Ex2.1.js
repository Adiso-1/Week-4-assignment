const sumTwoLowes = (array) => {
    return array
    .sort((a,b) => a-b)
    .slice(0,2)
    .reduce((a,b) => a + b,0)
}

// tests 
console.log(sumTwoLowes([19, 5, 42, 2, 77]));
console.log(sumTwoLowes([1500,1500,2000,10,0,-1,500]));
console.log(sumTwoLowes([0,-3,-500,-4,-2]));