import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">Y</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl">Yofarm Hub</span>
                <span className="text-xs text-primary-foreground/70 -mt-1">B2B Marketplace</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Connecting farmers, buyers, and service providers across Africa. 
              Building trust and transparency in agricultural trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "How It Works", "Services", "Agents Program", "FAQs"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {["Trade & Marketplace", "Logistics Solutions", "Agricultural Finance", "Expert Consultancy"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">WhatsApp: +256 781 686 968</p>
                  <p className="text-primary-foreground/70">Office: +256 200 947 464</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:trade@yofarmhub.com" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  trade@yofarmhub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70 text-sm">Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Yofarm Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
