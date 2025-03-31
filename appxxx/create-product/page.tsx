'use client'
import React from 'react';
import { useStore } from '../../src/store/useStore';
import ProductForm from '../../src/components/ProductForm';

const CreateProductPage: React.FC = () => {
  const { addProduct } = useStore();
  
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Добавить новый продукт</h1>
        <ProductForm onSubmit={addProduct} />
      </div>
  );
};

export default CreateProductPage;