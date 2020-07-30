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
    this.setState({label: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onCreated(this.state.label)
    this.setState({label: ''})
  }

  render() {
    return (
      <form className="TodoItemCreator"
        onSubmit={this.onSubmit}
      >
        <input
          className="TodoInput form-control"
          type="text"
          placeholder="New todo (name)"
          value={this.state.label}
          onChange={this.labelHandler}
        />
        <button
          className="btn-info"
          type="submit"
        >
          Create!
        </button>
      </form>
    );
  }
}

export default TodoItemCreator;
