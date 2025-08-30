import MainCard from "./MainCard";
import { Icons } from "../../constants";
import Button from "../Button/Button";

interface ProjectCardsProps {
    title: string;
    description: string;
    photo: React.ReactNode;
    labels: string[];
}

export default function ProjectCard({ title, description, photo, labels }: ProjectCardsProps) {
  return (
    <MainCard
      title={title}
      description={description}
      photo={photo}
      labels={labels}
      buttons={[
        <Button
          variant="secondary"
          onClick={() => {}}
          icon={<Icons.Github width={20} height={20} strokeWidth={3} />}
          children="Code"
        />,
        <Button
          variant="primary"
          onClick={() => {}}
          icon={<Icons.External_Link width={20} height={20} strokeWidth={3} />}
          children="Live Demo"
        />,
      ]}
    />
  );
}
