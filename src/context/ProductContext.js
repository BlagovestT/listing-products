import { createContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <ProductContext.Provider value={{ page, handleLoadMoreClick }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
