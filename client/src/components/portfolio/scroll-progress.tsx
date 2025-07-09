import { useScroll } from "@/hooks/use-scroll";

export function ScrollProgress() {
  const { scrollProgress } = useScroll();

  return (
    <div
      className="scroll-indicator"
      style={{
        transform: `scaleX(${scrollProgress / 100})`,
      }}
    />
  );
}
