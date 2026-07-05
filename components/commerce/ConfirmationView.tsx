"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getRegistrationData, clearRegistrationData } from "@/lib/registration-store";
import { getRaceById } from "@/lib/data/races";
import { Button } from "@/components/ui/button";
import { Heading, Body } from "@/components/tokens";
import { BibCard } from "@/components/dashboard/BibCard";

export function ConfirmationView() {
  const [data, setData] = useState(getRegistrationData());

  useEffect(() => {
    setData(getRegistrationData());
  }, []);

  const race = data.wave ? getRaceById(data.wave) : null;
  const bibNumber = "2044";

  useEffect(() => {
    if (data.firstName && data.paymentMethod) {
      // Keep data until user leaves; clear on unmount optional
    }
  }, [data]);

  if (!data.wave || !data.firstName) {
    return (
      <Body>
        No registration found.{" "}
        <Link href="/register" className="text-sapphire underline">
          Start registration
        </Link>
      </Body>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-tint-green border border-forest/20 p-6">
        <Heading as="h2" size="md" className="text-forest normal-case">
          Registration confirmed
        </Heading>
        <Body className="mt-2">
          Welcome, {data.firstName}! You are registered for {race?.name ?? data.wave}.
        </Body>
      </div>

      <BibCard bibNumber={bibNumber} athleteName={`${data.firstName} ${data.lastName}`} />

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="primary">
          <Link href="/athletes/dashboard">Go to dashboard</Link>
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            clearRegistrationData();
            window.location.href = "/";
          }}
        >
          Return home
        </Button>
      </div>
    </div>
  );
}
