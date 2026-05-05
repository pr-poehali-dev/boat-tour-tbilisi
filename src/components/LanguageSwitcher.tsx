import { useState, useRef, useEffect } from "react";
import { languages, Lang } from "@/i18n";

interface LanguageSwitcherProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-body font-medium transition-all duration-200"
        style={{
          background: open ? "rgba(13,125,138,0.12)" : "rgba(13,125,138,0.06)",
          color: "var(--navy)",
          border: "1px solid rgba(13,125,138,0.2)",
        }}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.5 }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 rounded-2xl shadow-lg overflow-hidden z-50 min-w-[150px]"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-body text-left transition-all duration-150 hover:bg-gray-50"
              style={{
                color: lang === l.code ? "var(--teal)" : "var(--navy)",
                fontWeight: lang === l.code ? 600 : 400,
              }}
            >
              <span className="text-base">{l.flag}</span>
              {l.label}
              {lang === l.code && (
                <svg className="ml-auto" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
