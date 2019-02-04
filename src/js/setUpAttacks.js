export default function setUpAttacks(result, items, shield, damage) {
  const charactersLive = result.filter(whoLive => whoLive.health > 0);
  // количество живых персонажей (health > 0)

  if (shield === true) {
    const damagePart = damage - charactersLive.length * parseInt(damage / charactersLive.length);
    damage = parseInt(damage / charactersLive.length); // до целого
    for (let i = 0; i < result.length; i += 1) {
      if (result[i].health > 0 && result[i].health >= damage) {
        result[i].health -= damage;
      } else if (result[i].health > 0 && result[i].health < damage) {
        result[i].health = 0;
      }
    }
    if (damagePart !== 0) { // нужно для того, чтобы выполнялось условие:
      // “если баллы атаки не делятся нацело на количество живых персонажей,
      // то остаток достаётся тому, которого атакуют”
      result[items].health -= damagePart;
    }
    console.info(`Урон на ${charactersLive.length} героев: ${damage}, на основного: ${damagePart + damage}`);
  } else if (result[items].health >= damage) {
    console.info(`Урон ${damage} нанесён: ${result[items].name}у`);
    result[items].health -= damage;
  } else {
    result[items].health = 0;
  }

  return result;
}
