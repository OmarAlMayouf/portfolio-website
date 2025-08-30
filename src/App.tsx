import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button/Button";
import GradientText from "./components/GradientText/GradientText";
import MouseTracker from "./components/MouseTracker/MouseTracker";
import FilterButton from "./components/Button/FilterButton";
import { useState } from "react";
import { Images } from "./constants";
import LetsConnect from "./components/Card/LetsConnect";
import FindMe from "./components/Card/FindMe";
import ProjectCard from "./components/Card/ProjectCard";
import Socials from "./components/Feilds/Socials";
import ThemeToggle from "./components/Button/ThemeToggle";
import ContactForm from "./components/FormFeild/ContactForm";

function App() {
  const { toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All Projects");
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg text-primary transition-colors duration-500">

      <MouseTracker />

      <div className="w-full max-w-7xl flex flex-col items-center gap-5">
        
        <div className="flex flex-col items-center gap-2">

          <GradientText text="Omar AlMayouf" className="py-6 text-6xl font-bold" />

          <ThemeToggle />

          <p className="text-3xl font-semibold text-secondary">
            Full Stack Developer
          </p>

          <p className="mt-4 font-semibold text-tertiary text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius deleniti! Iste dolore aperiam ut nostrum deserunt quae obcaecati sit cum, at officia distinctio voluptatibus iure possimus quis? Vitae, suscipit.
          </p>

          <Socials />
        </div>

        <div className="flex w-full gap-4">
          <Button onClick={toggleTheme} variant="primary">
            Toggle Dark Mode
          </Button>

          <Button onClick={toggleTheme} variant="secondary">
            Toggle Dark s
          </Button>
        </div>

        <div className="flex gap-4">
          <FilterButton onClick={() => setActiveFilter("All Projects")} text="All Projects" isActive={activeFilter === "All Projects"} />
          <FilterButton onClick={() => setActiveFilter("React")} text="React" isActive={activeFilter === "React"} />
          <FilterButton onClick={() => setActiveFilter("Spring")} text="Spring" isActive={activeFilter === "Spring"} />
          <FilterButton onClick={() => setActiveFilter("Vue")} text="Vue" isActive={activeFilter === "Vue"} />
          <FilterButton onClick={() => setActiveFilter("Angular")} text="Angular" isActive={activeFilter === "Angular"} />
          <FilterButton onClick={() => setActiveFilter("Svelte")} text="Svelte" isActive={activeFilter === "Svelte"} />
          <FilterButton onClick={() => setActiveFilter("Next.js")} text="Next.js" isActive={activeFilter === "Next.js"} />
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full mb-10">
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

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full mb-10">
          <div className="flex flex-col gap-13 h-full mr-4">
            <LetsConnect />
            <FindMe />
          </div>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}

export default App;