import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seminare & Webinare | Villaroma — Maria M. Kettenring",
    description: "Kommende Seminare, Workshops und Webinare zu Aromatherapie, Waldmedizin und Waldbaden mit Maria M. Kettenring.",
};

export type CalendarEvent = {
    title: string;
    description: string;
    location: string;
    date: string;
    duration: string;
    type: string;
    featured: boolean;
    image: string;
};

const events: CalendarEvent[] = [
    {
        title: "Waldbaden und Naturresilienz",
        description: "Ein immersives Seminar, das Waldbaden-Techniken mit Natur-Resilienz-Übungen verbindet. Stärken Sie Ihre körperliche und mentale Widerstandskraft durch achtsame Naturerfahrungen.",
        location: "Oy-Mittelberg, Allgäu",
        date: "18.–19. April 2026",
        duration: "2 Tage",
        type: "Seminar",
        featured: true,
        image: "/villaroma/seminare/seminar_waldbaden_1773246243999.png",
    },
    {
        title: "Waldmedizin — Die Heilkraft der Baumöle",
        description: "Vortrag über die therapeutischen Eigenschaften ätherischer Baumöle und ihre praktische Anwendung in der Aromatherapie. Mit Live-Demonstrationen und Rezeptbeispielen.",
        location: "Frankfurt am Main",
        date: "12. Juni 2026",
        duration: "3 Stunden",
        type: "Vortrag",
        featured: false,
        image: "/villaroma/seminare/seminar_baumoele_1773246261672.png",
    },
    {
        title: "Ätherische Öle — Grundlagen & Praxis",
        description: "Umfassendes Webinar für Einsteiger und Fortgeschrittene. Lernen Sie die wichtigsten ätherischen Öle kennen, ihre Wirkweisen und sichere Anwendungsmethoden.",
        location: "Online (Zoom)",
        date: "Laufend",
        duration: "2 Stunden",
        type: "Webinar",
        featured: false,
        image: "/villaroma/seminare/seminar_grundlagen_1773246276783.png",
    },
    {
        title: "Aromadesign — Die Kunst des natürlichen Parfums",
        description: "Workshop zur Kreation individueller Naturparfums. Meistern Sie die Kunst der Duftkomposition mit hochwertigen ätherischen Ölen.",
        location: "Auf Anfrage",
        date: "Auf Anfrage",
        duration: "Ganztägig",
        type: "Workshop",
        featured: false,
        image: "/villaroma/seminare/seminar_aromadesign_1773246292011.png",
    },
    {
        title: "Duft- und Studienreise",
        description: "Internationale Reise zu den Ursprüngen ätherischer Öle. Besuchen Sie Destillerien, Lavendelfelder und lernen Sie direkt von Erzeugern.",
        location: "International",
        date: "Auf Anfrage",
        duration: "Mehrere Tage",
        type: "Studienreise",
        featured: false,
        image: "/villaroma/seminare/seminar_studienreise_1773246309283.png",
    },
];

export default function SeminarePage() {
    return (
        <div className="pt-20">
            {/* ═══════════ HERO SECTION ═══════════ */}
            <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/villaroma/seminare/seminar_waldbaden_1773246243999.png"
                        alt="Seminare Hero"
                        fill
                        className="object-cover object-[center_30%]"
                        priority
                    />
                    <div className="absolute inset-0 bg-forest/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm border border-white/30">
                        Wissen & Erfahrung
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
                        Seminare & Webinare
                    </h1>
                    <p className="text-xl text-cream md:text-2xl font-light text-shadow-sm max-w-2xl mx-auto">
                        Erleben Sie die faszinierende Welt der ätherischen Öle und Waldmedizin in praxisnahen Seminaren und Vorträgen.
                    </p>
                </div>
            </section>

            {/* Events List */}
            <section className="section-padding bg-sage/5">
                <div className="max-w-5xl mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-8 block text-center">
                        Alle Veranstaltungen
                    </span>
                    <div className="space-y-8">
                        {events.map((event, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`card overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-xl ${event.featured ? "ring-2 ring-forest/30 bg-white" : "bg-white"}`}
                                >
                                    <div className="w-full md:w-64 h-48 md:h-auto relative shrink-0">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {event.featured && (
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-block px-3 py-1 rounded-full bg-forest text-white text-xs font-bold shadow-md">
                                                    Empfohlen
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-center">
                                        <h2 className="text-2xl font-bold text-earth mb-3">{event.title}</h2>
                                        <p className="text-bark leading-relaxed mb-6">{event.description}</p>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-earth">
                                            <span className="flex items-center gap-1.5 bg-sage/20 px-3 py-1.5 rounded-full border border-sage/30">
                                                <MapPin size={14} className="text-forest" /> {event.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-sage/20 px-3 py-1.5 rounded-full border border-sage/30">
                                                <Calendar size={14} className="text-forest" /> {event.date}
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-sage/20 px-3 py-1.5 rounded-full border border-sage/30">
                                                <Clock size={14} className="text-forest" /> {event.duration}
                                            </span>
                                            <span className="px-3 py-1.5 rounded-full bg-leaf/10 text-leaf font-semibold border border-leaf/20 ml-auto">
                                                {event.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
