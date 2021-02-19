const yesNo = (boolen) => typeof boolen === 'boolean' && boolen && "Yes" || "No";

// tests
console.log(yesNo('hello'));
console.log(yesNo([]));
console.log(yesNo(true));
console.log(yesNo(false));
console.log(yesNo(0));