import MainCard from "./MainCard";
import Fields from "../Feilds/Feilds";
import { Icons } from "../../constants";

export default function LetsConnect() {
  return (
    <MainCard
      title="Let's Connect"
      description="Im always open to discussing new opportunities and interesting projects."
      children={
        <div className="flex flex-col gap-6 mt-8">
          <Fields
            icon={<Icons.Email height={24} width={24} strokeWidth={3} />}
            title="Email"
            description="Omaralmayouf@gmail.com"
          />
          <Fields
            icon={<Icons.Location height={24} width={24} strokeWidth={3} />}
            title="Location"
            description="Saudi Arabia"
          />
          <Fields
            icon={<Icons.Phone height={24} width={24} strokeWidth={3} />}
            title="Phone"
            description="+966 55 430 0062"
          />
        </div>
      }
    />
  );
}