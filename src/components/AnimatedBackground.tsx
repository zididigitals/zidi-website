import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: "particles" | "waves" | "grid" | "orbital";
  className?: string;
}

const AnimatedBackground = ({ 
  children, 
  variant = "particles",
  className = "" 
}: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;

    switch (variant) {
      case "particles":
        animationId = animateParticles(ctx, canvas);
        break;
      case "waves":
        animationId = animateWaves(ctx, canvas);
        break;
      case "grid":
        animationId = animateGrid(ctx, canvas);
        break;
      case "orbital":
        animationId = animateOrbital(ctx, canvas);
        break;
      default:
        animationId = animateParticles(ctx, canvas);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Particle Animation
const animateParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
  }> = [];

  // Create particles
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
      ctx.fill();
    });

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
          ctx.stroke();
        }
      });
    });

    return requestAnimationFrame(animate);
  };

  return animate();
};

// Wave Animation
const animateWaves = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  let time = 0;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - i * 0.03})`;
      ctx.lineWidth = 2;

      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height / 2 + 
                  Math.sin((x * 0.01) + time + (i * Math.PI / 3)) * 50 * (i + 1) +
                  Math.sin((x * 0.02) + time * 1.5) * 30;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }

    time += 0.02;
    return requestAnimationFrame(animate);
  };

  return animate();
};

// Grid Animation
const animateGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  let time = 0;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gridSize = 40;
    const rows = Math.ceil(canvas.height / gridSize);
    const cols = Math.ceil(canvas.width / gridSize);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * gridSize;
        const y = i * gridSize;
        
        const distance = Math.sqrt(
          Math.pow(x - canvas.width / 2, 2) + 
          Math.pow(y - canvas.height / 2, 2)
        );
        
        const wave = Math.sin(distance * 0.01 - time * 2) * 0.5 + 0.5;
        const opacity = wave * 0.3;
        
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.fillRect(x, y, 2, 2);
      }
    }

    time += 0.02;
    return requestAnimationFrame(animate);
  };

  return animate();
};

// Orbital Animation
const animateOrbital = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  let time = 0;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw orbital rings
    for (let i = 0; i < 5; i++) {
      const radius = 100 + i * 80;
      const opacity = 0.1 - i * 0.02;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw orbiting dots
      for (let j = 0; j < 8; j++) {
        const angle = (Math.PI * 2 / 8) * j + time * (0.5 + i * 0.2);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 3})`;
        ctx.fill();
      }
    }

    time += 0.01;
    return requestAnimationFrame(animate);
  };

  return animate();
};

export default AnimatedBackground;
