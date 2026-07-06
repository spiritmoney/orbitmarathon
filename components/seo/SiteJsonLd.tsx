import { organizationJsonLd, sportsEventJsonLd, websiteJsonLd } from "@/lib/seo";

type JsonLdData = Record<string, unknown>;

interface JsonLdProps {
  data: JsonLdData | JsonLdData[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  return (
    <JsonLd data={[websiteJsonLd(), organizationJsonLd(), sportsEventJsonLd()]} />
  );
}
