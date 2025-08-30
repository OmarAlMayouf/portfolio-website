interface FilterButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  isActive?: boolean;
}

export default function FilterButton({
  onClick,
  text,
  className,
  isActive = false
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        `py-3 px-5 rounded-xl font-semibold cursor-pointer` +
        ` ${className} ${isActive ? 'bg-accent-secondary text-quaternary' : 'text-primary'}`
      }
    >
      {text}
    </button>
  );
}