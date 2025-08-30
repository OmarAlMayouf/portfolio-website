import { useState } from "react";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial < Record < keyof Fields, string > >;

export default function useContactForm() {

  const [ loading, setLoading ] = useState( false );
  
  const [ fields, setFields ] = useState < Fields > ({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [ errors, setErrors ] = useState<Errors>({});

  const validate = ( fields: Fields ) => {
    
    const newErrors: Errors = {};
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if ( !fields.name.trim() ) newErrors.name = "Name is required";
    
    if ( !fields.email.trim() ) newErrors.email = "Email is required";

    else if ( !emailRegex.test( fields.email ) ) newErrors.email = "Invalid email address";

    if ( !fields.subject.trim() ) newErrors.subject = "Subject is required";
    if ( !fields.message.trim() ) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleChange = ( e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement > ) => {

    const { name, value } = e.target;
    setFields( prev => ( { ...prev, [ name ]: value } ) );
    setErrors( prev => ( { ...prev, [ name ]: undefined } ) );
  };

  const handleSubmit = async ( e: React.FormEvent < HTMLFormElement > ) => {
    
    e.preventDefault();
    
    const validationErrors = validate( fields );
    
    if ( Object.keys( validationErrors ).length > 0 ) {
      setErrors( validationErrors );
      return;
    }

    setLoading( true );

    // Simulate sending
    await new Promise( res => setTimeout( res, 1200 ) );
    setLoading( false );

    setFields( { name: "", email: "", subject: "", message: "" } );
  };

  return {
    loading,
    fields,
    errors,
    handleChange,
    handleSubmit,
  };
}