import { MapPin, Calendar, User, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProduceItem } from "@/data/mockProduce";

interface ProduceCardProps {
  produce: ProduceItem;
  onInquire: (produce: ProduceItem) => void;
}

const ProduceCard = ({ produce, onInquire }: ProduceCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG").format(price);
  };

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={produce.imageUrl}
          alt={produce.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop";
          }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {produce.category}
          </Badge>
        </div>
        {produce.isVerified && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-primary-foreground gap-1">
              <BadgeCheck className="h-3 w-3" />
              Verified
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
            {produce.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {produce.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-primary">
              {produce.currency} {formatPrice(produce.pricePerUnit)}
            </p>
            <p className="text-xs text-muted-foreground">per {produce.unit}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">
              {formatPrice(produce.quantity)} {produce.unit}
            </p>
            <p className="text-xs text-muted-foreground">available</p>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{produce.location}, {produce.region}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4 text-accent" />
            <span>{produce.farmerName}</span>
            {produce.isVerified && (
              <BadgeCheck className="h-4 w-4 text-primary" />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-accent" />
            <span>Available until {new Date(produce.availableUntil).toLocaleDateString()}</span>
          </div>
        </div>

        <Button 
          className="w-full mt-3" 
          onClick={() => onInquire(produce)}
        >
          Request to Buy
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProduceCard;
