import { Plane } from "lucide-react";
import CallButton from "./CallButton";

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-blue-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <div className="bg-green-400 p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div> */}
            <h1 className="text-2xl text-green-400 font-bold text-foreground">
              <span className="text-black">Rental</span>Confirmation
            </h1>
          </div>

          {/* Call Button */}
          <CallButton
            variant="header"
            className="animate-pulse duration-1000"
            size="sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
