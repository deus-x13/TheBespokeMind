import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const posts = [
    {
      id: '1',
      title: '10 Ways to Build an Empathetic Team Culture',
      date: 'April 15, 2023',
      excerpt: 'Discover practical strategies to foster empathy and emotional intelligence within your organization.',
      image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      alt: 'Team brainstorming session with sticky notes and whiteboard'
    },
    {
      id: '2',
      title: 'Design Thinking: Beyond the Buzzword',
      date: 'March 28, 2023',
      excerpt: 'How to implement design thinking principles that actually drive innovation in your organization.',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      alt: 'Design thinking process with team collaborating on ideas'
    },
    {
      id: '3',
      title: 'The Neuroscience of Effective Leadership',
      date: 'March 10, 2023',
      excerpt: 'Understanding brain science can transform how you lead. Learn the key principles that matter.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      alt: 'Leadership coaching session focusing on emotional intelligence'
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-neutral-900">
            Insights & Resources
          </h2>
          
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500" 
                />
              </div>
              
              <div className="p-6">
                <div className="text-sm text-neutral-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-neutral-700 mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-primary font-medium hover:text-primary/80"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
