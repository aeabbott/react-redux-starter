import React  from 'react';
import './App.css';
import {
    Switch,
    Route
} from 'react-router-dom';
import LaunchPageContainer from './js/components/screens/launchPage/LaunchPageContainer';
import PageTwo from './js/components/screens/pageTwo/PageTwo';
import PageThree from './js/components/screens/pageThree/PageThree';



const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LaunchPageContainer}/>
            <Route exact path="/page-two" component={PageTwo}/>
            <Route exact path="/page-three" component={PageThree}/>
        </Switch>
     </div>
)

export default App;
