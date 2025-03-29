import { useRouter } from 'next/router';
import { useStore } from '../../../store/useStore';
import ProductForm from '../../../components/ProductForm';
// import Layout from '../../../components/Layout';
import { Product } from '../../../types/product';

function EditProductPage ()  {
  const router = useRouter();
  const { id } = router.query;
  const { products, updateProduct } = useStore();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      // <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Product not found</p>
        </div>
      // </Layout>
    );
  }
  
  const handleSubmit = (updatedProduct: Omit<Product, 'id' | 'liked'>) => {
    updateProduct(Number(id), updatedProduct);
    router.push(`/products/${id}`);
  };
  
  return (
    // <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Edit Product</h1>
        <ProductForm initialProduct={product} onSubmit={handleSubmit} />
      </div>
    // </Layout>
  );
};

export default EditProductPage;