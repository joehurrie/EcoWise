import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative flex-grow max-w-2xl">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input type="text" placeholder="Search by keyword or barcode..." className="pl-10" />
        </div>
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Sort by: Impact Score" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="impact">Sort by: Impact Score</SelectItem>
              <SelectItem value="popularity">Sort by: Popularity</SelectItem>
              <SelectItem value="price-asc">Sort by: Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Sort by: Price (High to Low)</SelectItem>
              <SelectItem value="certification">Sort by: Certification</SelectItem>
            </SelectContent>
          </Select>
          <Button className="md:hidden">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
