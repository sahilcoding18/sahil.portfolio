
import { useRef, useState, ReactNode, useEffect } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glareIntensity?: number;
  perspective?: number;
  scale?: boolean;
  isStatic?: boolean;
}

const TiltCard = ({ 
  children, 
  className = "", 
  tiltIntensity = 15,
  glareIntensity = 0.15,
  perspective = 1000,
  scale = true,
  isStatic = false
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
    scale: 1,
    glarePosition: { x: 50, y: 50 },
    glareOpacity: 0
  });
  
  // For static 3D effect (non-interactive)
  useEffect(() => {
    if (isStatic && cardRef.current) {
      const randomX = (Math.random() - 0.5) * 7;
      const randomY = (Math.random() - 0.5) * 7;
      const randomZ = Math.random() * 30;
      
      setTransform({
        rotateX: randomX,
        rotateY: randomY,
        translateZ: randomZ,
        scale: 1,
        glarePosition: { x: 50 + randomX * 2, y: 50 + randomY * 2 },
        glareOpacity: 0.05
      });
    }
  }, [isStatic]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isStatic) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltIntensity;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * tiltIntensity;
    const translateZ = Math.abs(rotateX * rotateY) * 0.1; // Add depth based on tilt angle
    
    // Calculate glare position and opacity
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    const glareOpacity = glareIntensity;
    
    setTransform({
      rotateX,
      rotateY,
      translateZ,
      scale: scale ? 1.03 : 1,
      glarePosition: { x: glareX, y: glareY },
      glareOpacity
    });
  };

  const handleMouseLeave = () => {
    if (isStatic) return;
    
    setTransform({
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      scale: 1,
      glarePosition: { x: 50, y: 50 },
      glareOpacity: 0
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden preserve-3d ${className}`}
      onMouseMove={isStatic ? undefined : handleMouseMove}
      onMouseLeave={isStatic ? undefined : handleMouseLeave}
      style={{
        transform: `perspective(${perspective}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(${transform.translateZ}px) scale(${transform.scale})`,
        transition: isStatic ? 'none' : 'transform 0.1s ease-out'
      }}
    >
      {children}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${transform.glarePosition.x}% ${transform.glarePosition.y}%, rgba(255, 255, 255, ${transform.glareOpacity}) 0%, rgba(255, 255, 255, 0) 80%)`,
          opacity: transform.glareOpacity
        }}
      />
    </div>
  );
};

export default TiltCard;
