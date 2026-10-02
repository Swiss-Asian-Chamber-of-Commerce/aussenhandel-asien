import { useCallback, useEffect, useState, type MouseEvent } from "react";
import {
  DECK_DOWNLOAD_NAME,
  DECK_FILE,
  EVENT_FOOTER,
  PROCURE_URL,
  SACC_LOGO,
  SACC_URL,
  slides,
  type Slide,
} from "@/data/slides";

function clamp(n: number, max: number) {
  return Math.max(0, Math.min(max, n));
}

function DownloadAnchor({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "busy" | "done" | "error">("idle");

  const onClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (status === "busy") return;
    setStatus("busy");
    try {
      const res = await fetch(DECK_FILE, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      if (blob.size < 10_000) throw new Error("empty file");
      const typed = new Blob([blob], {
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      });
      const url = URL.createObjectURL(typed);
      const a = document.createElement("a");
      a.href = url;
      a.download = DECK_DOWNLOAD_NAME;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 8000);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const label =
    status === "busy"
      ? "Download läuft …"
      : status === "done"
        ? "Gespeichert — Downloads-Ordner"
        : status === "error"
          ? "Nochmals versuchen"
          : children;

  return (
    <a
      href={DECK_FILE}
      download={DECK_DOWNLOAD_NAME}
      onClick={(e) => void onClick(e)}
      className={className}
    >
      {label}
    </a>
  );
}

function BrandLockup({ large = false }: { large?: boolean }) {
  return (
    <a
      href={SACC_URL}
      className={`pointer-events-auto absolute top-4 left-4 z-30 rounded-md bg-ink p-1.5 shadow-sm sm:top-5 sm:left-5 sm:p-2 ${
        large ? "h-16 sm:h-[4.75rem]" : "h-14 sm:h-[4.25rem]"
      }`}
    >
      <img
        src={SACC_LOGO}
        alt="Swiss-Asian Chamber of Commerce"
        className="h-full w-auto object-contain"
      />
    </a>
  );
}

function HandoutFooter() {
  return (
    <p className="pointer-events-none absolute right-4 bottom-4 z-[15] max-w-[72%] text-right font-sans text-[0.62rem] leading-tight tracking-wide text-ink/40 sm:right-5 sm:bottom-5 sm:text-[0.68rem]">
      {EVENT_FOOTER}
    </p>
  );
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [hint, setHint] = useState(true);
  const slide = slides[index];
  const last = slides.length - 1;

  const go = useCallback(
    (next: number) => {
      setIndex(clamp(next, last));
      setHint(false);
    },
    [last],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(last);
      } else if (e.key === "n" || e.key === "N") {
        setNotesOpen((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          void document.documentElement.requestFullscreen();
        } else {
          void document.exitFullscreen();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, last]);

  useEffect(() => {
    const t = window.setTimeout(() => setHint(false), 5000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-dvh bg-navy-deep text-ink">
      <div className="mx-auto flex min-h-dvh max-w-[1600px] flex-col">
        <div className="relative aspect-video w-full overflow-hidden bg-navy shadow-[0_0_0_1px_rgba(244,239,230,0.06)] md:max-h-[calc(100dvh-5.5rem)]">
          <SlideView slide={slide} />
          <Chrome
            index={index}
            total={slides.length}
            hint={hint}
            notesOpen={notesOpen}
            onPrev={() => go(index - 1)}
            onNext={() => go(index + 1)}
            onJump={go}
            onNotes={() => setNotesOpen((v) => !v)}
          />
        </div>
        <DownloadBar />
        {notesOpen ? <NotesPanel slide={slide} index={index} /> : null}
      </div>
    </div>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  if (slide.layout === "network") {
    return <NetworkSlide slide={slide} />;
  }

  return (
    <article className="absolute inset-0">
      {slide.image ? (
        <img
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            slide.layout === "statement" || slide.layout === "close"
              ? "linear-gradient(180deg, rgba(7,16,24,0.35) 0%, rgba(7,16,24,0.55) 45%, rgba(7,16,24,0.82) 100%)"
              : "linear-gradient(180deg, rgba(7,16,24,0.28) 0%, rgba(7,16,24,0.22) 38%, rgba(7,16,24,0.88) 100%)",
        }}
      />
      <BrandLockup large={slide.layout === "title"} />
      {slide.layout !== "title" ? <HandoutFooter /> : null}
      <div
        className={
          slide.layout === "title"
            ? "absolute inset-0 flex flex-col justify-end pt-16 pr-[5.5%] pb-16 pl-[7.75rem] sm:pt-20 sm:pb-[4.75rem] sm:pl-[8.5rem]"
            : "absolute inset-0 flex flex-col justify-end pt-[5%] pr-[5.5%] pb-24 pl-[7.75rem] sm:pb-28 sm:pl-[8.5rem]"
        }
      >
        {slide.kicker ? (
          <p
            className={
              slide.layout === "title"
                ? "mb-1.5 font-sans text-[clamp(0.8rem,2.1vw,1.15rem)] font-semibold tracking-[0.12em] text-gold uppercase"
                : "mb-3 font-sans text-[clamp(1.35rem,2.6vw,2rem)] font-semibold tracking-[0.12em] text-gold uppercase"
            }
          >
            {slide.kicker}
          </p>
        ) : null}
        <h1
          className={
            slide.layout === "title"
              ? "max-w-[16ch] font-display text-[clamp(1.7rem,4.2vw,3.15rem)] leading-[1.05] font-normal"
              : slide.layout === "statement" || slide.layout === "close"
                ? "max-w-[16ch] font-display text-[clamp(2.6rem,6.4vw,6rem)] leading-[1.04] font-normal"
                : "max-w-[36rem] font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.1] font-normal sm:max-w-[44rem]"
          }
        >
          {slide.title}
        </h1>
        {slide.subtitle ? (
          <p
            className={
              slide.layout === "title"
                ? "mt-1 font-display text-[clamp(1.35rem,2.8vw,2.15rem)] leading-tight text-gold-soft"
                : slide.layout === "statement" || slide.layout === "close"
                  ? "mt-3 max-w-[18ch] font-display text-[clamp(2rem,5vw,4.2rem)] leading-[1.08] text-gold-soft"
                  : "mt-2 font-display text-[clamp(1.8rem,3.8vw,3.2rem)] text-gold-soft"
            }
          >
            {slide.subtitle}
          </p>
        ) : null}
        {slide.bullets?.length ? (
          <ul className="mt-5 max-w-[50rem] space-y-2.5 font-sans text-[clamp(1.15rem,2.05vw,1.65rem)] leading-snug sm:mt-6 sm:space-y-3">
            {slide.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {slide.layout === "title" ? (
          <div className="mt-3 space-y-0.5 font-sans">
            <p className="text-[clamp(0.9rem,1.5vw,1.15rem)] text-ink">
              Nathan Kaiser
            </p>
            <p className="text-[clamp(0.8rem,1.25vw,1rem)] leading-snug text-muted">
              Vice President, Swiss-Asian Chamber of Commerce (SACC)
            </p>
            <p className="pt-0.5 text-[clamp(0.8rem,1.25vw,1rem)]">
              <a
                href={SACC_URL}
                className="text-gold-soft underline-offset-4 hover:underline"
              >
                sacc.ch
              </a>
            </p>
            <p className="text-[clamp(0.8rem,1.25vw,1rem)] text-muted">
              Fachtagung Aussenhandel
            </p>
            <p className="text-[clamp(0.8rem,1.25vw,1rem)] text-muted">
              22. September 2026 ·{" "}
              <a
                href={PROCURE_URL}
                className="text-gold-soft underline-offset-4 hover:underline"
              >
                procure.ch
              </a>
            </p>
          </div>
        ) : slide.meta ? (
          <p className="mt-7 font-sans text-base tracking-wide text-muted sm:text-lg">
            {slide.layout === "close" ? (
              <>
                Nathan Kaiser ·{" "}
                <a
                  href={SACC_URL}
                  className="text-gold-soft underline-offset-4 hover:underline"
                >
                  sacc.ch
                </a>
              </>
            ) : (
              slide.meta
            )}
          </p>
        ) : null}
        {slide.layout === "title" ? (
          <DownloadAnchor className="pointer-events-auto relative z-30 mt-3 inline-flex w-fit rounded-full bg-gold px-4 py-2 font-sans text-sm font-medium tracking-wide text-navy-deep hover:bg-gold-soft">
            PowerPoint herunterladen
          </DownloadAnchor>
        ) : null}
      </div>
    </article>
  );
}

function NetworkSlide({ slide }: { slide: Slide }) {
  const existing = [
    "Japan",
    "Korea",
    "Singapore",
    "Indonesien",
    "Hongkong",
    "Philippinen",
  ];
  const incoming = [
    {
      name: "China",
      line: "Upgrade · abgeschlossen 20.08.2026",
    },
    {
      name: "Vietnam",
      line: "EFTA-Abkommen · abgeschlossen 02.07.2026",
    },
    {
      name: "Thailand",
      line: "EFTA-Abkommen · genehmigt 2026 · gilt 1.1.2027",
    },
    {
      name: "Malaysia",
      line: "EFTA-Abkommen · Referendum, Frist 8.10.2026",
    },
  ];
  return (
    <article className="absolute inset-0 bg-navy">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, rgba(196,163,90,0.18), transparent 42%), radial-gradient(ellipse at 80% 70%, rgba(244,239,230,0.08), transparent 40%)",
        }}
      />
      <BrandLockup />
      <HandoutFooter />
      <div className="absolute inset-0 flex flex-col justify-between pt-[4.5%] pr-[6%] pb-[7%] pl-[7.75rem] sm:pl-[8.5rem]">
        <header>
          <p className="mb-2 font-sans text-[clamp(1.35rem,2.6vw,2rem)] font-semibold tracking-[0.12em] text-gold uppercase">
            {slide.kicker}
          </p>
          <h1 className="max-w-[16ch] font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[1.08]">
            {slide.title}
          </h1>
        </header>
        <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-3 font-sans text-sm tracking-[0.2em] text-muted uppercase">
              In Kraft
            </p>
            <ul className="space-y-1.5 font-sans text-[clamp(1.15rem,2vw,1.65rem)] text-ink/85">
              {existing.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            {incoming.map((item) => (
              <div key={item.name}>
                <p className="font-sans text-[clamp(1.05rem,1.8vw,1.35rem)] font-semibold tracking-[0.14em] text-gold uppercase">
                  Neu
                </p>
                <p className="font-display text-[clamp(1.4rem,2.5vw,2.1rem)] leading-tight">
                  {item.name}
                </p>
                <p className="font-sans text-[0.9rem] text-muted sm:text-[0.98rem]">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Chrome({
  index,
  total,
  hint,
  notesOpen,
  onPrev,
  onNext,
  onJump,
  onNotes,
}: {
  index: number;
  total: number;
  hint: boolean;
  notesOpen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
  onNotes: () => void;
}) {
  return (
    <>
      <div className="absolute top-[22%] bottom-[42%] left-0 z-10 w-[8%]">
        <button
          type="button"
          aria-label="Vorherige Folie"
          className="h-full w-full cursor-w-resize bg-transparent"
          onClick={onPrev}
        />
      </div>
      <div className="absolute top-[22%] bottom-[42%] right-0 z-10 w-[8%]">
        <button
          type="button"
          aria-label="Nächste Folie"
          className="h-full w-full cursor-e-resize bg-transparent"
          onClick={onNext}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-4 sm:p-5">
        <div className="pointer-events-auto flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Folie ${i + 1}`}
              onClick={() => onJump(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-ink/35 hover:bg-ink/60"
              }`}
            />
          ))}
        </div>
        <div className="pointer-events-auto mb-5 flex items-center gap-3 font-sans text-[0.7rem] tracking-wide text-ink/60 sm:mb-6">
          <button type="button" onClick={onNotes} className="hover:text-ink">
            {notesOpen ? "Notizen aus" : "Notizen (N)"}
          </button>
          <span>
            {index + 1} / {total}
          </span>
        </div>
      </div>

      {hint ? (
        <p className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-[8rem] rounded-full bg-navy/70 px-4 py-2 font-sans text-xs tracking-wide text-ink/80 backdrop-blur-sm">
          Pfeile · Leertaste · F Vollbild · N Sprechertext
        </p>
      ) : null}
    </>
  );
}

function DownloadBar() {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3 font-sans text-sm text-muted">
      <p>Opportunitäten durch Handelsabkommen — Asien</p>
      <DownloadAnchor className="shrink-0 text-gold-soft hover:underline">
        PPTX laden
      </DownloadAnchor>
    </div>
  );
}

function NotesPanel({ slide, index }: { slide: Slide; index: number }) {
  return (
    <aside className="border-t border-ink/10 px-5 py-4 font-sans text-sm leading-relaxed text-ink/80">
      <p className="mb-2 text-xs tracking-[0.16em] text-gold uppercase">
        Sprechertext · Folie {index + 1}
      </p>
      <p className="whitespace-pre-wrap">{slide.notes}</p>
    </aside>
  );
}
