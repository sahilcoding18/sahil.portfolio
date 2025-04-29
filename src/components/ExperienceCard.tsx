
import { ReactNode } from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  children: ReactNode;
}

export default function ExperienceCard({
  title,
  company,
  period,
  children,
}: ExperienceCardProps) {
  return (
    <div className="glassmorphism rounded-2xl p-6 mb-8 opacity-0 animate-fade-in relative overflow-hidden">
      <div className="mb-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 className="text-xl font-medium gradient-text">{title}</h3>
          <span className="text-sm text-foreground/60">{period}</span>
        </div>
        <p className="text-foreground/80 font-medium">{company}</p>
      </div>
      <div className="text-foreground/70 space-y-2">{children}</div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
    </div>
  );
}
