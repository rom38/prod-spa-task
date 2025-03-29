import React from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../../store/useStore';
// import Layout from '../../components/Layout';
import Link from 'next/link';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products, updateProduct } = useStore();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      // <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Продукт не найден</p>
          <Link href="/products">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Назад к списку продуктов
            </button>
          </Link>
        </div>
      // </Layout>
    );
  }
  
  return (
    // <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link href="/products">
          <button className="mb-6 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
            Назад к списку продуктов
          </button>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-96 object-contain"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="bg-gray-100 inline-block px-3 py-1 rounded-full text-sm text-gray-700 mb-6">
              {product.category}
            </div>
            
            <div className="flex space-x-4">
              <Link href={`/products/${product.id}/edit`}>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                  Изменить продукт
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    // </Layout>
  );
};

export default ProductPage;
