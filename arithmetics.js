let ppcm = (a, b) => a * b / pgcd(a, b);
let paire = (a) => !a % 2;
let randomValue = (min, max) => {
  if (max === undefined) return randomValue(0, min);
  if (min > max) return randomValue(max, min);
  return (max - min) * Math.random() + min;
}
let premier = (nb) => {
  if (nb < 2) return 0;
  let max = Math.floor(Math.sqrt(nb)) + 1;
  let i = 2;
  while (i < max) {
    if (nb % i == 0) return 0;
    i++;
  }
  return 1;
}
let premiers = (a, b) => {
  if (b === undefined) return premiers(0, a);
  if (a > b) return premiers(b, a);
  let p = [];
  for (var i = a; i <= b; i++) {
    if (premier(i)) p.push(i);
  }
  return p;
}
let pgcd = (a, b) => {
  if (a < b) return pgcd(b, a);
  if (a % b) return pgcd(b, a % b);
  else return b;
}
let factoriel = (a) => {
  if (a) return a * factoriel(a - 1);
  return 1;
}
let fib = (a) => {
  if (a > 2) return fib(a - 1) + fib(a - 2);
  return 1;
}