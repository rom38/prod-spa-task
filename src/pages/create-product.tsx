import React from 'react';
import { useStore } from '../store/useStore';
import ProductForm from '../components/ProductForm';
// import Layout from '../components/Layout';
import { Product } from '../types/product';

const CreateProductPage: React.FC = () => {
  const { addProduct } = useStore();
  
  return (
    // <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Create New Product</h1>
        <ProductForm onSubmit={addProduct} />
      </div>
    // </Layout>
  );
};

export default CreateProductPage;