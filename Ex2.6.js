const centuryFromYear = (year) => year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1; 

// tests 
console.log(centuryFromYear(1900));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(-100));
console.log(centuryFromYear(-1000));