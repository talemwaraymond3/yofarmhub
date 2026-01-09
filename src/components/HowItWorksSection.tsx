import { UserPlus, Search, Handshake, Truck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register & Get Verified",
    description: "Sign up as a farmer, buyer, or agent. Complete verification to build trust.",
  },
  {
    icon: Search,
    step: "02",
    title: "List or Discover Produce",
    description: "Farmers list available produce. Buyers search and filter to find what they need.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Connect & Negotiate",
    description: "Make inquiries, negotiate terms, and agree on pricing directly with verified partners.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Trade & Deliver",
    description: "Complete the transaction with optional logistics support and financing services.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Steps to Start Trading
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a farmer looking to sell or a buyer seeking quality produce, getting started is easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 card-elevated text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
