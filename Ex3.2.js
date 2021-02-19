const bus = (array) => array.flat().reduce((a,b,index) => index % 2 === 0 && a + b || a - b , 0)

console.log(
  bus([
    [2, 0],
    [4, 1],
    [8, 5],
    [0, 2],
    [1, 0],
  ])
);