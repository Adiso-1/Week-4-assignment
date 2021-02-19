// ! explicit way
console.time('explicit-start')
const fibonacci = (n) => {
    let array = [0,1];
    let i = 2;
    while (i < n) {
        array.push(array[array.length - 1] + array[array.length - 2]);
        i++;
    }
    return array.join();
}
console.log(fibonacci(10));
console.timeEnd('explicit-start')

//! short way
console.time("short-start");
const fibonacci2 = (n) => Array(n).fill(1).map((el, i, array) => (i <= 1 && (array[i] = 1)) || (array[i] = array[i - 1] + array[i - 2])).join();
console.log(fibonacci2(10));
console.timeEnd("short-start"); //? 100% of the times faster, ~9 times faster
