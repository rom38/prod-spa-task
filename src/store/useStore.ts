import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Product } from '../types/product';

interface StoreState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, 'id' | 'liked'>) => void;
  updateProduct: (id: number, updates: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  toggleLike: (id: number) => void;
}

export const useStore = create<StoreState>()(
  devtools((set, get) => ({
    products: [],
    loading: false,
    error: null,
    
    fetchProducts: async () => {
      set({ loading: true, error: null });
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        set({ products: data, loading: false });
      } catch (err) {
        set({ error: 'Failed to fetch products', loading: false });
      }
    },
    
    addProduct: (product) => {
      const newProduct = { ...product, id: Math.max(0, ...get().products.map(p => p.id)) + 1 };
      set((state) => ({ products: [...state.products, newProduct] }));
    },
    
    updateProduct: (id, updates) => {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id ? { ...product, ...updates } : product
        ),
      }));
    },
    
    deleteProduct: (id) => {
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      }));
    },
    
    toggleLike: (id) => {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id ? { ...product, liked: !product.liked } : product
        ),
      }));
    },
  }))
);