import { Github, ExternalLink } from 'lucide-react';
import salesDashboard from '@/assets/sales-dashboard.png';
import onlineLibraryShelf from '@/assets/online-library-shelf.png';
import torqueverse from '@/assets/torqueverse.png';

const projects = [
  {
    title: 'AI Railway Assistant',
    description: 'Developed an AI-powered railway assistant using MCP Server to fetch real-time Indian Railway data through tool-based automation. Implemented automatic MCP tool selection to efficiently handle train search, live running status, delay tracking, seat availability, and station code resolution.',
    technologies: ['MCP Server', 'Cursor IDE'],
    github: 'https://github.com/Aravindhan1506/-AI-Railway-Assistant-using-MCP-Server.git',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop',
  },
  {
    title: 'Sales Performance Dashboard',
    description: 'Designed an interactive sales dashboard in Power BI showcasing key metrics like total sales, order volume, returns, and quantity across categories and regions. Implemented dynamic filters and visualizations—including line charts, bar graphs, pie charts, and geo-maps—to analyze trends and payment patterns.',
    technologies: ['Python', 'SQL', 'Excel', 'Power BI'],
    github: 'https://github.com/Aravindhan1506/Power-BI-sales-dashboard.git',
    image: salesDashboard,
  },
  {
    title: 'TorqueVerse',
    description: 'TorqueVerse is a web platform that allows users to view and compare superbikes in one place, helping them easily analyze specifications, performance, and pricing.',
    technologies: ['React.js', 'Tailwind CSS'],
    github: 'https://github.com/Aravindhan1506/TorqueVerse.git',
    image: torqueverse,
  },
  {
    title: 'Luxury Car Gallery',
    description: 'Built "The Luxury Car Gallery," a visually striking website showcasing premium supercars such as Ferrari, Lamborghini, Rolls-Royce, Audi, McLaren, BMW, Ford, Maserati, and Bugatti. Implemented responsive layouts and hover effects.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Aravindhan1506/Luxury-Car-Website.git',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
  },
  {
    title: 'Online Library Shelf',
    description: 'A modern, responsive bookshelf interface built purely with HTML & CSS. Features include interactive book cards, a left vertical navigation sidebar, a hero banner displaying current reads.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Aravindhan1506/Online-Library-Shelf.git',
    image: onlineLibraryShelf,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title font-display text-foreground">
              Featured <span className="text-foreground">Projects</span>
            </h2>
            <div className="luxury-divider max-w-xs mx-auto mt-6" />
            <p className="section-subtitle mx-auto mt-6">
              A curated collection of my finest work and innovations
            </p>
          </div>

          {/* Projects Grid - Luxury Card Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group relative luxury-card rounded-2xl overflow-hidden bg-secondary"
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />


                  {/* Floating GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-primary/20"
                  >
                    <Github size={18} />
                  </a>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground border border-dashed border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors tracking-wide"
                  >
                    Explore Project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
