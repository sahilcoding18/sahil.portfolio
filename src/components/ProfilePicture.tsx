import { useState } from 'react';

interface ProfilePictureProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfilePicture = ({ src, alt, className = "" }: ProfilePictureProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transform transition-all duration-500">
        <img 
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 grayscale ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
