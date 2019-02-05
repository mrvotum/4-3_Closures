import { setUpAttacks } from '../js/app';
import { attacks } from '../js/app';

test('Защита выкл, урон лучнику', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
  ];

  const expected = [ // ожидает
    { health: 100, name: 'маг' },
    { health: 50, name: 'лучник' },
    { health: 100, name: 'мечник' },
  ];

  const received = attacks[1](5); // получает
  expect(received).toEqual(expected); // сравнивает
});
