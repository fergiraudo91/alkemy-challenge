import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { HomeScreen } from '../pages/HomeScreen'
import { Navbar } from '../components/ui/Navbar';
import { SearchScreen } from '../pages/SearchScreen';

export const DashboardRoutes = () => {
    
    return (
        <>
            <Navbar />
                <Switch>
                    <Route exact path="/home" component={ HomeScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/search" component= { SearchScreen } />
                    <Redirect to="/home" />
                </Switch>
        </>
    )
}
