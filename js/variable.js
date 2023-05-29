//Menesiu pavadinimai

const months = [
  'Sausis',
  'Vasaris',
  'Kovas',
  'Balandis',
  'Geguze',
  'Birzelis',
  'Liepa',
  'Rugjutis',
  'Rugsejis',
  'Spalis',
  'Lapkritis',
  'Gruodis'
];

console.log(months)

//Sugeneruoti "Metų balansa"

var menesiuBalansas = [300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500];


//visų metų pajamos

var visosPajamos = menesiuBalansas.reduce(function(acc, balance) {
  return acc + balance;
}, 0);

console.log(visosPajamos) // Output: 16800

