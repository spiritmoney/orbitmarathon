import { Heading, Body, Eyebrow } from "@/components/tokens";
import { ContactForm } from "@/components/content/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Get in touch</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Contact
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            General inquiries, volunteer signup, and media kit requests.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Email</p>
            <Body>hello@orbitmarathon.com</Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Media</p>
            <Body>press@orbitmarathon.com</Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Location</p>
            <Body muted>
              Teslim Balogun Stadium
              <br />
              Surulere, Lagos, Nigeria
            </Body>
          </div>
        </div>
      </div>
    </>
  );
}
