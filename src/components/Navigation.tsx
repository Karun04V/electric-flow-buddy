import { Button } from "@/components/ui/button";
import { Zap, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-electric rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-electric to-energy bg-clip-text text-transparent">
              ElectricFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-electric transition-colors">
              Features
            </a>
            <a href="#stats" className="text-muted-foreground hover:text-electric transition-colors">
              Live Data
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-electric transition-colors">
              Solutions
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-electric transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="hover:text-electric">
              Sign In
            </Button>
            <Button variant="electric" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#features" className="text-muted-foreground hover:text-electric transition-colors">
                Features
              </a>
              <a href="#stats" className="text-muted-foreground hover:text-electric transition-colors">
                Live Data
              </a>
              <a href="#solutions" className="text-muted-foreground hover:text-electric transition-colors">
                Solutions
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-electric transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start hover:text-electric">
                  Sign In
                </Button>
                <Button variant="electric" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;