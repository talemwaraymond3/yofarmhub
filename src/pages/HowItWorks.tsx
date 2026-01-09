import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Search, Handshake, Truck, Smartphone, Phone, Users } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register & Get Verified",
    description: "Sign up as a farmer, buyer, or agent through our website, mobile app, or USSD. Complete the verification process to build trust and unlock full platform features.",
    forFarmers: "Submit your farm details, location, and identity documents for verification.",
    forBuyers: "Provide business registration and contact information for verification.",
  },
  {
    icon: Search,
    step: "02",
    title: "List or Discover Produce",
    description: "Farmers list their available produce with details like crop type, quantity, quality, and location. Buyers search and filter to find exactly what they need.",
    forFarmers: "Upload photos, set prices, and describe your produce quality and availability.",
    forBuyers: "Use filters to search by crop, location, quantity, and price range.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Connect & Negotiate",
    description: "Make inquiries, negotiate terms, and agree on pricing directly with verified partners. Our verification badges help you trade with confidence.",
    forFarmers: "Respond to buyer inquiries and negotiate fair prices for your produce.",
    forBuyers: "Contact multiple verified farmers and compare offers before deciding.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Trade & Deliver",
    description: "Complete the transaction with optional logistics support. Our integrated services help ensure smooth delivery from farm to buyer.",
    forFarmers: "Arrange pickup or delivery through our logistics partners.",
    forBuyers: "Track your order and receive quality produce at your doorstep.",
  },
];

const channels = [
  {
    icon: Smartphone,
    title: "Website & Mobile App",
    description: "Full-featured digital access for tech-savvy users. List produce, search suppliers, and manage your trades from anywhere.",
  },
  {
    icon: Phone,
    title: "USSD Access",
    description: "No smartphone? No problem. Access basic features via USSD on any mobile phone. Perfect for farmers in remote areas.",
  },
  {
    icon: Users,
    title: "Agent Support",
    description: "Our verified field agents help offline farmers list their produce and connect with buyers. Bringing everyone into the marketplace.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6">
                How It Works
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Simple Steps to Start Trading
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Whether you're a farmer looking to sell your harvest or a buyer seeking quality produce, 
                getting started with Yofarm Hub is easy.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {steps.map((item, index) => (
                <div key={item.step} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className="text-6xl font-bold text-muted/50 font-serif">{item.step}</span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{item.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{item.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted rounded-2xl p-6">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">For Farmers</span>
                        <p className="text-foreground text-sm mt-2">{item.forFarmers}</p>
                      </div>
                      <div className="bg-accent/10 rounded-2xl p-6">
                        <span className="text-xs font-semibold text-secondary uppercase tracking-wider">For Buyers</span>
                        <p className="text-foreground text-sm mt-2">{item.forBuyers}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-muted rounded-3xl h-[300px] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-center">
                      <div className="w-24 h-24 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">Step {item.step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Access Channels */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Multiple Access Channels
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Access Yofarm Hub Your Way
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe in inclusive access. That's why Yofarm Hub is available through multiple channels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {channels.map((channel) => (
                <div key={channel.title} className="bg-card rounded-3xl p-10 card-elevated text-center">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{channel.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and buyers already using Yofarm Hub. Registration is free and takes less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/register">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/contact">
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
