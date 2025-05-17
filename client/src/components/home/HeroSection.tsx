import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { LightbulbIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Hero background with subtle pattern */}
      <div className="absolute inset-0 bg-neutral-100 opacity-50 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%231d7874%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              <span className="text-neutral-900">Rewire the Mind.</span><br/>
              <span className="text-primary">Reignite the Team.</span><br/>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Redefine Success.</span>
            </h1>
            
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              At The Bespoke Mind, we help leaders and teams transform how they think, work, and lead—with powerful tools like design thinking, human-centered leadership, and team development.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 py-6 px-8 text-base"
              >
                <Link href="/#programs">Explore Our Workshops</Link>
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
          
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse professionals collaborating in a workshop setting" 
              className="rounded-xl shadow-xl w-full h-auto object-cover" 
            />
            
            <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-2 text-primary">
                <LightbulbIcon className="h-6 w-6 text-secondary" />
                <p className="font-medium">Unlock Team Potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
