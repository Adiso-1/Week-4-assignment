// with a simple change of the sort we'll get the longest words
const getLongestWords = (string) => {
  let array = string.split(" ").sort((a, b) => b.length - a.length); // sorted array form the longest word to shortest
  filteredArray = array.filter((word) => word.length >= array[0].length); // filter the array to longest words
  return filteredArray[0].length; 
};
console.log(getLongestWords("Hello my name is adi I love javascript"));
