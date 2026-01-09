import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import produceImage from "@/assets/produce-display.jpg";

const CTASection = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Agricultural Trade?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Join thousands of farmers and buyers already trading on Yofarm Hub. 
              Whether you're looking to sell your harvest or source quality produce, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/register">
                  Register as Farmer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/register">
                  Register as Buyer
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={produceImage}
                alt="Fresh African produce"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl p-6 shadow-elevated hidden md:block">
              <p className="text-accent-foreground font-bold text-2xl">100%</p>
              <p className="text-accent-foreground/80 text-sm">Verified Produce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
