import React, {Component} from 'react';
import {render} from 'react-dom';

import { Router, Route, Link, hashHistory } from 'react-router'

import About from './controllers/about';
import Repos from './controllers/repos';

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
            </div>
        )
    }
}

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'));
