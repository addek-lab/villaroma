import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Users, Monitor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seminare & Webinare | Villaroma — Maria M. Kettenring",
    description: "Kommende Seminare, Workshops und Webinare zu Aromatherapie, Waldmedizin und Waldbaden mit Maria M. Kettenring.",
};

const events = [
    {
        title: "Waldbaden und Naturresilienz",
        description: "Ein immersives Seminar, das Waldbaden-Techniken mit Natur-Resilienz-Übungen verbindet. Stärken Sie Ihre körperliche und mentale Widerstandskraft durch achtsame Naturerfahrungen.",
        location: "Oy-Mittelberg, Allgäu",
        date: "Frühjahr 2026",
        duration: "2 Tage",
        type: "Seminar",
        icon: Users,
        featured: true,
    },
    {
        title: "Waldmedizin — Die Heilkraft der Baumöle",
        description: "Vortrag über die therapeutischen Eigenschaften ätherischer Baumöle und ihre praktische Anwendung in der Aromatherapie. Mit Live-Demonstrationen und Rezeptbeispielen.",
        location: "Frankfurt am Main",
        date: "2026",
        duration: "3 Stunden",
        type: "Vortrag",
        icon: Users,
        featured: false,
    },
    {
        title: "Ätherische Öle — Grundlagen & Praxis",
        description: "Umfassendes Webinar für Einsteiger und Fortgeschrittene. Lernen Sie die wichtigsten ätherischen Öle kennen, ihre Wirkweisen und sichere Anwendungsmethoden.",
        location: "Online (Zoom)",
        date: "Laufend",
        duration: "2 Stunden",
        type: "Webinar",
        icon: Monitor,
        featured: false,
    },
    {
        title: "Aromadesign — Die Kunst des natürlichen Parfums",
        description: "Workshop zur Kreation individueller Naturparfums. Meistern Sie die Kunst der Duftkomposition mit hochwertigen ätherischen Ölen.",
        location: "Auf Anfrage",
        date: "2026",
        duration: "Ganztägig",
        type: "Workshop",
        icon: Users,
        featured: false,
    },
    {
        title: "Duft- und Studienreise",
        description: "Internationale Reise zu den Ursprüngen ätherischer Öle. Besuchen Sie Destillerien, Lavendelfelder und lernen Sie direkt von Erzeugern.",
        location: "International",
        date: "Auf Anfrage",
        duration: "Mehrere Tage",
        type: "Studienreise",
        icon: Users,
        featured: false,
    },
];

export default function SeminarePage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Termine</span>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 wave-divider">
                            Seminare & Webinare
                        </h1>
                        <p className="text-bark text-lg leading-relaxed">
                            Erleben Sie die faszinierende Welt der ätherischen Öle und Waldmedizin in Marias
                            Seminaren, Vorträgen und Webinaren. Praxisnah, inspirierend und wissenschaftlich fundiert.
                        </p>
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="section-padding !pt-0 bg-white">
                <div className="max-w-7xl mx-auto space-y-6">
                    {events.map((event, i) => {
                        const Icon = event.icon;
                        return (
                            <div
                                key={i}
                                className={`card p-8 ${event.featured ? "ring-2 ring-forest/20 bg-cream/50" : ""}`}
                            >
                                {event.featured && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-forest text-white text-xs font-bold mb-4">
                                        Empfohlen
                                    </span>
                                )}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-sage/15 flex items-center justify-center shrink-0">
                                        <Icon size={24} className="text-forest" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-earth mb-2">{event.title}</h2>
                                        <p className="text-bark text-sm leading-relaxed mb-4">{event.description}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-xs text-bark">
                                            <span className="flex items-center gap-1.5 bg-cream px-3 py-1.5 rounded-full">
                                                <MapPin size={12} className="text-leaf" /> {event.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-cream px-3 py-1.5 rounded-full">
                                                <Calendar size={12} className="text-leaf" /> {event.date}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-cream px-3 py-1.5 rounded-full">
                                                <Clock size={12} className="text-leaf" /> {event.duration}
                                            </span>
                                            <span className="px-3 py-1.5 rounded-full bg-forest/5 text-forest font-semibold">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-cream-dark">
                <div className="max-w-3xl mx-auto text-center">
                    <Calendar size={32} className="text-forest mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Interesse an einem Seminar?</h2>
                    <p className="text-bark text-lg mb-8">
                        Kontaktieren Sie Maria direkt für Buchungsanfragen, individuelle Workshops oder Vortragseinladungen.
                    </p>
                    <Link href="/kontakt" className="btn-primary">
                        Anfrage senden <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
