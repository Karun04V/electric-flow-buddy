import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Zap, Battery, MapPin, TrendingUp, Shield, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Smart Electric Fleet Management
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Revolutionize your city's public transport with AI-powered electric bus management. 
            Real-time monitoring, intelligent routing, and optimized charging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Live Demo
            </Link>
            <Link
              to="/get-started"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPin className="h-12 w-12 text-primary" />}
              title="Real-Time Tracking"
              description="Monitor your entire fleet's location, battery status, and passenger occupancy in real-time."
            />
            <FeatureCard
              icon={<Battery className="h-12 w-12 text-accent" />}
              title="Smart Charging"
              description="AI-powered charging optimization automatically routes buses to charging stations when needed."
            />
            <FeatureCard
              icon={<TrendingUp className="h-12 w-12 text-primary" />}
              title="Predictive Analytics"
              description="Forecast battery usage, passenger demand, and optimize routes for maximum efficiency."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-accent" />}
              title="AI Passenger Detection"
              description="YOLO-based computer vision detects passenger occupancy to optimize stop decisions."
            />
            <FeatureCard
              icon={<Clock className="h-12 w-12 text-primary" />}
              title="Intelligent Stop Skipping"
              description="Automatically skip stops with no bookings and low occupancy to save battery and time."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-accent" />}
              title="Energy Optimization"
              description="Maximize fleet efficiency with data-driven energy management and route planning."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="space-y-12">
            <Step
              number="1"
              title="Real-Time Monitoring"
              description="Our system continuously monitors bus locations, battery levels, and passenger occupancy using GPS and AI-powered cameras."
            />
            <Step
              number="2"
              title="Intelligent Decision Making"
              description="Advanced algorithms analyze ticket bookings, occupancy rates, and battery status to make smart routing decisions."
            />
            <Step
              number="3"
              title="Automatic Optimization"
              description="Buses automatically skip stops when conditions allow, and redirect to charging stations when battery is low."
            />
            <Step
              number="4"
              title="Continuous Learning"
              description="The system learns from patterns to improve predictions and optimize fleet performance over time."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Fleet?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking cities already using ElectricFlow to optimize their public transport.
          </p>
          <Link
            to="/get-started"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
      {number}
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Home;
