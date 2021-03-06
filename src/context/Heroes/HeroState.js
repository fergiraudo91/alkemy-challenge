import React, { useReducer } from "react";
import HeroContext from "./HeroContext";
import HeroReducer from "./HeroReducer";
const HeroState = (props) => {
  const initialState = !!localStorage.getItem("heroes")
    ? JSON.parse(localStorage.getItem("heroes"))
    : {
        heroes: [],
        good: 0,
        evil: 0,
      };

  const [state, dispatch] = useReducer(HeroReducer, initialState);
  console.log(state);

  const addGood = (quantity) => {
    dispatch({
      type: "ADD_GOOD",
      payload: quantity,
    });
  };

  const addEvil = (quantity) => {
    dispatch({
      type: "ADD_EVIL",
      payload: quantity,
    });
  };

  const addHeroes = (hero) => {
    dispatch({
      type: "ADD_HERO",
      payload: hero,
    });
  };

  const deleteHeroes = (heroId) => {
    dispatch({
      type: "DELETE_HERO",
      payload: heroId
    })
  };

  return (
    <HeroContext.Provider
      value={{
        heroes: state.heroes,
        good: state.good,
        evil: state.evil,
        addHeroes,
        deleteHeroes,
        addGood,
        addEvil,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroState;
