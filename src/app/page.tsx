import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, TreePine, Calendar, Sparkles, Quote, ExternalLink, Mic, Newspaper } from "lucide-react";
import RosenfestGallery from "../components/RosenfestGallery";

const books = [
  {
    title: "Waldmedizin",
    subtitle: "Die Heilkraft der ätherischen Baumöle",
    coAuthor: "mit Anusati Thumm",
    description: "15 Baumöle und 108 Rezepte für Gesundheit und Wohlbefinden aus dem Wald.",
    cover: "/buch-waldmedizin-new.webp",
  },
  {
    title: "Zitrusdüfte",
    subtitle: "Die Heilkraft der ätherischen Zitrusöle",
    coAuthor: "mit Anusati Thumm",
    description: "14 ätherische Zitrusöle und 150 Rezepturen für Körper und Psyche.",
    cover: "/buch-zitrusduefte-v2-final.webp",
  },
  {
    title: "Hausapotheke Ätherische Öle",
    subtitle: "Schnelle Hilfe für jeden Tag",
    coAuthor: "",
    description: "Praktische Tipps und Rezepte für die tägliche Anwendung ätherischer Öle.",
    cover: "/buch-hausapotheke-new.webp",
  },
];

const seminare = [

  {
    title: "Waldbaden und Naturresilienz",
    location: "Oy-Mittelberg",
    date: "10.07.2026",
    type: "Workshop",
    description: "Eintauchen in die Natur zur Stärkung der inneren Balance und Resilienz.",
    link: "https://akademie.primaveralife.com/de/de-DE/Details/1139",
    badgeRight: "Wenige Restplätze verfügbar",
    image: "/seminare/seminar_waldbaden_1773246243999.png",
  },
  {
    title: "Zitrusdüfte - Lieblinge für die Psyche",
    location: "Oy-Mittelberg",
    date: "11.07.2026",
    type: "Seminar",
    description: "Die wertvollen Zitrusdüfte sind wahre Seelenstreichler. Lerne, wie du Splashs und Massageöle zur Unterstützung bei Stress kreierst.",
    link: "https://akademie.primaveralife.com/de/de-DE/Details/1186",
    badgeRight: "Wenige Restplätze verfügbar",
    image: "/seminare/seminar_zitrusduefte_1774344123867.png",
  },

  {
    title: "Vortrag: Resilient durch Naturmethoden",
    location: "Weberstedt (Thüringen)",
    date: "13.09.2026, 15:45 – 16:45 Uhr",
    type: "Vortrag",
    description: "Maria M. Kettenring und Jasmin Schlimm-Thierjung stellen ihr gemeinsames Buch 'Natur-Resilienz' vor — wie Waldbaden und ätherische Öle die innere Widerstandskraft stärken.",
    link: "https://waldbaden-akademie.com/kongresse/",
    image: "/seminare/kongress-waldbaden-2026.webp",
  },
  {
    title: "Waldbaden und Resilienz aus der Natur",
    location: "St. Ulrich (AT)",
    date: "18. – 19.09.2026",
    type: "Seminar",
    description: "Der Kurs Waldbaden und Naturresilienz in St. Ulrich kann aufgrund noch nicht abgeschlossener Baumaßnahmen dieses Jahr leider nicht stattfinden. Er wird jedoch im September 2027 wieder stattfinden.",
    link: "https://akademie.primaveralife.com/de/de-DE/Details/1188",
    badgeRight: "Fällt aus",
    image: "/seminare/seminar_waldbaden_1773246243999.png",
  },
  {
    title: "Duftwerkstatt - gekonnt mischen",
    location: "Oy-Mittelberg",
    date: "17. – 18.10.2026",
    type: "Workshop",
    description: "Kombiniere ätherische Blüten-, Kräuter-, Wurzel- und Zitrusöle mithilfe gezielter Riechübungen zu individuellen Körperölen und Naturparfums.",
    link: "https://akademie.primaveralife.com/de/de-DE/Details/1099",
    image: "/seminare/seminar_aromadesign_1773246292011.png",
  },
];

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-new.webp`}
            alt="Blühendes Lavendelfeld im Sonnenlicht"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth/80 via-earth/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sage-light mb-6 animate-fade-in-up">
              <Sparkles size={18} />
              <span className="text-sm font-medium uppercase tracking-widest text-white drop-shadow-md">Maria M. Kettenring</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100 drop-shadow-md">
              <span style={{color: "#c4a6e8"}}>Sinnliche</span> <span style={{color: "#dcc8f0"}}>Naturerlebnisse</span>
              <br />
              <span className="text-white">&amp; Wohlbefinden</span>
            </h1>
            
            <p className="text-white/95 font-medium text-lg sm:text-xl max-w-lg mb-10 leading-relaxed animate-fade-in-up delay-200 drop-shadow-md">
              Willkommen im Villaroma. Entdecken Sie die harmonische Verbindung von Aromatherapie, 
              achtsamem Waldbaden und der heilenden Kraft der Düfte aus über 40 Jahren Erfahrung.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="/ueber-mich" className="btn-primary !bg-white !text-forest hover:!bg-sage-light shadow-lg">
                Über Villaroma <ArrowRight size={18} />
              </Link>
              <Link href="/impressionen" className="btn-outline !text-white !border-white hover:!bg-white/20 shadow-md">
                Inspiration finden
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
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/buch-naturresilienz.webp`}
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
                Das neueste werk von Maria M. Kettenring verbindet die heilsame Kraft der Natur
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/maria.webp`}
                alt="Maria M. Kettenring"
                fill
                className="object-cover rounded-3xl"
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
              Maria M. Kettenring ist seit vier Jahrzehnten eine anerkannte Aromaexpertin, Autorin und &raquo;Duftbotschafterin&laquo; mit tiefgreifendem Wissen und umfangreicher Praxiserfahrung in Aromatherapie.
            </p>
            <p className="text-bark leading-relaxed mb-8">
              Seit Mitte der 1980er-Jahre hat sie die Aroma- und Duftküche entwickelt. Als ausgebildete Trainerin für Waldbaden und Natur-Resilienz teilt sie ihre Leidenschaft für die Heilkraft ätherischer Öle und die Balance mit und in der Natur.
            </p>
            <Link href="/ueber-mich" className="btn-outline">
              Mehr erfahren <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ PRIMAVERA 40 JAHRE RÜCKBLICK ═══════════ */}
      <section className="section-padding bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10">
            {/* Main Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/40Jahre_Primavera.png`}
                alt="Primavera 40 Jahre Jubiläum"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Retrospective Text */}
            <div className="text-center max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Rückblick</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-earth">
                Ein wundervolles Rosenfest 2026
              </h2>
              <p className="text-bark text-lg leading-relaxed mb-6">
                Was für ein unvergessliches Wochenende! Das PRIMAVERA Rosenfest in Oy-Mittelberg war erfüllt von wundervollen Begegnungen, inspirierenden Gesprächen und einer durchweg herzlichen Atmosphäre. Es war eine Freude, gemeinsam mit so vielen Duftbegeisterten die Welt der Aromatherapie und Pflanzenkräfte zu feiern.
              </p>
              <p className="text-bark text-lg leading-relaxed mb-10">
                Ein riesiges Dankeschön an Ute und Kurt, das großartige Organisationsteam von PRIMAVERA und natürlich an alle Gäste, die dieses Jubiläum so besonders gemacht haben. Die wundervollen Eindrücke werden uns noch lange begleiten und nähren!
              </p>
            </div>

            {/* Impressionen Gallery */}
            <RosenfestGallery />
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

          {/* — Bevorstehende Termine — */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={20} className="text-forest shrink-0" />
              <h3 className="text-lg font-bold text-earth whitespace-nowrap">Bevorstehende Termine</h3>
              <div className="flex-1 h-px bg-forest/15" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seminare.map((event, i) => (
                <div key={i} className="card p-6 flex flex-col relative overflow-hidden">
                  {event.image && (
                    <div className="absolute top-4 right-4 w-14 h-14 rounded-xl overflow-hidden shadow border-2 border-white/80">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${event.image}`}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4 pr-16">
                    <span className="px-3 py-1 rounded-full bg-sage/20 text-forest text-xs font-bold">{event.type}</span>
                    <span className="text-xs text-soft-grey ml-auto">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-earth mb-2 pr-16">{event.title}</h3>
                  {event.badgeRight && (
                    <span className="inline-block mb-3 px-2 py-0.5 rounded bg-amber-600/95 text-white text-[10px] font-bold uppercase tracking-widest w-fit shadow-sm">
                      {event.badgeRight}
                    </span>
                  )}
                  <p className="text-bark text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-forest/5">
                    <span className="text-xs text-bark flex items-center gap-1">
                      <TreePine size={12} className="text-leaf" /> {event.location}
                    </span>
                    <a href={event.link} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                      Anmelden <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/seminare" className="btn-outline">
                Alle Termine ansehen <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* — Presse & Medien — */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Newspaper size={20} className="text-forest shrink-0" />
              <h3 className="text-lg font-bold text-earth whitespace-nowrap">Presse &amp; Medien</h3>
              <div className="flex-1 h-px bg-forest/15" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bewusster Leben Artikel */}
              <div className="card p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                  <Newspaper size={22} className="text-forest" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Artikel</span>
                  <h3 className="text-base font-bold text-earth mb-1">Zeitschrift Bewusster Leben (Mai 2026) — Natur-Resilienz</h3>
                  <p className="text-bark text-sm leading-relaxed mb-3">
                    Ein ausführlicher Beitrag aus der Mai-Ausgabe 2026 über die heilende Kraft der Natur. Erfahren Sie, wie Waldmedizin und Waldbaden helfen, innere Widerstandskräfte im Alltag aufzubauen.
                  </p>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/presse/Bewusster_Leben_Naturresilienz.pdf`} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                    PDF ansehen <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              {/* Interview Aromaris */}
              <div className="card p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                  <BookOpen size={22} className="text-forest" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Interview</span>
                  <h3 className="text-base font-bold text-earth mb-1">Aromaris — Zitrusdüfte im Gespräch</h3>
                  <p className="text-bark text-sm leading-relaxed mb-3">
                    Maria M. Kettenring über die Heilkraft der Zitrusöle: Bergamotte, Zitrone & Co. und ihre Wirkung auf Körper und Psyche.
                  </p>
                  <a href="https://www.aromaris.de/zitrusduefte-interview-mit-maria-kettenring/" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                    Zum Interview <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Mankau Verlag Interview */}
              <div className="card p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                  <BookOpen size={22} className="text-forest" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Interview</span>
                  <h3 className="text-base font-bold text-earth mb-1">Mankau Verlag — Natur-Resilienz im Gespräch</h3>
                  <p className="text-bark text-sm leading-relaxed mb-3">
                    Maria M. Kettenring und Jasmin Schlimm-Thierjung im Autorinnen-Interview über ihr gemeinsames Buch „Natur-Resilienz".
                  </p>
                  <a href="https://mankau-verlag.de/blogs/autoren-interviews/natur-resilienz-kettenring-schlimm-thierjung" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                    Zum Interview <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* PR-Netz */}
              <div className="card p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                  <Newspaper size={22} className="text-forest" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Presse</span>
                  <h3 className="text-base font-bold text-earth mb-1">PR-Netz — Wohlfühlen in der Natur</h3>
                  <p className="text-bark text-sm leading-relaxed mb-3">
                    Die besten Tipps für Körper und Geist: Naturerlebnisse, ätherische Öle und achtsame Bewegung für mehr Wohlbefinden im Alltag.
                  </p>
                  <a href="https://www.pr-netz.de/80239/wohlfuehlen-in-der-natur-die-besten-tipps-fuer-koerper-und-geist/" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-forest font-medium flex items-center gap-1 hover:text-leaf transition-colors">
                    Zum Artikel <ExternalLink size={12} />
                  </a>
                </div>
              </div>

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

              {/* Presse Brigitte */}
              <div className="card p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                  <Newspaper size={22} className="text-forest" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-bold mb-2 inline-block">Presse</span>
                  <h3 className="text-base font-bold text-earth mb-1">Brigitte Magazin — Aromatherapie &amp; Waldmedizin</h3>
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${book.cover}`}
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
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-forest.webp`} alt="" fill className="object-cover" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/waldbaden.webp`} alt="Waldbaden Szene" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-earth/90 via-earth/70 to-earth/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-xl ml-auto text-right">
            <span className="text-sm font-semibold uppercase tracking-widest text-white mb-4 block drop-shadow">Shinrin-Yoku</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{textShadow: "0 0 30px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.5), 2px 2px 0 rgba(255,255,255,0.5), -2px -2px 0 rgba(255,255,255,0.5), 2px -2px 0 rgba(255,255,255,0.5), -2px 2px 0 rgba(255,255,255,0.5)"}}>
              Die Kunst des Waldbadens
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8 drop-shadow">
              Tauchen Sie ein in die beruhigende Atmosphäre des Waldes. Waldbaden stärkt das
              Immunsystem, senkt den Blutdruck und bringt Körper und Geist in Einklang.
            </p>
            <Link href="/waldbaden" className="btn-primary">
               Mehr über Waldbaden <Sparkles size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
