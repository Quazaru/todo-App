import React from 'react';

import './TodoItemCreator.css';

class TodoItemCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ' ',
    };
  }

  labelHandler = (event) => {
    const text = event.target.value;
    this.setState({label: text.toString()});
  }

  render() {
    const { onCreated } = this.props;
    return (
      <div className="TodoItemCreator">
        <input
          className="TodoInput form-control"
          type="text"
          placeholder="New todo (name)"
          value={this.state.label}
          onChange={this.labelHandler}
        />
        <button
          className="btn-info"
          type="button"
          onClick={() => {
            onCreated(this.state.label)
            this.setState({label: ''})
          }}
        >
          Create!
        </button>
      </div>
    );
  }
}

export default TodoItemCreator;
