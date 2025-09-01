import { Icons } from "../../constants";
import Button from "../Button/Button";
import MainCard from "../Card/MainCard";
import FormField from "./FormFeild";
import useContactForm from "./useContactForm";

export default function ContactForm() {
  
  const { loading, handleSubmit, handleChange, fields, errors } = useContactForm();

  return (
    <MainCard
      title="Send a Message"
      description="Fill out the form below and I'll get back to you as soon as possible."
      children={
        <div className="flex flex-col gap-6">

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="lg:flex flex-row gap-4">
              <FormField
                className="w-full"
                label="Name"
                type="text"
                id="name"
                value={fields.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormField
                className="w-full"
                label="Email"
                type="email"
                id="email"
                value={fields.email}
                onChange={handleChange}
                error={errors.email}
                errorMessageException="Invalid email address"
              />
            </div>

            <div className="flex flex-col gap-4 mb-4">
              <FormField
                className="w-full"
                label="Subject"
                type="textarea"
                id="subject"
                value={fields.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              <FormField
                className="w-full"
                customHeight="h-36"
                label="Message"
                type="textarea"
                id="message"
                value={fields.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>

            <Button
              isLoading={{ value: loading, text: "Sending..." }}
              variant="primary"
              onClick={() => {}}
              icon={<Icons.Message width={16} height={16} strokeWidth={3} />}
            >
              Send Message
            </Button>
          </form>
        </div>
      }
    />
  );
}