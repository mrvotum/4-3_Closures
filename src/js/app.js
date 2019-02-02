import setUpAttacks from './fun-setUpAttacks.js';

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 100 },
  { name: 'мечник', health: 100 },
];

const attacks = setUpAttacks(characters, 1, true, 30);
// (id-героя, защита вкл/выкл, урон)

console.log(attacks);
