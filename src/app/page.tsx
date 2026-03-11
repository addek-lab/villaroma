import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, TreePine, Calendar, Sparkles, Leaf, Quote, ExternalLink, Mic, Newspaper } from "lucide-react";

const books = [
  {
    title: "Waldmedizin",
    subtitle: "Die Heilkraft der ätherischen Baumöle",
    coAuthor: "mit Anusati Thumm",
    description: "15 Baumöle und 108 Rezepte für Gesundheit und Wohlbefinden aus dem Wald.",
    cover: "/buch-waldmedizin.jpg",
  },
  {
    title: "Zitrusdüfte",
    subtitle: "Die Heilkraft der ätherischen Zitrusöle",
    coAuthor: "mit Anusati Thumm",
    description: "14 ätherische Zitrusöle und 150 Rezepturen für Körper und Psyche.",
    cover: "/buch-zitrusduefte.jpg",
  },
  {
    title: "Hausapotheke Ätherische Öle",
    subtitle: "Schnelle Hilfe für jeden Tag",
    coAuthor: "",
    description: "Praktische Tipps und Rezepte für die tägliche Anwendung ätherischer Öle.",
    cover: "/buch-hausapotheke.jpg",
  },
];

const seminare = [
  {
    title: "Waldbaden und Naturresilienz",
    location: "Oy-Mittelberg",
    date: "2026",
    type: "Seminar",
  },
  {
    title: "Waldmedizin — Die Heilkraft der Baumöle",
    location: "Frankfurt",
    date: "2026",
    type: "Vortrag",
  },
  {
    title: "Ätherische Öle — Grundlagen & Praxis",
    location: "Online",
    date: "Laufend",
    type: "Webinar",
  },
];

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-forest.webp"
            alt="Waldweg im Morgenlicht"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth/80 via-earth/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sage mb-6 animate-fade-in-up">
              <Leaf size={18} />
              <span className="text-sm font-medium uppercase tracking-widest">Maria M. Kettenring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
              Waldmedizin
              <br />
              <span className="text-sage-light">&amp; Waldbaden</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed animate-fade-in-up delay-200" style={{ opacity: 0 }}>
              Entdecken Sie die Heilkraft der Natur. Über 40 Jahre Erfahrung in
              Aromatherapie, ätherischen Ölen und der therapeutischen Kraft des Waldes.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
              <Link href="/buecher" className="btn-primary">
                Bücher entdecken <ArrowRight size={18} />
              </Link>
              <Link href="/seminare" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
                Seminare ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ NEW BOOK: NATUR-RESILIENZ (PROMINENT) ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[340px] drop-shadow-2xl">
                <Image
                  src="/buch-naturresilienz.webp"
                  alt="Natur-Resilienz — Maria M. Kettenring & Jasmin Schlimm-Thierjung"
                  width={400}
                  height={560}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Book Info */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-forest text-white text-xs font-bold mb-5 uppercase tracking-wider">
                Neuerscheinung 2026
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 wave-divider">
                Natur-Resilienz
              </h2>
              <p className="text-leaf font-semibold text-lg mb-2 mt-6">
                Finde deine innere Balance mit der Kraft der Natur
              </p>
              <p className="text-sm text-soft-grey mb-4">
                Maria M. Kettenring &amp; Jasmin Schlimm-Thierjung · Mankau Verlag
              </p>
              <p className="text-bark text-lg leading-relaxed mb-8">
                Das neueste Werk von Maria M. Kettenring verbindet die heilsame Kraft der Natur
                mit praktischen Übungen zur Stärkung der inneren Widerstandskraft. Erfahren Sie,
                wie Sie durch achtsame Naturerfahrungen, ätherische Öle und Waldbaden-Techniken
                Ihre Resilienz nachhaltig aufbauen können.
              </p>
              <Link href="/buecher" className="btn-primary">
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-[400px] mx-auto lg:mx-0">
              <Image
                src="/maria.jpg"
                alt="Maria M. Kettenring"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-forest text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold font-[family-name:var(--font-heading)]">40+</div>
              <div className="text-sm text-white/70">Jahre Erfahrung</div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Über Maria</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 wave-divider">
              Duftbotschafterin mit Leidenschaft
            </h2>
            <p className="text-bark text-lg leading-relaxed mb-4">
              Maria M. Kettenring ist seit über vier Jahrzehnten als Aromafachspezialistin, Ernährungsberaterin
              und Dozentin tätig. Als zertifizierte Trainerin für Waldbaden und Natur-Resilienz® verbindet sie
              die Kraft ätherischer Öle mit der heilsamen Wirkung des Waldes.
            </p>
            <p className="text-bark leading-relaxed mb-8">
              Seit 1989 leitet sie internationale Duft- und Studienreisen und hat zahlreiche Fachbücher
              über ätherische Öle, Waldmedizin und Aromaküche veröffentlicht. Sie ist Pionierin der Aromaküche
              in Deutschland.
            </p>
            <Link href="/ueber-mich" className="btn-outline">
              Mehr erfahren <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ AKTUELLES (NEWS) ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Neuigkeiten</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Aktuelles
            </h2>
            <p className="text-bark text-lg">
              Kommende Seminare, Presse und aktuelle Projekte von Maria M. Kettenring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Seminar: Detox und das Wilde Grün */}
            <div className="card p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sage/20 text-forest text-xs font-bold">Seminar</span>
                <span className="text-xs text-soft-grey ml-auto">11.–12. April 2025</span>
              </div>
              <h3 className="text-lg font-bold text-earth mb-2">Detox und das Wilde Grün</h3>
              <p className="text-bark text-sm leading-relaxed mb-4 flex-grow">
                Sammeln und Bestimmen von Wildkräutern, Zubereiten von Smoothies und Aromacocktails,
                Tipps für vegane Speisevariationen, Atemübungen und Pflegerituale.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-forest/5">
                <span className="text-xs text-bark flex items-center gap-1">
                  <TreePine size={12} className="text-leaf" /> Oy-Mittelberg
                </span>
                <a href="https://akademie.primaveralife.com/de/de-DE/Details/709" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                  Anmelden <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Seminar: Duftwerkstatt */}
            <div className="card p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sage/20 text-forest text-xs font-bold">Seminar</span>
                <span className="text-xs text-soft-grey ml-auto">09.–10. Mai 2025</span>
              </div>
              <h3 className="text-lg font-bold text-earth mb-2">Duftwerkstatt – gekonnt mischen</h3>
              <p className="text-bark text-sm leading-relaxed mb-4 flex-grow">
                Entdecke den Dreiklang der Düfte. Kombiniere und mische ätherische Blüten-, Kräuter-,
                Wurzel- und Zitrusöle mithilfe gezielter Riechübungen zu Körper- und Massageölen,
                Roll-Ons und Splash Colognes.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-forest/5">
                <span className="text-xs text-bark flex items-center gap-1">
                  <TreePine size={12} className="text-leaf" /> Oy-Mittelberg
                </span>
                <a href="https://akademie.primaveralife.com/de/de-DE/Details/826" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                  Anmelden <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Seminar: Lavendel */}
            <div className="card p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sage/20 text-forest text-xs font-bold">Seminar</span>
                <span className="text-xs text-soft-grey ml-auto">27.–28. Juni 2025</span>
              </div>
              <h3 className="text-lg font-bold text-earth mb-2">Lavendel – Blaues Wunder</h3>
              <p className="text-bark text-sm leading-relaxed mb-4 flex-grow">
                Gemeinsam Lavendel ernten, Duftsäckchen nähen, Destillation erleben.
                Ein sinnliches Wochenende rund um den Lavendel.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-forest/5">
                <span className="text-xs text-bark flex items-center gap-1">
                  <TreePine size={12} className="text-leaf" /> Oy-Mittelberg
                </span>
                <a href="https://akademie.primaveralife.com/de/de-DE/Details/708" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                  Anmelden <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Presse & Podcast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Podcast */}
            <div className="card p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                <Mic size={22} className="text-forest" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Podcast</span>
                <h3 className="text-base font-bold text-earth mb-1">Zu Gast beim Kindheits(t)räume Podcast</h3>
                <p className="text-bark text-sm leading-relaxed mb-3">
                  Maria im Gespräch mit Claudia Dippel über Aromatherapie, Naturverbundenheit und Kindheitserinnerungen.
                </p>
                <a href="https://anchor.fm/claudia-dippel/episodes/Interview-mit-Maria-Kettenring-e1d5h8s" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                  Anhören <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Presse */}
            <div className="card p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                <Newspaper size={22} className="text-forest" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Presse</span>
                <h3 className="text-base font-bold text-earth mb-1">Brigitte Magazin — Aromatherapie & Waldmedizin</h3>
                <p className="text-bark text-sm leading-relaxed mb-3">
                  Artikel über Aromatherapie und Waldmedizin mit Buchempfehlung „Waldmedizin" von Anusati Thumm und Maria M. Kettenring.
                </p>
                <a href="https://shop.brigitte.de/de_DE/einzelhefte/einzelausgaben/brigitte-26-2021/2055728.html" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                  Zum Artikel <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/seminare" className="btn-outline">
              Alle Termine ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ BOOKS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Publikationen</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bücher von Maria M. Kettenring
            </h2>
            <p className="text-bark text-lg">
              Praxisnahe Ratgeber mit hunderten Rezepten für die tägliche Anwendung ätherischer Öle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <div key={i} className="card p-0 overflow-hidden">
                <div className="relative aspect-[3/4] bg-cream">
                  <Image
                    src={book.cover}
                    alt={`${book.title} — Buchcover`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-earth mb-1">{book.title}</h3>
                  <p className="text-sm text-leaf font-medium mb-2">{book.subtitle}</p>
                  {book.coAuthor && (
                    <p className="text-xs text-soft-grey mb-3">{book.coAuthor}</p>
                  )}
                  <p className="text-bark text-sm leading-relaxed">{book.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/buecher" className="btn-outline">
              Alle Bücher ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ QUOTE BANNER ═══════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero-forest.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Quote size={48} className="text-sage/40 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-white leading-relaxed mb-6 italic">
            &ldquo;Im Wald finden wir Ruhe, Kraft und die ursprüngliche Heilkraft der Natur.&rdquo;
          </blockquote>
          <cite className="text-sage text-lg not-italic font-medium">— Maria M. Kettenring</cite>
        </div>
      </section>

      {/* ═══════════ SEMINARE TEASER ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Termine</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Seminare & Webinare
            </h2>
            <p className="text-bark text-lg">
              Erleben Sie die Welt der ätherischen Öle und Waldmedizin in Marias Seminaren und Vorträgen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seminare.map((event, i) => (
              <div key={i} className="card p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-sage/20 text-forest text-xs font-bold">{event.type}</span>
                </div>
                <h3 className="text-lg font-bold text-earth mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-bark mt-auto pt-4 border-t border-forest/5">
                  <span className="flex items-center gap-1">
                    <TreePine size={14} className="text-leaf" /> {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-leaf" /> {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/seminare" className="btn-primary">
              Alle Termine ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WALDBADEN CTA ═══════════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/waldbaden.webp" alt="Waldbaden Szene" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-earth/80 via-earth/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-xl ml-auto text-right">
            <span className="text-sm font-semibold uppercase tracking-widest text-sage mb-4 block">Shinrin-Yoku</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Die Kunst des Waldbadens
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Tauchen Sie ein in die beruhigende Atmosphäre des Waldes. Waldbaden stärkt das
              Immunsystem, senkt den Blutdruck und bringt Körper und Geist in Einklang.
            </p>
            <Link href="/waldbaden" className="btn-primary">
              <Sparkles size={18} /> Mehr über Waldbaden
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
