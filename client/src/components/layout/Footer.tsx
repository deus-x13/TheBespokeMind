import { Link } from 'wouter';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">The Bespoke Mind</h3>
            
            <p className="text-neutral-400 mb-6">
              Transforming how leaders and teams think, work, and lead through personalized development experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/the-bespoke-mind/" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            
            <ul className="space-y-2">
              <li>
                <Link href="/programs/design-thinking" className="text-neutral-400 hover:text-white transition-colors">
                  Design Thinking Workshop
                </Link>
              </li>
              <li>
                <Link href="/programs/leadership" className="text-neutral-400 hover:text-white transition-colors">
                  Human-Centered Leadership
                </Link>
              </li>
              <li>
                <Link href="/programs/team-development" className="text-neutral-400 hover:text-white transition-colors">
                  Team Development Labs
                </Link>
              </li>
              <li>
                <Link href="/programs/custom" className="text-neutral-400 hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-neutral-400 hover:text-white transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-neutral-400 hover:text-white transition-colors">
                  Program Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-neutral-400" />
                <span className="text-neutral-400">hello@thebespokemind.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-neutral-400" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-neutral-400" />
                <span className="text-neutral-400">
                  123 Innovation Drive<br/>San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} The Bespoke Mind. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
