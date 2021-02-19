const accum = (string) => {
    if (/[a-zA-z]/.test(string)) {
        let newString = string.split("").map((el,i) => el.toUpperCase() + el.toLowerCase().repeat(i));
        return newString.join('-')
    }
};
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
