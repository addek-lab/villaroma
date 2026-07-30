import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ExternalLink, ArrowRight } from "lucide-react";
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
    price: string;
    link: string;
    featured: boolean;
    badgeRight?: string;
    buttonText?: string;
    image: string;
};

const events: CalendarEvent[] = [


    {
        title: "Waldbaden und Naturresilienz",
        description: "Ätherische Öle von Bäumen, Wurzeln, Blüten und Kräutern bauen Stress ab und Widerstandskräfte auf. Du lernst kleine Naturresilienz- und Waldbaden-Übungen kennen, die Dich in die Atmosphäre des Waldes und in die Natur eintauchen lassen.",
        location: "Oy-Mittelberg",
        date: "10.07.2026",
        duration: "1 Tag",
        type: "Workshop",
        price: "25,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1139",
        featured: false,
        badgeRight: "Wenige Restplätze verfügbar",
        image: "/seminare/seminar_waldbaden_1773246243999.png",
    },
    {
        title: "Zitrusdüfte - Lieblinge für die Psyche",
        description: "Ein Tag voller Heiterkeit und guter Laune: Die wertvollen Zitrusdüfte sind wahre Seelenstreichler. Lerne, wie du Bergamotte, Yuzu und Neroli gezielt einsetzt, um Splashs, Roll-Ons und Massageöle zur Unterstützung bei Stress und Erschöpfung zu kreieren.",
        location: "Oy-Mittelberg",
        date: "11.07.2026",
        duration: "1 Tag",
        type: "Seminar",
        price: "188,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1186",
        featured: false,
        badgeRight: "Wenige Restplätze verfügbar",
        image: "/seminare/seminar_zitrusduefte_1774344123867.png",
    },

    {
        title: "Vortrag: Resilient durch Naturmethoden",
        description: "Maria M. Kettenring und Jasmin Schlimm-Thierjung präsentieren ihr gemeinsames Buch 'Natur-Resilienz' beim 8. Kongress für Waldbaden, Naturgesundheit & Naturerlebnisse. Im Vortrag zeigen sie, wie Waldbaden, ätherische Öle und achtsame Naturerfahrungen die innere Widerstandskraft stärken - praxisnah und wissenschaftlich fundiert.",
        location: "Weberstedt (Thüringen)",
        date: "13.09.2026, 15:45 – 16:45 Uhr",
        duration: "1 Stunde",
        type: "Vortrag",
        price: "",
        link: "https://waldbaden-akademie.com/kongresse/",
        featured: false,
        image: "/seminare/kongress-waldbaden-2026.webp",
    },
    {
        title: "Waldbaden und Resilienz aus der Natur",
        description: "Der Kurs Waldbaden und Naturresilienz in St. Ulrich kann aufgrund noch nicht abgeschlossener Baumaßnahmen dieses Jahr leider nicht stattfinden. Er wird jedoch im September 2027 wieder stattfinden.",
        location: "St. Ulrich (AT)",
        date: "18. – 19.09.2026",
        duration: "2 Tage",
        type: "Seminar",
        price: "268,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1188",
        featured: false,
        badgeRight: "Fällt aus",
        buttonText: "Anmeldung Alternativ",
        image: "/seminare/seminar_waldbaden_1773246243999.png",
    },
    {
        title: "Duftwerkstatt - gekonnt mischen",
        description: "Entdecke den Dreiklang der Düfte: Kombiniere ätherische Blüten-, Kräuter-, Wurzel- und Zitrusöle mithilfe gezielter Riechübungen zu individuellen Körperölen, Roll-Ons und Naturparfums. Tauche ein in die Geheimnisse natürlicher Düfte und lerne, wie du gelungene Wohlfühlmischungen kreierst und verfeinerst.",
        location: "Oy-Mittelberg",
        date: "17. – 18.10.2026",
        duration: "2 Tage",
        type: "Workshop",
        price: "268,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1099",
        featured: false,
        image: "/seminare/seminar_aromadesign_1773246292011.png",
    },

    {
        title: "PRIMAVERA Aromamassage",
        description: "Löse Verspannungen und stelle Deine innere Harmonie wieder her. In diesem Kurs erlernst Du einfache, aber wirkungsvolle Grifftechniken der Aromamassage wie Streichen, Dehnen und Kneten, um blockierte Energie wieder zum Fließen zu bringen und individuelle Verwöhnerlebnisse mit Bio Pflegeölen zu kreieren.",
        location: "Oy-Mittelberg",
        date: "13. – 15.11.2026",
        duration: "3 Tage",
        type: "Workshop",
        price: "398,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1145",
        featured: false,
        image: "/seminare/seminar_aromamassage_1774344139032.png",
    },

    {
        title: "Weihnachtsbäckerei",
        description: "Es duftet nach Punsch, Tannengrün und selbst gebackenen Plätzchen. Im Workshop lernst Du, wie Du für noch mehr Würze sorgst und Deine Liebsten mit außergewöhnlichen Geschenkideen aus der Duft- und Aromaküche überraschen kannst. Gemeinsam kreieren wir gesunde Gaumenfreuden für die Winterzeit, die im Gedächtnis bleiben.",
        location: "Wenzendorf (DE)",
        date: "28.11.2026",
        duration: "1 Tag",
        type: "Workshop",
        price: "168,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1185",
        featured: false,
        image: "/seminare/seminar_weihnachtsbaeckerei_1774344157206.png",
    }
];

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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md" style={{ color: "white" }}>
                        Seminare & Webinare
                    </h1>
                    <p className="text-xl text-cream md:text-2xl font-light text-shadow-sm max-w-2xl mx-auto">
                        Erleben Sie die faszinierende Welt der ätherischen Öle, Waldmedizin und NaturResilienz in praxisnahen Seminaren und Exkursionen mit Maria M. Kettenring.
                    </p>
                </div>
            </section>

      {/* ═══════════ PRIMAVERA 40 JAHRE ═══════════ */}
      <section className="section-padding bg-white pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/40Jahre_Primavera.png`}
                alt="Primavera 40 Jahre Jubiläum"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="bg-sage/10 text-earth px-6 py-3 rounded-xl border border-sage/30 shadow-sm inline-flex items-center gap-2">
                <Calendar size={18} className="text-forest shrink-0" />
                <span className="font-medium text-sm md:text-base">
                  <strong>Rosenfest:</strong> 27. und 28. Juni 2026 in Oy-Mittelberg
                </span>
              </div>
              <a 
                href="https://www.primaveralife.com/40-jahre-jubilaeum?srsltid=AfmBOook3P3Vdsf7yUvgq7nv0vSwnFZjbecLx85s8mjM2Rp6wErxmSvm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white hover:bg-leaf hover:scale-105 font-bold text-lg rounded-full transition-all shadow-md"
              >
                Zur Jubiläumsseite (extern) <ExternalLink size={20} />
              </a>
            </div>
          </div>
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
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${event.image}`}
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
                                        {event.badgeRight && (
                                            <div className="absolute top-3 right-3 max-w-[90%] z-10">
                                                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-600/95 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow border border-white/20 text-center">
                                                    {event.badgeRight}
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
                                                {event.buttonText || "Zur Anmeldung (extern)"}
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
