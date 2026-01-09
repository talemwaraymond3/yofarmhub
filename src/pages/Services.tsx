import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBasket, Truck, Landmark, MessageCircle, CheckCircle } from "lucide-react";
import marketplaceImage from "@/assets/service-marketplace.png";
import logisticsImage from "@/assets/service-logistics.png";
import financeImage from "@/assets/service-finance.png";
import consultancyImage from "@/assets/service-consultancy.png";

const serviceImages = [marketplaceImage, logisticsImage, financeImage, consultancyImage];

const services = [
  {
    icon: ShoppingBasket,
    title: "Trade & Marketplace",
    description: "Our core platform connecting verified farmers directly with buyers. List produce, discover suppliers, negotiate prices, and trade with confidence.",
    features: [
      "Verified farmer and buyer profiles",
      "Real-time produce listings with photos",
      "Location-based search and filtering",
      "Direct inquiry and negotiation system",
      "Quality verification badges",
    ],
    color: "hero-gradient",
  },
  {
    icon: Truck,
    title: "Logistics Solutions",
    description: "Reliable transportation services to move your produce from farm to market. We partner with trusted logistics providers across regions.",
    features: [
      "Farm-to-market transportation",
      "Cold chain logistics for perishables",
      "Real-time tracking and updates",
      "Flexible pickup and delivery options",
      "Competitive pricing",
    ],
    color: "earth-gradient",
  },
  {
    icon: Landmark,
    title: "Agricultural Finance",
    description: "Access financing options to facilitate trade and expand operations. From working capital to equipment financing, we connect you with financial partners.",
    features: [
      "Trade financing for buyers",
      "Input financing for farmers",
      "Equipment and asset financing",
      "Flexible repayment terms",
      "Quick approval process",
    ],
    color: "accent-gradient",
  },
  {
    icon: MessageCircle,
    title: "Expert Consultancy",
    description: "Professional advisory services to help you succeed. From farming best practices to market analysis, our experts are here to guide you.",
    features: [
      "Agronomic advisory services",
      "Market analysis and trends",
      "Business development support",
      "Quality improvement guidance",
      "Export readiness assessment",
    ],
    color: "hero-gradient",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-muted pattern-dots">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Our Services
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Complete Solutions for Agricultural Trade
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond just a marketplace, Yofarm Hub provides integrated services to support every step of your agricultural trade journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div key={service.title} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-muted rounded-3xl p-8 h-[400px] flex items-center justify-center">
                      <img
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join Yofarm Hub today and access all our services to grow your agricultural business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/register">
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/contact">
                  Contact Sales
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

export default Services;
