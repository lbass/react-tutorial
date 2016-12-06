import React, {Component,PropTypes} from 'react';

var ENTER_KEY_CODE = 13;

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  value: PropTypes.string
};

const defaultProps = {
  value: ''
};

class TodoTextInput extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ''
    };

    this._save = this._save.bind(this);
    this._onChange    = this._onChange.bind(this);
    this._onKeyDown           = this._onKeyDown.bind(this);
  }

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  /**
   * @param {object} event
   */
  _onChange(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  }

  /**
   * @param  {object} event
   */
  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

  /**
   * @return {object}
   */
  render() /*object*/ {
    const { className, id, placeholder } = this.props;

    return (
      <input
        className={className}
        id={id}
        placeholder={placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    )
  }

}

TodoTextInput.propTypes = propTypes;
TodoTextInput.defaultProps = defaultProps;

export default TodoTextInput;
