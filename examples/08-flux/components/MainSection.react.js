/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, {Component,PropTypes} from 'react';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem.react';

const propTypes = {
  allTodos: PropTypes.object.isRequired,
  areAllComplete: PropTypes.bool.isRequired
};

class MainSection extends Component {  
  constructor(props) {
    super(props);
  }

  /**
   * @return {object}
   */
  render() {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll() {
    TodoActions.toggleCompleteAll();
  }

}

MainSection.propTypes = propTypes;

export default MainSection;
