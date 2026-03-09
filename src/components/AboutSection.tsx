import { Code2, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Component-based UI Development',
    description: 'Building reusable, modular components for scalable applications',
  },
  {
    icon: Palette,
    title: 'Responsive Frontend Design',
    description: 'Crafting pixel-perfect, mobile-first user interfaces',
  },
  {
    icon: Zap,
    title: 'High Performance & Accessibility',
    description: 'Optimized, accessible applications for all users',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground font-display">
              About <span className="text-gold">Me</span>
            </h2>
            <div className="luxury-divider max-w-xs mx-auto mt-6" />
          </div>

          {/* About Content */}
          <div className="luxury-card p-8 md:p-12 mb-12">
            <p className="text-base text-muted-foreground leading-relaxed">
              Dynamic Graduate Seeking Entry-Level Opportunities in software development with knowledge of application development, configuration management and database design. Aiming to leverage my abilities to successfully fill the vacancy on your team. Continuously learning and improving my technical and problem-solving skills, I can rely upon you to help your team achieve its goals.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="luxury-card p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-base font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
