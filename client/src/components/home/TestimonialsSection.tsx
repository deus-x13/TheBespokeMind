export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Innovate Solutions",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      quote: "The Bespoke Mind transformed how our leadership team approaches challenges. Their design thinking workshop sparked a level of creativity and collaboration we hadn't experienced before. The results were immediate and lasting."
    },
    {
      name: "Marcus Chen",
      role: "Head of People, TechForward",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      quote: "What impressed me most about The Bespoke Mind was how they tailored their approach to our specific culture and challenges. The human-centered leadership series has fundamentally changed how our managers show up for their teams."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900">
            Real Stories, Real Shifts
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-neutral-200 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div>
                  <h4 className="font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="text-neutral-700">
                <div className="text-primary/20 text-4xl mb-2">"</div>
                <p className="italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
