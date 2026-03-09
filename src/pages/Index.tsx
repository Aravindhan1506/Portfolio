import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aravind K - Full Stack Developer Portfolio</title>
        <meta name="description" content="Aravind K is an adaptable Front-End Developer skilled in HTML, CSS, JavaScript, Bootstrap, and React.js, with a strong focus on building responsive and user-friendly interfaces." />
        <meta name="keywords" content="Aravind, Full Stack Developer, Web Developer, React.js, JavaScript, Portfolio, Front-End Developer" />
        <meta property="og:title" content="Aravind K - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Adaptable Front-End Developer skilled in HTML, CSS, JavaScript, Bootstrap, and React.js" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aravind-portfolio.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
