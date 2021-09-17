import React from 'react';
import GuestDefaultPage from './react/layouts/GuestDefaultPage.js';
import './css/front/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Import Components For Route
import Technical from "./react/front/views/Technical";
import Commercial from "./react/front/views/Commercial";
import Personal from "./react/front/views/Personal";
import About from "./react/front/views/About";
import ProjectOne from "./components/Projects/ProjectOne";
import ProjectTwo from "./components/Projects/ProjectTwo";

function App() {
    return (<>
            <Router>
                <Switch>
                    <Route exact path='/' component={GuestDefaultPage} />
                    <Route path='/technical' component={Technical} />
                    <Route path='/personal' component={Personal} />
                    <Route path='/commercial' component={Commercial} />
                    <Route path='/about' component={About} />
                    <Route path='/projectOne' component={ProjectOne} />
                    <Route path='/projectTwo' component={ProjectTwo} />
                </Switch>
            </Router>
        </>

    );
}

export default App;
