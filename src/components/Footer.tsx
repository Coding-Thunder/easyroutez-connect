import { Mail, Phone, Car, FileText, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-green-50 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        {/* Top Row: Logo, Links, Phone */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-xl shadow-md">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-green-900">Autrova</h2>
          </div>

          {/* Contact + Links (center) */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="mailto:support@autrova.com"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Mail className="w-5 h-5 text-green-600" />
              <span className="font-medium">support@autrova.com</span>
            </a>

            <div className="flex items-center gap-2 text-gray-700 text-center flex-col sm:flex-row">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="font-medium">
                219, 4th St, Los Angeles, CA, 90013, United States
              </span>
            </div>

            <Link
              to="/terms"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <FileText className="w-5 h-5 text-green-600" />
              <span className="font-medium">Terms & Conditions</span>
            </Link>
          </div>

          {/* Phone Number (Extreme Right) */}
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="font-medium">+1 855-761-6979</span>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-500 text-center">
          © 2025 <span className="font-semibold text-green-900">Autrova</span>.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
