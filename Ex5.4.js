const toWeirdCase = (string) => {
    let array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (j % 2 === 0) {
                console.log(array[i][j]);
                array[i].replace(array[i][j], array[i][j].toUpperCase());
            } 
        }
    }
    return array.join(' ');
}

// console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));