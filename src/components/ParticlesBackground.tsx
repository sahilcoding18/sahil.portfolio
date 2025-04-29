
import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up canvas size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      }
    };

    // Subtle parallax for mouse movement
    let parallax = { x: 0, y: 0 };
    let targetParallax = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      targetParallax.x = ((e.clientX / window.innerWidth) - 0.5) * 0.15;
      targetParallax.y = ((e.clientY / window.innerHeight) - 0.5) * 0.12;
    };

    // Parallax for scroll
    const handleScroll = () => {
      targetParallax.y = ((window.scrollY / window.innerHeight) - 0.5) * 0.18;
    };

    // Animation
    let start = performance.now();
    const render = (now: number) => {
      if (!ctx || !canvas) return;
      
      // Smooth parallax movement
      parallax.x += (targetParallax.x - parallax.x) * 0.02;
      parallax.y += (targetParallax.y - parallax.y) * 0.02;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + (parallax.x * canvas.width * 0.1),
        canvas.height / 2 + (parallax.y * canvas.height * 0.1),
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      
      gradient.addColorStop(0, 'rgba(30, 30, 40, 0.4)');
      gradient.addColorStop(0.6, 'rgba(20, 20, 30, 0.2)');
      gradient.addColorStop(1, 'rgba(10, 10, 15, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    resizeCanvas();
    render(performance.now());

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
