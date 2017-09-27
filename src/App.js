import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import LaunchPageContainer from './js/components/screens/launchPage/LaunchPageContainer';
import PageTwo from './js/components/screens/pageTwo/PageTwo';
import PageThree from './js/components/screens/pageThree/PageThree';



const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page-two">PageTwo</Link></li>
                <li><Link to="/page-three">Page-Three</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={LaunchPageContainer}/>
            <Route path="/page-two" component={PageTwo}/>
            <Route path="/page-three" component={PageThree}/>
        </div>
    </Router>
)

export default App;
