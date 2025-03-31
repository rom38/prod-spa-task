'use client'
import { useParams, useRouter } from 'next/navigation';
import { useStore } from '../../../../src/store/useStore';
import ProductForm from '../../../../src/components/ProductForm';
import { Product } from '../../../../src/types/product';

function EditProductPage ()  {
  const router = useRouter();
  const { id }  = useParams<{ id: string}>();
  //const { id } = router.query;
  const { products, updateProduct } = useStore();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Продукт не найден</p>
        </div>
    );
  }
  
  const handleSubmit = (updatedProduct: Omit<Product, 'id' | 'liked'>) => {
    updateProduct(Number(id), updatedProduct);
    router.push(`/products/${id}`);
  };
  
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Изменить продукт</h1>
        <ProductForm initialProduct={product} onSubmit={handleSubmit} />
      </div>
  );
};

export default EditProductPage;