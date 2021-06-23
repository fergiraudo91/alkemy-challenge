import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";


describe('testing authReducer', () => {

    const state = {
        username: 'something',
        logged: true
    }
   
    test('should return the same state when is default', () => {
       
        const action = {
            type: 'default',
            payload: null
        }
        const newState = authReducer(state, action);

        expect(newState).toEqual(state);
        
    });

    test('should delete username and logged= false when logout', () => {

        const action = {
            type: types.logout,
            payload: null
        }

        const newState = authReducer(state, action);

        console.log("newState", newState);

        expect(newState).toEqual({logged: false});
        
        
    });

    test('should authenticate and put the username', () => {
       
        const state = {
            logged: false
        }

        const action = {
            type: types.login,
            payload:  {
                username: 'challenge@alkemy.org'
            }
        }

        const newState = authReducer(state, action);
        
        expect(newState).toEqual({
            username: action.payload.username,
            logged: true
        })
        
    });
    
    
    
    
});
