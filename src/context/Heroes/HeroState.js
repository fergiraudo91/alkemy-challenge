import React, { useReducer, useState } from 'react';
import HeroContext from './HeroContext';
import HeroReducer from './HeroReducer';
const HeroState = (props) => {

    const initialState = {
        heroes: [],
        good: 0,
        evil: 0
    }

    const [state, dispatch] = useReducer(HeroReducer, initialState);

    const addGood = () => {
        dispatch({
            type: "ADD_GOOD",
            payload: 1
        })
    }

    const addEvil = () => {
        dispatch({
            type: "ADD_EVIL",
            payload: 1
        })
    }

    const addHeroes = (hero) => {
        dispatch({
            type: 'ADD_HERO',
            payload: hero
        })
    }

    const deleteHeroes = () => {

    }

    return (
        <HeroContext.Provider value={{
            heroes: state.heroes,
            good: state.good,
            evil: state.evil,
            addHeroes,
            deleteHeroes,
            addGood,
            addEvil
        }}>
            {props.children}
        </HeroContext.Provider>
    )
}

export default HeroState;