import setUpAttacks from '../js/app';

test('Защита вкл, урон лучнику, получат все', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
  ];

  const expected = [ // ожидает
    { health: 84, name: 'маг' },
    { health: 82, name: 'лучник' },
    { health: 84, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, true); // формируется массив функций атаки
  attacks[1](50); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});

test('Защита вкл, урон лучнику, один мёртв, получат все', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 0 },
  ];

  const expected = [ // ожидает
    { health: 75, name: 'маг' },
    { health: 75, name: 'лучник' },
    { health: 0, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, true); // формируется массив функций атаки
  attacks[1](50); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});

test('Защита выкл, урон мечнику', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
  ];

  const expected = [ // ожидает
    { health: 100, name: 'маг' },
    { health: 100, name: 'лучник' },
    { health: 50, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, false); // формируется массив функций атаки
  attacks[2](50); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});

test('Защита выкл, урон мечнику, урона > здоровья', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 10 },
  ];

  const expected = [ // ожидает
    { health: 100, name: 'маг' },
    { health: 100, name: 'лучник' },
    { health: 0, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, false); // формируется массив функций атаки
  attacks[2](50); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});

test('Защита вкл, урон мечнику, но получат все, урона > здоровья', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 100 },
  ];

  const expected = [ // ожидает
    { health: 50, name: 'маг' },
    { health: 0, name: 'лучник' },
    { health: 50, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, true); // формируется массив функций атаки
  attacks[2](100); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});

test('Защита вкл, урон мечнику, но получит урон маг, урона > здоровья', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 0 },
  ];

  const expected = [ // ожидает
    { health: 0, name: 'маг' },
    { health: 0, name: 'лучник' },
    { health: 0, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, true); // формируется массив функций атаки
  attacks[2](100); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});

test('Защита выкл, урон магу, урона > здоровья', () => {
  const inputArr = [
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
    { name: 'мечник', health: 50 },
  ];

  const expected = [ // ожидает
    { health: 0, name: 'маг' },
    { health: 50, name: 'лучник' },
    { health: 50, name: 'мечник' },
  ];

  const attacks = setUpAttacks(inputArr, false); // формируется массив функций атаки
  attacks[0](80); // получает

  const received = inputArr; // получается новый массив, его и сравниваем
  expect(received).toEqual(expected); // сравнивает
});
