import { Icons } from "../../constants";
import RoundButton from "../Button/RoundButton";

export default function Socials({className} : {className?: string}) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
        <RoundButton
          onClick={() => window.open("https://github.com/omarAlMayouf", "_blank")}
          icon={<Icons.Github height={24} width={24} strokeWidth={3} />}
        />
        <RoundButton
          onClick={() => window.open("https://www.linkedin.com/in/omaralmayouf/", "_blank")}
          icon={<Icons.Linkedin height={24} width={24} strokeWidth={3} />}
        />
        <RoundButton
          onClick={() => location.href = "mailto:omaralmayouf@gmail.com"}
          icon={<Icons.Email height={24} width={24} strokeWidth={3} />}
        />
    </div>
  );
}