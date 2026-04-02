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
    image: string;
};

const events: CalendarEvent[] = [
    {
        title: "Detox und das \"wilde\" Grün",
        description: "Wildkräuter von der Haustür bis zum Gartenzaun: So beginnt unsere Entdeckungsreise. Gemeinsam sammeln wir Wildkräuter und Blüten für eine basische Kur mit Smoothies, Salaten, Fastensuppe, Tees, Easy-Fingerfood und Säften. Genieße Bewegung, Atemübungen und Selbstmassage.",
        location: "Oy-Mittelberg",
        date: "14. – 15.05.2026",
        duration: "2 Tage",
        type: "Seminar",
        price: "268,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1183",
        featured: true,
        image: "/villaroma/seminare/seminar_detox_gruen_1774344090956.png",
    },
    {
        title: "Waldbaden und Naturresilienz",
        description: "Ätherische Öle von Bäumen, Wurzeln, Blüten und Kräutern bauen Stress ab und Widerstandskräfte auf. Du lernst kleine Naturresilienz- und Waldbaden-Übungen kennen, die Dich in die Atmosphäre des Waldes und in die Natur eintauchen lassen.",
        location: "Oy-Mittelberg",
        date: "16.05.2026",
        duration: "1 Tag",
        type: "Kompaktkurs",
        price: "25,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1137",
        featured: false,
        image: "/villaroma/seminare/seminar_waldbaden_1773246243999.png",
    },
    {
        title: "Duftwerkstatt - gekonnt mischen",
        description: "Entdecke den Dreiklang der Düfte: Kombiniere ätherische Blüten-, Kräuter-, Wurzel- und Zitrusöle mithilfe gezielter Riechübungen zu individuellen Körperölen, Roll-Ons und Naturparfums. Tauche ein in die Geheimnisse natürlicher Düfte und lerne, wie du gelungene Wohlfühlmischungen kreierst und verfeinerst.",
        location: "Fulda (DE)",
        date: "30. – 31.05.2026",
        duration: "2 Tage",
        type: "Workshop",
        price: "268,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1098",
        featured: false,
        image: "/villaroma/seminare/seminar_aromadesign_1773246292011.png",
    },
    {
        title: "Exkursion zum Zirbenweg",
        description: "Erlebe den Zirbenweg am Patscherkofel in Tirol, einen panoramareichen Höhenweg durch einen der ältesten Zirbelkieferbestände Europas. Wir entdecken gemeinsam die Kraft der Baumöle, lernen botanische Besonderheiten kennen und stellen im Naturparadies eigene Aromapflegeprodukte her.",
        location: "Oy-Mittelberg",
        date: "08. – 09.06.2026",
        duration: "2 Tage",
        type: "Exkursion",
        price: "388,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1190",
        featured: false,
        image: "/villaroma/seminare/seminar_zirbenweg_1774344106703.png",
    },
    {
        title: "Waldbaden und Naturresilienz",
        description: "Ätherische Öle von Bäumen, Wurzeln, Blüten und Kräutern bauen Stress ab und Widerstandskräfte auf. Du lernst kleine Naturresilienz- und Waldbaden-Übungen kennen, die Dich in die Atmosphäre des Waldes und in die Natur eintauchen lassen.",
        location: "Oy-Mittelberg",
        date: "10.07.2026",
        duration: "1 Tag",
        type: "Kompaktkurs",
        price: "25,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1139",
        featured: false,
        image: "/villaroma/seminare/seminar_waldbaden_1773246243999.png",
    },
    {
        title: "Zitrusdüfte - Lieblinge für Psyche",
        description: "Ein Tag voller Heiterkeit und guter Laune: Die wertvollen Zitrusdüfte sind wahre Seelenstreichler. Lerne, wie du Bergamotte, Yuzu und Neroli gezielt einsetzt, um Splashs, Roll-Ons und Massageöle zur Unterstützung bei Stress und Erschöpfung zu kreieren.",
        location: "Oy-Mittelberg",
        date: "11.07.2026",
        duration: "1 Tag",
        type: "Seminar",
        price: "188,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1186",
        featured: false,
        image: "/villaroma/seminare/seminar_zitrusduefte_1774344123867.png",
    },
    {
        title: "Waldmedizin — Heilkraft der Baumöle",
        description: "Tauche ein in die Welt der Baumöle, Mythen und Märchen. Erfahre mehr über die heilende Kraft des Waldbadens und die vielfältigen Wirkungen ätherischer Nadelbaumöle wie Fichte, Tanne und Zirbe in der Aromatherapie.",
        location: "Frankfurt (DE)",
        date: "11. – 12.09.2026",
        duration: "2 Tage",
        type: "Vortrag",
        price: "348,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1188",
        featured: true,
        image: "/villaroma/seminare/seminar_baumoele_1773246261672.png",
    },
    {
        title: "Waldbaden und Resilienz",
        description: "In zauberhafter Umgebung mitten in der Natur beim Pillersee (Tirol) stärken wir unsere Ressourcen und Belastbarkeit. Mit den 7 Resilienzwurzeln, den passenden ätherischen Ölen der Bäume, Blüten und Wurzeln bauen wir Stress ab, nutzen Waldbaden (Shinrin Yoku) und Duft-Qi-Gong zur Selbstregulation mit Ankerdüften.",
        location: "St. Ulrich (AT)",
        date: "18. – 19.09.2026",
        duration: "2 Tage",
        type: "Seminar",
        price: "268,00 €",
        link: "https://akademie.primaveralife.com/de/de-DE/Details/1189",
        featured: false,
        image: "/villaroma/seminare/seminar_waldbaden_1773246243999.png",
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
        image: "/villaroma/seminare/seminar_aromadesign_1773246292011.png",
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
        image: "/villaroma/seminare/seminar_aromamassage_1774344139032.png",
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
        image: "/villaroma/seminare/seminar_weihnachtsbaeckerei_1774344157206.png",
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
