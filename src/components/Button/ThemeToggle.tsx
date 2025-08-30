import { Icons } from "../../constants";
import RoundButton from "./RoundButton";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {

  const { isDark, toggleTheme } = useTheme();

  const icon = isDark ? (
    <Icons.Sun height={24} width={24} strokeWidth={3} />
  ) : (
    <Icons.Moon height={24} width={24} strokeWidth={3} />
  );

  const className = "transform ease-in-out duration-400 " + (isDark ? "rotate-180" : "0");

  return <RoundButton className={className} onClick={toggleTheme} icon={icon} />;
}