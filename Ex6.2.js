const countDuplicates = (string) => {
    let array = [...string.toLowerCase()];
    console.log(array);
    let duplicateLetters = array.filter((el,i) => array.indexOf(el) !== i)
    return [...new Set(duplicateLetters)].length;
}

console.log(countDuplicates("ABBA"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("Indivisibilities"));
console.log(countDuplicates("aA11"));
console.log(countDuplicates("abcde"));
