'use strict';

import React, {Component,PropTypes} from 'react';

const propTypes = {
    name: PropTypes.string,
	index: PropTypes.number,
	disabled: PropTypes.bool
};

const defaultProps = {
    name: 'default value',
	index: 0,
	disabled: false
};

class State extends Component {
	constructor(props) {
        super(props);

        this.state = {
            index: 0
        };

		this.displayName = 'State';

		this.onClick = this.onClick.bind(this);
    }

	onClick() {
		var index = this.state.index;
		if(index < 10) {
			this.setState({index: ++index});
		}else {
			
			this.setState({index: 0});
		}
	}

	/*
	componentDidMount() {
		// 최초 렌더링이 일어난 다음(한번 호출)
    	console.log('5. componentDidMount');
    }

	componentWillReceiveProps(nextProps) {
		// 컴포넌트가 새로운 props를 받을 때 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('6.componentWillReceiveProps');
	}

    componentWillUpdate(nextProps, nextState) {
		// 새로운 props나 state를 받았을 때 렌더링 직전에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('7.componentWillUpdate');
		console.log(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
		// 컴포넌트의 업데이트가 DOM에 반영된 직후에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('9.componentDidUpdate');
    }
    */

    render() {
    	return (
    		<div>
    			index: {this.state.index}<br/>
    			<button onClick={this.onClick}>Click!!</button>
    		</div>
    	);
    }
}

State.propTypes = propTypes;
State.defaultProps = defaultProps;

export default State;
