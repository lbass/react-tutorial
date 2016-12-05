// Component Event
'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class Main extends Component {
	constructor(props) {
        super(props);

		this.onClick		 = this.onClick.bind(this);
		this.onDoubleClick	 = this.onDoubleClick.bind(this);
		this.onContextMenu	 = this.onContextMenu.bind(this);

		this.onMouseDown	 = this.onMouseDown.bind(this);
		this.onMouseUp		 = this.onMouseUp.bind(this);
		this.onChange		 = this.onChange.bind(this);
		this.onInput		 = this.onInput.bind(this);
		this.onCopy			 = this.onCopy.bind(this);
		this.onCut			 = this.onCut.bind(this);
		this.onPaste		 = this.onPaste.bind(this);
    }

	onClick(event) {
			console.log('onClick');
			console.log(event);
	}

	onDoubleClick(event) {
		console.log('onDoubleClick');
		console.log(event);
	}

	onContextMenu(event) {
		console.log('onContextMenu');
		console.log(event);
	}

	onMouseDown(event) {
		console.log('onMouseDown');
		console.log(event);
	}

	onMouseUp(event) {
		console.log('onMouseUp');
		console.log(event);
	}

	onChange(event) {
		console.log('onChange');
		console.log(event);
	}

	onInput(event) {
		console.log('onInput');
		console.log(event);
	}

	onCopy(event) {
		console.log('onCopy');
		console.log(event);
		console.log(event.clipboardData);
	}

	onCut(event) {
		console.log('onCut');
		console.log(event);
		console.log(event.clipboardData);
	}

	onPaste(event) {
		console.log('onPaste');
		console.log(event);
		console.log(event.clipboardData);
	}

	render() {
        return (
            <div>
				참고 사이트: <a href="https://facebook.github.io/react/docs/events.html" target="_blank">https://facebook.github.io/react/docs/events.html</a><br/>
            	<span style={{fontWeight: 'bold'}}>Mouse Events</span><br/>
				<span style={{fontWeight: 'bold', color: 'red'}}>
					onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, <br/>
					onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, <br/>
					onMouseMove, onMouseOut, onMouseOver, onMouseUp
				</span>
				<br/>
            	<button onClick={this.onClick}>onClick</button>{'\u00A0'}
            	<button onDoubleClick={this.onDoubleClick}>onDoubleClick</button>{'\u00A0'}
            	<button onContextMenu={this.onContextMenu}>onContextMenu</button>{'\u00A0'}
				<button onMouseDown={this.onMouseDown}>onMouseDown</button>{'\u00A0'}
				<button onMouseUp={this.onMouseUp}>onMouseUp</button>{'\u00A0'}
				<br/><br/>

				<span style={{fontWeight: 'bold'}}>Form Events</span><br/>
				<span style={{fontWeight: 'bold', color: 'red'}}>
					onChange, onInput, onSubmit
				</span>
				<br/>
				<input type="text" onChange={this.onChange} onInput={this.onInput} />{'\u00A0'}
				<select onChange={this.onChange}>
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>{'\u00A0'}
				<input type="checkbox" onChange={this.onChange} />
				<br/><br/>
				{/*
				<span style={{fontWeight: 'bold'}}>Clipboard Events</span><br/>
				<span style={{fontWeight: 'bold', color: 'red'}} onCopy={this.onCopy}>
					onCopy, onCut, onPaste
				</span>
				<br/>
				<div onCopy={this.onCopy} onCut={this.onCut}>text</div>
				<div style={{border: '1px solid', width: '300px', height: '100px'}} onPaste={this.onPaste}></div>
				*/}
            </div>
        )
    }
}

render(<Main />, document.getElementById('app'));