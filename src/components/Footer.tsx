import { Mail, Phone, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-blue-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-start gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-blue p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              EasyRoutez
            </h2>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a 
              href="mailto:routezeasy@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="bg-primary-light p-2 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">routezeasy@gmail.com</span>
            </a>
            
            <a 
              href="tel:+18557616979"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="bg-primary-light p-2 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">+1 855-761-6979</span>
            </a>
          </div>

          {/* Copyright Disclaimer */}
          <div className="text-muted-foreground text-sm">
            © 2025 EasyRoutez. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;