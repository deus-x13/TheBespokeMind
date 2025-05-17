import { useParams, Link } from 'wouter';
import { SEO } from '@/components/ui/seo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { useEffect } from 'react';

type ProgramInfo = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  duration: string;
  format: string;
  audience: string;
};

export default function Program() {
  const { id } = useParams();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // These would typically come from an API, but for demonstration:
  const programs: Record<string, ProgramInfo> = {
    'design-thinking': {
      id: 'design-thinking',
      title: 'Design Thinking Workshop',
      description: 'A 2-day hands-on workshop + coaching that brings fresh energy and innovation to your team\'s challenges.',
      longDescription: 'Our Design Thinking Workshop is an immersive experience that equips teams with a powerful framework for creative problem-solving. Through a series of guided exercises and collaborative activities, participants learn to empathize with users, define problems clearly, ideate without limitations, prototype rapidly, and test solutions effectively.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      features: [
        'Human-centered approach to innovation',
        'Practical tools and templates',
        'Hands-on, experiential learning',
        'Real-time application to your challenges',
        'Follow-up coaching sessions',
        'Custom program materials'
      ],
      duration: '2 days + follow-up coaching',
      format: 'In-person or virtual',
      audience: 'Cross-functional teams, innovation departments, leadership teams'
    },
    'leadership': {
      id: 'leadership',
      title: 'Human-Centered Leadership Series',
      description: 'A training series to equip leaders with the mindset and tools to lead with empathy, clarity, and courage.',
      longDescription: 'The Human-Centered Leadership Series transforms traditional management approaches by placing people at the center of leadership practice. Through a combination of workshops, coaching, and peer learning, leaders develop the emotional intelligence, communication skills, and strategic thinking needed to inspire their teams and drive sustainable results.',
      image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      features: [
        'Emotional intelligence assessment and development',
        'Effective feedback and coaching techniques',
        'Conflict resolution strategies',
        'Inclusive leadership practices',
        'Adaptive leadership in uncertain times',
        'Building high-trust cultures'
      ],
      duration: '6-12 weeks',
      format: 'Workshop series + individual coaching',
      audience: 'Executives, managers, emerging leaders'
    },
    'team-development': {
      id: 'team-development',
      title: 'Bespoke Team Development Labs',
      description: 'Dynamic sessions that transform how your team communicates, collaborates, and grows together.',
      longDescription: 'Our Team Development Labs are customized experiences designed to address your specific team challenges and opportunities. Using a blend of assessments, facilitated discussions, and interactive exercises, we help teams build stronger relationships, develop more effective communication patterns, and establish norms that support both individual and collective success.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      features: [
        'Team assessment and benchmarking',
        'Communication style mapping',
        'Trust-building activities',
        'Conflict management protocols',
        'Collaborative decision-making frameworks',
        'Team charter development'
      ],
      duration: 'Customizable (typically 1-3 days)',
      format: 'In-person, retreat-style preferred',
      audience: 'Intact teams, departments, project teams'
    }
  };
  
  const program = programs[id as string];
  
  if (!program) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
        <p className="mb-8">The program you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/#programs">View All Programs</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <>
      <SEO 
        title={program.title}
        description={program.description}
      />
      
      <div className="bg-neutral-100 py-8">
        <div className="container mx-auto px-4">
          <Link href="/#programs" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
          </Link>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{program.title}</h1>
              <p className="text-xl text-neutral-700 mb-6">{program.description}</p>
              <p className="text-neutral-700 mb-8">{program.longDescription}</p>
              
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 py-6 px-8 text-base"
              >
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Program Highlights</h2>
              <ul className="space-y-3">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Program Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-neutral-900">Duration</h3>
                  <p>{program.duration}</p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">Format</h3>
                  <p>{program.format}</p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">Ideal For</h3>
                  <p>{program.audience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Team?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Every program is customized to meet your specific needs and challenges. 
            Get in touch to discuss how we can tailor this program for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 py-6 px-8 text-base"
            >
              <Link href="/contact">Request Program Information</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white py-6 px-8 text-base"
            >
              <Link href="/contact">Book a Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
