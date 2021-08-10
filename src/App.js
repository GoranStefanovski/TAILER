import './App.css';
import React from 'react';
import GuestDefaultPage from './react/layouts/GuestDefaultPage.js';
import './css/front/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (<>
            <Router>
                <Switch>
                    <Route path='/' exact component={GuestDefaultPage} />
                </Switch>
            </Router>
        </>

    );
}

export default App;
