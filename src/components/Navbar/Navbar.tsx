import { Icons } from "../../constants";
import ThemeToggle from "../Button/ThemeToggle";
import Logo from "../Logo/Logo";
import useNavBar from "./useNavBar";

export default function Navbar() {

  const {
    activeSection,
    setActiveSection,
    indicatorStyle,
    navBarList,
    navRefs,
  } = useNavBar();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full bg-primary/10 border-b border-accent-secondary backdrop-blur-md">
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="#" className="flex items-center ">
          <Logo />
        </a>
        
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Icons.Menu height={20} width={20} />
        </button>

        <div className="hidden w-full md:flex md:w-auto" id="navbar-solid-bg">
          <div className="relative">
            <ul className="flex flex-col items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {navBarList.map((item, idx) => (
                <li
                  key={item.section}
                  ref={el => {
                    navRefs.current[idx] = el;
                  }}
                  className="relative"
                >
                  <a
                    // href={`#${item.section}`}
                    className={`block py-2 px-3 active:text-accent-secondary ${
                      activeSection === item.section ? "text-accent-secondary" : "text-primary"
                    }`}
                    onClick={e => {
                      e.preventDefault();
                      setActiveSection(item.section);
                      const section = document.getElementById(item.section);
                      if ( section )
                        section.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="px-4 p-2 rounded-lg hover:bg-primary/5">
                      {item.name}
                    </div>
                  </a>
                </li>
              ))}
              <li className="z-50 text-primary">
                <ThemeToggle />
              </li>
            </ul>
            
            {/* Moving indicator */}
            <span
              className="absolute bottom-0 h-0.5 bg-accent-secondary transition-all duration-300 rounded-full"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transition: "left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1)",
              }}
            />
          
          </div>
        
        </div>
      
      </div>
    
    </nav>
  );
}