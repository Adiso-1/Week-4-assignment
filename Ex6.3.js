const organizeString = (s1,s2) => {
    const array = [...s1.toLowerCase(), ...s2.toLowerCase()].sort();
    console.log(array);
    return [...new Set(array)].join('');
}; 
console.log(organizeString("xyaabBbccccdefww", "xxxxyyyyabklmopq"));
console.log(organizeString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"));