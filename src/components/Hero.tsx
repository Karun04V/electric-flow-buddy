import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-electric-bus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-energy rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-electric-glow rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full mb-8">
            <Zap className="w-4 h-4 text-electric" />
            <span className="text-sm text-muted-foreground">Next-Gen Smart Transit</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-electric to-energy bg-clip-text text-transparent leading-tight">
            Optimize Transit in Real-Time
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Track passenger counts, analyze traffic patterns, and optimize electric bus routes 
            with our intelligent transportation system that makes cities smarter and greener.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">47%</div>
              <div className="text-sm text-muted-foreground">Reduced Wait Times</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-energy mb-2">89k</div>
              <div className="text-sm text-muted-foreground">Daily Passengers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric-glow mb-2">23%</div>
              <div className="text-sm text-muted-foreground">Lower Emissions</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              View Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;