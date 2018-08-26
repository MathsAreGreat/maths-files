let ppcm = (a, b) => a * b / pgcd(a, b);
let paire = (a) => !a % 2;
let aleatoire = (min, max) => {
  if (min > max) return aleatoire(max, min);
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
  if (a % b != 0) return pgcd(b, a % b);
  else return b;

}