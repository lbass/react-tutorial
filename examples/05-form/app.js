// Form
'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class Main extends Component {
	constructor(props) {
        super(props);

        this.state = {
			value: 'Hello!',
            areaValue: 'Teatarea Hello!'
        };

		this.onChange        = this.onChange.bind(this);
		this.onAreaChange	 = this.onAreaChange.bind(this);
    }

    onChange(event) {
        this.setState({value: event.target.value});
    }

    onAreaChange(event) {
        this.setState({areaValue: event.target.value});
    }

    render() {
        return (
            <div>
                <span style={{fontWeight: 'bold'}}>Input text</span>
                <br/>
                <input type="text" value="abc" readOnly />{'\u00A0'}
                <input type="text" />{'\u00A0'}
                <input type="text" value={this.state.value} onChange={this.onChange} />{'\u00A0'}
                <input type="text" defaultValue="Hello!" />
                <br/><br/>
                <span style={{fontWeight: 'bold'}}>Textarea</span>
                <br/>
                {/*<textarea name="description">This is the description.</textarea>*/}
                <textarea value="abc" readOnly />{'\u00A0'}
                <textarea />{'\u00A0'}
                <textarea value={this.state.areaValue} onChange={this.onAreaChange} />{'\u00A0'}
                <textarea defaultValue="This is a description." />
            </div>
        )
    }
}

render(<Main />, document.getElementById('app'));
