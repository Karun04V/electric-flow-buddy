import { Card } from "@/components/ui/card";
import { Users, MapPin, BarChart3, Zap, Clock, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Real-Time Passenger Tracking",
      description: "Monitor bus occupancy levels with IoT sensors and AI-powered counting systems for accurate passenger data.",
      color: "text-electric"
    },
    {
      icon: MapPin,
      title: "Smart Route Optimization", 
      description: "Dynamic route adjustments based on traffic patterns, passenger demand, and real-time city conditions.",
      color: "text-energy"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into transit performance, usage patterns, and optimization opportunities.",
      color: "text-electric-glow"
    },
    {
      icon: Zap,
      title: "Electric Fleet Management",
      description: "Optimize charging schedules and energy consumption for maximum efficiency and minimal downtime.",
      color: "text-electric"
    },
    {
      icon: Clock,
      title: "Predictive Arrival Times",
      description: "AI-powered predictions for accurate arrival times, reducing passenger wait times significantly.",
      color: "text-energy"
    },
    {
      icon: Leaf,
      title: "Sustainability Metrics",
      description: "Track carbon footprint reduction, energy savings, and environmental impact of your electric fleet.",
      color: "text-electric-glow"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligent Transit
            <span className="bg-gradient-to-r from-electric to-energy bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your city's transportation with cutting-edge technology that optimizes 
            every aspect of electric bus operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-electric/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="mb-6">
                  <Icon className={`w-12 h-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;