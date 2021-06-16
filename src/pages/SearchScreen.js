import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { HeroCard } from "../components/heroes/HeroCard";
import { Modal } from "../components/ui/Modal";
import { Spiner } from "../components/ui/Spiner";
import HeroContext from "../context/Heroes/HeroContext";
import { useForm } from "../hooks/useForm";
import "./searchScreen.css";


export const SearchScreen = () => {
  const { addHeroes, heroes, good, addGood, evil, addEvil } = useContext(HeroContext);
  const URL = "https://superheroapi.com/api/";
  const API = "10222975487554224";
  const [value, handleInputChange] = useForm({ search: "" });
  const [modal, setModal] = useState("");
  const { search } = value;
  const [loading, setLoading] = useState(false);
  const [heroesInfo, setHeroesInfo] = useState("");
  const [error, setError] = useState("Search a hero");
  const [searchTerm, setSearchTerm] = useState("default");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  const handleAddHero = (hero) => {
    console.log(evil, addEvil);
    const {alignment} = hero.biography;
    if(heroes.find(h => h.id === hero.id)){
      setModal({
        title: 'The hero wasn`t added',
        text: `The hero ${hero.name} is already on the team!`,
        background: 'bg-danger',
        color: 'text-white'
      });
      return;
    }
    if(alignment === "good"){
      if(good === 3){
        setModal({
          title: 'The hero wasn`t added',
          text: "You already have three good heroes",
          background: 'bg-danger',
          color: 'text-white'
        });
        return;
      }
      addGood();
    }
    else{
      if(evil === 3){
        setModal({
          title: 'The hero wasn`t added',
          text: "You already have three bad heroes",
          background: 'bg-danger',
          color: 'text-white'
        });
        return;
      }
      addEvil();
    }
    addHeroes(hero);
    setModal({
      title: "The hero was added",
      text: `The hero ${hero.name} was added to your team`,
      background: 'bg-white',
      color: 'text-body'
    });
  }

  useEffect(() => {
    
    if (searchTerm === "default") {
      return;
    }
    const getHeroesInfo = async () => {
      setLoading(true);
      setError(false);
      let response = await axios.get(`${URL}${API}/search/${searchTerm}`);
      response.data.response === "success" ? setHeroesInfo(response.data.results)
        : setError(response.data.error);
      setLoading(false);
    };
    getHeroesInfo();
  }, [searchTerm]);

  useEffect(() => {
    const heroState = {
      heroes,
      good,
      evil
    }
   localStorage.setItem("heroes", JSON.stringify(heroState));
  }, [heroes, good, evil])

  return (
    <>
      <div className="main">
        <div className="container pt-2">
          <h2>Search Hero</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group search-group">
              <input
                type="text"
                className="form-control"
                id="search-hero"
                onChange={handleInputChange}
                value={search}
                name="search"
              />{" "}
              <button type="submit" className="btn btn-warning">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          {loading ?
            <Spiner />
            :
            (<div>
              {
                error ?
                  <p>{error}</p>

                  :
                  <div className="card-columns mt-2">
                    {
                      
                      heroesInfo.map(hero => (
                        <HeroCard key={hero.id} hero={hero} handleAddHero={() => handleAddHero(hero)} />
                      ))

                    }
                  </div>
              }
            </div>)
          }
        </div>
      </div>
      <Modal title={modal.title} text={modal.text} background={modal.background} color={modal.color} />
    </>
  );
};
