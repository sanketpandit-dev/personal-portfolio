import { useCursor } from "@/hooks/use-cursor";

export function Cursor() {
  const { position, isHovering } = useCursor();

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isHovering ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />
    </>
  );
}
