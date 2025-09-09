import { Mail, Phone, Plane, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-green-50 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-xl shadow-md">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-green-900">
              RentalConfirmation
            </h2>
          </div>

          {/* Contact + Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="mailto:support@rentalconfirmation.com"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Mail className="w-5 h-5 text-green-600" />
              <span className="font-medium">
                support@rentalconfirmation.com
              </span>
            </a>

            <a
              href="tel:+18883194407"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Phone className="w-5 h-5 text-green-600" />
              <span className="font-medium">+1-888-319-4407</span>
            </a>

            {/* Terms & Conditions Link */}
            <Link
              to="/terms"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <FileText className="w-5 h-5 text-green-600" />
              <span className="font-medium">Terms & Conditions</span>
            </Link>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-500 text-center">
          © 2025{" "}
          <span className="font-semibold text-green-900">
            RentalConfirmation
          </span>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
