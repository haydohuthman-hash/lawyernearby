"use client";

import { useEffect, useRef, useState } from "react";
import { searchAddress, type Place } from "./geo";
import { PinIcon } from "./icons";

export default function AddressInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: Place;
  onChange: (place: Place) => void;
  placeholder: string;
}) {
  const [text, setText] = useState(value.label);
  const [suggestions, setSuggestions] = useState<Place[]>([]);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const abortRef = useRef<AbortController>();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setText(value.label);
  }, [value.label]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function queueSearch(q: string) {
    clearTimeout(debounceRef.current);
    abortRef.current?.abort();
    if (q.trim().length < 3) {
      setSuggestions([]);
      setSearching(false);
      return;
    }
    setSearching(true);
    debounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const results = await searchAddress(q, controller.signal);
        setSuggestions(results);
        setOpen(true);
      } catch {
        setSuggestions([]);
      } finally {
        setSearching(false);
      }
    }, 450);
  }

  function pick(place: Place) {
    onChange(place);
    setText(place.label);
    setSuggestions([]);
    setOpen(false);
  }

  return (
    <div ref={wrapRef} className="relative">
      <span className="mb-1.5 block text-[12px] text-white/60">{label}</span>
      <div className="relative">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            queueSearch(e.target.value);
          }}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && suggestions.length > 0) {
              e.preventDefault();
              pick(suggestions[0]);
            }
            if (e.key === "Escape") setOpen(false);
          }}
          className="w-full rounded-lg bg-white/5 px-3.5 py-3 pr-9 text-[13px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
          placeholder={placeholder}
          autoComplete="off"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          {searching ? (
            <span className="block h-3.5 w-3.5 animate-spin rounded-full border border-white/20 border-t-white/70" />
          ) : (
            <PinIcon className="h-4 w-4 opacity-40" />
          )}
        </span>
      </div>

      {open && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-30 mt-1.5 overflow-hidden rounded-lg bg-[#1c1c1c] shadow-[0_16px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/15">
          {suggestions.map((s) => (
            <li key={`${s.lat},${s.lon}`}>
              <button
                type="button"
                onClick={() => pick(s)}
                className="flex w-full items-start gap-2.5 px-3.5 py-2.5 text-left text-[12.5px] leading-snug text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <PinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50" />
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
