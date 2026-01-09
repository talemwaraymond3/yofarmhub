import { ShoppingBasket, Truck, Landmark, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: ShoppingBasket,
    title: "Trade & Marketplace",
    description: "List and discover agricultural produce with verified farmers and buyers. Get fair prices and transparent transactions.",
    color: "bg-primary",
  },
  {
    icon: Truck,
    title: "Logistics Solutions",
    description: "Reliable transportation and delivery services to move produce from farm to market efficiently.",
    color: "bg-secondary",
  },
  {
    icon: Landmark,
    title: "Agricultural Finance",
    description: "Access financing options for farmers and buyers to facilitate trade and expand operations.",
    color: "bg-accent",
  },
  {
    icon: MessageCircle,
    title: "Expert Consultancy",
    description: "Professional advisory services on farming practices, market trends, and business development.",
    color: "bg-primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background pattern-dots">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Trade Successfully
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond just a marketplace, we provide integrated services to support every step of your agricultural trade journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-card rounded-2xl p-8 card-elevated hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
