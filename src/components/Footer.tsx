import { Mail, Phone, Triangle } from "lucide-react";
import { Link } from "react-router-dom";

// Reusable footer link
const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-slate-600 hover:text-blue-600 hover:underline transition-all duration-200"
  >
    {children}
  </Link>
);

// Logo built with lucide-react + text
const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      {/* Blue left-pointing triangle */}
      <Triangle
        className="w-12 h-12 text-blue-500 fill-blue-500"
        stroke="none"
        transform="rotate(-90)" // rotate so it points left
      />
      {/* Text block */}
      <div className="leading-tight">
        <div className="text-2xl font-bold text-black">Rental</div>
        <div className="text-xs tracking-wide text-black">CONFIRMATION</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand and About */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Your trusted partner in finding the perfect rentals. We act as
              your intermediary to flights, hotels and car rentals seamlessly.
            </p>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wider uppercase">
              Policies
            </h3>
            <div className="flex flex-col gap-3">
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
              <FooterLink to="/refunds&cancellation">
                Refunds & Cancellations
              </FooterLink>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wider uppercase">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/">Flights</FooterLink>
              <FooterLink to="/cars">Cars</FooterLink>
              <FooterLink to="/hotels">Hotels</FooterLink>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:support@universalticketss.com"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div>
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <span className="group-hover:underline">
                  support@universalticketss.com
                </span>
              </a>
              <a
                href="tel:+18557616979"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div>
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="group-hover:underline">+1-855-761-6979</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-800">
              UniversalTicketss
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
