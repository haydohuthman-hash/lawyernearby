"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailCaptureForm({
  buttonText = "Send Me The Blueprint",
  placeholder = "Enter your best email",
  align = "left",
  id,
}: {
  buttonText?: string;
  placeholder?: string;
  align?: "left" | "center";
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }
    setStatus("loading");
    // This site is statically exported (no server), so there's no backend
    // to call yet. Wire this up to an ESP (Resend, ConvertKit, Formspree, etc.)
    // before going live — for now it just captures intent client-side.
    setTimeout(() => setStatus("success"), 500);
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className={`flex items-center gap-3 rounded-full bg-[#0e1a14] px-6 py-4 text-[15px] font-medium text-white ${
          align === "center" ? "mx-auto max-w-md justify-center" : ""
        }`}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8ef0b8] text-[#0e1a14]">
          ✓
        </span>
        You&rsquo;re on the list — thanks for signing up.
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`w-full ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}
      noValidate
    >
      <div className="flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-[0_20px_60px_-15px_rgba(14,26,20,0.25)] ring-1 ring-black/5 sm:flex-row sm:items-center sm:rounded-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-label="Email address"
          className="w-full flex-1 rounded-full bg-transparent px-4 py-3 text-[15px] text-[#0e1a14] placeholder:text-[#0e1a14]/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-[#0e1a14] px-6 py-3.5 text-[13.5px] font-semibold tracking-[0.01em] text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Sending…" : buttonText}
        </button>
      </div>
      <div className="mt-2 min-h-[20px] px-2 text-[12.5px]">
        {status === "error" ? (
          <span className="text-red-600">{error}</span>
        ) : (
          <span className="text-[#0e1a14]/50">Free forever. No credit card. Unsubscribe anytime.</span>
        )}
      </div>
    </form>
  );
}
