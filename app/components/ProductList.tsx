'use client'
// app/components/ProductList.tsx
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductContext)!;
  const [search, setSearch] = useState<string>('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
