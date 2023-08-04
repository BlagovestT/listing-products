import React, { useContext } from 'react';
import './Product.css';
import ProductContext from '../context/ProductContext'; // Import the context

const Products = ({ result }) => {
  const { page, handleLoadMoreClick } = useContext(ProductContext); // Access context values

  const displayedProducts = page * 20;
  const displayedResult = result.slice(0, displayedProducts);

  return (
    <>
      <section className='card-container'>{displayedResult}</section>
      {/* <button onClick={handleLoadMoreClick}>Load More</button> */}
    </>
  );
};

export default Products;
