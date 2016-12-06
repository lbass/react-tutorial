// Component Data Transfer
// Communicate Between Components
'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

import Props from './components/Props';
import State from './components/State';

class Main extends Component {
	constructor(props) {
        super(props);

        this.state = {
			name: '버튼',
            index: 0,
			disabled: false
        };

		this.onChangeIndex = this.onChangeIndex.bind(this);
		this.onChangeButtonLabel = this.onChangeButtonLabel.bind(this);
		this.onChangeDisabled = this.onChangeDisabled.bind(this);
    }

	onChangeIndex() {
		var index = this.state.index;
		if(index < 10) {
			this.setState({index: ++index});
		}else {
			this.setState({index: 0});
		}
	}

	onChangeButtonLabel() {
		var label;
		if(this.state.name === '버튼') {
			this.setState({name: 'Submit'});
		}else {
			this.setState({name: '버튼'});
		}
	}

	onChangeDisabled() {
		var disabled = !this.state.disabled;
		this.setState({disabled: disabled});
	}

    render() {
        return (
            <div>
            	- Props<br/>
            	<Props name={this.state.name} index={this.state.index} disabled={this.state.disabled} />
            	<br/>
            	<button onClick={this.onChangeIndex}>Index 변경</button>{'\u00A0'}
            	<button onClick={this.onChangeButtonLabel}>Button Label 변경</button>{'\u00A0'}
            	<button onClick={this.onChangeDisabled}>Enable/Disabled</button>
            	<br/>
            	<hr/>          	
            	- State<br/>
            	<State />
            </div>
        );
    }
}

render(<Main />, document.getElementById('app'));