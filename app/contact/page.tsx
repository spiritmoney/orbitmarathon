import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { ContactForm } from "@/components/content/ContactForm";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { eventInfo } from "@/lib/data/event";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Get in touch</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Contact & FAQ
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            General inquiries, registration support, and media kit requests. For the fastest
            response in Nigeria, message us on WhatsApp.
          </Body>
          <Button asChild variant="primary" className="mt-6">
            <Link href={eventInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </Link>
          </Button>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire mb-2">Follow us</p>
            <SocialLinks
              linkClassName="text-ink/70 border-ink/15 hover:text-sapphire hover:border-sapphire/30"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">For more enquiries</p>
            <Body>
              <Link href={eventInfo.phoneLink} className="text-sapphire hover:text-deep-blue">
                Call {eventInfo.phone}
              </Link>
            </Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">WhatsApp</p>
            <Body>
              <Link href={eventInfo.whatsappLink} className="text-sapphire hover:text-deep-blue">
                {eventInfo.whatsapp}
              </Link>
            </Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Email</p>
            <Body>{eventInfo.email}</Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Media</p>
            <Body>{eventInfo.pressEmail}</Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Location</p>
            <Body muted>
              Start: {eventInfo.startLocation}
              <br />
              Finish: {eventInfo.finishLocation}
            </Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">Dates</p>
            <Body muted>{eventInfo.dateLabel}</Body>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sapphire">FAQ</p>
            <Body muted className="text-sm">
              Age limit 18–50 · Free registration · ₦{eventInfo.jerseyPrice.toLocaleString()} mandatory jersey · Medical teams every
              2km
            </Body>
            <Link href="/faq" className="text-sm text-sapphire font-bold uppercase mt-2 inline-block hover:text-deep-blue">
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
