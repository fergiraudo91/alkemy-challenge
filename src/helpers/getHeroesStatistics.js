const getHeroesStatistics = (heroes) => {
  console.log(heroes);
    const heroesAmount = heroes ? heroes.length : 0;
  const accIntelligence =
    heroesAmount > 0
      ? heroes
          .map((hero) => +hero.powerstats.intelligence)
          .reduce((prev, next) => prev + next)
      : 0;
  const accStrength =
    heroesAmount > 0
      ? heroes
          .map((hero) => +hero.powerstats.strength)
          .reduce((prev, next) => prev + next)
      : 0;
  const accSpeed =
    heroesAmount > 0
      ? heroes
          .map((hero) => +hero.powerstats.speed)
          .reduce((prev, next) => prev + next)
      : 0;
  const accDurability =
    heroesAmount > 0
      ? heroes
          .map((hero) => +hero.powerstats.durability)
          .reduce((prev, next) => prev + next)
      : 0;
  const accPower =
    heroesAmount > 0
      ? heroes
          .map((hero) => +hero.powerstats.power)
          .reduce((prev, next) => prev + next)
      : 0;
  const accCombat =
    heroesAmount > 0
      ? heroes
          .map((hero) => +hero.powerstats.combat)
          .reduce((prev, next) => prev + next)
      : 0;

  const averageHeight =
    heroesAmount > 0
      ? Math.floor(
          heroes
            .map((hero) => +hero.appearance.height[1].replace("cm", "").trim())
            .reduce((prev, next) => prev + next) / heroesAmount
        )
      : 0;

const averageWeight = heroesAmount > 0 ? Math.floor(
    heroes
      .map((hero) => +hero.appearance.weight[1].replace("kg", "").trim())
      .reduce((prev, next) => prev + next) / heroesAmount
  )
: 0;

      return {
          heroesAmount,
          accIntelligence,
          accStrength,
          accSpeed,
          accDurability,
          accPower,
          accCombat,
          averageHeight,
          averageWeight
      }
}

export default getHeroesStatistics;