import { useEffect, useRef, useState } from "react";

const PHRASES = [ "Omar AlMayouf", "Full Stack Developer" ];
const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const PAUSE_AFTER = 1200;
const PAUSE_BEFORE_DELETE = 800;

type Phase = "typing" | "pausingAfterType" | "deleting" | "pausingAfterDelete";

export default function MainLogo() {

  const [ displayed, setDisplayed ] = useState( "" );
  const [ phase, setPhase ] = useState < Phase > ( "typing" );
  const [ phraseIdx, setPhraseIdx ] = useState( 0 );
  const intervalRef = useRef < number | null > ( null );

  useEffect(() => {

    if ( intervalRef.current ) {
      clearInterval( intervalRef.current );
      intervalRef.current = null;
    }

    const currentPhrase = PHRASES[ phraseIdx ];

    if ( phase === "typing" )
      intervalRef.current = window.setInterval(() => {
        setDisplayed(( prev ) => {
          if ( prev.length < currentPhrase.length )
            return currentPhrase.slice( 0, prev.length + 1 );
          else {
            setPhase( "pausingAfterType" );
            return prev;
          }
        });
      }, TYPING_SPEED );

    else if ( phase === "deleting" )
      intervalRef.current = window.setInterval(() => {
        setDisplayed(( prev ) => {
          if ( prev.length > 0 )
            return currentPhrase.slice( 0, prev.length - 1 );
          else {
            setPhase( "pausingAfterDelete" );
            return prev;
          }
        });
      }, DELETING_SPEED );

    else if ( phase === "pausingAfterType" )
      intervalRef.current = window.setTimeout(() => {
        setPhase( "deleting" );
      }, PAUSE_AFTER ) as unknown as number;

    else if ( phase === "pausingAfterDelete" )
      intervalRef.current = window.setTimeout(() => {
        setPhraseIdx( idx => ( idx + 1 ) % PHRASES.length );
        setPhase( "typing" );
      }, PAUSE_BEFORE_DELETE ) as unknown as number;

    return () => {
      if ( intervalRef.current ) {
        clearInterval( intervalRef.current );
        clearTimeout( intervalRef.current );
        intervalRef.current = null;
      }
    };
  }, [ phase, phraseIdx ] );

  useEffect(() => {
    setDisplayed( "" );
    setPhase( "typing" );
  }, [ phraseIdx ] );

  return { displayed };
}