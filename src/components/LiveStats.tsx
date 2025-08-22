import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Bus } from "lucide-react";
import { useEffect, useState } from "react";

const LiveStats = () => {
  const [stats, setStats] = useState({
    activeBuses: 124,
    totalPassengers: 2847,
    averageOccupancy: 68,
    energyEfficiency: 94
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeBuses: prev.activeBuses + Math.floor(Math.random() * 3) - 1,
        totalPassengers: prev.totalPassengers + Math.floor(Math.random() * 20) - 10,
        averageOccupancy: Math.max(45, Math.min(85, prev.averageOccupancy + Math.floor(Math.random() * 6) - 3)),
        energyEfficiency: Math.max(88, Math.min(98, prev.energyEfficiency + Math.floor(Math.random() * 4) - 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-electric text-electric">
            <Activity className="w-4 h-4 mr-2" />
            Live Data Feed
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real-Time System
            <span className="bg-gradient-to-r from-electric to-energy bg-clip-text text-transparent"> Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your entire electric bus network with live updates and intelligent insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-card to-electric/5 border-electric/20">
            <div className="flex items-center justify-between mb-4">
              <Bus className="w-8 h-8 text-electric" />
              <TrendingUp className="w-5 h-5 text-energy" />
            </div>
            <div className="text-3xl font-bold text-electric mb-2">{stats.activeBuses}</div>
            <div className="text-sm text-muted-foreground">Active Buses</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-energy/5 border-energy/20">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-energy" />
              <TrendingUp className="w-5 h-5 text-electric" />
            </div>
            <div className="text-3xl font-bold text-energy mb-2">{stats.totalPassengers.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Current Passengers</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-electric-glow/5 border-electric-glow/20">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-electric-glow" />
              <Badge variant={stats.averageOccupancy > 70 ? "default" : "secondary"} className="text-xs">
                {stats.averageOccupancy > 70 ? "High" : "Normal"}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-electric-glow mb-2">{stats.averageOccupancy}%</div>
            <div className="text-sm text-muted-foreground">Avg. Occupancy</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-energy/5 border-energy/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-energy flex items-center justify-center">
                <span className="text-background text-sm font-bold">⚡</span>
              </div>
              <TrendingUp className="w-5 h-5 text-energy" />
            </div>
            <div className="text-3xl font-bold text-energy mb-2">{stats.energyEfficiency}%</div>
            <div className="text-sm text-muted-foreground">Energy Efficiency</div>
          </Card>
        </div>

        {/* Route Status */}
        <Card className="p-8 bg-gradient-to-r from-card/50 to-electric/5 backdrop-blur-sm border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center">Top Performing Routes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-background/50">
              <div className="text-2xl font-bold text-electric mb-2">Route 47</div>
              <div className="text-sm text-muted-foreground mb-2">Downtown - Tech District</div>
              <Badge variant="default" className="bg-energy text-background">95% On-Time</Badge>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <div className="text-2xl font-bold text-energy mb-2">Route 23</div>
              <div className="text-sm text-muted-foreground mb-2">University - Mall</div>
              <Badge variant="default" className="bg-electric text-background">88% Capacity</Badge>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <div className="text-2xl font-bold text-electric-glow mb-2">Route 15</div>
              <div className="text-sm text-muted-foreground mb-2">Residential - City Center</div>
              <Badge variant="default" className="bg-energy text-background">92% Efficiency</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LiveStats;