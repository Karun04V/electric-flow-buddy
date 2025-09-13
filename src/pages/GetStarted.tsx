import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Users, Calendar, Shield, Zap } from "lucide-react";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    phone: "",
    citySize: "",
    currentChallenges: "",
    timeline: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase to store consultation request
    console.log("Consultation request:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <Card className="border-border bg-card text-center">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-electric rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-background" />
              </div>
              <div>
                <CardTitle className="text-2xl text-card-foreground mb-2">Thank you for your interest!</CardTitle>
                <CardDescription className="text-lg">
                  We've received your consultation request and are excited to discuss how ElectricFlow can transform your city's transit system.
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-card-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-electric" />
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-electric text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <div>
                      <p className="font-medium text-card-foreground">Within 24 hours</p>
                      <p className="text-muted-foreground text-sm">Our transit solutions specialist will contact you to schedule a personalized consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-electric text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <div>
                      <p className="font-medium text-card-foreground">Tailored Demo</p>
                      <p className="text-muted-foreground text-sm">We'll show you a custom demonstration based on your city's specific transit challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-electric text-background rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <div>
                      <p className="font-medium text-card-foreground">Implementation Roadmap</p>
                      <p className="text-muted-foreground text-sm">If it's a good fit, we'll create a detailed plan for your electric bus optimization journey</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <Button 
                  variant="electric" 
                  className="flex-1"
                  onClick={() => window.open("mailto:hello@electricflow.com", "_blank")}
                >
                  Contact Us Directly
                </Button>
              </div>

              <div className="text-xs text-muted-foreground">
                Questions? Email us at{" "}
                <a href="mailto:hello@electricflow.com" className="text-electric hover:text-electric-glow">
                  hello@electricflow.com
                </a>{" "}
                or call{" "}
                <a href="tel:+1-555-0123" className="text-electric hover:text-electric-glow">
                  +1 (555) 012-3456
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Zap className="w-8 h-8 text-electric" />
              <span className="text-2xl font-bold bg-gradient-to-r from-electric to-energy bg-clip-text text-transparent">
                ElectricFlow
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Transform Your City's Transit System
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Schedule a personalized consultation to discover how ElectricFlow can optimize your electric bus operations, reduce costs, and improve passenger experience.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                50+ Cities Served
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                30% Average Efficiency Gain
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Request a Consultation</CardTitle>
              <CardDescription>
                Tell us about your transit system and we'll show you how ElectricFlow can help. This takes less than 3 minutes.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@cityname.gov"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                {/* Organization Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Organization</h3>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/City *</Label>
                    <Input
                      id="organization"
                      placeholder="City of San Francisco, Metro Transit Authority, etc."
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transit-director">Transit Director</SelectItem>
                        <SelectItem value="fleet-manager">Fleet Manager</SelectItem>
                        <SelectItem value="operations-manager">Operations Manager</SelectItem>
                        <SelectItem value="sustainability-officer">Sustainability Officer</SelectItem>
                        <SelectItem value="city-manager">City Manager</SelectItem>
                        <SelectItem value="procurement">Procurement/Purchasing</SelectItem>
                        <SelectItem value="it-director">IT Director</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="citySize">Transit System Size</Label>
                    <Select onValueChange={(value) => handleInputChange("citySize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select system size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-25 buses)</SelectItem>
                        <SelectItem value="medium">Medium (26-100 buses)</SelectItem>
                        <SelectItem value="large">Large (100+ buses)</SelectItem>
                        <SelectItem value="planning">Planning Phase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Tell Us More (Optional)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="currentChallenges">What are your biggest transit challenges?</Label>
                    <Textarea
                      id="currentChallenges"
                      placeholder="e.g., route efficiency, battery management, passenger complaints, budget constraints..."
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When are you looking to implement?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                        <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                        <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                        <SelectItem value="long">Long-term (12+ months)</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" variant="electric" className="w-full h-12 text-base font-semibold">
                  Schedule My Consultation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by ElectricFlow regarding our transit optimization solutions. We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;