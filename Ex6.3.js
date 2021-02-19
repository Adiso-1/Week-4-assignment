const organizeString = (s1,s2) => {
    const array = [...s1,...s2].sort();
    return [...new Set(array)].join('');
}; 
console.log(organizeString("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(organizeString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"));