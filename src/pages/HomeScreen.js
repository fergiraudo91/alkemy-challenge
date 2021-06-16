import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeroContext from "../context/Heroes/HeroContext";
import getHeroesStatistics from "../helpers/getHeroesStatistics";
import "./homescreen.css";

export const HomeScreen = () => {
  const { heroes } = useContext(HeroContext);
  console.log(heroes);
  const {
    heroesAmount,
    accIntelligence,
    accStrength,
    accSpeed,
    accDurability,
    accPower,
    accCombat,
    averageHeight,
    averageWeight
  } = getHeroesStatistics(heroes);

  console.log(averageHeight, "cm");
  console.log(averageWeight, "kg");
  console.log("Intelligence: ", accIntelligence);
  console.log("Strength: ", accStrength);
  console.log("Speed: ", accSpeed);
  console.log("Durability: ", accDurability);
  console.log("Power: ", accPower);
  console.log("Combat: ", accCombat);

  return (
    <div className="main">
      <h1>My Team</h1>
      {heroesAmount > 0 ? (
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
