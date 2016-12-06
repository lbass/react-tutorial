import React, {Component} from 'react';

import { Link, browserHistory } from 'react-router'

import Main from '../views/main';

class ModuleController extends Component {
    constructor(props) {
        super(props);

		this.onRouteClick = this.onRouteClick.bind(this);
    }

    onRouteClick(event, url) {
        console.log(event);
        console.log(url);
        //browserHistory.push('/repos');
        browserHistory.push(url);
    }

    render() {
        return (
            <Main onClick={this.onRouteClick}/>
        )
    }
}

export default ModuleController;