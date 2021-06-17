import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import { ProgressBar } from "../ui/ProgressBar";
import { Spiner } from "../ui/Spiner";
import "./heroscreen.css";

export const HeroScreen = ({history}) => {
  const { heroId } = useParams();
  const [hero, setHero] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError(false);
    const getHeroDetails = async () => {
      setLoading(true);
      const heroInfo = await getHeroById(heroId);
      heroInfo.data.response === "success"
        ? setHero(heroInfo.data)
        : setError(heroInfo.data.error);
      setLoading(false);
    };
    getHeroDetails();
  }, [heroId]);

  if (error) {
    return <Redirect to="/search" />;
  }
  const handleReturn = () => {
      if(history.length < 2){
          history.push("/");
      }
      else{
          history.goBack();
      }
  }

  console.log(hero);
  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
        <div className="row pt-5 main " style={{ marginRight: "0" }}>
          <div className="col-4 hero-pic animate__animated animate__fadeInLeft">
            <img
              src={hero.image.url}
              alt={hero.name}
              className="img-thumbnail"
            />
          </div>
          <div className="col-8 hero-details animate__animated animate__fadeIn" style={{ paddingRight: "0" }}>
            <h3 style={{color:"orange"}}>{hero.name}</h3>
            <ul className="list-group list-group-flush hero-list">
              <li className="list-group-item">
                <b className="title-detail">Full Name:</b> {hero.biography["full-name"]} - <b className="title-detail">Alignment:</b> {hero.biography.alignment}
              </li>
              <li className="list-group-item">
                <h5 className="title-detail">Appearance:</h5>
                <div className="hero-appearance">
                  <span>
                    <b className="title-detail">Height:</b> {hero.appearance.height[1]}{" "}
                  </span>
                  <span>
                    <b className="title-detail">Weight:</b> {hero.appearance.weight[1]}{" "}
                  </span>
                  <span>
                    <b className="title-detail">Eyes Color:</b> {hero.appearance["eye-color"]}
                  </span>
                  <span>
                    <b className="title-detail">Hair Color:</b> {hero.appearance["hair-color"]}
                  </span>
                </div>
              </li>
              <li className="list-group-item">
                <b className="title-detail">Alias:</b> {hero.biography.aliases[0]}
              </li>
              <li className="list-group-item">
                <b className="title-detail">Working Place:</b> {hero.work.base}
              </li>
              <li className="list-group-item">
                <h5 className="title-detail">PowerStats:</h5>
                <div className="powerstat">
                  <p>Intelligence: {hero.powerstats.intelligence}</p>
                    <ProgressBar value={hero.powerstats.intelligence} newClass="" />
                </div>
                <div className="powerstat mt-3">
                  <p>Strength: {hero.powerstats.strength}</p>
                    <ProgressBar value={hero.powerstats.strength} newClass="bg-success" />
                </div>
                <div className="powerstat mt-3">
                  <p>Speed: {hero.powerstats.speed}</p>
                  <ProgressBar value={hero.powerstats.speed} newClass="bg-warning" />
                </div>
                <div className="powerstat mt-3">
                  <p>Durability: {hero.powerstats.durability}</p>
                  <ProgressBar value={hero.powerstats.durability} newClass="bg-info" />
                </div>
                <div className="powerstat mt-3">
                  <p>Power: {hero.powerstats.power}</p>
                  <ProgressBar value={hero.powerstats.power} newClass="bg-danger" />
                </div>
                <div className="powerstat mt-3">
                  <p>Combat: {hero.powerstats.combat}</p>
                  <ProgressBar value={hero.powerstats.combat} newClass="bg-warning" />
                </div>
              </li>
            </ul>
            <button 
            className="btn btn-warning mt-3 mb-3"
            onClick={handleReturn}
            >Return</button>
          </div>
        </div>
      )}
    </>
  );
};
