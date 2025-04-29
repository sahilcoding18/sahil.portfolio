import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="h-full">
      <div className="glassmorphism rounded-2xl p-6 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-medium gradient-text mb-2">{title}</h3>
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-foreground/70 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
        >
          View Project <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
