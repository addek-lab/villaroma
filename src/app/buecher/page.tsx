import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bücher | Villaroma — Maria M. Kettenring",
    description: "Entdecken Sie die Fachbücher von Maria M. Kettenring über ätherische Öle, Waldmedizin, Aromaküche und mehr.",
};

const books = [
    {
        title: "Waldmedizin",
        subtitle: "Die Heilkraft der ätherischen Baumöle",
        coAuthor: "mit Anusati Thumm",
        description:
            "Waldmedizin verbindet die positiven Effekte des Waldbadens (Shinrin-Yoku) mit der therapeutischen Anwendung ätherischer Baumöle. Das Buch enthält 15 detailliert beschriebene Baumöle und 108 Rezepte — von Aromatherapie bei Erkältungen, Gelenkbeschwerden, Schlafstörungen und Stress bis hin zu Naturtherapieübungen wie Atemübungen und Meditationen.",
        color: "border-l-forest",
        year: "2019",
    },
    {
        title: "Zitrusdüfte",
        subtitle: "Die Heilkraft der ätherischen Zitrusöle",
        coAuthor: "mit Anusati Thumm",
        description:
            "Ein umfassendes Kompendium über 14 ätherische Zitrusöle und ihre vielfältigen Anwendungen. Von Orange, Zitrone und Limette bis hin zu seltenen Zitrusarten — mit praktischen Rezepten für Gesundheit, Schönheit und Wohlbefinden.",
        color: "border-l-[#f59e0b]",
        year: "2018",
    },
    {
        title: "Ätherische Öle in der Erkältungszeit",
        subtitle: "Schnelle Hilfe bei Husten, Schnupfen und grippalen Infekten",
        coAuthor: "mit Anusati Thumm",
        description:
            "Natürliche Heilmittel für die kalte Jahreszeit. Dieses Buch bietet bewährte Rezepte und Anwendungen mit ätherischen Ölen gegen Erkältungssymptome, Husten und grippale Infekte.",
        color: "border-l-leaf",
        year: "2020",
    },
    {
        title: "Hausapotheke Ätherische Öle",
        subtitle: "Schnelle Hilfe für jeden Tag",
        description:
            "Der praktische Begleiter für den Alltag. Übersichtlich und anwendungsorientiert erklärt Maria die wichtigsten ätherischen Öle und ihre Einsatzmöglichkeiten in der Hausapotheke.",
        color: "border-l-sage",
        year: "2016",
    },
    {
        title: "Duftküche",
        subtitle: "80 Vitalrezepte mit ätherischen Ölen",
        description:
            "Maria M. Kettenrings kulinarisches Meisterwerk: 80 kreative Rezepte, die zeigen, wie ätherische Öle und Essenzen die Küche bereichern. Ein Buch für Genießer und Gesundheitsbewusste.",
        color: "border-l-bark",
        year: "2012",
    },
    {
        title: "Natur-Resilienz",
        subtitle: "Stärke durch die Kraft der Natur",
        description:
            "Das neueste Werk von Maria M. Kettenring über die Verbindung von Naturerfahrung und innerer Widerstandskraft. Mit praktischen Übungen für mehr Resilienz im Alltag.",
        color: "border-l-forest",
        year: "Frühjahr 2026",
        badge: "Neu",
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

            {/* Books Grid */}
            <section className="section-padding !pt-0 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-6">
                        {books.map((book, i) => (
                            <div key={i} className={`card p-8 border-l-4 ${book.color} flex flex-col md:flex-row gap-6 items-start`}>
                                <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center shrink-0">
                                    <BookOpen size={28} className="text-forest" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start gap-3 mb-2 flex-wrap">
                                        <h2 className="text-xl font-bold text-earth">{book.title}</h2>
                                        {book.badge && (
                                            <span className="px-3 py-1 rounded-full bg-forest text-white text-xs font-bold">{book.badge}</span>
                                        )}
                                    </div>
                                    <p className="text-leaf font-medium text-sm mb-1">{book.subtitle}</p>
                                    {book.coAuthor && <p className="text-soft-grey text-xs mb-3">{book.coAuthor}</p>}
                                    <p className="text-bark text-sm leading-relaxed mb-3">{book.description}</p>
                                    <div className="flex items-center gap-4 text-xs text-soft-grey">
                                        <span>Erscheinungsjahr: {book.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-cream-dark rounded-2xl text-center">
                        <BookOpen size={32} className="text-forest mx-auto mb-4" />
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
