import useMainLogo from "./useMainLogo";
import GradientText from "../GradientText/GradientText";

export default function MainLogo() {
    
  const { displayed } = useMainLogo();

  return (
    <div className="flex items-center h-24">
      
      <GradientText
        text = { displayed }
        className = "py-6 text-6xl font-bold inline-block"
      />
      
      <GradientText
        text = "|"
        className = "text-6xl font-bold align-middle animate-blink"
      />

    </div>
  );
}