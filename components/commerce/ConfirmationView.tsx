"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getRegistrationData, clearRegistrationData } from "@/lib/registration-store";
import { getRaceById } from "@/lib/data/races";
import { incrementRegisteredCount } from "@/components/marketing/GreenMileCounter";
import { Button } from "@/components/ui/button";
import { Heading, Body } from "@/components/tokens";
import { BibCard } from "@/components/dashboard/BibCard";

export function ConfirmationView() {
  const [data, setData] = useState(getRegistrationData());
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    setData(getRegistrationData());
  }, []);

  const race = data.wave ? getRaceById(data.wave) : null;
  const runnerId = data.runnerId ?? "ORB-PENDING";
  const bibNumber = runnerId.replace("ORB-", "");

  useEffect(() => {
    if (data.runnerId && data.paymentMethod && !counted) {
      incrementRegisteredCount();
      setCounted(true);
    }
  }, [data.runnerId, data.paymentMethod, counted]);

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
          Welcome, {data.firstName}! You are registered for {race?.name ?? data.wave}. Your unique
          runner ID is <strong>{runnerId}</strong>.
        </Body>
        <Body muted className="mt-2 text-sm">
          A confirmation email with your QR code for bib collection will be sent to {data.email}.
        </Body>
        {data.fastTrack && (
          <Body className="mt-3 text-sm text-forest font-semibold">
            Orbit Gateway payment confirmed — use the Fast Track lane at kit collection.
          </Body>
        )}
      </div>

      <BibCard bibNumber={bibNumber} athleteName={`${data.firstName} ${data.lastName}`} />

      <div className="bg-paper-dim border border-line p-5 max-w-xs">
        <p className="text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-2">
          Bib collection QR
        </p>
        <div
          className="aspect-square bg-white border-2 border-ink flex items-center justify-center font-mono text-xs text-center p-4"
          aria-label={`QR code for runner ${runnerId}`}
        >
          {runnerId}
        </div>
      </div>

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
