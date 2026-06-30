import { useEffect, useState } from "react";

const STORAGE_KEY = "rc-cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const dismiss = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Privacy notice"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-lg border border-white/10 bg-[#0F0E0D]/95 p-4 text-sm text-white shadow-2xl backdrop-blur md:flex md:items-center md:gap-4 md:p-5"
    >
      <p className="flex-1 leading-relaxed text-white/80">
        We use privacy-friendly, cookieless analytics (Vercel Web Analytics) to
        understand aggregate site usage. No personal data or tracking cookies
        are used. See our approach to privacy for details.
      </p>
      <div className="mt-3 flex shrink-0 gap-2 md:mt-0">
        <button
          type="button"
          onClick={() => dismiss("declined")}
          className="rounded-md border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/80 transition hover:bg-white/5"
        >
          Dismiss
        </button>
        <button
          type="button"
          onClick={() => dismiss("accepted")}
          className="rounded-md bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#0F0E0D] transition hover:bg-white/90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}