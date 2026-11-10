"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  FileText,
  TreePine,
  Sparkles,
  MapPin,
  Calendar,
  ExternalLink,
  BookOpen,
} from "lucide-react";

interface SlideItem {
  id: number;
  file: string;
  title: string;
  subtitle: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    file: "folie-01.webp",
    title: "Titelblatt",
    subtitle: "Fortbildung Waldmedizin – Heilkraft der Baumöle in Weberstedt",
  },
  {
    id: 2,
    file: "folie-02.webp",
    title: "Begrüßung",
    subtitle: "Willkommen im Stuhlkreis mit Natur-Mandala und Duft-Einführung",
  },
  {
    id: 3,
    file: "folie-03.webp",
    title: "Erlebnis Lärche",
    subtitle: "Riechtraining und Begegnung mit der Lärche unter freiem Himmel",
  },
  {
    id: 4,
    file: "folie-04.webp",
    title: "Erlebnis Kiefer",
    subtitle: "Die Kraft der Kiefernnadeln und Baumharze mit allen Sinnen erfassen",
  },
  {
    id: 5,
    file: "folie-05.webp",
    title: "Qi Gong mit Duft im Steinkreis",
    subtitle: "Achtsame Bewegung und vertiefte Atmung in der Natur",
  },
  {
    id: 6,
    file: "folie-06.webp",
    title: "Im Hainich – Feensteig",
    subtitle: "Exkursion am Tor zum Nationalpark Hainich",
  },
  {
    id: 7,
    file: "folie-07.webp",
    title: "Erlebnis Douglasie",
    subtitle: "Frisch-zitronige Walddüfte direkt an den Zweigen der Douglasie entdecken",
  },
  {
    id: 8,
    file: "folie-08.webp",
    title: "Duft und Klang",
    subtitle: "Duftschwingung und Obertöne eröffnen den Zugang zum persönlichen Duftanker",
  },
  {
    id: 9,
    file: "folie-09.webp",
    title: "Duftender Abschluss (I)",
    subtitle: "Das Mischen der passenden Duftanker in Roll-ons oder Body-Splashs",
  },
  {
    id: 10,
    file: "folie-10.webp",
    title: "Duftender Abschluss (II)",
    subtitle: "Magische Mischungen im Entstehungsprozess – eifrige Teilnehmer am Werk",
  },
  {
    id: 11,
    file: "folie-11.webp",
    title: "Rückblick & Dankesworte",
    subtitle: "Zusammenfassung des Wochenendes und persönliche Worte von Maria M. Kettenring",
  },
];

export default function WeberstedtDokuSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pdfUrl = `${basePath}/downloads/Fotodokumentation_Waldmedizin_Weberstedt.pdf`;
  const currentSlide = slides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section id="fotodokumentation-weberstedt" className="px-4 mb-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-sage/25 overflow-hidden">
          {/* Top Accent Banner */}
          <div className="bg-gradient-to-r from-forest via-forest/95 to-leaf px-6 py-4 sm:px-10 flex flex-wrap items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-sage-light">
              <Sparkles size={16} className="shrink-0" />
              <span>Besonderer Seminar-Rückblick · Teilnehmer-Fotodokumentation</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-sage-light" /> Weberstedt / Hainich
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-sage-light" /> 24. – 25. Oktober 2026
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Header & Download CTA Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf bg-leaf/10 px-3 py-1 rounded-full mb-3">
                  <TreePine size={14} /> Fortbildung an der Deutschen Akademie für Waldbaden &amp; Gesundheit
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-earth mb-4">
                  Fotodokumentation: „Waldmedizin – Heilkraft der Baumöle“
                </h2>
                <p className="text-bark text-base sm:text-lg leading-relaxed">
                  Eine Kursteilnehmerin hat unser gemeinsames Oktober-Wochenende in Weberstedt und im
                  Nationalpark Hainich in einer liebevoll gestalteten <strong>11-seitigen Fotodokumentation</strong> festgehalten:
                  vom Riechtraining an Lärche, Kiefer und Douglasie über Qi Gong im Steinkreis bis hin zu
                  <em> Duft &amp; Klang</em> und dem Mischen persönlicher Duftanker.
                </p>
              </div>

              {/* Download Card Box */}
              <div className="lg:col-span-4 bg-cream rounded-2xl p-5 sm:p-6 border border-sage/30 flex flex-col justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-forest text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth text-base">Komplette Dokumentation</h3>
                    <p className="text-xs text-bark mt-0.5">
                      11 gestaltete Seiten im Querformat · zum Durchblättern oder Herunterladen
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1">
                  <a
                    href={pdfUrl}
                    download="Fotodokumentation_Waldmedizin_Weberstedt.pdf"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest hover:bg-leaf text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    <Download size={17} />
                    Als PDF herunterladen
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-sage/15 text-forest border border-forest/20 font-medium text-xs sm:text-sm transition-colors"
                  >
                    <ExternalLink size={15} />
                    PDF im Browser öffnen
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Station Pills */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-bark mb-2.5">
                <BookOpen size={14} className="text-leaf" />
                <span>Stationen direkt auswählen (Folie {activeIndex + 1} von {slides.length}):</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                      activeIndex === idx
                        ? "bg-forest text-white border-forest shadow-sm"
                        : "bg-cream hover:bg-sage/20 text-earth border-sage/30"
                    }`}
                  >
                    <span className="opacity-70 mr-1">{idx + 1}.</span>
                    {slide.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Slide Stage */}
            <div className="relative rounded-2xl overflow-hidden bg-cream border border-sage/30 shadow-inner group">
              <div
                className="relative aspect-[16/9] w-full cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={`${basePath}/images/weberstedt-doku/${currentSlide.file}`}
                  alt={`Fotodokumentation Waldmedizin Weberstedt — Folie ${currentSlide.id}: ${currentSlide.title}`}
                  fill
                  className="object-contain bg-white transition-all duration-300"
                  priority={activeIndex === 0}
                />

                {/* Top-right Fullscreen Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-earth/75 hover:bg-earth text-white text-xs font-medium backdrop-blur-sm transition-all shadow-md"
                >
                  <Maximize2 size={14} />
                  <span className="hidden sm:inline">Vollbild</span>
                </button>

                {/* Left / Right Navigation Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Vorherige Folie"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-earth/70 hover:bg-forest text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Nächste Folie"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-earth/70 hover:bg-forest text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Slide Caption Bar */}
              <div className="bg-cream border-t border-sage/25 px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest mr-2">
                    Folie {currentSlide.id} / {slides.length}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-earth">
                    {currentSlide.title}
                  </span>
                  <span className="hidden md:inline text-sm text-bark ml-2">
                    — {currentSlide.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-bark">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-sage/20 border border-sage/30 font-medium transition-colors"
                  >
                    ← Zurück
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-sage/20 border border-sage/30 font-medium transition-colors"
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Filmstrip */}
            <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all ${
                    activeIndex === idx
                      ? "border-forest ring-2 ring-forest/30 scale-[1.03] shadow-md"
                      : "border-sage/30 opacity-70 hover:opacity-100 hover:border-leaf"
                  }`}
                  title={`Folie ${slide.id}: ${slide.title}`}
                >
                  <Image
                    src={`${basePath}/images/weberstedt-doku/${slide.file}`}
                    alt={slide.title}
                    fill
                    className="object-cover bg-white"
                  />
                  <span
                    className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-bold leading-none ${
                      activeIndex === idx ? "bg-forest text-white" : "bg-black/60 text-white"
                    }`}
                  >
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Maria's Closing Quote from Page 11 */}
            <div className="mt-8 bg-sage/10 border border-sage/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-4xl">
                <p className="text-bark italic text-sm sm:text-base leading-relaxed">
                  „Ein besonderes Wochenende erfuhren 11 Natur-Waldduft-begeisterte Menschen aus ganz
                  verschiedenen Bereichen. Den Waldduft und die Silviotherapie insbesondere eröffnete die
                  Kraft der Bäume und ihrer kostbaren ätherischen Öle. Die Verbindung von Duft, Klang und
                  Mischen setzte am Ende des Kurses persönliche Duftanker in Form von Massageölen,
                  Roll-Ons oder Splashs zum Mit-nach-Hause-Nehmen. Danke an die Kursteilnehmer, die mit
                  ihrem außerordentlichen Interesse zum Gelingen beitrugen!“
                </p>
                <p className="text-xs sm:text-sm font-bold text-forest">
                  — Maria M. Kettenring · Auszug aus der Abschlussfolie (Seite 11)
                </p>
              </div>
              <a
                href={pdfUrl}
                download="Fotodokumentation_Waldmedizin_Weberstedt.pdf"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest hover:bg-leaf text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <Download size={16} />
                PDF speichern
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[110] bg-earth/95 backdrop-blur-sm flex flex-col items-center justify-center p-3 sm:p-8 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between mb-3 text-white px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sage-light mr-2">
                Folie {currentSlide.id} / {slides.length}
              </span>
              <span className="text-sm sm:text-lg font-bold">{currentSlide.title}</span>
              <span className="hidden sm:inline text-sm text-white/75 ml-2">
                — {currentSlide.subtitle}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                download="Fotodokumentation_Waldmedizin_Weberstedt.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest hover:bg-leaf text-white text-xs font-semibold transition-colors"
              >
                <Download size={14} />
                <span className="hidden sm:inline">PDF herunterladen</span>
              </a>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Schließen"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Main Slide in Lightbox */}
          <div
            className="relative w-full max-w-6xl aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`${basePath}/images/weberstedt-doku/${currentSlide.file}`}
              alt={`Folie ${currentSlide.id}: ${currentSlide.title}`}
              fill
              className="object-contain"
              priority
            />

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Vorherige Folie"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-earth/75 hover:bg-forest text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Nächste Folie"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-earth/75 hover:bg-forest text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <ChevronRight size={26} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
