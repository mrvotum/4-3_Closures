import setUpAttacks from '../js/app';

test('Защита выкл, урон лучнику', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
  ];
  const inputId = 1;
  const inputShield = false;
  const inputDamage = 50;

  const expected = [{"health": 100, "name": "маг"}, {"health": 50, "name": "лучник"}, {"health": 100, "name": "мечник"}]; // ожидает
  const received = setUpAttacks(inputArr, inputId, inputShield, inputDamage); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Защита вкл, урон лучнику, но примут все троя', () => {
  const inputArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
  ];
  const inputId = 1;
  const inputShield = true;
  const inputDamage = 60;

  const expected = [{"health": 80, "name": "маг"}, {"health": 80, "name": "лучник"}, {"health": 80, "name": "мечник"}]; // ожидает
  const received = setUpAttacks(inputArr, inputId, inputShield, inputDamage); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Защита вкл, урон лучнику, но примут два, один мёртв', () => {
  const inputArr = [
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
  ];
  const inputId = 1;
  const inputShield = true;
  const inputDamage = 60;

  const expected = [{"health": 0, "name": "маг"}, {"health": 70, "name": "лучник"}, {"health": 70, "name": "мечник"}]; // ожидает
  const received = setUpAttacks(inputArr, inputId, inputShield, inputDamage); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Защита вкл, урон лучнику, урон не поделится, тк он один', () => {
  const inputArr = [
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 0 },
  ];
  const inputId = 1;
  const inputShield = true;
  const inputDamage = 60;

  const expected = [{"health": 0, "name": "маг"}, {"health": 40, "name": "лучник"}, {"health": 0, "name": "мечник"}]; // ожидает
  const received = setUpAttacks(inputArr, inputId, inputShield, inputDamage); // получает
  expect(received).toEqual(expected); // сравнивает
});