import useMouseTracker from "./useMouseTracker";

export default function MouseTracker() {
    
  const position = useMouseTracker();

  if ( !position ) return null;

  return (
    <div
      key={`${position.x}-${position.y}`}
      className={
        "hidden dark:block pointer-events-none fixed w-40 h-40 rounded-full " +
        "bg-primary/50 opacity-10 mix-blend-screen blur-3xl"
      }
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}