import React from 'react';
import GuestDefaultPage from './react/layouts/GuestDefaultPage.js';
import './css/front/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Technical from "./react/front/views/Technical";
import Commercial from "./react/front/views/Commercial";
import Personal from "./react/front/views/Personal";

function App() {
    return (<>
            <Router>
                <Switch>
                    <Route exact path='/' component={GuestDefaultPage} />
                    <Route path='/technical' component={Technical} />
                    <Route path='/personal' component={Personal} />
                    <Route path='/commercial' component={Commercial} />
                </Switch>
            </Router>
        </>

    );
}

export default App;
