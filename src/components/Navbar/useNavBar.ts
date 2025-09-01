import { useLayoutEffect, useRef, useState } from "react";

export default function useNavBar() {

  const [ activeSection, setActiveSection ] = useState( "home" );
  const [ indicatorStyle, setIndicatorStyle ] = useState( { left: 0, width: 0 } );
  const navRefs = useRef < ( HTMLLIElement | null ) [] > ( [] );

  const navBarList = [
    { name: "Home", section: "home" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];
  
  useLayoutEffect(() => {
    const idx = navBarList.findIndex( ( item ) => item.section === activeSection );
    const el = navRefs.current[ idx ];
    if ( el ) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      if ( parentRect ) {
        setIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [ activeSection, navBarList.length ] );

  useLayoutEffect(() => {
    const handleResize = () => {
      const idx = navBarList.findIndex( ( item ) => item.section === activeSection );
      const el = navRefs.current[ idx ];
      if ( el ) {
        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement?.getBoundingClientRect();
        if ( parentRect ) {
          setIndicatorStyle({
            left: rect.left - parentRect.left,
            width: rect.width,
          });
        }
      }
    };
    window.addEventListener( "resize", handleResize );
    return () => window.removeEventListener( "resize", handleResize );
  }, [ activeSection, navBarList.length ]);

  return {
    activeSection,
    setActiveSection,
    indicatorStyle,
    navBarList,
    navRefs,
  };
}