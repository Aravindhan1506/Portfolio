import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="luxury-divider mb-8" />
        <div className="flex flex-col items-center gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} <span className="text-primary font-semibold">Aravind</span>. Crafted with{' '}
            <Heart size={14} className="text-primary fill-primary" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
