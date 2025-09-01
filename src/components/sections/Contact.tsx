import FindMe from "../Card/FindMe";
import LetsConnect from "../Card/LetsConnect";
import ContactForm from "../FormFeild/ContactForm";
import GradientText from "../GradientText/GradientText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen min-w-screen bg-primary-bg pt-36 px-10"
    >
      <div className="flex flex-col gap-8 items-center justify-center">
        <GradientText text="Get In Touch" className="text-6xl font-bold" />
        <p className="text-xl text-center text-tertiary max-w-2xl mb-10">
          Ready to work together? I'd love to hear about your project and
          discuss how we can bring your ideas to life.
        </p>
        <div className="grid gap-4 md:gap-10 grid-cols-1 xl:grid-cols-2 w-full mb-36 px-10 xl:px-20 2xl:px-60 text-primary">
          <div className="flex flex-col gap-13 h-full mr-4">
            <LetsConnect />
            <FindMe />
          </div>
              <ContactForm />
        </div>
      </div>
    </section>
  );
}
