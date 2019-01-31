const characters = [
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 100 },
  { name: 'мечник', health: 100 },
];

export default function setUpAttacks(charArr, items, shield, damage) {
  const result = charArr;
  let charactersCount = result.length;

  for (let i = 0; i < result.length; i++) {
    if (result[i].health <= 0) {
      charactersCount = charactersCount - 1;
    }
  }
  
  if (shield === true) {
    damage = Math.round(damage/charactersCount);
    for (let i = 0; i < result.length; i++) {
      if (result[i].health > 0) {
        result[i].health = result[i].health - damage;
      }
    }
    console.info(`Урон на ${charactersCount} героев: ${damage}`);
  } else {
    console.info(`Урон ${damage} нанесён: ${result[items].name}у`);
    result[items].health = result[items].health - damage;
  }

  return result; 
}

// const attacks = setUpAttacks(characters, 2, shield = true, 20);
// (id-героя, защита вкл/выкл, урон)

// console.log(characters);
