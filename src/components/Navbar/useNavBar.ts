import { useLayoutEffect, useRef, useState } from "react";

export default function useNavBar() {

  const [ activeSection, setActiveSection ] = useState( "about" );
  const [ indicatorStyle, setIndicatorStyle ] = useState( { left: 0, width: 0 } );
  const navRefs = useRef < ( HTMLLIElement | null ) [] > ( [] );

  const navBarList = [
    { name: "About", section: "about" },
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
    const handleScroll = () => {
      let found = false;
      for ( let i = navBarList.length - 1; i >= 0; i-- ) {
        const sectionId = navBarList[i].section;
        const section = document.getElementById( sectionId );
        if ( section ) {
          const rect = section.getBoundingClientRect();
          if ( rect.top <= 120 ) {
            setActiveSection( prev => prev !== sectionId ? sectionId : prev );
            found = true;
            break;
          }
        }
      }
      if ( !found && navBarList.length > 0 ) {
        setActiveSection( navBarList[ 0 ].section );
      }
    };
    window.addEventListener( 'scroll', handleScroll, { passive: true } );
    handleScroll();
    return () => window.removeEventListener( 'scroll', handleScroll );
  }, [ navBarList.length ]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const idx = navBarList.findIndex( ( item ) => item.section === activeSection );
      const el = navRefs.current[ idx ];
      if ( el ) {
        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement?.getBoundingClientRect();
        if ( parentRect )
          setIndicatorStyle({
            left: rect.left - parentRect.left,
            width: rect.width,
          });
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