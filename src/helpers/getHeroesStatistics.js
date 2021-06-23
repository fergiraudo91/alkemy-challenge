const getHeroesStatistics = (heroes) => {
  console.log(heroes);
    const heroesAmount = heroes ? heroes.length : 0;
  const accIntelligence =
    heroesAmount > 0
      ? heroes
          .map(({powerstats: {intelligence}}) => intelligence !=='null' ? +intelligence: 0)
          .reduce((prev, next) => prev + next)
      : 0;
  const accStrength =
    heroesAmount > 0
      ? heroes
          .map(({powerstats: {strength}}) => strength !== 'null' ? +strength : 0)
          .reduce((prev, next) => prev + next)
      : 0;
  const accSpeed =
    heroesAmount > 0
      ? heroes
          .map(({powerstats: {speed}}) => speed !=='null' ? +speed: 0)
          .reduce((prev, next) => prev + next)
      : 0;
  const accDurability =
    heroesAmount > 0
      ? heroes
          .map(({powerstats: {durability}}) => durability !== 'null' ? +durability : 0)
          .reduce((prev, next) => prev + next)
      : 0;
  const accPower =
    heroesAmount > 0
      ? heroes
          .map(({powerstats: {power}}) => power !== 'null' ? +power : 0)
          .reduce((prev, next) => prev + next)
      : 0;
  const accCombat =
    heroesAmount > 0
      ? heroes
          .map(({powerstats: {combat}}) => combat !== 'null' ? +combat : 0)
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