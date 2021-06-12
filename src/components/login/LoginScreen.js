import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import './login.css';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem('lastPath') || "/";
  const [error, setError] = useState('');
  const [ values, handleInputChange ] = useForm({email: '', password: ''});
  const callApi = async () => {
    const token = await axios.post('http://challenge-react.alkemy.org/', {
        email: values.email,
        password: values.password
      });
      return token;
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      setError("Please complete the user and password");
    }
    else{
      const token = await callApi()
        .catch(e => {
            if(e.message.includes('401')){
              setError("Your user or password are incorrect");
              return;
            }
          }
        );
      if(!!token){
        localStorage.setItem('token', JSON.stringify(token.data));
        dispatch({
          type: types.login,
          payload: {
            name: values.email
          }
        });
        history.replace(lastPath);
      }
    }

  }
  return (
    <div className="main-login-screen">
      <div className="login-screen">
        <img src="assets/img/batman-ico.png" alt="batman logo" />
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="field">User</label>
            <input
              type="mail"
              className="form-control"
              id="exampleInputEmail1"
              required
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="field">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit" className="btn btn-light">
            Login
          </button>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};
