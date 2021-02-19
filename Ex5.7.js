const getLength = (string) => {
    let array = string.split(/\s+/);
    let shortest = array[0].length;
    for (let i = 0; i < array.length; i++) {
        wordLength = array[i].length;
        if (wordLength < shortest) {
          shortest = wordLength;
        }
    }
    return shortest;
} 
console.log(getLength('Hello my name is adi'));

// get an array of the shortest words
const getShortestWords = (string) => {
    let array = string.split(' ').sort((a,b) => a.length - b.length);
    return filteredArray = array.filter(word => word.length <= array[0].length)
}
console.log(getShortestWords('Hello my name is adi'));