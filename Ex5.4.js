const toWeirdCase = (string) => {
    let array = string.split(' ');
    return array
      .map((sentence) =>
        [...sentence]
          .map((word, index) =>
            index % 2 === 0 ? word.toUpperCase() : word.toLowerCase()
          )
          .join("")
      )
      .join(" ");
}
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));