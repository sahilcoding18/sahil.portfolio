
interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="px-4 py-5 rounded-xl glassmorphism h-full flex items-center justify-center text-center transition-all duration-300 text-sm font-medium">
      {skill}
    </div>
  );
}
