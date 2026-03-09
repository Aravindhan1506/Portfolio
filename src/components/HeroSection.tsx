import { Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Content - Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-4 opacity-0 fade-in-up stagger-1 text-foreground tracking-tight">
              Hi, I'm{' '}
              <span style={{ color: '#0077B6' }}>Aravind</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed mb-8 opacity-0 fade-in-up stagger-2 max-w-lg">
              Crafting exceptional digital experiences with precision and elegance.
              <br />
              Turning ideas into reliable and scalable web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 opacity-0 fade-in-up stagger-3">
              <a
                href="/Aravindhan_resume.pdf"
                download
                className="px-8 py-4 rounded-full flex items-center gap-3 bg-white text-black font-semibold border border-border transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
              >
                Resume/CV
                <Download size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold text-white flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#0077B6' }}
              >
                👋 Let's talk
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="opacity-0 fade-in-up flex-shrink-0 flex flex-col items-center md:mr-4 lg:mr-8">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Aravind"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Available Badge - Below Image */}
            <div className="mt-2">
              <span className="inline-block px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-medium tracking-wide shimmer">
                ✨ Available for Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
