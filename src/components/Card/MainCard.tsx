import type { ReactNode } from "react";
import Labels from "../Labels/Labels";

interface CardProps {
  title: string;
  description?: string;
  photo?: ReactNode;
  labels?: string[];
  buttons?: ReactNode[];
  children?: ReactNode;
}

export default function MainCard({ title, description, photo, labels, buttons, children }: CardProps) {
  return (
    <div className="shadow-lg hover:shadow-xl transition-all ease-in-out duration-300  border border-accent-primary bg-card rounded-2xl container">

      {photo && (
        <div className="p-5 rounded-t-2xl">
          <div className="overflow-hidden rounded-t-2xl">
            <div className="hover:scale-105 transition-all duration-300 ease-in-out">
              {photo}
            </div>
          </div>
        </div>
      )}

      <div className="px-10 py-10">
        
        <h3 className="text-2xl font-bold">{title}</h3>
        
        {description && <p className="mt-2 text-sm text-tertiary font-semibold">{description}</p>}
        
        {labels && (
            <div className="mt-6 mb-3 flex flex-wrap gap-2">
            {labels.map((label) => (
                <Labels key={label} text={label} />
            ))}
            </div>
        )}

        {buttons && <div className="mt-4 flex gap-4">{buttons}</div>}
        
        {children && <div className="mt-4">{children}</div>}
      
      </div>
    </div>
  );
}