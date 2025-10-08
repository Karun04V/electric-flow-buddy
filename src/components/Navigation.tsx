import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">ElectricFlow</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Live Demo
            </Link>
            <Link to="/signin" className="text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link
              to="/get-started"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
