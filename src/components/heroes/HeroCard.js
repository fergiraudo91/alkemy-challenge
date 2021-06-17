import React from "react";
import { Link } from "react-router-dom";

import "./herocard.css";

export const HeroCard = ({ hero, handleHero, btnText }) => {
  return (
    <div className="card ms-3" style={{ maxWidth: "300px" }}>
      <div className="row no-gutters">
        <img src={hero.image.url} alt={hero.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <p className="card-text">
            <b>PowerStats</b>
          </p>
          <div className="card-info">
            <div className="info-columns">
              <span className="text-stats bg-primary text-white">
                Intelligence: {hero.powerstats.intelligence}
              </span>
              <span className="text-stats bg-info text-white">
                Strength: {hero.powerstats.strength}
              </span>
              <span className="text-stats bg-warning text-dark">
                Speed: {hero.powerstats.speed}
              </span>
            </div>
            <div className="info-columns">
              <span className="text-stats bg-dark text-white">
                Durability: {hero.powerstats.durability}
              </span>
              <span className="text-stats bg-danger text-white">
                Power: {hero.powerstats.power}
              </span>
              <span className="text-stats bg-success text-white">
                Combat: {hero.powerstats.combat}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button
          onClick={() => handleHero(hero.name)}
          className="btn btn-warning"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {btnText}
        </button>
        <Link to={`./hero/${hero.id}`} className="btn btn-warning">
          See More...
        </Link>
      </div>
    </div>
  );
};
