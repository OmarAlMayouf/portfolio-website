import Socials from "../Feilds/Socials";
import MainCard from "./MainCard";

export default function FindMe() {
  return (
    <MainCard
      title="Find Me Online"
      children={<Socials />}
    />
  );
}