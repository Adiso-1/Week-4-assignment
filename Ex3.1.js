function nb_year(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    p0 = p0 * (1 + percent / 100) + aug;
    n++;
  }
  return n;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));