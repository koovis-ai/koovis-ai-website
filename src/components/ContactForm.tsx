"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-6">
        <span className="text-2xl text-accent">&#10003;</span>
        <div>
          <p className="font-semibold text-content">Message sent.</p>
          <p className="text-sm text-content-muted">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-content/10 bg-content/5 px-4 py-3.5 text-sm text-content placeholder:text-content-dim outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_12px_var(--accent-shadow)] min-h-[44px]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Name *"
          required
          className={inputClasses}
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          required
          className={inputClasses}
        />
      </div>
      <textarea
        name="message"
        placeholder="What's on your mind? *"
        rows={5}
        required
        className={`${inputClasses} resize-none`}
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
