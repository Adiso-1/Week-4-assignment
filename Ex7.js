const myArray = [1,2,3,4,5];
// ! filter loop
const makeFilter = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 3) {
            newArray.push(array[i]);
        }        
    }
    return newArray;
}
console.log(`for loop:`);
console.log(makeFilter(myArray));

// Same condition with filter
console.log(`filter loop:`);
console.log(myArray.filter(el => el > 3));

// ! forEach loop
const forEachLoop = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
forEachLoop(myArray);
// Same with forEach
myArray.forEach((el) => console.log(el));

// ! Map loop
