import GradientText from "../GradientText/GradientText";

export default function Logo() {
  return (
    <div 
        className="flex items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
        <GradientText text="Omar AlMayouf" className="text-2xl font-bold" />
    </div>
  );
}