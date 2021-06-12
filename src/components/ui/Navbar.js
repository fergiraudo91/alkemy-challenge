import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import './navbar.css';

export const Navbar = () => {
    const {user:{name}, dispatch} = useContext(AuthContext);
    console.log(name);
    const history = useHistory();
    const handleLogout = () => {
        dispatch({
            logged: false
        });
        history.replace("/login");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/home">Home <i className="fas fa-home"></i></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/search">Search Hero <i className="fas fa-search"></i></NavLink>
                </div>
                <div className="navbar-nav">
                    <span className="nav-link nav-item text-info text-user">{name}</span>
                    <button 
                    className="nav-link ml-auto align-content-end mr-3 btn btn-dark" 
                    to="/logout"
                    onClick={handleLogout}
                    >Logout <i className="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        </nav>
    )
}
