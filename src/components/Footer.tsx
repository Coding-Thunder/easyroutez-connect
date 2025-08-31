import { Mail, Phone, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-blue-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-gradient-blue p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              EasyRoutez
            </h2>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-primary-light p-2 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a 
                href="mailto:routezeasy@gmail.com"
                className="text-lg text-foreground hover:text-primary transition-colors duration-300"
              >
                routezeasy@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="bg-primary-light p-2 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <a 
                href="tel:+18557616979"
                className="text-lg text-foreground hover:text-primary transition-colors duration-300"
              >
                +1 855-761-6979
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-blue-border">
            <p className="text-muted-foreground">
              © 2025 EasyRoutez. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;