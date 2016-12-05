'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

import LifeCycle from './components/LifeCycle';

class Main extends Component {
	constructor(props) {
        super(props);

        this.state = {
            name: '홍길동'
        };

		this.onClick = this.onClick.bind(this);
    }

	onClick() {
		var name;
		if(this.state.name === '홍길동') {
			name = 'Tom';
		}else {
			name = '홍길동';
		}
		this.setState({name: name});
	}

    render() {
        return (
        	<div>
            	<LifeCycle name={this.state.name} />
            	<button onClick={this.onClick}>change</button>
            </div>
        )
    }
}

render(<Main />, document.getElementById('app'));