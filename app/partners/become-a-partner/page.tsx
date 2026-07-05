import { Heading, Body, Eyebrow } from "@/components/tokens";
import { ContactForm } from "@/components/content/ContactForm";

export const metadata = { title: "Become a partner" };

export default function BecomePartnerPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Partner with us</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Become a partner
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            Join Lagos largest endurance event. Title, presenting, and official partner tiers available.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
        <ContactForm />
      </div>
    </>
  );
}
