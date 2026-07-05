"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, type PaymentFormData } from "@/lib/schemas/registration";
import { getRegistrationData, saveRegistrationData } from "@/lib/registration-store";
import { getRaceById } from "@/lib/data/races";
import { eventInfo } from "@/lib/data/event";
import { generateRunnerId } from "@/lib/registration-utils";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/input";
import { Body } from "@/components/tokens";

export function PaymentForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (!data.wave || !data.jerseySize) {
      router.replace("/register");
    }
  }, [router]);

  const onSubmit = (data: PaymentFormData) => {
    const runnerId = generateRunnerId();
    saveRegistrationData({
      ...data,
      runnerId,
      fastTrack: data.paymentMethod === "orbit-wallet",
    });
    router.push("/register/confirmation");
  };

  const regData = typeof window !== "undefined" ? getRegistrationData() : {};
  const race = regData.wave ? getRaceById(regData.wave) : null;
  let total = eventInfo.jerseyPrice;
  if (regData.transportPackage) total += 15000;
  if (regData.merchBundle) total += 8500;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      <div className="bg-paper-dim p-5 border border-line space-y-2">
        <p className="font-body text-sm font-bold uppercase tracking-wide text-ink/50">
          Order summary
        </p>
        <div className="flex justify-between text-sm">
          <span>{race?.name ?? "Wave"} registration</span>
          <span className="text-forest font-semibold">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Official jersey ({regData.jerseySize ?? "—"})</span>
          <span>₦{eventInfo.jerseyPrice.toLocaleString()}</span>
        </div>
        {regData.transportPackage && (
          <div className="flex justify-between text-sm">
            <span>Transport package</span>
            <span>₦15,000</span>
          </div>
        )}
        {regData.merchBundle && (
          <div className="flex justify-between text-sm">
            <span>Finisher merch bundle</span>
            <span>₦8,500</span>
          </div>
        )}
        <div className="border-t border-line pt-2 flex justify-between items-baseline">
          <span className="font-bold text-sm uppercase tracking-wide">Total</span>
          <p className="font-display text-3xl text-deep-blue">₦{total.toLocaleString()}</p>
        </div>
      </div>

      <Body muted className="text-xs">
        Payments processed securely via Paystack or Flutterwave at launch. Jersey size inventory is
        reserved at checkout.
      </Body>

      <fieldset>
        <legend className="font-body text-xs font-bold uppercase tracking-wide text-ink/70 mb-3">
          Payment method
        </legend>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" value="card" {...register("paymentMethod")} className="accent-deep-blue" />
            <span className="text-sm">Credit / debit card (Paystack / Flutterwave)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" value="bank" {...register("paymentMethod")} className="accent-deep-blue" />
            <span className="text-sm">Bank transfer</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 border border-forest/30 bg-tint-green/50">
            <input type="radio" value="orbit-wallet" {...register("paymentMethod")} className="mt-1 accent-deep-blue" />
            <span className="text-sm">
              <strong>Orbit Gateway wallet</strong> — Fast Track bib collection lane at the venue
            </span>
          </label>
        </div>
        <FieldError message={errors.paymentMethod?.message} />
      </fieldset>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" {...register("agreeTerms")} className="mt-1 accent-deep-blue" />
        <span className="text-sm text-ink/70">
          I confirm I am aged {eventInfo.ageMin}–{eventInfo.ageMax}, accept the terms and waiver,
          and understand the official jersey purchase is required
        </span>
      </label>
      <FieldError message={errors.agreeTerms?.message} />

      <div className="flex gap-3">
        <Button type="button" variant="ghost" onClick={() => router.back()}>Back</Button>
        <Button type="submit" variant="primary">Pay & complete registration</Button>
      </div>
    </form>
  );
}
