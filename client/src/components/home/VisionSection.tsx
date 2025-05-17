export default function VisionSection() {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900">
            Work Shouldn't Feel Like a Grind
          </h2>
          
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            We envision a world where work is filled with purpose, creativity, and connection. 
            Through personalized programs, we help organizations unlock the potential of their 
            people—one mindset shift at a time.
          </p>
          
          <div className="mt-10">
            <img 
              src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Asian professionals collaborating in a creative team environment" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
