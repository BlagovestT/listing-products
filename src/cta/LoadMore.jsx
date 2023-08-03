import React from 'react';
import './loadMore.css';

const LoadMore = ({ onLoadMoreClick }) => {
  return (
    <div className='load-btn-container'>
      <button className='load-btn' onClick={onLoadMoreClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
