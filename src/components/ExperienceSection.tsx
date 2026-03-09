import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground font-display">
              <span className="text-gold">Internship</span>
            </h2>
            <div className="luxury-divider max-w-xs mx-auto mt-6" />
          </div>

          {/* Experience Card */}
          <div className="luxury-card p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Briefcase className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">Full Stack Web Developer Intern</h3>
                    <p className="text-primary font-semibold">VEI Technologies</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  <span>Tindivanam, Villupuram</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground leading-relaxed">
              Gained valuable hands-on experience in full-stack web development, working closely with senior engineers to build and implement scalable features that enhance user experience. Focused on writing clean, maintainable, and well-documented code while adhering to industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
