import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeroCard } from "../components/heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import "./searchScreen.css";

export const SearchScreen = () => {
  const URL = "https://superheroapi.com/api/";
  const API = "10222975487554224";
  const [value, handleInputChange, reset] = useForm({ search: "" });
  const { search } = value;
  const [loading, setLoading] = useState(false);
  const [heroesInfo, setHeroesInfo] = useState("");
  const [error, setError] = useState("Search a hero");
  const [searchTerm, setSearchTerm] = useState("default");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(search);
    reset();
  };

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
      console.log(response);
      setLoading(false);
    };
    getHeroesInfo();
  }, [searchTerm]);

  return (
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
        {loading ? (
          <div className="spinner-border text-warning" style={{width : "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
          </div>)
          :
          (<div>
            {
              error ?
              <p>{error}</p>
              
              :
              <div className="card-columns mt-2">
                {
                  heroesInfo.map(el => (
                    <HeroCard key={el.id} hero={el} />
                  ))
                 
                }
              </div>
            }
          </div>)
        }
      </div>
    </div>
  );
};
