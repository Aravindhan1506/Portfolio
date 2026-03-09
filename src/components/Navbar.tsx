import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Internship', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? 'bg-background/60 border-b border-primary/10 shadow-lg shadow-primary/5'
          : 'bg-background/30'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-mono font-bold text-foreground hover:text-primary transition-colors">
            &gt;_
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${
                  activeSection === link.href.replace('#', '') ? 'active' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right side: Social + Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/Aravindhan1506"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/aravindhank2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-foreground" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-foreground" />
              ) : (
                <Sun size={18} className="text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-primary/15 text-primary border border-primary/20'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            ))}
            {/* Mobile Social + Theme */}
            <div className="flex items-center gap-3 pt-3 px-4 border-t border-primary/10 mt-2">
              <a
                href="https://github.com/Aravindhan1506"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/aravindhank2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-foreground" />
                ) : (
                  <Sun size={20} className="text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
