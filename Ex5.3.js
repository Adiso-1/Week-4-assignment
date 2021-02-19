const toCamelCase = (string) => {
    return string
      .replace(/[^A-Za-z0-9]/g, " ")
      .replace(/\s+/gi, " ")
      .split(" ")
      .map((el,i) => i > 0 ? el[0].toUpperCase() + el.slice(1) : el).join('');
}
console.log(toCamelCase('hello$$%4@@hiiiii'));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));