import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Smartphone,
  BadgeCheck,
  Wallet,
  MapPin,
  TrendingUp,
  ClipboardList,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AgentsProgram = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Earn Commissions",
      description:
        "Earn competitive commissions on every successful transaction you facilitate between farmers and buyers.",
    },
    {
      icon: Smartphone,
      title: "Easy-to-Use Tools",
      description:
        "Access our mobile app and USSD tools designed specifically for agents to list produce and manage farmers.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Status",
      description:
        "Get a verified agent badge that builds trust with farmers and buyers in your community.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Top-performing agents can advance to regional coordinator roles with higher earnings.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Get priority support from our team to help you succeed and resolve any issues quickly.",
    },
    {
      icon: MapPin,
      title: "Work Locally",
      description:
        "Serve farmers in your own community. No need to travel far – build relationships locally.",
    },
  ];

  const responsibilities = [
    "Register and onboard farmers who don't have smartphones or internet access",
    "Help farmers list their produce with accurate information and photos",
    "Facilitate communication between farmers and interested buyers",
    "Verify produce quality and quantities before listing",
    "Collect payments and ensure farmers receive their money",
    "Provide market price information to farmers",
    "Report issues and feedback to improve the platform",
  ];

  const requirements = [
    "Must be 18 years or older",
    "Basic literacy and numeracy skills",
    "Own a smartphone (Android or iOS)",
    "Good reputation in your local community",
    "Willing to undergo training and verification",
    "Knowledge of local agricultural practices",
    "Reliable and trustworthy character",
  ];

  const steps = [
    {
      step: "01",
      title: "Apply Online",
      description:
        "Fill out the agent application form with your details and location.",
    },
    {
      step: "02",
      title: "Verification",
      description:
        "Our team verifies your identity and conducts a background check.",
    },
    {
      step: "03",
      title: "Training",
      description:
        "Complete our online and in-person training program to learn the platform.",
    },
    {
      step: "04",
      title: "Start Earning",
      description:
        "Begin onboarding farmers and facilitating trades to earn commissions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Users className="h-5 w-5" />
                <span className="font-medium">Join Our Network</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Become a Yofarm Hub Agent
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Help bridge the gap between offline farmers and digital markets.
                Earn commissions while empowering your community's agricultural
                trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login?tab=register&type=agent">
                  <Button size="lg" className="gap-2">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is an Agent */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What is a Yofarm Hub Agent?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Yofarm Hub Agents are verified field representatives who serve
                  as the bridge between offline farmers and our digital
                  marketplace. They help farmers who don't have access to
                  smartphones or the internet to list their produce and connect
                  with buyers.
                </p>
                <p className="text-muted-foreground mb-6">
                  As an agent, you become a trusted partner in your community,
                  helping farmers get fair prices for their produce while earning
                  commissions on successful transactions.
                </p>
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                  <div className="p-3 rounded-full bg-accent/20">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      500+ Active Agents
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Already serving farmers across Uganda
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=500&fit=crop"
                  alt="Agent helping farmer"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">25%</p>
                  <p className="text-sm opacity-90">Average Commission</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Agent Benefits
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our agent network and enjoy these exclusive benefits
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities & Requirements */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <ClipboardList className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Agent Responsibilities
                  </h2>
                </div>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <BadgeCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Requirements
                  </h2>
                </div>
                <ul className="space-y-3">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Become an Agent */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Become an Agent
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to join our agent network
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-background rounded-xl p-6 border border-border/50 h-full">
                    <span className="text-5xl font-bold text-primary/20">
                      {step.step}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join our growing network of agents and help transform agricultural
              trade in your community while earning competitive commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login?tab=register&type=agent">
                <Button size="lg" variant="secondary" className="gap-2">
                  Apply to Become an Agent
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+256200947464">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Call Us: +256 200 947 464
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgentsProgram;
