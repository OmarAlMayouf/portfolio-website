import AboutImageDark from "../../assets/images/AboutBackground.png";
import AboutImageLight from "../../assets/images/AboutBackgroundLight.png";
import { Icons } from "../../constants";
import Button from "../Button/Button";
import Socials from "../Button/Socials";
import MainLogo from "../Logo/MainLogo";
import MouseTracker from "../MouseTracker/MouseTracker";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 relative flex items-center justify-center min-h-[100vh] min-w-[100vw] bg-cover bg-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center block dark:hidden"
        style={{ backgroundImage: `url(${AboutImageLight})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden dark:block"
        style={{ backgroundImage: `url(${AboutImageDark})` }}
      />
      <MouseTracker />

      <div className="z-10 flex flex-col gap-8 items-center justify-center text-primary">
        <MainLogo />
        <p className="text-xl text-center text-tertiary max-w-2xl mb-10">
          Crafting exceptional digital experiences with modern technologies.
          <br />
          Passionate about building scalable and efficient applications and
          solving complex problems.
          <br />
        </p>
        <div className="flex flex-row gap-10 px-20 w-full justify-center">
          <Button
            variant="primary"
            onClick={() => {}}
            icon={
              <Icons.External_Link width={20} height={20} strokeWidth={3} />
            }
          >
            View My Work
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            Download Resume
          </Button>
        </div>
          <Socials />
      </div>
    </section>
  );
}