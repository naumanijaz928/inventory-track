'use client'
// src/components/InventoryManagement.tsx


import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const InventoryManagement = ({ productId }: { productId: string }) => {
    const { products, updateInventory } = useContext(ProductContext)!;
    const product = products.find(p => p.id === productId);
    const [change, setChange] = useState<number>(0);

    const handleSubmit = () => {
        updateInventory(productId, change);
    };

    return (
        <div>
            <h2>{product?.name}</h2>
            <input type="number" value={change} onChange={(e) => setChange(Number(e.target.value))} />
            <button onClick={handleSubmit}>Update Inventory</button>
        </div>
    );
};

export default InventoryManagement;
