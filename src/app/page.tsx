import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, TreePine, Calendar, Sparkles, Leaf, Quote } from "lucide-react";

const books = [
  {
    title: "Waldmedizin",
    subtitle: "Die Heilkraft der ätherischen Baumöle",
    coAuthor: "mit Anusati Thumm",
    description: "15 Baumöle und 108 Rezepte für Gesundheit und Wohlbefinden aus dem Wald.",
    color: "bg-forest/10",
  },
  {
    title: "Zitrusdüfte",
    subtitle: "Die Heilkraft der ätherischen Zitrusöle",
    coAuthor: "mit Anusati Thumm",
    description: "14 ätherische Zitrusöle und ihre vielfältigen Anwendungen für Körper und Seele.",
    color: "bg-[#f59e0b]/10",
  },
  {
    title: "Hausapotheke Ätherische Öle",
    subtitle: "Schnelle Hilfe für jeden Tag",
    coAuthor: "",
    description: "Praktische Tipps und Rezepte für die tägliche Anwendung ätherischer Öle.",
    color: "bg-sage/15",
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
            src="/hero-forest.png"
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

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/aromatherapy.png"
                alt="Ätherische Öle und Aromatherapie"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-forest text-white p-6 rounded-2xl shadow-lg hidden md:block">
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

      {/* ═══════════ BOOKS ═══════════ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Publikationen</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bücher von Maria M. Kettenring
            </h2>
            <p className="text-bark text-lg">
              Praxisnahe Ratgeber mit über 300 Rezepten für die tägliche Anwendung ätherischer Öle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <div key={i} className="card p-8">
                <div className={`w-14 h-14 rounded-2xl ${book.color} flex items-center justify-center mb-6`}>
                  <BookOpen size={24} className="text-forest" />
                </div>
                <h3 className="text-xl font-bold text-earth mb-1">{book.title}</h3>
                <p className="text-sm text-leaf font-medium mb-3">{book.subtitle}</p>
                {book.coAuthor && (
                  <p className="text-xs text-soft-grey mb-3">{book.coAuthor}</p>
                )}
                <p className="text-bark text-sm leading-relaxed">{book.description}</p>
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
          <Image src="/hero-forest.png" alt="" fill className="object-cover" />
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
          <Image src="/waldbaden.png" alt="Waldbaden Szene" fill className="object-cover" />
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

      {/* ═══════════ CONTACT CTA ═══════════ */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-3xl mx-auto text-center">
          <Leaf size={32} className="text-leaf mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Haben Sie Fragen?
          </h2>
          <p className="text-bark text-lg mb-8 max-w-lg mx-auto">
            Ob Buchungen für Seminare, Vortragsanfragen oder allgemeine Fragen — Maria freut sich auf Ihre Nachricht.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
