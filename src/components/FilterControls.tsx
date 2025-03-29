interface FilterControlsProps {
  filter: 'all' | 'liked';
  onFilterChange: (filter: 'all' | 'liked') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function FilterControls ({ 
  filter, 
  onFilterChange,
  searchQuery,
  onSearchChange
}:FilterControlsProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex space-x-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All Products
        </button>
        <button
          onClick={() => onFilterChange('liked')}
          className={`px-4 py-2 rounded-md ${filter === 'liked' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Liked
        </button>
      </div>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 border rounded-md w-full sm:w-64"
      />
    </div>
  );
};

export default FilterControls;
