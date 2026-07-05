"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waveSchema, type WaveFormData } from "@/lib/schemas/registration";
import { saveRegistrationData } from "@/lib/registration-store";
import { races } from "@/lib/data/races";
import { eventInfo } from "@/lib/data/event";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heading, Body } from "@/components/tokens";

interface WaveSelectorProps {
  defaultWave?: string;
}

export function WaveSelector({ defaultWave }: WaveSelectorProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WaveFormData>({
    resolver: zodResolver(waveSchema),
    defaultValues: { wave: defaultWave as WaveFormData["wave"] | undefined },
  });

  const selected = watch("wave");

  const onSubmit = (data: WaveFormData) => {
    saveRegistrationData(data);
    router.push("/register/details");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <fieldset>
        <legend className="sr-only">Choose your wave</legend>
        <div className="grid md:grid-cols-3 gap-4">
          {races.map((race) => (
            <label
              key={race.id}
              className={cn(
                "relative block cursor-pointer border-2 p-5 transition-colors focus-within:ring-2 focus-within:ring-sun",
                selected === race.id
                  ? "border-deep-blue bg-tint-blue/30"
                  : "border-line bg-white hover:border-sapphire",
              )}
            >
              <input
                type="radio"
                value={race.id}
                className="sr-only"
                {...register("wave")}
              />
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire">
                {race.tag}
              </span>
              <Heading as="h3" size="md" className="mt-2 normal-case text-2xl">
                {race.name}
              </Heading>
              <Body muted className="mt-2 text-sm">{race.description}</Body>
              <p className="mt-3 font-display text-xl text-sapphire">Free entry</p>
              <p className="text-xs text-ink/50 mt-1">
                + ₦{eventInfo.jerseyPrice.toLocaleString()} official jersey (required)
              </p>
            </label>
          ))}
        </div>
        {errors.wave && (
          <p className="mt-2 text-sm text-sapphire" role="alert">
            {errors.wave.message}
          </p>
        )}
      </fieldset>
      <Button type="submit" variant="primary">
        Continue to details
      </Button>
    </form>
  );
}
