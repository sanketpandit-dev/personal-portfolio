import { useEffect, useRef } from "react";

export function BackgroundParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 4,
    }));

    const container = containerRef.current;
    container.innerHTML = "";

    particles.forEach((particle) => {
      const div = document.createElement("div");
      div.className = "particle";
      div.style.left = `${particle.x}%`;
      div.style.top = `${particle.y}%`;
      div.style.animationDelay = `${particle.delay}s`;
      div.style.animationDuration = `${particle.duration}s`;
      container.appendChild(div);
    });
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />;
}
