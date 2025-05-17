import { Fingerprint, Brain, Zap, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Fingerprint className="h-6 w-6 text-white" />,
      title: "Personalized, not cookie-cutter",
      description: "Every program is custom-designed for your specific challenges and culture."
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Rooted in neuroscience and real-world leadership",
      description: "Evidence-based approaches that create lasting behavioral change."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Engaging, energizing, and immediately applicable",
      description: "No boring lectures—our workshops deliver immediate impact."
    },
    {
      icon: <Handshake className="h-6 w-6 text-white" />,
      title: "A partner in transformation—not just a trainer",
      description: "We're invested in your long-term success through ongoing support."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            What Sets The Bespoke Mind Apart?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold font-heading mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
