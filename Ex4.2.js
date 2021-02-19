const tribonacci = (array,n) => {
    if (n === 0 || n < 0 || !/[\d]/.test(n)) {
      return [];
    }
    let i = 3;
    while (i < n) {
    array.push(array[array.length - 1] + array[array.length - 2] + array[array.length - 3]);
    i++;
    }
    return array.join();
};

// tests
console.log(tribonacci([1, 1, 1],10));
console.log(tribonacci([0, 0, 1],10));
console.log(tribonacci([0, 0, 1],0));
console.log(tribonacci([0, 0, 1],-1));
console.log(tribonacci([0, 0, 1],'hello'));
