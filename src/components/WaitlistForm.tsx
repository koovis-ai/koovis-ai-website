"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type Product = "wealthpilot" | "studios" | "workforce" | "pulse" | "research" | "newsletter";

interface WaitlistFormProps {
  product: Product;
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
  compact?: boolean;
}

export default function WaitlistForm({
  product,
  placeholder = "you@example.com",
  buttonLabel = "Join waitlist",
  successMessage = "You're on the list. We'll email you when it's ready.",
  compact = false,
}: WaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to join waitlist");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 ${compact ? "p-3" : "p-4"}`}>
        <span className="text-xl text-accent">&#10003;</span>
        <p className="text-sm text-content">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          name="email"
          type="email"
          placeholder={placeholder}
          required
          aria-label="Email address"
          className={`min-h-[44px] flex-1 rounded-lg border border-content/10 bg-content/5 ${compact ? "px-3 py-2 text-sm" : "px-4 py-3 text-sm"} text-content placeholder:text-content-dim outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_12px_var(--accent-shadow)]`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent ${compact ? "px-4 py-2 text-sm" : "px-5 py-3 text-sm"} font-semibold text-neutral-950 transition-opacity hover:opacity-90 disabled:opacity-50`}
        >
          {status === "loading" ? "Sending..." : buttonLabel}
          {status !== "loading" && <ArrowRight size={16} />}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400">{errorMessage}</p>
      )}
      {!compact && (
        <p className="text-xs text-content-dim">
          No spam. One email when it ships.
        </p>
      )}
    </form>
  );
}
