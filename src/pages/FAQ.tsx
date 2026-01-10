import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Yofarm Hub?",
          answer:
            "Yofarm Hub is a B2B digital agribusiness marketplace that connects farmers, buyers, and service providers across Africa. We bridge the gap between farm production and market access by enabling verified farmers to list produce directly for buyers to discover and purchase.",
        },
        {
          question: "How do I register on Yofarm Hub?",
          answer:
            "You can register by clicking the 'Get Started' button on our website. Choose your user type (Farmer, Buyer, or Agent), fill in your details, and verify your account. For farmers without internet access, you can register through a local Yofarm Hub agent or via our USSD service.",
        },
        {
          question: "Is Yofarm Hub free to use?",
          answer:
            "Registration and browsing the marketplace is free for all users. We charge a small commission on successful transactions to maintain and improve the platform. Contact us for detailed pricing information.",
        },
        {
          question: "What regions does Yofarm Hub operate in?",
          answer:
            "Currently, we operate across all regions of Uganda including Central, Eastern, Northern, Western, and Kampala. We are actively expanding to other East African countries.",
        },
      ],
    },
    {
      category: "For Farmers",
      questions: [
        {
          question: "How do I list my produce?",
          answer:
            "After logging in, go to your dashboard and click 'Add Produce'. Fill in the details including crop type, quantity, price, location, and upload photos. Your listing will be reviewed and published within 24 hours.",
        },
        {
          question: "What if I don't have a smartphone or internet?",
          answer:
            "You can use our USSD service by dialing *XXX# on any phone. Alternatively, find a local Yofarm Hub agent in your area who can help you register and list your produce on your behalf.",
        },
        {
          question: "How do I get verified as a farmer?",
          answer:
            "Verification involves confirming your identity, location, and farming activities. You can submit documents through the app, or a Yofarm Hub agent can visit your farm to complete the verification. Verified farmers get a badge and higher visibility.",
        },
        {
          question: "How and when do I get paid?",
          answer:
            "Payment terms are agreed upon between you and the buyer. We recommend using mobile money or bank transfers for security. Yofarm Hub can facilitate escrow services for larger transactions to protect both parties.",
        },
        {
          question: "Can I set my own prices?",
          answer:
            "Yes, you have full control over your pricing. We provide market price information to help you set competitive rates, but the final price is always your decision.",
        },
      ],
    },
    {
      category: "For Buyers",
      questions: [
        {
          question: "How do I find produce I need?",
          answer:
            "Use our marketplace search and filters to find produce by crop type, location, quantity, and price range. You can also set up alerts to be notified when specific produce becomes available.",
        },
        {
          question: "How do I know if a farmer is trustworthy?",
          answer:
            "Look for the verified badge on farmer profiles. Verified farmers have been vetted by our team. You can also view ratings and reviews from previous buyers, and check the farmer's transaction history.",
        },
        {
          question: "Can I request specific quantities or quality standards?",
          answer:
            "Yes, when you send an inquiry to a farmer, you can specify your exact requirements including quantity, quality grade, delivery timeline, and packaging preferences.",
        },
        {
          question: "What if there's a problem with my order?",
          answer:
            "Contact our support team immediately. We have a dispute resolution process to help resolve issues between buyers and farmers. For transactions using our escrow service, funds are protected until you confirm receipt.",
        },
      ],
    },
    {
      category: "Agents Program",
      questions: [
        {
          question: "What is a Yofarm Hub Agent?",
          answer:
            "Agents are verified field representatives who help offline farmers access our marketplace. They assist with registration, produce listing, and facilitate transactions on behalf of farmers who don't have smartphones or internet access.",
        },
        {
          question: "How do I become an agent?",
          answer:
            "Apply through our website or app. You'll need to be 18+, have a smartphone, and pass our verification and training process. Once approved, you can start onboarding farmers and earning commissions.",
        },
        {
          question: "How much can I earn as an agent?",
          answer:
            "Agents earn commissions on successful transactions they facilitate. The exact rate varies but averages around 25% of our platform fee. Top-performing agents can earn additional bonuses and advance to regional coordinator roles.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          question: "What logistics services do you offer?",
          answer:
            "We partner with verified transport providers to offer produce collection and delivery services. You can request logistics through the platform and get quotes from multiple providers.",
        },
        {
          question: "Can I get financing for my farming activities?",
          answer:
            "Yes, we partner with financial institutions to offer input financing, harvest loans, and working capital for farmers. Your transaction history on Yofarm Hub can help you qualify for better terms.",
        },
        {
          question: "Do you offer agricultural consultancy?",
          answer:
            "We provide access to agricultural experts who can advise on crop management, pest control, market timing, and best practices. Consultancy can be booked through our platform.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "Is my information safe on Yofarm Hub?",
          answer:
            "Yes, we use industry-standard encryption to protect your data. We never share your personal information with third parties without your consent. Read our Privacy Policy for more details.",
        },
        {
          question: "How do you prevent fraud?",
          answer:
            "We verify all users, monitor transactions for suspicious activity, and have a dedicated team to investigate reports of fraud. Our escrow service protects large transactions.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <HelpCircle className="h-5 w-5" />
                <span className="font-medium">Help Center</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about Yofarm Hub. Can't find
                what you're looking for? Contact our support team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 md:py-16">
          <div className="container-custom max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border/50 rounded-lg px-4 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our support team is here to help. Reach out to us via WhatsApp,
                email, or phone and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/256781686968"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
