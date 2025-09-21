import { Mail, Phone, Plane, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// A small, reusable component for footer links to keep the code clean
const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-slate-600 hover:text-blue-600 hover:underline transition-all duration-200"
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main grid for layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Brand and About */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-xl shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                RentalConfirmation
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Your trusted partner in finding the perfect rentals. We act as
              your intermediary to flights, hotels and car rentals seamlessly.
            </p>
          </div>

          {/* Column 2: Policies */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wider uppercase">
              Policies
            </h3>
            <div className="flex flex-col gap-3">
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
              <FooterLink to="/refunds&cancellation">
                Refunds & Cancellations
              </FooterLink>
              {/* <FooterLink to="/privacy">Privacy Policy</FooterLink> */}
            </div>
          </div>

          {/* Column 3: Company */}
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

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:support@rentalconfirmation.com"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div>
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>{" "}
                <span className="group-hover:underline">
                  support@rentalconfirmation.com
                </span>
              </a>
              <a
                href="tel:+18883194407"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div>
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="group-hover:underline">+1-888-319-4407</span>
              </a>
              {/* <p className="text-slate-600 text-sm mt-2">
                37A/2 Kaushik Enclave, Burari, Delhi 110084
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Socials */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-800">
              RentalConfirmation
            </span>
            . All Rights Reserved.
          </p>
          {/* <div className="flex gap-5">
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
