interface GradientTextProps {
  className?: string;
  text: string;
}

export default function GradientText( { className, text }: GradientTextProps ) {
  return (
    <h1
      className={`bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end ${className}`}
    >
      {text}
    </h1>
  );
}