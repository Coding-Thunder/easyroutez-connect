import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  variant?: "primary" | "secondary" | "header";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CallButton = ({ variant = "primary", size = "md", className }: CallButtonProps) => {
  const baseClasses = "font-semibold transition-all duration-300 hover:shadow-medium";
  
  const variants = {
    primary: "bg-gradient-blue text-white border-2 border-primary hover:bg-primary-dark hover:scale-105",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary-light",
    header: "bg-green-400 text-primary-foreground hover:bg-primary-dark"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3"
  };

  return (
    <Button
      asChild
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
    >
      <a href="tel:+18557616979" className="inline-flex items-center">
        <Phone className="w-5 h-5" />
        Call Now
      </a>
    </Button>
  );
};

export default CallButton;