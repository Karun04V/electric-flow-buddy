import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-r from-electric/10 via-card to-energy/10 border-electric/20 p-12 text-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-electric/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-energy/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm border border-border rounded-full mb-8">
              <Zap className="w-4 h-4 text-electric" />
              <span className="text-sm">Ready to Transform Your City?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Smart Transit
              <span className="bg-gradient-to-r from-electric to-energy bg-clip-text text-transparent"> Journey Today</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join leading cities worldwide in revolutionizing public transportation 
              with intelligent, sustainable, and efficient electric bus systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-4">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-electric/30 hover:border-electric hover:bg-electric/10">
                Contact Sales
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-energy mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-glow mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric mb-2">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;