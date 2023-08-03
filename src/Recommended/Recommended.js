import React, { useState } from 'react';
import Button from '../components/Button';
import './Recommended.css';

const Recommended = ({ handleClick, totalCount }) => {
  const [productsTitle, setProductsTitle] = useState('All Products');

  const handleButtonClick = (value, title) => {
    setProductsTitle(title);
    handleClick({ target: { value } });
  };

  return (
    <div>
      <h2 className='recommended-title'>{productsTitle}</h2>
      <div className='recommended-flex'>
        <Button
          onClickHandler={() => handleButtonClick('', 'All Products')}
          title='All Products'
        />
        <Button
          onClickHandler={() => handleButtonClick('Nike', 'Nike')}
          title='Nike'
        />
        <Button
          onClickHandler={() => handleButtonClick('Adidas', 'Adidas')}
          title='Adidas'
        />
        <Button
          onClickHandler={() => handleButtonClick('Puma', 'Puma')}
          title='Puma'
        />
        <Button
          onClickHandler={() => handleButtonClick('Vans', 'Vans')}
          title='Vans'
        />
        <section className='product-count'>
          Total products: {totalCount}
        </section>
      </div>
    </div>
  );
};

export default Recommended;
