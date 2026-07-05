"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input, Label, FieldError } from "@/components/ui/input";
import { Body, Heading } from "@/components/tokens";

const signInSchema = z.object({
  email: z.string().email("Valid email required"),
  password: z.string().min(1, "Password required"),
});

type SignInData = z.infer<typeof signInSchema>;

export function SignInForm({ redirectTo }: { redirectTo?: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: zodResolver(signInSchema) });

  const onSubmit = (_data: SignInData) => {
    document.cookie = "orbit-auth=1; path=/; max-age=86400";
    router.push(redirectTo ?? "/athletes/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-sm mx-auto">
      <Heading as="h1" size="md" className="text-center normal-case">
        Sign in
      </Heading>
      <Body muted className="text-center text-sm">
        Access your athlete dashboard, bib details, and race schedule.
      </Body>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} error={errors.email?.message} />
        <FieldError message={errors.email?.message} />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} error={errors.password?.message} />
        <FieldError message={errors.password?.message} />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Sign in
      </Button>
    </form>
  );
}
