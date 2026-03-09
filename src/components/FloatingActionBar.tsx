import { Home, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const FloatingActionBar = () => {
  const { theme, toggleTheme } = useTheme();

  const actions = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Aravindhan1506', external: true },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aravindhank2004/', external: true },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-card/80 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-primary/10">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            className="p-2.5 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            aria-label={action.label}
          >
            <action.icon size={20} className="text-foreground" />
          </a>
        ))}
        
        <div className="w-px h-6 bg-primary/20 mx-1" />
        
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
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
  );
};

export default FloatingActionBar;
