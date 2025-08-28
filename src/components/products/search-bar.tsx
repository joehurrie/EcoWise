import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input type="text" placeholder="Search by keyword, brand, or barcode..." className="pl-10 h-12 bg-background/20 placeholder:text-primary-foreground/60 text-base border-primary-foreground/20 focus:bg-background focus:text-foreground focus:placeholder:text-muted-foreground" />
      </div>
      <div className="flex items-center space-x-2">
        <Select>
          <SelectTrigger className="w-full md:w-[240px] h-12 bg-transparent border-primary-foreground/20 text-base">
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
        <Button className="md:hidden bg-accent text-accent-foreground hover:bg-accent/90">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
