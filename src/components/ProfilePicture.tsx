
import { useState } from 'react';

interface ProfilePictureProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfilePicture = ({ src, alt, className = "" }: ProfilePictureProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`relative perspective ${className}`}>
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transform transition-all duration-500">
        <div className="absolute inset-0 rounded-full border-2 border-white/10 glassmorphism" />
        <div className="absolute inset-2 rounded-full overflow-hidden">
          <img 
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 grayscale ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05), transparent 70%)'
          }}
        />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-white/5 to-transparent animate-pulse-glow opacity-70" />
      </div>
    </div>
  );
};

export default ProfilePicture;
