import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Users, Brain, Lightbulb } from 'lucide-react';

export default function ApproachSection() {
  const approaches = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Rewire Teams",
      description: "Build trust, communication, and collaboration with immersive team development experiences.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Team development session with Asian professionals",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Brain className="h-6 w-6 text-secondary" />,
      title: "Rewire Leadership",
      description: "Empower leaders with empathy, emotional intelligence, and human-centered strategies.",
      image: "https://images.unsplash.com/photo-1507537231947-f2ff14bc1554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Leadership coaching session with Asian executives",
      bgColor: "bg-secondary/10"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      title: "Rewire Innovation",
      description: "Solve complex problems creatively through hands-on design thinking workshops.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Design thinking workshop with collaborative problem-solving",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="approach" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900">
            Transformation, Tailored to You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center mb-6`}>
                {approach.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading text-neutral-900 mb-4">
                {approach.title}
              </h3>
              
              <p className="text-neutral-700 mb-6">
                {approach.description}
              </p>
              
              <div className="mt-6">
                <img 
                  src={approach.image} 
                  alt={approach.alt} 
                  className="rounded-lg w-full h-48 object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 py-6 px-8 text-base"
          >
            <Link href="/#programs">See How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
