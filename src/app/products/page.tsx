import { FilterPanel } from '@/components/products/filter-panel';
import { ProductGrid } from '@/components/products/product-grid';
import { SearchBar } from '@/components/products/search-bar';

export default function ProductsPage() {
  return (
    <div>
      <SearchBar />
      <FilterPanel />
      <ProductGrid />
    </div>
  );
}
