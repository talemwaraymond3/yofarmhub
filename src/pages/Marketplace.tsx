import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProduceCard from "@/components/marketplace/ProduceCard";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import InquiryDialog from "@/components/marketplace/InquiryDialog";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Plus } from "lucide-react";
import { mockProduce, type ProduceItem } from "@/data/mockProduce";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedProduce, setSelectedProduce] = useState<ProduceItem | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const filteredProduce = useMemo(() => {
    let filtered = [...mockProduce];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.farmerName.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Region filter
    if (selectedRegion !== "All Regions") {
      filtered = filtered.filter((item) => item.region === selectedRegion);
    }

    // Verified filter
    if (verifiedOnly) {
      filtered = filtered.filter((item) => item.isVerified);
    }

    // Sorting
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case "price-low":
        filtered.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
        break;
      case "price-high":
        filtered.sort((a, b) => b.pricePerUnit - a.pricePerUnit);
        break;
      case "quantity":
        filtered.sort((a, b) => b.quantity - a.quantity);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedRegion, verifiedOnly, sortBy]);

  const handleInquire = (produce: ProduceItem) => {
    setSelectedProduce(produce);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <ShoppingBasket className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Produce Marketplace
                  </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Discover fresh, verified produce directly from farmers across Uganda. 
                  Browse listings, compare prices, and connect with suppliers.
                </p>
              </div>
              <Link to="/login">
                <Button size="lg" className="gap-2">
                  <Plus className="h-5 w-5" />
                  List Your Produce
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Filters & Listings */}
        <section className="py-8 md:py-12">
          <div className="container-custom">
            <MarketplaceFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              verifiedOnly={verifiedOnly}
              setVerifiedOnly={setVerifiedOnly}
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalResults={filteredProduce.length}
            />

            {/* Listings Grid */}
            {filteredProduce.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {filteredProduce.map((produce) => (
                  <ProduceCard
                    key={produce.id}
                    produce={produce}
                    onInquire={handleInquire}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <ShoppingBasket className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No produce found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                    setSelectedRegion("All Regions");
                    setVerifiedOnly(false);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/50">
          <div className="container-custom text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join thousands of farmers and buyers on Yofarm Hub. 
              List your produce or find suppliers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login?tab=register&type=farmer">
                <Button size="lg" variant="default">
                  Register as Farmer
                </Button>
              </Link>
              <Link to="/login?tab=register&type=buyer">
                <Button size="lg" variant="outline">
                  Register as Buyer
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InquiryDialog
        produce={selectedProduce}
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
      />
    </div>
  );
};

export default Marketplace;
