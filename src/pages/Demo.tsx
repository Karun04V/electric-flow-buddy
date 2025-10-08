import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Battery, MapPin, AlertTriangle, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Bus {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  battery: number;
  occupancy: number;
  status: 'active' | 'charging' | 'skip-mode';
  nextStop: string;
  hasBookings: boolean;
  distanceTravelled: number;
}

interface Stop {
  name: string;
  bookings: number;
  skipped: boolean;
}

const Demo = () => {
  const [buses, setBuses] = useState<Bus[]>([
    { id: '01', name: 'Bus 01', location: { lat: 40.7128, lng: -74.0060 }, battery: 85, occupancy: 45, status: 'active', nextStop: 'Central Station', hasBookings: true, distanceTravelled: 12.5 },
    { id: '02', name: 'Bus 02', location: { lat: 40.7580, lng: -73.9855 }, battery: 35, occupancy: 15, status: 'charging', nextStop: 'Charging Hub A', hasBookings: false, distanceTravelled: 28.3 },
    { id: '03', name: 'Bus 03', location: { lat: 40.7489, lng: -73.9680 }, battery: 62, occupancy: 78, status: 'active', nextStop: 'University Plaza', hasBookings: true, distanceTravelled: 18.7 },
    { id: '04', name: 'Bus 04', location: { lat: 40.7282, lng: -74.0776 }, battery: 28, occupancy: 12, status: 'skip-mode', nextStop: 'Park Avenue (Skipping)', hasBookings: false, distanceTravelled: 32.1 },
  ]);

  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [batteryHistory, setBatteryHistory] = useState<Array<{ time: string; battery: number }>>([]);

  const tutorialSteps = [
    { title: "Welcome to ElectricFlow!", message: "This is a live simulation of our intelligent fleet management system. Let me show you around!" },
    { title: "Real-Time Fleet View", message: "Here you can see all buses in the Metroville fleet. Each card shows battery level, passenger occupancy, and current status." },
    { title: "Smart Battery Management", message: "Notice Bus 02? Its battery dropped below 40%, so it's automatically being routed to the nearest charging station!" },
    { title: "Intelligent Stop Skipping", message: "Bus 04 is in 'Skip Mode'. With only 12% occupancy, no bookings, and low battery, it's skipping unnecessary stops." },
    { title: "AI Passenger Detection", message: "Occupancy is detected in real-time using YOLO-based computer vision from onboard cameras." },
    { title: "Click to Explore", message: "Click on any bus card to see detailed analytics, battery history, and decision-making logic!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBuses(prevBuses => prevBuses.map(bus => {
        let newBattery = bus.battery;
        let newOccupancy = bus.occupancy;
        let newStatus = bus.status;
        let newDistance = bus.distanceTravelled;

        // Simulate battery drain based on distance
        if (bus.status === 'active') {
          newBattery = Math.max(0, bus.battery - Math.random() * 2);
          newDistance += Math.random() * 0.5;
          
          // Random occupancy changes (simulating passengers boarding/leaving)
          newOccupancy = Math.max(0, Math.min(100, bus.occupancy + (Math.random() - 0.5) * 10));
        }

        // Simulate charging
        if (bus.status === 'charging') {
          newBattery = Math.min(100, bus.battery + Math.random() * 3);
          if (newBattery > 80) {
            newStatus = 'active';
          }
        }

        // Auto-switch to charging mode if battery low
        if (newBattery < 40 && bus.status === 'active' && !bus.hasBookings) {
          newStatus = 'charging';
        }

        // Auto-switch to skip mode if conditions met
        if (newBattery < 40 && newOccupancy < 20 && !bus.hasBookings && bus.status === 'active') {
          newStatus = 'skip-mode';
        }

        // Exit skip mode if conditions change
        if (bus.status === 'skip-mode' && (newBattery > 50 || newOccupancy > 30 || bus.hasBookings)) {
          newStatus = 'active';
        }

        return {
          ...bus,
          battery: newBattery,
          occupancy: newOccupancy,
          status: newStatus,
          distanceTravelled: newDistance
        };
      }));

      // Update battery history for selected bus
      if (selectedBus) {
        setBatteryHistory(prev => {
          const newHistory = [...prev, {
            time: new Date().toLocaleTimeString(),
            battery: buses.find(b => b.id === selectedBus.id)?.battery || 0
          }];
          return newHistory.slice(-10); // Keep last 10 data points
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedBus, buses]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-accent';
      case 'charging': return 'text-primary';
      case 'skip-mode': return 'text-yellow-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-5 w-5" />;
      case 'charging': return <Zap className="h-5 w-5" />;
      case 'skip-mode': return <AlertTriangle className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold">ElectricFlow Live Demo - Metroville Transit</h1>
        </div>
      </div>

      {/* Tutorial Overlay */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-secondary border-2 border-primary rounded-lg p-8 max-w-md">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">Step {tutorialStep + 1} of {tutorialSteps.length}</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{tutorialSteps[tutorialStep].title}</h2>
            <p className="text-muted-foreground mb-6">{tutorialSteps[tutorialStep].message}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowTutorial(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skip Tutorial
              </button>
              <button
                onClick={() => {
                  if (tutorialStep < tutorialSteps.length - 1) {
                    setTutorialStep(tutorialStep + 1);
                  } else {
                    setShowTutorial(false);
                  }
                }}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                {tutorialStep < tutorialSteps.length - 1 ? 'Next' : 'Start Exploring'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Fleet Overview Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            label="Active Buses"
            value={buses.filter(b => b.status === 'active').length.toString()}
          />
          <StatCard
            icon={<Battery className="h-6 w-6 text-accent" />}
            label="Average Battery"
            value={`${Math.round(buses.reduce((sum, b) => sum + b.battery, 0) / buses.length)}%`}
          />
          <StatCard
            icon={<Users className="h-6 w-6 text-primary" />}
            label="Total Passengers"
            value={Math.round(buses.reduce((sum, b) => sum + (b.occupancy * 50 / 100), 0)).toString()}
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
            label="Efficiency Score"
            value="94%"
          />
        </div>

        {/* Bus Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {buses.map(bus => (
            <div
              key={bus.id}
              onClick={() => {
                setSelectedBus(bus);
                setBatteryHistory([{ time: new Date().toLocaleTimeString(), battery: bus.battery }]);
              }}
              className="bg-secondary/50 border border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-all hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{bus.name}</h3>
                <div className={`flex items-center space-x-1 ${getStatusColor(bus.status)}`}>
                  {getStatusIcon(bus.status)}
                  <span className="text-sm font-medium capitalize">{bus.status.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Battery */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Battery</span>
                  <span className={bus.battery < 40 ? 'text-red-500 font-bold' : 'text-foreground'}>
                    {bus.battery.toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${bus.battery < 40 ? 'bg-red-500' : 'bg-accent'}`}
                    style={{ width: `${bus.battery}%` }}
                  />
                </div>
              </div>

              {/* Occupancy */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Occupancy</span>
                  <span>{bus.occupancy.toFixed(0)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${bus.occupancy}%` }}
                  />
                </div>
              </div>

              {/* Next Stop */}
              <div className="text-sm">
                <span className="text-muted-foreground">Next: </span>
                <span className="text-foreground font-medium">{bus.nextStop}</span>
              </div>

              {/* Distance */}
              <div className="text-sm mt-2">
                <span className="text-muted-foreground">Distance: </span>
                <span className="text-foreground font-medium">{bus.distanceTravelled.toFixed(1)} km</span>
              </div>

              {/* Decision Logic Indicator */}
              {bus.status === 'skip-mode' && (
                <div className="mt-3 p-2 bg-yellow-500/20 border border-yellow-500/50 rounded text-xs">
                  🤖 AI Decision: Skipping stops (Low battery + Low occupancy + No bookings)
                </div>
              )}
              {bus.status === 'charging' && (
                <div className="mt-3 p-2 bg-primary/20 border border-primary/50 rounded text-xs">
                  ⚡ Auto-routed to charging station
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Bus View */}
        {selectedBus && (
          <div className="bg-secondary/50 border border-primary rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Detailed Analytics - {selectedBus.name}</h2>
              <button
                onClick={() => setSelectedBus(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Battery History Chart */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Battery History</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={batteryHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--secondary))', border: '1px solid hsl(var(--border))' }}
                    />
                    <Line type="monotone" dataKey="battery" stroke="hsl(var(--accent))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Decision Logic */}
              <div>
                <h3 className="text-lg font-semibold mb-4">AI Decision Logic</h3>
                <div className="space-y-3">
                  <DecisionFactor
                    label="Battery Level"
                    value={`${selectedBus.battery.toFixed(0)}%`}
                    status={selectedBus.battery > 40 ? 'good' : 'alert'}
                    condition="< 40% triggers charging mode"
                  />
                  <DecisionFactor
                    label="Occupancy"
                    value={`${selectedBus.occupancy.toFixed(0)}%`}
                    status={selectedBus.occupancy > 20 ? 'good' : 'alert'}
                    condition="< 20% enables stop skipping"
                  />
                  <DecisionFactor
                    label="Next Stop Bookings"
                    value={selectedBus.hasBookings ? 'Yes' : 'No'}
                    status={selectedBus.hasBookings ? 'good' : 'neutral'}
                    condition="No bookings allows skipping"
                  />
                  <DecisionFactor
                    label="Distance Travelled"
                    value={`${selectedBus.distanceTravelled.toFixed(1)} km`}
                    status="neutral"
                    condition="Used for battery estimation"
                  />
                  
                  <div className="mt-4 p-4 bg-background rounded border border-border">
                    <p className="text-sm font-semibold mb-2">Current Decision:</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedBus.status === 'active' && "✅ Normal operation - Continue to next stop"}
                      {selectedBus.status === 'charging' && "⚡ Low battery detected - Routing to nearest charging station"}
                      {selectedBus.status === 'skip-mode' && "⏭️ Skip mode active - Bypassing stops with no demand"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* YOLO Detection Simulation */}
            <div className="mt-6 p-4 bg-background rounded border border-border">
              <h3 className="text-lg font-semibold mb-3">🎥 Live YOLO Passenger Detection</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Simulated output from onboard camera with YOLO object detection
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 bg-secondary rounded">
                  <div className="text-accent font-bold">Detected: {Math.round(selectedBus.occupancy / 2)}</div>
                  <div className="text-muted-foreground text-xs">Standing passengers</div>
                </div>
                <div className="p-2 bg-secondary rounded">
                  <div className="text-accent font-bold">Detected: {Math.round(selectedBus.occupancy / 2)}</div>
                  <div className="text-muted-foreground text-xs">Seated passengers</div>
                </div>
                <div className="p-2 bg-secondary rounded">
                  <div className="text-primary font-bold">Model: YOLOv8</div>
                  <div className="text-muted-foreground text-xs">Inference: 45ms</div>
                </div>
                <div className="p-2 bg-secondary rounded">
                  <div className="text-primary font-bold">Confidence: 94%</div>
                  <div className="text-muted-foreground text-xs">Detection accuracy</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-secondary/50 border border-border rounded-lg p-4">
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  </div>
);

const DecisionFactor = ({ 
  label, 
  value, 
  status, 
  condition 
}: { 
  label: string; 
  value: string; 
  status: 'good' | 'alert' | 'neutral';
  condition: string;
}) => (
  <div className="p-3 bg-background rounded border border-border">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium">{label}</span>
      <span className={`text-sm font-bold ${
        status === 'good' ? 'text-accent' : 
        status === 'alert' ? 'text-red-500' : 
        'text-muted-foreground'
      }`}>
        {value}
      </span>
    </div>
    <p className="text-xs text-muted-foreground">{condition}</p>
  </div>
);

export default Demo;
