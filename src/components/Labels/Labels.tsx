interface LabelProps {
  text: string;
}

export default function Labels({ text }: LabelProps) {
  return (
    <div className="py-1 px-3 rounded-full bg-accent-primary text-sm text-primary font-semibold">
      {text}
    </div>
  );
}