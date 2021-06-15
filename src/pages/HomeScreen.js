import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeroContext from "../context/Heroes/HeroContext";
import "./homescreen.css";

export const HomeScreen = () => {
  const { heroes } = useContext(HeroContext);
  const accIntelligence =
    heroes.length > 0
      ? heroes
          .map((hero) => +hero.powerstats.intelligence)
          .reduce((prev, next) => prev + next)
      : 0;
  const accStrength =
    heroes.length > 0
      ? heroes
          .map((hero) => +hero.powerstats.strength)
          .reduce((prev, next) => prev + next)
      : 0;
  const accSpeed =
    heroes.length > 0
      ? heroes
          .map((hero) => +hero.powerstats.speed)
          .reduce((prev, next) => prev + next)
      : 0;
  const accDurability =
    heroes.length > 0
      ? heroes
          .map((hero) => +hero.powerstats.durability)
          .reduce((prev, next) => prev + next)
      : 0;
  const accPower =
    heroes.length > 0
      ? heroes
          .map((hero) => +hero.powerstats.power)
          .reduce((prev, next) => prev + next)
      : 0;
  const accCombat =
    heroes.length > 0
      ? heroes
          .map((hero) => +hero.powerstats.combat)
          .reduce((prev, next) => prev + next)
      : 0;
  console.log("Intelligence: ", accIntelligence);
  console.log("Strength: ", accStrength);
  console.log("Speed: ", accSpeed);
  console.log("Durability: ", accDurability);
  console.log("Power: ", accPower);
  console.log("Combat: ", accCombat);

  return (
    <div className="main">
      <h1>My Team</h1>
      {heroes.length > 0 ? (
        <div>Heroes bla bla</div>
      ) : (
        <div className="empty-hero">
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
