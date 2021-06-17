import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeroCard } from "../components/heroes/HeroCard";
import { ProgressBar } from "../components/ui/ProgressBar";
import HeroContext from "../context/Heroes/HeroContext";
import getHeroesStatistics from "../helpers/getHeroesStatistics";
import { getMaxStatiticsValue } from "../helpers/getMaxStatiticsValue";
import "./homescreen.css";

export const HomeScreen = () => {
  const { heroes, deleteHeroes, addGood, addEvil } = useContext(HeroContext);
  const {
    heroesAmount,
    accIntelligence,
    accStrength,
    accSpeed,
    accDurability,
    accPower,
    accCombat,
    averageHeight,
    averageWeight,
  } = getHeroesStatistics(heroes);

  const handleDeleteHero = (heroId, heroAligment) => {
    if(heroAligment === "good"){
      addGood(-1);
    }
    if(heroAligment === "bad"){
      addEvil(-1);
    }
    deleteHeroes(heroId);
    localStorage.setItem("heroes", JSON.stringify(heroes));
  };

  const { maxValue, highestVariable, backgroundClass } = getMaxStatiticsValue(
    accIntelligence,
    accStrength,
    accSpeed,
    accDurability,
    accPower,
    accCombat
  );

  return (
    <div className="main">
      <h1>My Team</h1>
      {heroesAmount > 0 ? (
        <>
          <div className="container mt-2">
            <div className="row team-statitics">
              <div className="col-6 appearance-container col-md-6 col-lg-6 col-sm col-12">
                <div className="statitic mb-2">
                  <h4
                    className={`${backgroundClass} p-1 pb-2 pt-2 rounded text-white`}
                  >
                    Highest value in the team{" "}
                    <b>
                      {highestVariable} {maxValue}
                    </b>
                  </h4>
                </div>
                <h4>
                  <b>Average Weight:</b> {averageWeight}kg
                </h4>
                <h4>
                  <b>Average Heigth:</b> {averageHeight}cm
                </h4>
              </div>
              <div className="col-md-6 col-lg-6 statitics-container col-sm col-12">
                <div className="statitic">
                  <h5>Accumulated Intelligence: {accIntelligence}</h5>
                  <ProgressBar
                    value={accIntelligence / heroesAmount}
                    newClass={""}
                    maxValue={maxValue}
                  />
                </div>
                <div className="statitic mt-2">
                  <h5>Accumulated Strength: {accStrength}</h5>
                  <ProgressBar
                    value={accStrength / heroesAmount}
                    newClass={"bg-info"}
                    maxValue={maxValue}
                  />
                </div>
                <div className="statitic mt-2">
                  <h5>Accumulated Speed: {accSpeed}</h5>
                  <ProgressBar
                    value={accSpeed / heroesAmount}
                    newClass={"bg-warning"}
                    maxValue={maxValue}
                  />
                </div>
                <div className="statitic mt-2">
                  <h5>Accumulated Durability: {accDurability}</h5>
                  <ProgressBar
                    value={accDurability / heroesAmount}
                    newClass={"bg-dark"}
                    maxValue={maxValue}
                  />
                </div>
                <div className="statitic mt-2">
                  <h5>Accumulated Power: {accPower}</h5>
                  <ProgressBar
                    value={accPower / heroesAmount}
                    newClass={"bg-danger"}
                    maxValue={maxValue}
                  />
                </div>
                <div className="statitic mt-2 mb-3">
                  <h5>Accumulated Combat: {accCombat}</h5>
                  <ProgressBar
                    value={accCombat / heroesAmount}
                    newClass={"bg-success"}
                    maxValue={maxValue}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-columns mt-2 animate__animated animate__fadeIn mt-5">
            {heroes.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
                handleHero={() => handleDeleteHero(hero.id, hero.biography.alignment)}
                btnText="Delete Hero"
              />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-hero animate__animated animate__fadeIn">
          <h5>Your team is empty</h5>
          <p>Please search a hero and add it to your team</p>
          <Link to="/search" className="btn btn-warning">
            Search Hero
          </Link>
        </div>
      )}
    </div>
  );
};
