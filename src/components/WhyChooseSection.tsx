import { Shield, Users, Globe } from "lucide-react";
import whyYofarmImage from "@/assets/why-yofarm.png";

const features = [
  {
    icon: Shield,
    title: "Verified & Trusted",
    description: "Every farmer, buyer, and agent goes through verification for secure trading.",
  },
  {
    icon: Users,
    title: "Inclusive Access",
    description: "Web, mobile app, and USSD channels ensure no farmer is left behind.",
  },
  {
    icon: Globe,
    title: "Pan-African Vision",
    description: "Building connections across countries to expand market opportunities.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={whyYofarmImage}
                alt="Farmers in a greenhouse"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 card-elevated max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Verified Farmer</p>
                  <p className="text-sm text-muted-foreground">Trusted by 100+ buyers</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-accent">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
              Why Yofarm Hub
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Trusted Platform for African Agriculture
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We understand the challenges farmers face in reaching markets and the difficulties buyers have in sourcing reliable produce. 
              Yofarm Hub was built from lived experience to solve these problems.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
