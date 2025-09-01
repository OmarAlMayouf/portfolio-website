import Socials from "../Button/Socials";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="py-28 bg-secondary-bg flex flex-col gap-6 items-center justify-center text-primary">
      <Logo />
      <Socials /> 
      <div className="text-tertiary">
        <p className="text-lg flex justify-center items-center">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-lg flex justify-center items-center">
          Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}