import './Product.css';

const Products = ({ result, onLoadMoreClick }) => {
  return (
    <>
      <section className='card-container'>{result}</section>
      <button onClick={onLoadMoreClick}>Load more</button>
    </>
  );
};

export default Products;
