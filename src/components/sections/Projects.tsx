import { useState } from "react";
import FilterButton from "../Button/FilterButton";
import GradientText from "../GradientText/GradientText";
import ProjectCard from "../Card/ProjectCard";
import { Images } from "../../constants";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <section id="projects" className="min-h-screen min-w-screen bg-secondary-bg pt-36 px-10">
      <div className="flex flex-col gap-8 items-center justify-center">
        <GradientText text="Featured Projects" className="text-6xl font-bold" />
        <p className="text-xl text-center text-tertiary mb-10">
          A showcase of my recent work spanning web applications, mobile apps,
          and more.
        </p>

        <div className="flex gap-4">
          <FilterButton
            onClick={() => setActiveFilter("All Projects")}
            text="All Projects"
            isActive={activeFilter === "All Projects"}
          />
          <FilterButton
            onClick={() => setActiveFilter("React")}
            text="React"
            isActive={activeFilter === "React"}
          />
          <FilterButton
            onClick={() => setActiveFilter("Spring")}
            text="Spring"
            isActive={activeFilter === "Spring"}
          />
          <FilterButton
            onClick={() => setActiveFilter("Vue")}
            text="Vue"
            isActive={activeFilter === "Vue"}
          />
          <FilterButton
            onClick={() => setActiveFilter("Angular")}
            text="Angular"
            isActive={activeFilter === "Angular"}
          />
          <FilterButton
            onClick={() => setActiveFilter("Svelte")}
            text="Svelte"
            isActive={activeFilter === "Svelte"}
          />
          <FilterButton
            onClick={() => setActiveFilter("Next.js")}
            text="Next.js"
            isActive={activeFilter === "Next.js"}
          />
        </div>

        <div className="grid gap-4 md:gap-10 grid-cols-1 xl:grid-cols-2 w-full mb-36 px-10 xl:px-20 2xl:px-60 ">
          <ProjectCard
            title="Project Title"
            description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            photo={<img src={Images.Dashboard} alt="Project" />}
            labels={["React", "TypeScript"]}
          />
          <ProjectCard
            title="Project Title"
            description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            photo={<img src={Images.Dashboard} alt="Project" />}
            labels={["React", "TypeScript"]}
          />
          <ProjectCard
            title="Project Title"
            description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            photo={<img src={Images.Dashboard} alt="Project" />}
            labels={["React", "TypeScript"]}
          />
          <ProjectCard
            title="Project Title"
            description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            photo={<img src={Images.Dashboard} alt="Project" />}
            labels={["React", "TypeScript"]}
          />
        </div>
      </div>
    </section>
  );
}
