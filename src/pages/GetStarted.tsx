import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, User, Mail, Phone, MapPin } from 'lucide-react';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-secondary/50 border border-border rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Let's Transform Your Fleet</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us a bit about your organization, and we'll schedule a personalized consultation to show you how ElectricFlow can revolutionize your public transport system.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Organization Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="City Transit Authority"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Smith"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@citytransit.gov"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="tel"
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">City/Region</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Fleet Size (approximate)</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>10-50 buses</option>
                <option>50-100 buses</option>
                <option>100-250 buses</option>
                <option>250+ buses</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What challenges are you facing? (Optional)</label>
              <textarea
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={4}
                placeholder="Tell us about your current fleet management challenges..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Request a Consultation
            </button>
          </form>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-lg">
            <h3 className="font-semibold mb-2 text-accent">What Happens Next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-accent font-bold">1.</span>
                <span>Our team will review your information within 24 hours</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent font-bold">2.</span>
                <span>We'll reach out to schedule a personalized demo at your convenience</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent font-bold">3.</span>
                <span>Together, we'll explore how ElectricFlow can optimize your fleet</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
