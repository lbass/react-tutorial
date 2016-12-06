// Component Specs and Lifecycle
// 참고사이트
// http://reactkr.github.io/react/docs/component-specs-ko-KR.html
'use strict';

import React, {Component,PropTypes} from 'react';

const propTypes = {
    id: PropTypes.string,
	className: PropTypes.string,
	options: PropTypes.object,
	name: PropTypes.string,
	items: PropTypes.array,
	selectedIndex: PropTypes.number,
	disabled: PropTypes.bool,
	init: PropTypes.func,        
	//category: PropTypes.oneOf(['News','Photos']).isRequired,
	//dialog: PropTypes.instanceOf(Dialog).isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.bool
	])
};

const defaultProps = {
    value: 'default value'
};

class LifeCycle extends Component {
	constructor(props) {
		console.log('1. getDefaultProps');
        super(props);

		console.log('2. getInitialState');
        this.state = {
            data: []
        };
    }

	componentWillMount() {
		// 최초 렌더링이 일어나기 직전(한번 호출)
		console.log('3. componentWillMount');
    }

    componentDidMount() {
		// 최초 렌더링이 일어난 다음(한번 호출)
    	console.log('5. componentDidMount');
    }

	componentWillReceiveProps(nextProps) {
		// 컴포넌트가 새로운 props를 받을 때 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('6. componentWillReceiveProps');
	}

	shouldComponentUpdate(nextProps, nextState) {
        // 새로운 props나 state를 받았을 때 렌더링 전에 호출(최초 렌더링 시에는 호출되지 않음)
        console.log('7. shouldComponentUpdate');

        // false 면 render 호출하지 않음(componentWillUpdate 와 componentDidUpdate 역시 호출되지 않음)
        return true;    // default true
    }

    componentWillUpdate(nextProps, nextState) {
		// 새로운 props나 state를 받았을 때 렌더링 직전에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('8.componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
		// 컴포넌트의 업데이트가 DOM에 반영된 직후에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('10.componentDidUpdate');
    }

    componentWillUnmount(){
		// 컴포넌트가 DOM에서 마운트 해제 되기 직전에 호출
		console.log('componentWillUnmount');
    }

    render() {
		// 필수 항목
    	console.log('4. render');
		const { name } = this.props;

    	return (
    		<div>{name}</div>
    	);
    }
}

LifeCycle.propTypes = propTypes;
LifeCycle.defaultProps = defaultProps;

export default LifeCycle;