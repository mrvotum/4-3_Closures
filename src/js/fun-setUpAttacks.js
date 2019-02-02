export default function setUpAttacks(result, items, shield, damage) {
  let charactersCount = result.length;

  for (let i = 0; i < result.length; i += 1) {
    if (result[i].health <= 0) {
      charactersCount -= 1;
      // количество живых персонажей (health > 0)
    }
  }

  if (shield === true) {
    const damagePart = damage - charactersCount * parseInt(damage / charactersCount);
    damage = parseInt(damage / charactersCount); // до целого
    for (let i = 0; i < result.length; i += 1) {
      if (result[i].health > 0) {
        result[i].health -= damage;
      }
    }
    if (damagePart !== 0) { // нужно для того, чтобы выполнялось условие:
      // “если баллы атаки не делятся нацело на количество живых персонажей,
      // то остаток достаётся тому, которого атакуют”
      result[items].health -= damagePart;
    }
    console.info(`Урон на ${charactersCount} героев: ${damage}, на основного: ${damagePart + damage}`);
  } else {
    console.info(`Урон ${damage} нанесён: ${result[items].name}у`);
    result[items].health -= damage;
  }

  return result;
}
