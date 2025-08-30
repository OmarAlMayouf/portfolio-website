interface ButtonProps {
  onClick: () => void;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  isLoading?: { value: boolean; text: string };
  icon?: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-gradient-to-r from-gradient-start to-gradient-end text-quaternary",
  secondary:
    "bg-button border border-gradient text-primary",
};

export default function Button({
  onClick,
  variant,
  children,
  className,
  isLoading,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`hover:scale-105 ease-in-out w-full py-2 rounded-xl cursor-pointer shadow-lg transition-all font-semibold ${variantClasses[variant]} ${className ?? ""}`}
      disabled={isLoading?.value}
    >
      {isLoading?.value ? (
        isLoading.text
      ) : (
        <div className="flex items-center justify-center gap-2">
          {icon}
          {children}
        </div>
      )}
    </button>
  );
}