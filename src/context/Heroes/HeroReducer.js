import {ADD_HERO, DELETE_HERO, ADD_GOOD, ADD_EVIL} from './actionsTypes';

const HeroReducer = (state, action) => {
    console.log(state);
    const {type, payload} = action;
    switch (type) {
        case ADD_HERO:
            return {
                heroes: [
                    ...state.heroes,
                    payload
                ],
                good: state.good,
                evil: state.evil
            }
        case ADD_GOOD:
            return{
                heroes: [
                    ...state.heroes
                ],
                good: state.good + payload,
                evil: state.evil
            }
        case ADD_EVIL:
            return{
                ...state,
                evil: state.evil + payload
            }
    
        default:
            break;
    }
}

export default HeroReducer;