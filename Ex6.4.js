const isogram = (string) => {
    let array = [...string.toLowerCase()];
    return !!array.find((el, i) => array.indexOf(el) !== i);
};
console.log(isogram("Dermatoglyphics"));
console.log(isogram("aba"));
console.log(isogram("moOse"));