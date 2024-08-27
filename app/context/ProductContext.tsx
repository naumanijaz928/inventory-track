'use client'
// app/context/ProductContext.tsx
import React, { createContext, useState, FC, ReactNode } from 'react';
import { Product } from '../types/Product';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (id: string) => void;
  updateInventory: (id: string, change: number) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Sample products
  const initialProducts: Product[] = [
    {
      id: '1',
      name: 'Product A',
      description: 'Description for Product A',
      price: 29.99,
      stock: 100,
      history: [
        { date: '2024-08-01T12:00:00Z', change: 20 },
        { date: '2024-08-10T12:00:00Z', change: -10 }
      ]
    },
    {
      id: '2',
      name: 'Product B',
      description: 'Description for Product B',
      price: 49.99,
      stock: 50,
      history: [
        { date: '2024-08-05T12:00:00Z', change: 15 },
        { date: '2024-08-12T12:00:00Z', change: -5 }
      ]
    },
    {
      id: '3',
      name: 'Product C',
      description: 'Description for Product C',
      price: 19.99,
      stock: 200,
      history: [
        { date: '2024-08-07T12:00:00Z', change: 30 },
        { date: '2024-08-14T12:00:00Z', change: -20 }
      ]
    }
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const updateInventory = (id: string, change: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const updatedStock = product.stock + change;
        product.history.push({ date: new Date().toISOString(), change });
        return { ...product, stock: updatedStock };
      }
      return product;
    }));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, updateInventory }}>
      {children}
    </ProductContext.Provider>
  );
};
