import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";
import TiltCard from "../components/TiltCard";
import ProfilePicture from "../components/ProfilePicture";
import { ArrowDown, Mail, Linkedin, FileText, Phone } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section, index) => {
        const distance = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (distance < viewportHeight * 0.75 && distance > -viewportHeight * 0.5) {
          const translateZ = Math.min(30, Math.abs(distance) / 10);
          const rotateX = distance > 0 ? -2 : 2;
          const opacity = 1 - Math.abs(distance) / (viewportHeight * 0.75);
          
          section.style.transform = `perspective(1000px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`;
          section.style.opacity = Math.max(0.5, opacity).toString();
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    "C++", "Java", "SQL", "Python", "Snowflake", "AWS", 
    "JIRA", "Git", "Linux", "Agile/Scrum", 
    "Gen AI",
    "React", "TypeScript", "CSS", "HTML", "JavaScript"
  ];
  
  return (
    <div className="min-h-screen preserve-3d">
      <ParticlesBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20 transform-gpu transition-transform duration-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="gradient-text text-shadow font-bold mb-4 animate-fade-in">
                Sahil Shaik
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-foreground/70 animate-fade-in animate-delay-100">
                Senior Product Analyst | Solving Problems Through Code
              </h2>
              <p className="text-xl mb-10 text-foreground/60 max-w-2xl animate-fade-in animate-delay-200">
                Turning ideas into impact, one line of code at a time.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
                <Button 
                  onClick={() => document.getElementById("projects")?.scrollIntoView()}
                  className="apple-btn-primary"
                >
                  Explore Projects
                </Button>
                <Button 
                  variant="secondary"
                  className="apple-btn-secondary glassmorphism"
                  onClick={() => window.open("https://drive.google.com/file/d/1uRZycvVWYdc1GPy30oPCZl-Ni0gzYCr2/view?usp=sharing", "_blank")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
              </div>
            </div>
            
            {/* Profile Picture with 3D Effects */}
            <ProfilePicture 
              src="/lovable-uploads/2e40c6de-616c-46d1-9fa3-5006be9b6a5e.png" 
              alt="Sahil Shaik"
              className="hidden lg:block animate-fade-in animate-delay-400" 
            />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors bg-background/20 rounded-full p-2 backdrop-blur-sm">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="relative transform-gpu transition-transform duration-500">
        <div className="container mx-auto relative z-10">
          <SectionHeading 
            title="About Me" 
            subtitle="Data-driven analyst passionate about scalable solutions and real-world impact."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <TiltCard className="space-y-5 glassmorphism p-6 rounded-2xl animate-on-scroll opacity-0" isStatic={true} perspective={1500}>
              <p className="text-white font-bold text-2xl">Hi, I'm Sahil Shaik</p>
              <p>I'm currently working as a Senior Product Analyst at FactSet (since September 2024), where I'm into product management, working with engineers and cross functional teams to design scalable data pipelines, uncovering insights, and collaborating across teams to turn complex data into meaningful solutions.</p>
              <p>I graduated from CMR College of Engineering and Technology, where I pursued a degree with a minor in Artificial Intelligence & Machine Learning. During my time there, I served as the Student Council Board Head, leading various student-driven initiatives and campus events that helped shape a vibrant, collaborative environment.</p>
              <p>As a proud cadet in the National Cadet Corps (NCC), I successfully completed my C Certificate, gaining invaluable discipline, leadership, and teamwork experience.</p>
              <p>Outside of work, you'll find me chasing sunsets, exploring beaches and mountains, and cooking up a good Hyderabadi biryani.</p>
              <a
                href="/about"
                className="inline-block mt-3 px-5 py-2 text-sm rounded-lg bg-white/10 text-white/90 hover:bg-white/15 transition font-medium glassmorphism"
              >
                View More
              </a>
            </TiltCard>

            <TiltCard className="glassmorphism p-6 rounded-2xl animate-on-scroll opacity-0" isStatic={true} perspective={1500}>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Languages</span>
                  <span className="text-foreground/70">English, Telugu, Hindi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Current Role</span>
                  <span className="text-foreground/70">Senior Product Analyst</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Company</span>
                  <span className="text-foreground/70">FactSet</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location</span>
                  <span className="text-foreground/70">India</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="transform-gpu transition-transform duration-500">
        <div className="container mx-auto">
          <SectionHeading 
            title="Experience" 
            subtitle="My professional journey in the world of data and technology."
          />

          <div className="space-y-8">
            <ExperienceCard
              title="Senior Product Analyst"
              company="FactSet"
              period="2024 - Present"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Led a Gen AI project to develop an intelligent Chatbot using Microsoft Copilot, which reduced engineering dependency for troubleshooting and decreased support queries by nearly 70%.</li>
                <li>Contributed to the migration of a product from an outdated data pipeline to a modernized framework using SQL and Snowflake, reducing processing time by 50% and improving data accuracy.</li>
                <li>Conducted a three-year data growth analysis leveraging Excel and Data Analytics techniques, identifying key trends and opportunities for product optimization and scalability.</li>
                <li>Applied ETL methodologies to transform and optimize data workflows, ensuring seamless integration across systems with Snowflake and SQL.</li>
                <li>Collaborated with product managers, engineers, and stakeholders to enhance decision-making through data-driven insights, improving overall product performance.</li>
              </ul>
            </ExperienceCard>
            <a
              href="/experience"
              className="inline-block mt-0 px-5 py-2 text-sm rounded-lg bg-white/10 text-white/90 hover:bg-white/15 transition font-medium glassmorphism"
            >
              View More
            </a>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="relative transform-gpu transition-transform duration-500">
        <div className="container mx-auto relative z-10">
          <SectionHeading 
            title="Projects" 
            subtitle="A selection of my technical projects and contributions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TiltCard className="h-full" perspective={2000}>
              <ProjectCard
                title="Platinum Haven Design"
                description="A luxury interior design studio website showcasing their portfolio and services with a modern, elegant design."
                technologies={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
                link="https://platinum-haven-design.netlify.app/"
                image="/lovable-uploads/platinum-haven-preview.png"
              />
            </TiltCard>
            <TiltCard className="h-full" perspective={2000}>
              <ProjectCard
                title="BeWise"
                description="An educational platform website featuring course offerings, testimonials, and a modern learning interface."
                technologies={["React", "TypeScript", "Tailwind CSS", "GSAP"]}
                link="https://bewise.netlify.app/"
                image="/lovable-uploads/bewise-preview.png"
              />
            </TiltCard>
            <TiltCard className="h-full" perspective={2000}>
              <ProjectCard
                title="Thrive Consulting"
                description="A business consulting firm website with a professional design, showcasing their expertise and services."
                technologies={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
                link="https://thriveconsulting.netlify.app/"
                image="/lovable-uploads/thrive-preview.png"
              />
            </TiltCard>
          </div>
          <a
            href="/projects"
            className="inline-block mt-8 px-5 py-2 text-sm rounded-lg bg-white/10 text-white/90 hover:bg-white/15 transition font-medium glassmorphism"
          >
            View More
          </a>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="transform-gpu transition-transform duration-500">
        <div className="container mx-auto">
          <SectionHeading 
            title="Achievements" 
            subtitle="Recognition and accomplishments throughout my journey."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <TiltCard className="glassmorphism p-6 rounded-2xl animate-on-scroll opacity-0 h-full">
              <h3 className="text-xl font-medium mb-4">Honors & Awards</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Winner of BEST PROJECT award 2023</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Winner of Ideathon 2022 CMRCET</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Winner of Debate for Society 2022</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Secured NCC C certificate as part of the National Cadet Corps (NCC) in Armed Forces</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Elected as Student Council Board Head for Trainings and Placements board</span>
                </li>
              </ul>
            </TiltCard>

            <TiltCard className="glassmorphism p-6 rounded-2xl animate-on-scroll opacity-0 h-full">
              <h3 className="text-xl font-medium mb-4">Competitions & Challenges</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Finalist of Hackathon conducted by NIT Warangal</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>Finalist of National level hackathon conducted by PVPSIT</span>
                </li>
              </ul>
            </TiltCard>
          </div>
          <a
            href="/achievements"
            className="inline-block mt-8 px-5 py-2 text-sm rounded-lg bg-white/10 text-white/90 hover:bg-white/15 transition font-medium glassmorphism"
          >
            View More
          </a>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="relative transform-gpu transition-transform duration-500">
        <div className="container mx-auto relative z-10">
          <SectionHeading 
            title="Skills" 
            subtitle="Technical and professional capabilities that drive my work."
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-on-scroll opacity-0">
            {skills.map((skill, index) => (
              <TiltCard 
                key={skill} 
                className="h-full" 
                tiltIntensity={10} 
                isStatic={true} 
                perspective={1500 + (index * 100) % 1000}
              >
                <SkillBadge skill={skill} />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="transform-gpu transition-transform duration-500">
        <div className="container mx-auto">
          <SectionHeading 
            title="Let's Connect" 
            subtitle="Interested in collaboration? Feel free to reach out."
            alignment="center"
          />
          
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll opacity-0">
              <TiltCard className="h-full">
                <a 
                  href="mailto:sahilshaik2404@gmail.com" 
                  className="glassmorphism flex items-center justify-center gap-3 hover:scale-105 p-5 rounded-2xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>sahilshaik2404@gmail.com</span>
                </a>
              </TiltCard>
              
              <TiltCard className="h-full">
                <a 
                  href="https://www.linkedin.com/in/shaik-sahil-a30238207/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glassmorphism flex items-center justify-center gap-3 hover:scale-105 p-5 rounded-2xl"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </TiltCard>
              
              <TiltCard className="h-full">
                <a 
                  href="tel:+919515762697" 
                  className="glassmorphism flex items-center justify-center gap-3 hover:scale-105 p-5 rounded-2xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 9515762697</span>
                </a>
              </TiltCard>
              
              <TiltCard className="h-full">
                <a 
                  href="https://drive.google.com/file/d/1RCXTGHoD8HXuZLWIM6_CWGGp4lpWVNv-/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glassmorphism flex items-center justify-center gap-3 hover:scale-105 p-5 rounded-2xl"
                >
                  <FileText className="w-5 h-5" />
                  <span>Resume</span>
                </a>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
