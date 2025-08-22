import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import LiveStats from "@/components/LiveStats";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="stats">
          <LiveStats />
        </div>
        <div id="contact">
          <CTA />
        </div>
      </main>
    </div>
  );
};

export default Index;
