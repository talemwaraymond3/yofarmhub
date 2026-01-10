import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { categories, regions } from "@/data/mockProduce";

interface MarketplaceFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  verifiedOnly: boolean;
  setVerifiedOnly: (verified: boolean) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalResults: number;
}

const MarketplaceFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  verifiedOnly,
  setVerifiedOnly,
  sortBy,
  setSortBy,
  totalResults,
}: MarketplaceFiltersProps) => {
  const hasActiveFilters = 
    searchQuery || 
    selectedCategory !== "All Categories" || 
    selectedRegion !== "All Regions" || 
    verifiedOnly;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedRegion("All Regions");
    setVerifiedOnly(false);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search produce, farmers, or locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 text-base"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-medium">Filters:</span>
        </div>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant={verifiedOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setVerifiedOnly(!verifiedOnly)}
          className="gap-2"
        >
          Verified Only
        </Button>

        <div className="flex-1" />

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="quantity">Quantity Available</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters & Results Count */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Showing <strong className="text-foreground">{totalResults}</strong> results
        </span>

        {hasActiveFilters && (
          <>
            <span className="text-muted-foreground">•</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: "{searchQuery}"
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setSearchQuery("")}
                />
              </Badge>
            )}
            {selectedCategory !== "All Categories" && (
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setSelectedCategory("All Categories")}
                />
              </Badge>
            )}
            {selectedRegion !== "All Regions" && (
              <Badge variant="secondary" className="gap-1">
                {selectedRegion}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setSelectedRegion("All Regions")}
                />
              </Badge>
            )}
            {verifiedOnly && (
              <Badge variant="secondary" className="gap-1">
                Verified Only
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setVerifiedOnly(false)}
                />
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground h-6 px-2"
            >
              Clear all
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MarketplaceFilters;
