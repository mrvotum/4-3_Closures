import setUpAttacks from './fun-setUpAttacks.js';

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 100 },
  { name: 'мечник', health: 100 },
];

const attacks = setUpAttacks(characters, 1, false, 30);
// (массив персонажей, id-героя, защита вкл/выкл, урон)

console.log(attacks);
