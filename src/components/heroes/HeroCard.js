import React from "react";
import './herocard.css';

export const HeroCard = ({ hero }) => {
    return (
        <div className="card ms-3" style={{ maxWidth: "300px" }}>
            <div className="row no-gutters">
                <img src={hero.image.url} alt={hero.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-text"><b>PowerStats</b></p>
                    <div className="card-info">
                        <div className="info-columns">
                            <span className="text-stats bg-primary text-white">Intelligence: {hero.powerstats.intelligence}</span>
                            <span className="text-stats bg-secondary text-white">Strength: {hero.powerstats.strength}</span>
                            <span className="text-stats bg-success text-white">Speed: {hero.powerstats.speed}</span>
                        </div>
                        <div className="info-columns">
                            <span className="text-stats bg-danger text-white">Durability: {hero.powerstats.durability}</span>
                            <span className="text-stats bg-warning text-dark">Combat: {hero.powerstats.combat}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-buttons">
                <button className="btn btn-warning">Add Hero</button>
                <button className="btn btn-warning">See More...</button>
            </div>
        </div>
    );
};
