import { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import ProductList from '../../components/ProductList';
import FilterControls from '../../components/FilterControls';
import Link from 'next/link';
import Layout from '../../components/Layout';

function ProductsPage() {
  const { products, loading, error, fetchProducts, toggleLike, deleteProduct } = useStore();
  const [filter, setFilter] = useState<'all' | 'liked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  const filteredProducts = products
    .filter(product => filter === 'all' || product.liked)
    .filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (loading && products.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Продукты загружаются...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">{error}</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Продукты</h1>
        <Link href="/create-product">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Добавить продукт
          </button>
        </Link>
      </div>

      <FilterControls
        filter={filter}
        onFilterChange={setFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Продукты не найдены. {filter === 'liked' && 'Попробуйте отметить несколько продуктов.'}
        </div>
      ) : (
        <ProductList
          products={filteredProducts}
          onLike={toggleLike}
          onDelete={deleteProduct}
        />
      )}
    </div>
  );
};

export default ProductsPage;
