import { Heading, Body, Eyebrow } from "@/components/tokens";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "split";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "split",
}: SectionHeaderProps) {
  if (align === "left") {
    return (
      <div className="mb-11">
        {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        {description && (
          <Body muted className="mt-3 max-w-lg">
            {description}
          </Body>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-11">
      <div>
        {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
        <Heading as="h2" size="lg">
          {title}
        </Heading>
      </div>
      {description && (
        <Body muted className="max-w-sm md:text-right">
          {description}
        </Body>
      )}
    </div>
  );
}
