import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, User, BadgeCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { ProduceItem } from "@/data/mockProduce";

interface InquiryDialogProps {
  produce: ProduceItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InquiryDialog = ({ produce, open, onOpenChange }: InquiryDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!produce) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG").format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry Sent!",
      description: `Your request for ${produce.name} has been sent to ${produce.farmerName}. They will contact you soon.`,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      quantity: "",
      message: "",
    });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Request to Buy</DialogTitle>
          <DialogDescription>
            Send an inquiry to the farmer about this produce
          </DialogDescription>
        </DialogHeader>

        {/* Produce Summary */}
        <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
          <img
            src={produce.imageUrl}
            alt={produce.name}
            className="w-20 h-20 object-cover rounded-md"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop";
            }}
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground">{produce.name}</h4>
            <p className="text-lg font-bold text-primary mt-1">
              {produce.currency} {formatPrice(produce.pricePerUnit)}/{produce.unit}
            </p>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{produce.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <User className="h-3 w-3" />
              <span>{produce.farmerName}</span>
              {produce.isVerified && (
                <Badge variant="outline" className="h-5 gap-1 text-xs">
                  <BadgeCheck className="h-3 w-3" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+256 700 000 000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">
              Quantity Needed ({produce.unit}) *
            </Label>
            <Input
              id="quantity"
              required
              type="number"
              min="1"
              max={produce.quantity}
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder={`Max: ${formatPrice(produce.quantity)} ${produce.unit}`}
            />
            <p className="text-xs text-muted-foreground">
              Available: {formatPrice(produce.quantity)} {produce.unit}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any special requirements or questions..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDialog;
