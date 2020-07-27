import React from 'react';
import './ItemStatusFilter.css';

const ItemStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-default'>All</button>
      <button className='btn btn-default'>Active</button>
      <button className='btn btn-default active'>Done</button>
    </div>
  )
}

export default ItemStatusFilter;