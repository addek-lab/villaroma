import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bücher | Villaroma — Maria M. Kettenring",
  description: "Entdecken Sie die Fachbücher von Maria M. Kettenring über ätherische Öle, Waldmedizin, Aromaküche und mehr.",
};

const books = [
  {
    title: "Natur-Resilienz",
    subtitle: "Finde deine innere Balance mit der Kraft der Natur",
    coAuthor: "mit Jasmin Schlimm-Thierjung",
    publisher: "Mankau Verlag",
    description:
      "Das neueste Werk verbindet die heilsame Kraft der Natur mit praktischen Übungen zur Stärkung der inneren Widerstandskraft. Erfahren Sie, wie Sie durch achtsame Naturerfahrungen, ätherische Öle und Waldbaden-Techniken Ihre Resilienz nachhaltig aufbauen können.",
    cover: "/buch-naturresilienz.webp",
    year: "Frühjahr 2026",
    badge: "Neu",
    featured: true,
  },
  {
    title: "Waldmedizin",
    subtitle: "Die Heilkraft der ätherischen Baumöle",
    coAuthor: "mit Anusati Thumm",
    publisher: "Joy Verlag",
    description:
      "Waldmedizin verbindet die positiven Effekte des Waldbadens (Shinrin-Yoku) mit der therapeutischen Anwendung ätherischer Baumöle. 15 detailliert beschriebene Baumöle und über 100 Rezepturen — von Aromatherapie bei Erkältungen und Gelenkbeschwerden bis zu Naturtherapieübungen.",
    cover: "/buch-waldmedizin.jpg",
    year: "2019",
    featured: false,
  },
  {
    title: "Zitrusdüfte",
    subtitle: "Die Heilkraft der ätherischen Öle von Orange, Zitrone, Limette & Co.",
    coAuthor: "mit Anusati Thumm",
    publisher: "Joy Verlag",
    description:
      "Ein umfassendes Kompendium über 14 ätherische Zitrusöle und ihre vielfältigen Anwendungen. 150 Rezepturen für Körper und Psyche — von der Aromapflege bis zur Duftküche.",
    cover: "/buch-zitrusduefte.jpg",
    year: "2018",
    featured: false,
  },
  {
    title: "Ätherische Öle in der Erkältungszeit",
    subtitle: "Schnelle Hilfe bei Husten, Schnupfen und grippalen Infekten",
    coAuthor: "mit Anusati Thumm",
    publisher: "Ulmer Verlag",
    description:
      "Natürliche Heilmittel für die kalte Jahreszeit. Immunstärkend, schützend, heilend — bewährte Rezepte und Anwendungen mit ätherischen Ölen gegen Erkältungssymptome.",
    cover: "/buch-erkaeltungszeit.webp",
    year: "2020",
    featured: false,
  },
  {
    title: "Hausapotheke Ätherische Öle",
    subtitle: "Schnelle Hilfe für jeden Tag",
    coAuthor: "",
    publisher: "Joy Verlag",
    description:
      "Der praktische Begleiter für den Alltag. Übersichtlich und anwendungsorientiert erklärt Maria die wichtigsten ätherischen Öle und ihre Einsatzmöglichkeiten in der Hausapotheke.",
    cover: "/buch-hausapotheke.jpg",
    year: "2016",
    featured: false,
  },
  {
    title: "Duftküche",
    subtitle: "80 Vitalrezepte mit ätherischen Ölen",
    coAuthor: "",
    publisher: "",
    description:
      "Marias kulinarisches Meisterwerk: 80 kreative Rezepte, die zeigen, wie ätherische Öle und Essenzen die Küche bereichern. Ein Buch für Genießer und Gesundheitsbewusste.",
    year: "2012",
    featured: false,
  },
];

export default function BuecherPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Publikationen</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 wave-divider">
              Bücher & Ratgeber
            </h1>
            <p className="text-bark text-lg leading-relaxed">
              Maria M. Kettenring hat zahlreiche praxisnahe Fachbücher über ätherische Öle,
              Waldmedizin und Aromaküche veröffentlicht. Jedes Buch verbindet wissenschaftliches
              Fachwissen mit leicht umsetzbaren Rezepten und Anleitungen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Book: Natur-Resilienz */}
      <section className="section-padding !pt-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-cream rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ring-2 ring-forest/10">
            <div className="flex justify-center">
              <div className="relative w-[240px] sm:w-[280px] drop-shadow-2xl">
                <Image
                  src="/buch-naturresilienz.webp"
                  alt="Natur-Resilienz — Buchcover"
                  width={400}
                  height={560}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-forest text-white text-xs font-bold mb-4 uppercase tracking-wider">
                Neuerscheinung 2026
              </span>
              <h2 className="text-3xl font-bold mb-2">Natur-Resilienz</h2>
              <p className="text-leaf font-semibold mb-1">Finde deine innere Balance mit der Kraft der Natur</p>
              <p className="text-sm text-soft-grey mb-4">Maria M. Kettenring & Jasmin Schlimm-Thierjung · Mankau Verlag</p>
              <p className="text-bark leading-relaxed mb-6">
                Das neueste Werk verbindet die heilsame Kraft der Natur mit praktischen Übungen zur Stärkung
                der inneren Widerstandskraft. Erfahren Sie, wie Sie durch achtsame Naturerfahrungen und
                Waldbaden-Techniken Ihre Resilienz nachhaltig aufbauen können.
              </p>
              <Link href="/kontakt" className="btn-primary text-sm">
                <ExternalLink size={16} /> Anfrage senden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="section-padding !pt-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">Weitere Bücher</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.filter(b => !b.featured).map((book, i) => (
              <div key={i} className="card overflow-hidden">
                {book.cover ? (
                  <div className="relative aspect-[3/4] bg-cream">
                    <Image
                      src={book.cover}
                      alt={`${book.title} — Buchcover`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-cream-dark flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-earth mb-1">{book.title}</h3>
                  <p className="text-sm text-leaf font-medium mb-1">{book.subtitle}</p>
                  {book.coAuthor && <p className="text-xs text-soft-grey mb-2">{book.coAuthor}</p>}
                  {book.publisher && <p className="text-xs text-soft-grey mb-3">{book.publisher} · {book.year}</p>}
                  <p className="text-bark text-sm leading-relaxed">{book.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-cream-dark rounded-2xl text-center">
            <h3 className="text-xl font-bold text-earth mb-2">Bücher bestellen</h3>
            <p className="text-bark text-sm max-w-md mx-auto mb-6">
              Alle Bücher von Maria M. Kettenring sind im Buchhandel und online erhältlich.
            </p>
            <Link href="/kontakt" className="btn-primary text-sm">
              <ExternalLink size={16} /> Anfrage senden
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
