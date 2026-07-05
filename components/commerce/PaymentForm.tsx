"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, type PaymentFormData } from "@/lib/schemas/registration";
import { getRegistrationData, saveRegistrationData } from "@/lib/registration-store";
import { getRaceById } from "@/lib/data/races";
import { Button } from "@/components/ui/button";
import { Label, FieldError } from "@/components/ui/input";

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
    saveRegistrationData(data);
    router.push("/register/confirmation");
  };

  const regData = typeof window !== "undefined" ? getRegistrationData() : {};
  const race = regData.wave ? getRaceById(regData.wave) : null;
  let total = race?.price ?? 0;
  if (regData.transportPackage) total += 15000;
  if (regData.merchBundle) total += 8500;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      <div className="bg-paper-dim p-5 border border-line">
        <p className="font-body text-sm font-bold uppercase tracking-wide text-ink/50 mb-2">
          Order summary
        </p>
        <p className="font-display text-3xl text-deep-blue">
          ₦{total.toLocaleString()}
        </p>
        {race && (
          <p className="text-sm text-ink/60 mt-1">{race.name} entry</p>
        )}
      </div>

      <fieldset>
        <legend className="font-body text-xs font-bold uppercase tracking-wide text-ink/70 mb-3">
          Payment method
        </legend>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" value="card" {...register("paymentMethod")} className="accent-deep-blue" />
            <span className="text-sm">Credit / debit card</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" value="bank" {...register("paymentMethod")} className="accent-deep-blue" />
            <span className="text-sm">Bank transfer</span>
          </label>
        </div>
        <FieldError message={errors.paymentMethod?.message} />
      </fieldset>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" {...register("agreeTerms")} className="mt-1 accent-deep-blue" />
        <span className="text-sm text-ink/70">
          I accept the terms and conditions and waiver of liability
        </span>
      </label>
      <FieldError message={errors.agreeTerms?.message} />

      <div className="flex gap-3">
        <Button type="button" variant="ghost" onClick={() => router.back()}>Back</Button>
        <Button type="submit" variant="primary">Complete registration</Button>
      </div>
    </form>
  );
}
