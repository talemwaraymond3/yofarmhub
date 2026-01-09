import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Lightbulb, Target, Users } from "lucide-react";
import founderImage from "@/assets/founder-ali-matovu.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6">
                About Yofarm Hub
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Building Africa's Most Trusted Agricultural Marketplace
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                We're on a mission to transform agricultural trade across Africa by connecting farmers directly with buyers, 
                eliminating middlemen, and creating a transparent, trusted ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card rounded-3xl p-10 card-elevated">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage technology to give farmers visibility, give buyers confidence, and surround trade with 
                  essential services such as logistics, finance, and consultancy. We aim to create a system where 
                  every farmer can access fair markets and every buyer can source quality produce with trust.
                </p>
              </div>
              
              <div className="bg-card rounded-3xl p-10 card-elevated">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the face of agribusiness in Africa by creating a trusted, transparent, and inclusive 
                  digital marketplace that reduces waste, improves coordination, and increases profitability 
                  across the agricultural value chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={founderImage}
                    alt="Ali Matovu - Founder & CEO of Yofarm Hub"
                    className="w-full h-[500px] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 bg-primary rounded-2xl px-6 py-4 shadow-elevated">
                  <p className="text-primary-foreground font-semibold">Ali Matovu</p>
                  <p className="text-primary-foreground/70 text-sm">Founder & CEO</p>
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
                  Founder's Story
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Born from Lived Experience
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Yofarm Hub was founded from firsthand observation of the trust gaps between farmers and buyers 
                    in African agricultural markets. Growing up surrounded by farming communities, I witnessed 
                    how farmers struggled to find fair markets for their produce, often at the mercy of middlemen 
                    who distorted prices.
                  </p>
                  <p>
                    Buyers, on the other hand, faced inconsistent quality and unreliable supply chains. 
                    There was no unified system showing who has what, where, and when. This gap in coordination 
                    led to significant post-harvest losses and missed opportunities on both sides.
                  </p>
                  <p>
                    Yofarm Hub addresses these coordination failures by providing verified information, agent support 
                    for offline farmers, and inclusive access through multiple channels—ensuring that digital and 
                    analogue users alike can participate in the agricultural marketplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Our Values
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us Every Day
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Trust & Transparency",
                  description: "Every transaction is built on verified identities and transparent pricing. We believe trust is the foundation of successful trade.",
                },
                {
                  icon: Users,
                  title: "Inclusivity",
                  description: "From digital-savvy buyers to offline farmers supported by agents, we ensure no one is left behind in the agricultural revolution.",
                },
                {
                  icon: Target,
                  title: "Impact First",
                  description: "We measure our success by the lives we improve—farmers earning fair prices, buyers accessing quality produce, and communities thriving.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center bg-card rounded-3xl p-10 card-elevated">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Us in Transforming African Agriculture
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a farmer, buyer, or service provider, there's a place for you in the Yofarm Hub community.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/register">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
