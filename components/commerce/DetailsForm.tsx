"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { detailsSchema, type DetailsFormData } from "@/lib/schemas/registration";
import { getRegistrationData, saveRegistrationData } from "@/lib/registration-store";
import { Button } from "@/components/ui/button";
import { Input, Label, FieldError } from "@/components/ui/input";

export function DetailsForm() {
  const router = useRouter();
  const [isDuo, setIsDuo] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (!data.wave) {
      router.replace("/register");
      return;
    }
    setIsDuo(data.wave === "duo-orbit");
    reset({
      firstName: data.firstName ?? "",
      lastName: data.lastName ?? "",
      email: data.email ?? "",
      phone: data.phone ?? "",
      emergencyName: data.emergencyName ?? "",
      emergencyPhone: data.emergencyPhone ?? "",
      teamName: data.teamName ?? "",
      partnerName: data.partnerName ?? "",
    });
  }, [router, reset]);

  const onSubmit = (data: DetailsFormData) => {
    if (isDuo && !data.partnerName?.trim()) {
      return;
    }
    saveRegistrationData(data);
    router.push("/register/kit");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" {...register("firstName")} error={errors.firstName?.message} />
          <FieldError id="firstName-error" message={errors.firstName?.message} />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" {...register("lastName")} error={errors.lastName?.message} />
          <FieldError id="lastName-error" message={errors.lastName?.message} />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} error={errors.email?.message} />
        <FieldError id="email-error" message={errors.email?.message} />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" {...register("phone")} error={errors.phone?.message} />
        <FieldError id="phone-error" message={errors.phone?.message} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="emergencyName">Emergency contact</Label>
          <Input id="emergencyName" {...register("emergencyName")} error={errors.emergencyName?.message} />
          <FieldError id="emergencyName-error" message={errors.emergencyName?.message} />
        </div>
        <div>
          <Label htmlFor="emergencyPhone">Emergency phone</Label>
          <Input id="emergencyPhone" type="tel" {...register("emergencyPhone")} error={errors.emergencyPhone?.message} />
          <FieldError id="emergencyPhone-error" message={errors.emergencyPhone?.message} />
        </div>
      </div>
      {isDuo && (
        <>
          <div>
            <Label htmlFor="teamName">Team name</Label>
            <Input id="teamName" {...register("teamName")} />
          </div>
          <div>
            <Label htmlFor="partnerName">Partner name</Label>
            <Input id="partnerName" {...register("partnerName")} error={errors.partnerName?.message} />
            <FieldError id="partnerName-error" message={errors.partnerName?.message} />
          </div>
        </>
      )}
      <div className="flex gap-3">
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          Back
        </Button>
        <Button type="submit" variant="primary">
          Continue to kit
        </Button>
      </div>
    </form>
  );
}
