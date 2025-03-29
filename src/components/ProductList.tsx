import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}

function ProductList ({ products, onLike, onDelete}:ProductListProps)  {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
