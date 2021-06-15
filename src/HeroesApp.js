import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import HeroState from './context/Heroes/HeroState';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function HeroesApp() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  return (
    <HeroState>
      <AuthContext.Provider value={{ user, dispatch}}>
        <AppRouter />
      </AuthContext.Provider>
    </HeroState>
  );
}

export default HeroesApp;
