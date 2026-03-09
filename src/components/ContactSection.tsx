import { Mail, MessageCircle, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'aravindhanvishnu55@gmail.com', href: 'mailto:aravindhanvishnu55@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 9384553928', href: 'https://wa.me/919384553928' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aravindhank2004/', color: 'hover:text-blue-500' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/aravind._.050', color: 'hover:text-pink-500' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Aravindhan1506', color: 'hover:text-foreground' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground font-display">
              Get in <span className="text-gold">Touch</span>
            </h2>
            <div className="luxury-divider max-w-xs mx-auto mt-6" />
            <p className="section-subtitle mx-auto mt-6">
              Want to chat? Just shoot me a DM via
            </p>
            {/* Twitter DM Button */}
            <div className="flex justify-center mt-4">
              <a
                href="https://twitter.com/ak___aravind"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-dashed border-black bg-card/60 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <Twitter size={20} className="text-primary" />
                <span className="font-semibold">Twitter</span>
              </a>
            </div>
            <p className="text-muted-foreground mt-4">or reach out from below.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="contact-card"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                      <p className="font-semibold truncate">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="luxury-card p-6">
                <h3 className="text-lg font-display font-semibold mb-4 text-center">Connect with me</h3>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
