
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "left" 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  
  return (
    <div className={`mb-16 ${alignmentClasses[alignment]}`}>
      <h2 className="font-bold mb-4 gradient-text">{title}</h2>
      {subtitle && (
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-px w-24 bg-gradient-to-r from-white/5 via-white/40 to-white/5 mt-4 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`} />
    </div>
  );
}
