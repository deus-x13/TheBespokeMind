import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/#vision', label: 'Vision' },
    { href: '/#approach', label: 'Approach' },
    { href: '/#programs', label: 'Programs' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location === '/';
    }
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-heading text-primary">The Bespoke Mind</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`transition-colors font-medium ${
                  isActive(link.href) ? 'text-primary' : 'text-neutral-700 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button 
              asChild
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-2 transition-colors font-medium ${
                    isActive(link.href) ? 'text-primary' : 'text-neutral-700 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-white mt-2"
              >
                <Link href="/contact" onClick={closeMenu}>Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
