"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { kitSchema, type KitFormData } from "@/lib/schemas/registration";
import { getRegistrationData, saveRegistrationData } from "@/lib/registration-store";
import { eventInfo } from "@/lib/data/event";
import { Button } from "@/components/ui/button";
import { Label, FieldError, Select } from "@/components/ui/input";
import { Body } from "@/components/tokens";

export function KitForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KitFormData>({
    resolver: zodResolver(kitSchema),
    defaultValues: {
      transportPackage: false,
      merchBundle: false,
    },
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (!data.wave || !data.email) {
      router.replace("/register");
      return;
    }
    reset({
      jerseySize: (data.jerseySize as KitFormData["jerseySize"]) ?? undefined,
      transportPackage: data.transportPackage ?? false,
      merchBundle: data.merchBundle ?? false,
    });
  }, [router, reset]);

  const onSubmit = (data: KitFormData) => {
    saveRegistrationData(data);
    router.push("/register/payment");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      <div className="bg-tint-blue/30 border border-sapphire/20 p-4">
        <Body className="text-sm">
          <strong className="text-deep-blue">Required:</strong> Official Orbit Marathon jersey — ₦
          {eventInfo.jerseyPrice.toLocaleString()}. Includes personalized bib and timing chip.
        </Body>
      </div>

      <div>
        <Label htmlFor="jerseySize">Jersey size</Label>
        <Select id="jerseySize" {...register("jerseySize")} error={errors.jerseySize?.message}>
          <option value="">Select size</option>
          {eventInfo.jerseySizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Select>
        <FieldError id="jerseySize-error" message={errors.jerseySize?.message} />
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" className="h-4 w-4 accent-deep-blue" {...register("transportPackage")} />
        <span className="font-body text-sm">Transport package (+₦15,000)</span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" className="h-4 w-4 accent-deep-blue" {...register("merchBundle")} />
        <span className="font-body text-sm">Finisher merch bundle (+₦8,500)</span>
      </label>
      <div className="flex gap-3">
        <Button type="button" variant="ghost" onClick={() => router.back()}>Back</Button>
        <Button type="submit" variant="primary">Continue to payment</Button>
      </div>
    </form>
  );
}
