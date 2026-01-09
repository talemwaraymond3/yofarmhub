import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  const highlights = [
    "Verified farmers & buyers",
    "Multi-channel access",
    "Integrated services",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="African farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              🌾 Africa's Trusted Agribusiness Marketplace
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Connecting Farms to Markets Across{" "}
            <span className="text-accent">Africa</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Yofarm Hub bridges the gap between agricultural production and market access. 
            We provide a trusted platform for farmers, buyers, and service providers to trade with confidence.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="accent" size="lg" asChild>
              <Link to="/register">
                Start Trading Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/how-it-works">
                Learn How It Works
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "5,000+", label: "Farmers" },
              { value: "500+", label: "Buyers" },
              { value: "50+", label: "Districts" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
