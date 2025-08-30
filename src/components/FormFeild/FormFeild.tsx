interface FormFieldProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  label: string;
  type: string;
  id: string;
  className?: string;
  required?: boolean;
  customHeight?: string;
  value?: string;
  error?: string;
  errorMessageException?: string;
}

export default function FormField({
  
  label,
  type,
  id,
  className,
  required,
  customHeight,
  value,
  onChange,
  error,
  errorMessageException,

}: FormFieldProps) {
  
  const style =
    "border border-accent-primary p-2 rounded-xl text-start " +
    "resize-none focus:outline-none focus:border-gradient " +
    (customHeight ? ` ${customHeight}` : "h-11") +
    (error ? " border-red-500" : "");

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      
      <label className="font-semibold text-primary" htmlFor={id}>
      
        {label}
      
        {error && <span className="text-red-500 ml-1">* </span>}
      
        {error === errorMessageException && (
          <span className="text-red-500 text-sm">{error}</span>
        )}
      
      </label>

      {type === "textarea" ? (
        
        <textarea
          className={style}
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={style}
          type={type}
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
        />

      )}
    </div>
  );
}