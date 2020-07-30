import React from 'react';
import './ItemStatusFilter.css';


export default class ItemStatusFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'All',
    };
  }

  filterHandler = (event) => {
    const targetBtn = event.target;
    const AllButtons = [...targetBtn.parentNode.children];
    AllButtons.forEach((elem) => {
      elem.classList.remove('active')
    })
    targetBtn.classList.add('active');
    let tag = event.target.textContent.toLowerCase();
    const filter = {
      tag: tag
    }
    this.props.onFiltered(filter);
  }

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-default active"
          type="button"
          onClick={this.filterHandler}
        >
          All
        </button>
        <button
          className="btn btn-default"
          type="button"
          onClick={this.filterHandler}
        >
          Active
        </button>
        <button
          className="btn btn-default"
          type="button"
          onClick={this.filterHandler}
        >
          Done
        </button>
      </div>
    );
  }
}
