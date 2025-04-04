import { Product } from '../types/product';
import Link from 'next/link';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}

function ProductCard ({ product, onLike, onDelete } :ProductCardProps)  {
  const truncatedDescription = 
    product.description.length > 100 
      ? `${product.description.substring(0, 100)}...` 
      : product.description;

  return (
    <div className="flex flex-col justify-between border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link className="grow" href={`/products/${product.id}`} passHref>
        <div className="cursor-pointer">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="h-full object-contain p-4"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{truncatedDescription}</p>
            <p className="font-bold">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        </div>
      </Link>
      
      <div className="grow-0 p-4 border-t flex justify-between content-end">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onLike(product.id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          {product.liked ? (
            <HeartIconSolid className="h-6 w-6" />
          ) : (
            <HeartIcon className="h-6 w-6" />
          )}
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(product.id);
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;