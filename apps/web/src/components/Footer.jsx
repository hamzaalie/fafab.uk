
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="text-accent">FAFAB</span> Integrated Facilities Ltd
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Professional staffing, security, cleaning, and facilities management services across the UK.
            </p>
            <p className="text-sm text-primary-foreground/80">
              Company No: 17166678
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services/staffing" className="text-sm text-primary-foreground/80 hover:text-accent transition-all duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-sm text-primary-foreground/80 hover:text-accent transition-all duration-200">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>2nd Floor Suite-8, Cranbrook House, 61 Cranbrook Road, Ilford, London, IG1 4PG</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:02045119001" className="hover:text-accent transition-all duration-200">
                  020 4511 9001
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@fafab.uk" className="hover:text-accent transition-all duration-200">
                  info@fafab.uk
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="https://wa.me/442045119001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-all duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} FAFAB Integrated Facilities Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
