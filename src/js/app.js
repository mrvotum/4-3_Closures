let attacks;
const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 100 },
  { name: 'мечник', health: 100 },
];

function setUpAttacks(shield) {
  // return attacks = characters.map((item) => (damage) => item.health - damage);
  return attacks = characters.map(function (item) {
    // item == { name: 'маг', health: 100 } и тд
    return function (damage) {
      if (shield === false){
        if (item.health > 0 && item.health >= damage) {
          item.health -= damage;
          return characters;
        } else {
          // если здоровья меньше, чем урона, то:
          item.health = 0;
          return characters;
        }
      } else { // при включенной защите
        const charactersLive = characters.filter(whoLive => whoLive.health > 0);
        const damagePart = damage - charactersLive.length * parseInt(damage / charactersLive.length);
        damage = parseInt(damage / charactersLive.length); // до целого
        for (let i = 0; i < characters.length; i += 1) {
          if (characters[i].health > 0 && characters[i].health >= damage) {
            characters[i].health -= damage;
          } else if (characters[i].health > 0 && characters[i].health < damage) {
            characters[i].health = 0;
          }
        }
        if (damagePart !== 0) { // нужно для того, чтобы выполнялось условие:
          // “если баллы атаки не делятся нацело на количество живых персонажей,
          // то остаток достаётся тому, которого атакуют”
          item.health -= damagePart;
        }
        console.info(`Урон на ${charactersLive.length} героев: ${damage}, на основного: ${damagePart + damage}`);
      }
      return characters;
    };
  });
}

setUpAttacks(false);
console.log(attacks[1](25));
console.log(attacks[1](25));
console.log(attacks[1](25));
console.log(attacks[1](25));

export { setUpAttacks, attacks };
