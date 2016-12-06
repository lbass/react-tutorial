import React, {Component} from 'react';

import Repos from '../views/repos';

class ReposController extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Repos />
        )
    }
}

export default ReposController;