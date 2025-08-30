import { useEffect, useState } from "react";

export default function useMouseTracker() {

  const [position, setPosition] = useState < { x: number; y: number } | null > ( null );

  useEffect(() => {

    const handleMouseMove = ( event: MouseEvent ) => 
        setPosition( { x: event.clientX, y: event.clientY } );

    const handleResize = () => setPosition( null );
    

    window.addEventListener( "mousemove", handleMouseMove );
    window.addEventListener( "resize", handleResize );

    return () => {
      window.removeEventListener( "mousemove", handleMouseMove );
      window.removeEventListener( "resize", handleResize );
    };
  }, []);

  return position;
}