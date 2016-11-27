import React, {Component} from 'react';
import {render} from 'react-dom';
import LifeCycle from './components/LifeCycle';

class Main extends Component {
    render(){
        <div>
            Hello world!!
        </div>
    };
}

render(<Main />, document.getElementById('app'));