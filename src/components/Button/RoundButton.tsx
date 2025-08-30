interface RoundButtonProps {
    onClick: () => void;
    icon: React.ReactNode;
    className?: string;
}

export default function RoundButton({ onClick, icon, className }: RoundButtonProps) {
  return (
    <button 
        className={
            "p-4 bg-secondary-bg border border-accent-primary rounded-full cursor-pointer" +
             " hover:border-accent-secondary ease-in-out duration-200 hover:scale-110" +
             (className ? ` ${className}` : "")
        }
        onClick={ onClick }
    >
        {icon}
    </button>
  );
}