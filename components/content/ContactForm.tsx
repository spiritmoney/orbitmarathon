"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, Label, FieldError, Select } from "@/components/ui/input";
import { Body } from "@/components/tokens";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (_data: ContactFormData) => {
    reset();
  };

  if (isSubmitSuccessful) {
    return (
      <div className="bg-tint-green p-6 border border-forest/20">
        <Body>Thank you. We will respond within 2 business days.</Body>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} error={errors.name?.message} />
        <FieldError id="name-error" message={errors.name?.message} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} error={errors.email?.message} />
        <FieldError id="email-error" message={errors.email?.message} />
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Select id="subject" {...register("subject")} error={errors.subject?.message}>
          <option value="">Select subject</option>
          <option value="general">General inquiry</option>
          <option value="registration">Registration</option>
          <option value="volunteer">Volunteer signup</option>
          <option value="media">Media kit</option>
        </Select>
        <FieldError id="subject-error" message={errors.subject?.message} />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          rows={5}
          className="flex w-full rounded-sm border border-line bg-white px-3 py-2 font-body text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          {...register("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>
      <Button type="submit" variant="primary">Send message</Button>
    </form>
  );
}
