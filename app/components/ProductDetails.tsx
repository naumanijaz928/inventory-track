// src/components/ProductDetails.tsx
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = ({ productId }: { productId: string }) => {
  const { products } = useContext(ProductContext)!;
  const product = products.find(p => p.id === productId);

  return (
    <div>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <p>Stock: {product?.stock}</p>
      <h3>Inventory Change History</h3>
      <ul>
        {product?.history.map((entry, index) => (
          <li key={index}>{entry.date}: {entry.change > 0 ? `+${entry.change}` : entry.change}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
