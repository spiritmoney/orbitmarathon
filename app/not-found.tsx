import Link from "next/link";
import { Heading, Body } from "@/components/tokens";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-24 text-center">
      <Heading as="h1" size="lg">404</Heading>
      <Body muted className="mt-4 mb-8">This page is not on the course map.</Body>
      <Button asChild variant="primary">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
