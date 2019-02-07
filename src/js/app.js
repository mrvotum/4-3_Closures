const characters = [
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 100 },
  { name: 'мечник', health: 100 },
];

function damageWithHealthControl(character, damage) {
  const c = character;
  c.health = (c.health >= damage) ? c.health - damage : 0;
}

function setUpAttacks(characters, shield = true) {
  return characters.map(character => (
    // item == { name: 'маг', health: 100 } и тд
    function (damage) {
      if (shield === false) {
        damageWithHealthControl(character, damage);
      } else {
        // при включенной защите
        const charactersLive = characters.filter(item => item.health > 0);
        const damageRemainder = damage % charactersLive.length;
        const damagePart = (damage - damageRemainder) / charactersLive.length; // до целогo
        for (let i = 0; i < charactersLive.length; i += 1) {
          damageWithHealthControl(charactersLive[i], damagePart);
        }
        damageWithHealthControl(character, damageRemainder);
        console.info(`Весь урон: ${damage}, на ${charactersLive.length} героев по: ${damagePart}, на основного: ${damagePart + damageRemainder}`);
      }
    }
  ));
}

const attacks = setUpAttacks(characters, true);
attacks[1](30);
console.log(characters);

export default setUpAttacks;
