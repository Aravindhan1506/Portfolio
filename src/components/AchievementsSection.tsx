import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/AravindhanK2004/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/aravindhank2004',
    icon: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground font-display">
              Coding <span className="text-gold">Profiles</span>
            </h2>
            <div className="luxury-divider max-w-xs mx-auto mt-6" />
          </div>

          {/* Coding Profiles */}
          <div className="luxury-card p-8">
            <div className="flex flex-wrap justify-center gap-6">
              {profiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-card/60 border border-dashed border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <img src={profile.icon} alt={profile.name} className="w-8 h-8" />
                  <span className="font-display font-semibold text-lg">{profile.name}</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
