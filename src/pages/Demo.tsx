import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { 
  Bus, 
  Battery, 
  Users, 
  MapPin, 
  TrendingUp, 
  Zap, 
  ArrowLeft, 
  Play, 
  Pause,
  BarChart3,
  Route,
  Clock,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";

// Simulated bus data
const generateBusData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `MV-${String(i + 1).padStart(3, '0')}`,
    route: `Route ${Math.floor(Math.random() * 8) + 1}`,
    battery: Math.floor(Math.random() * 100),
    passengers: Math.floor(Math.random() * 45),
    capacity: 45,
    status: Math.random() > 0.1 ? 'active' : 'charging',
    location: `Stop ${Math.floor(Math.random() * 20) + 1}`,
    efficiency: 85 + Math.floor(Math.random() * 15),
    nextStop: `Stop ${Math.floor(Math.random() * 20) + 1}`,
    eta: Math.floor(Math.random() * 15) + 2
  }));
};

const Demo = () => {
  const [buses, setBuses] = useState(generateBusData());
  const [isLive, setIsLive] = useState(true);
  const [showTooltips, setShowTooltips] = useState(true);
  const [stats, setStats] = useState({
    activeBuses: 11,
    totalPassengers: 487,
    averageOccupancy: 68,
    energyEfficiency: 92,
    emissions: 23,
    onTimePerformance: 94
  });

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setBuses(prevBuses => 
        prevBuses.map(bus => ({
          ...bus,
          battery: Math.max(0, Math.min(100, bus.battery + (Math.random() - 0.5) * 5)),
          passengers: Math.max(0, Math.min(45, bus.passengers + Math.floor((Math.random() - 0.5) * 8))),
          efficiency: Math.max(70, Math.min(100, bus.efficiency + (Math.random() - 0.5) * 3)),
          eta: Math.max(1, bus.eta + Math.floor((Math.random() - 0.5) * 3))
        }))
      );

      setStats(prevStats => ({
        ...prevStats,
        totalPassengers: prevStats.totalPassengers + Math.floor((Math.random() - 0.5) * 20),
        averageOccupancy: Math.max(50, Math.min(85, prevStats.averageOccupancy + (Math.random() - 0.5) * 5)),
        energyEfficiency: Math.max(85, Math.min(98, prevStats.energyEfficiency + (Math.random() - 0.5) * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getBatteryColor = (battery: number) => {
    if (battery > 60) return "text-energy";
    if (battery > 30) return "text-yellow-500";
    return "text-destructive";
  };

  const getStatusBadge = (status: string, battery: number) => {
    if (status === 'charging') return <Badge variant="secondary">Charging</Badge>;
    if (battery < 30) return <Badge variant="destructive">Low Battery</Badge>;
    return <Badge variant="default" className="bg-energy text-energy-foreground">Active</Badge>;
  };

  const TooltipWrapper = ({ children, content, enabled = true }: { children: React.ReactNode, content: string, enabled?: boolean }) => {
    if (!enabled || !showTooltips) return <>{children}</>;
    
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <div className="h-6 w-px bg-border" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-electric to-energy bg-clip-text text-transparent">
                  Metro Valley Transit - Live Demo
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <TooltipWrapper content="Toggle guided tour tooltips on/off" enabled={false}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowTooltips(!showTooltips)}
                  >
                    {showTooltips ? "Hide" : "Show"} Guide
                  </Button>
                </TooltipWrapper>
                
                <TooltipWrapper content="Pause or resume real-time data updates" enabled={false}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsLive(!isLive)}
                  >
                    {isLive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isLive ? "Pause" : "Resume"} Live Data
                  </Button>
                </TooltipWrapper>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <TooltipWrapper content="Number of electric buses currently in service across Metro Valley">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bus className="w-5 h-5 text-electric" />
                    <span className="text-sm text-muted-foreground">Active Buses</span>
                  </div>
                  <div className="text-2xl font-bold text-electric">{stats.activeBuses}</div>
                </CardContent>
              </Card>
            </TooltipWrapper>

            <TooltipWrapper content="Real-time count of passengers across all active buses">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-energy" />
                    <span className="text-sm text-muted-foreground">Passengers</span>
                  </div>
                  <div className="text-2xl font-bold text-energy">{stats.totalPassengers}</div>
                </CardContent>
              </Card>
            </TooltipWrapper>

            <TooltipWrapper content="Average passenger occupancy rate across the fleet - helps optimize route frequency">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-electric" />
                    <span className="text-sm text-muted-foreground">Occupancy</span>
                  </div>
                  <div className="text-2xl font-bold text-electric">{stats.averageOccupancy}%</div>
                </CardContent>
              </Card>
            </TooltipWrapper>

            <TooltipWrapper content="Fleet-wide energy efficiency rating - ElectricFlow's AI optimizes routes for maximum efficiency">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-energy" />
                    <span className="text-sm text-muted-foreground">Efficiency</span>
                  </div>
                  <div className="text-2xl font-bold text-energy">{stats.energyEfficiency}%</div>
                </CardContent>
              </Card>
            </TooltipWrapper>

            <TooltipWrapper content="CO2 emissions reduced compared to diesel buses - a key sustainability metric">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-5 h-5 text-energy" />
                    <span className="text-sm text-muted-foreground">Emissions ↓</span>
                  </div>
                  <div className="text-2xl font-bold text-energy">{stats.emissions}%</div>
                </CardContent>
              </Card>
            </TooltipWrapper>

            <TooltipWrapper content="On-time performance rating - predictive analytics help maintain schedules">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-electric" />
                    <span className="text-sm text-muted-foreground">On-Time</span>
                  </div>
                  <div className="text-2xl font-bold text-electric">{stats.onTimePerformance}%</div>
                </CardContent>
              </Card>
            </TooltipWrapper>
          </div>

          <Tabs defaultValue="fleet" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fleet">Fleet Overview</TabsTrigger>
              <TabsTrigger value="routes">Route Analytics</TabsTrigger>
              <TabsTrigger value="charging">Charging Management</TabsTrigger>
            </TabsList>

            <TabsContent value="fleet">
              <div className="grid gap-6">
                <TooltipWrapper content="Real-time status of every bus in your fleet - see battery levels, passenger counts, and optimize operations instantly">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bus className="w-5 h-5" />
                        Live Fleet Status
                        {isLive && <div className="w-2 h-2 bg-energy rounded-full animate-pulse" />}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {buses.map((bus) => (
                          <div key={bus.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="text-sm font-mono">{bus.id}</div>
                              <div className="text-sm text-muted-foreground">{bus.route}</div>
                              {getStatusBadge(bus.status, bus.battery)}
                            </div>
                            
                            <div className="flex items-center gap-6">
                              <TooltipWrapper content={`Battery level: ${bus.battery}% - ${bus.battery < 30 ? 'Auto-routing to nearest charging station' : 'Battery level healthy'}`}>
                                <div className="flex items-center gap-2">
                                  <Battery className={`w-4 h-4 ${getBatteryColor(bus.battery)}`} />
                                  <span className={`text-sm font-medium ${getBatteryColor(bus.battery)}`}>
                                    {bus.battery}%
                                  </span>
                                </div>
                              </TooltipWrapper>

                              <TooltipWrapper content={`Passenger load: ${bus.passengers}/${bus.capacity} (${Math.round((bus.passengers/bus.capacity)*100)}% capacity)`}>
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-muted-foreground" />
                                  <span className="text-sm">{bus.passengers}/{bus.capacity}</span>
                                  <Progress value={(bus.passengers/bus.capacity)*100} className="w-16 h-2" />
                                </div>
                              </TooltipWrapper>

                              <TooltipWrapper content={`Current location and ETA to next stop - real-time GPS tracking`}>
                                <div className="text-right">
                                  <div className="text-xs text-muted-foreground">{bus.location}</div>
                                  <div className="text-xs">ETA: {bus.eta}min</div>
                                </div>
                              </TooltipWrapper>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TooltipWrapper>
              </div>
            </TabsContent>

            <TabsContent value="routes">
              <div className="grid md:grid-cols-2 gap-6">
                <TooltipWrapper content="AI-powered route optimization based on real-time traffic, passenger demand, and energy efficiency">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Route className="w-5 h-5" />
                        Optimized Routes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((route) => (
                          <div key={route} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                            <span className="font-medium">Route {route}</span>
                            <div className="flex items-center gap-4">
                              <Badge variant="default" className="bg-energy text-energy-foreground">
                                {85 + Math.floor(Math.random() * 15)}% Efficient
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {2 + Math.floor(Math.random() * 3)} buses
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TooltipWrapper>

                <TooltipWrapper content="Passenger demand patterns throughout the day help optimize bus frequency and capacity">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Demand Patterns
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12 text-muted-foreground">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Interactive demand visualization</p>
                        <p className="text-sm">Real implementation would show detailed analytics</p>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipWrapper>
              </div>
            </TabsContent>

            <TabsContent value="charging">
              <TooltipWrapper content="Smart charging management - AI predicts when buses need charging and optimizes station usage">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Smart Charging Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Charging Stations</h4>
                        {['Downtown Hub', 'North Terminal', 'Airport'].map((station, i) => (
                          <div key={station} className="p-3 bg-muted/50 rounded">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">{station}</span>
                              <Badge variant="outline">{2 + i}/4 Available</Badge>
                            </div>
                            <Progress value={(2 + i) * 25} className="h-2" />
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium">Charging Queue</h4>
                        {buses.filter(bus => bus.battery < 40).map((bus) => (
                          <div key={bus.id} className="p-3 bg-muted/50 rounded">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-mono">{bus.id}</span>
                              <span className="text-sm text-destructive">{bus.battery}%</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              ETA to station: {5 + Math.floor(Math.random() * 10)}min
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium">Energy Grid</h4>
                        <div className="p-4 bg-energy/10 rounded border border-energy/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Leaf className="w-4 h-4 text-energy" />
                            <span className="text-sm font-medium">Green Energy</span>
                          </div>
                          <div className="text-2xl font-bold text-energy">78%</div>
                          <div className="text-xs text-muted-foreground">Solar + Wind powered</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TooltipWrapper>
            </TabsContent>
          </Tabs>

          {/* Demo Notice */}
          <Card className="mt-8 bg-gradient-to-r from-electric/10 to-energy/10 border-electric/20">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">This is a Simulated Demo</h3>
                <p className="text-muted-foreground mb-4">
                  You're viewing Metro Valley, a fictional city showcasing ElectricFlow's capabilities. 
                  Real implementations include live GPS tracking, actual energy consumption data, and integration with your city's infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="electric" asChild>
                    <Link to="/get-started">Schedule Real Demo</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/">Learn More Features</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </TooltipProvider>
  );
};

export default Demo;