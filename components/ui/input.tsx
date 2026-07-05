import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, id, ...props }, ref) => {
    const errorId = error && id ? `${id}-error` : undefined;
    return (
      <input
        type={type}
        id={id}
        className={cn(
          "flex h-11 w-full rounded-sm border border-line bg-white px-3 py-2 font-body text-sm text-ink placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-sapphire ring-1 ring-sapphire/30",
          className,
        )}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "font-body text-xs font-bold uppercase tracking-wide text-ink/70",
        className,
      )}
      {...props}
    />
  );
}

export function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-xs text-sapphire font-medium" role="alert">
      {message}
    </p>
  );
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, id, children, ...props }, ref) => {
    const errorId = error && id ? `${id}-error` : undefined;
    return (
      <select
        id={id}
        className={cn(
          "flex h-11 w-full rounded-sm border border-line bg-white px-3 py-2 font-body text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-1",
          error && "border-sapphire",
          className,
        )}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = "Select";
