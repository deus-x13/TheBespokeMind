import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProgramsSection() {
  const programs = [
    {
      id: 'design-thinking',
      title: 'Design Thinking Workshop',
      description: 'A 2-day hands-on workshop + coaching that brings fresh energy and innovation to your team\'s challenges.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      alt: 'Design thinking workshop with collaborative ideation'
    },
    {
      id: 'leadership',
      title: 'Human-Centered Leadership Series',
      description: 'A training series to equip leaders with the mindset and tools to lead with empathy, clarity, and courage.',
      image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      alt: 'Leadership training with diverse executives and experiential learning'
    },
    {
      id: 'team-development',
      title: 'Bespoke Team Development Labs',
      description: 'Dynamic sessions that transform how your team communicates, collaborates, and grows together.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      alt: 'Team development lab with interactive problem-solving activities'
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900">
            Signature Programs
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-neutral-100 rounded-xl overflow-hidden shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">
                  {program.title}
                </h3>
                
                <p className="text-neutral-700 mb-6">
                  {program.description}
                </p>
                
                <Link 
                  href={`/programs/${program.id}`} 
                  className="text-primary font-medium hover:text-primary/80 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white py-6 px-8 text-base"
          >
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
