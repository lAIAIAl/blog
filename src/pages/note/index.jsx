import React from 'react';
import { Redirect, Route,Switch } from 'react-router';
import Details from './details.jsx';
import Home from './home.jsx';


function Note(){
    return (
        <Switch>
            <Route path='/note/home' component={Home}/>
            <Route path='/note/details' component={Details}/>
            <Redirect to='/note/home' />
        </Switch>
    )
}

export default Note;