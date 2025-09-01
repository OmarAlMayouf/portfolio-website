interface FieldsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Fields({ icon, title, description }: FieldsProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="rounded-full bg-gradient-to-b from-gradient-start to-gradient-end p-3 mr-4 text-white">
        {icon}
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="text-sm font-semibold text-tertiary">{description}</p>
      </div>
    </div>
  );
}