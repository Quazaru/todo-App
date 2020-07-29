import React from 'react';
import './ItemStatusFilter.css';

// const ItemStatusFilter = () => (
//   <div className="btn-group">
//     <button className="btn btn-default">All</button>
//     <button className="btn btn-default">Active</button>
//     <button className="btn btn-default active">Done</button>
//   </div>
// );

export default class ItemStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-default">All</button>
        <button className="btn btn-default">Active</button>
        <button className="btn btn-default active">Done</button>
      </div>
    );
  }
}
