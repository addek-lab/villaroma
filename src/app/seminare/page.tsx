import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Users, Monitor } from "lucide-react";
import type { Metadata } from "next";
import SeminarCalendar from "@/components/SeminarCalendar";
import type { CalendarEvent } from "@/components/SeminarCalendar";

export const metadata: Metadata = {
    title: "Seminare & Webinare | Villaroma — Maria M. Kettenring",
    description: "Kommende Seminare, Workshops und Webinare zu Aromatherapie, Waldmedizin und Waldbaden mit Maria M. Kettenring.",
};

// Icons mapped by event type (kept in server component, not passed to client)
const typeIcons: Record<string, typeof Users> = {
    Seminar: Users,
    Vortrag: Users,
    Webinar: Monitor,
    Workshop: Users,
    Studienreise: Users,
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
        startDate: "2026-04-18",
        endDate: "2026-04-19",
    },
    {
        title: "Waldmedizin — Die Heilkraft der Baumöle",
        description: "Vortrag über die therapeutischen Eigenschaften ätherischer Baumöle und ihre praktische Anwendung in der Aromatherapie. Mit Live-Demonstrationen und Rezeptbeispielen.",
        location: "Frankfurt am Main",
        date: "12. Juni 2026",
        duration: "3 Stunden",
        type: "Vortrag",
        featured: false,
        startDate: "2026-06-12",
    },
    {
        title: "Ätherische Öle — Grundlagen & Praxis",
        description: "Umfassendes Webinar für Einsteiger und Fortgeschrittene. Lernen Sie die wichtigsten ätherischen Öle kennen, ihre Wirkweisen und sichere Anwendungsmethoden.",
        location: "Online (Zoom)",
        date: "Laufend",
        duration: "2 Stunden",
        type: "Webinar",
        featured: false,
    },
    {
        title: "Aromadesign — Die Kunst des natürlichen Parfums",
        description: "Workshop zur Kreation individueller Naturparfums. Meistern Sie die Kunst der Duftkomposition mit hochwertigen ätherischen Ölen.",
        location: "Auf Anfrage",
        date: "Auf Anfrage",
        duration: "Ganztägig",
        type: "Workshop",
        featured: false,
    },
    {
        title: "Duft- und Studienreise",
        description: "Internationale Reise zu den Ursprüngen ätherischer Öle. Besuchen Sie Destillerien, Lavendelfelder und lernen Sie direkt von Erzeugern.",
        location: "International",
        date: "Auf Anfrage",
        duration: "Mehrere Tage",
        type: "Studienreise",
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

            {/* Calendar */}
            <SeminarCalendar events={events} />

            {/* Events List */}
            <section className="section-padding !pt-0 bg-white">
                <div className="max-w-7xl mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">
                        Alle Veranstaltungen
                    </span>
                    <div className="space-y-6">
                        {events.map((event, i) => {
                            const Icon = typeIcons[event.type] || Users;
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
                </div>
            </section>
        </div>
    );
}
