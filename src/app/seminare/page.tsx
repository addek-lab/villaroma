import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ExternalLink, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { events } from "@/data/seminare";

export const metadata: Metadata = {
    title: "Seminare & Webinare | Villaroma — Maria M. Kettenring",
    description: "Kommende Seminare, Workshops und Webinare zu Aromatherapie, Waldmedizin und Waldbaden mit Maria M. Kettenring.",
};

export default function SeminarePage() {
    return (
        <div className="pt-20">
            {/* ═══════════ HERO SECTION ═══════════ */}
            <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/seminare/seminar_waldbaden_1773246243999.png`}
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
                        Erleben Sie die faszinierende Welt der ätherischen Öle und Waldmedizin in praxisnahen Seminaren und Exkursionen mit Maria M. Kettenring.
                    </p>
                </div>
            </section>

            {/* Events List */}
            <section className="section-padding bg-sage/5">
                <div className="max-w-5xl mx-auto">
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
                                        
                                        <div className="mt-6 flex flex-wrap items-center justify-end border-t border-sage/20 pt-4 gap-4">
                                            <Link 
                                                href={event.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-2 bg-leaf hover:bg-forest text-white font-medium text-sm rounded-full transition-colors shadow-sm"
                                            >
                                                Zur Anmeldung (extern)
                                                <ExternalLink size={14} />
                                            </Link>
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
