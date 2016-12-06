import React, {Component} from 'react';
import { Link } from 'react-router'

const propTypes = {
    onClick: PropTypes.func,
	children: PropTypes.array
};

const defaultProps = {
	children: []
};

class Main extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(url, event) {
        this.props.onClick(event, url);
    }

    render() {
        var repoClick = this.clickHandler.bind(this, '/repos');
        return (
            <div>
                <h1>App isolation</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos - Link</Link></li>
                    <li><Link to="/repos1">Repos1 - Link</Link></li>
                    <li onClick={repoClick}>Repos</li>
                    <li onClick={this.clickHandler.bind(this, "/repos1")}>Repos1</li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;