import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-muted pattern-dots">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Contact Us
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have questions about Yofarm Hub? We're here to help. Reach out to us and our team will get back to you shortly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-card rounded-3xl p-10 card-elevated">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input
                        placeholder="+256 xxx xxx xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <Input
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you're a farmer looking to sell, a buyer seeking quality produce, or a partner interested in collaboration, 
                    we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      lines: ["WhatsApp: +256 781 686 968", "Office: +256 200 947 464"],
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      lines: ["trade@yofarmhub.com", "support@yofarmhub.com"],
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      lines: ["Kampala, Uganda", "East Africa"],
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-6 bg-muted rounded-2xl">
                      <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.lines.map((line) => (
                          <p key={line} className="text-muted-foreground text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-primary rounded-2xl p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                    Chat with Us on WhatsApp
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    Get quick responses to your questions via WhatsApp.
                  </p>
                  <Button variant="accent" asChild>
                    <a href="https://wa.me/256781686968" target="_blank" rel="noopener noreferrer">
                      Start WhatsApp Chat
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
