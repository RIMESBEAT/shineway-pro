const products = [
    // ... your products data
  ];
  
  const productsByCategory = {};
  products.forEach((product) => {
    const categoryId = product.category._ref; // Assuming category reference is stored in _ref
    if (!productsByCategory[categoryId]) {
      productsByCategory[categoryId] = [];
    }
    productsByCategory[categoryId].push(product);
  });



  import React from 'react';
import ProductList from '../productList/ProductList';

  
  const Category = ({ category, products }) => {
    return (
      <div>
        <h2>{category.name}</h2>
        <ProductList products={products} />
      </div>
    );
  };
  
  export default Category;