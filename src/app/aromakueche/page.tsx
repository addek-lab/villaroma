import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, BookOpen, Utensils, Heart, Sparkle, ChefHat, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aromaküche — Kochen mit ätherischen Ölen | Villaroma — Maria M. Kettenring",
    description: "Erleben Sie die Kunst der Aromaküche mit Maria M. Kettenring: Rezepte, Würzöle und 100% bio-zertifizierter Genuss in Kooperation mit Vegaroma.",
};

const focuses = [
    {
        icon: Utensils,
        title: "Kreative Würzöle & Vinaigrettes",
        desc: "Lernen Sie, wie Sie mit wenigen Tropfen ätherischer Öle wie Zitrone, Rosmarin oder Basilikum erstklassige Würzöle, Dressings und Pestos zaubern, die jedem Gericht eine besondere Note verleihen."
    },
    {
        icon: ChefHat,
        title: "Aroma-Backen & Desserts",
        desc: "Verfeinern Sie Kuchen, Plätzchen und Nachspeisen mit feinen Blütenwässern oder warmen Zitrusdüften wie Mandarine, Blutorange und Yuzu — perfekt abgestimmt für ein unvergleichliches Geschmackserlebnis."
    },
    {
        icon: Heart,
        title: "Gesundheit & Bekömmlichkeit",
        desc: "Die Aromaküche ist nicht nur ein Genuss, sondern unterstützt auch das Wohlbefinden. Ätherische Öle wie Fenchel, Ingwer oder Pfefferminze regen die Verdauung an und wirken wohltuend auf den Organismus."
    }
];

const cookingBooks = [
    {
        title: "Duftküche",
        subtitle: "80 Vitalrezepte mit ätherischen Ölen",
        description: "Das Standardwerk für den Einstieg in das Kochen mit ätherischen Ölen. Erfahren Sie, wie Sie mit naturreinen Essenzen aus Zitrone, Vanille, Pfeffer und Co. köstliche Würzöle, Pestos und Balsame herstellen.",
        cover: "/buch-duftkueche.jpg",
        highlights: [
            "Über 80 praxiserprobte Vitalrezepte",
            "Tipps zur Qualität und zum sicheren Umgang mit Ölen",
            "Gesundheitliche Aspekte der verschiedenen Essenzen"
        ],
        link: "/buecher"
    },
    {
        title: "Rosenküche",
        subtitle: "Feine Rezepte mit Blütenblättern und Essenzen",
        description: "Tauchen Sie ein in die sinnliche Welt der Rosenküche. Von erfrischenden Rosen-Aperitifs über blumige Salate bis hin zu feinen Desserts und Kuchen zeigt dieses liebevoll gestaltete Buch die besten Rezepte mit Blüten und Essenzen.",
        cover: "/buch-rosenkueche.jpg",
        highlights: [
            "Elegante Rezepte für Gäste und Feste",
            "Kleine Rosenkunde und Porträt der Duftrosen",
            "Ideen für Geschenke wie Rosenlikör oder Rosenpesto"
        ],
        link: "/buecher"
    }
];

export default function AromakuechePage() {
    return (
        <div className="pt-20">
            {/* ═══════════ HERO SECTION ═══════════ */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero_aromakueche.png`}
                        alt="Aromaküche und ätherische Öle auf rustikalem Tisch"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-forest/50 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/65 to-transparent" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-widest text-cream mb-4 block drop-shadow-md">
                            Kulinarik & Naturheilkunde
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg" style={{ color: "white" }}>
                            Die Aromaküche
                        </h1>
                        <p className="text-white text-lg sm:text-xl leading-relaxed drop-shadow-md font-medium">
                            Die Kunst, Speisen und Getränke mit 100% naturreinen ätherischen Gewürzölen zu veredeln. 
                            Ein Fest für die Sinne, das Wohlbefinden und gehobene Kulinarik harmonisch verbindet.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════ INTRO SECTION ═══════════ */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">
                            Pionierarbeit seit 1987
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 wave-divider">
                            Die Seele der Pflanze auf dem Teller
                        </h2>
                        <p className="text-bark text-lg leading-relaxed mb-4">
                            Maria M. Kettenring gilt als Pionierin der modernen Aroma- und Duftküche. Bereits Mitte der 1980er-Jahre 
                            entwickelte sie die ersten Konzepte für das Kochen mit ätherischen Ölen. Ihr 1987 veröffentlichtes Werk 
                            <em> &bdquo;Phantasievoll kochen mit ätherischen Ölen&ldquo;</em> markierte den Beginn dieser kulinarischen Reise.
                        </p>
                        <p className="text-bark leading-relaxed mb-4">
                            Ätherische Öle sind die konzentrierte Lebenskraft der Pflanzen. Während getrocknete Kräuter oft an Aroma 
                            verlieren, fängt ein einziges Tröpfchen Bio-Gewürzöl (z. B. Rosmarin, Mandarine, Koriander oder Zitrone) 
                            das vollständige, vielschichtige Aroma der Pflanze ein.
                        </p>
                        <p className="text-bark leading-relaxed">
                            In ihren Kursen und Publikationen vermittelt Maria, wie Sie die flüchtigen Düfte in fetten Ölen, Honig, 
                            Salz oder Alkohol binden, um sensationelle Geschmackserlebnisse zu kreieren, die zudem das Wohlbefinden 
                            fördern.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-cream">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero_aromakueche.png`}
                                alt="Aroma-Küche Zubereitung"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ FOCUS AREAS / SCHWERPUNKTE ═══════════ */}
            <section className="section-padding bg-cream/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">
                            Vielfalt erleben
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Schwerpunkte der Aromaküche
                        </h2>
                        <p className="text-bark text-lg">
                            Das Kochen mit ätherischen Ölen eröffnet ganz neue Dimensionen in der Küche und unterstützt die Vitalität im Alltag.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {focuses.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="card p-8 border-t-4 border-forest bg-white">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-sage/15 mb-6 shrink-0">
                                        <Icon size={28} className="text-forest" />
                                    </div>
                                    <h3 className="text-xl font-bold text-forest mb-3">{item.title}</h3>
                                    <p className="text-bark text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════ KOCHBÜCHER SECTION ═══════════ */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">
                            Rezeptideen & Inspiration
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Marias Kochbücher
                        </h2>
                        <p className="text-bark text-lg">
                            Finden Sie hunderte Rezepte und detaillierte Tabellen zur Dosierung von Würzölen in Marias beliebten Werken.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {cookingBooks.map((book, i) => (
                            <div key={i} className="card bg-cream/40 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                <div className="shrink-0 w-36 h-48 relative shadow-md rounded overflow-hidden bg-white">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${book.cover}`}
                                        alt={book.title}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-earth mb-1">{book.title}</h3>
                                    <p className="text-leaf font-semibold text-sm mb-3">{book.subtitle}</p>
                                    <p className="text-bark text-sm mb-4 leading-relaxed">{book.description}</p>
                                    <ul className="space-y-1.5 mb-6">
                                        {book.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-xs text-bark flex items-start gap-2">
                                                <Check size={14} className="text-forest shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={book.link} className="btn-outline !py-2 !px-5 !text-sm inline-flex items-center gap-1.5">
                                        Details & Shops <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ VEGAROMA PARTNER SECTION ═══════════ */}
            <section className="section-padding bg-sage/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center p-8">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/vegaroma.png`}
                                alt="Vegaroma Logo"
                                width={400}
                                height={200}
                                className="object-contain max-h-full"
                            />
                        </div>
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">
                                Premium-Qualität für die Küche
                            </span>

                            {/* Logo + Title block */}
                            <div className="flex items-center gap-5 mb-6">
                                <div className="shrink-0 w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center p-2">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/vegaroma.png`}
                                        alt="Vegaroma Würzöle"
                                        width={64}
                                        height={64}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-forest leading-tight">
                                        Vegaroma
                                    </h2>
                                    <p className="text-sm text-bark mt-1 tracking-wide">
                                        Aroma- und Würzöle in 100% Bio-Qualität
                                    </p>
                                </div>
                            </div>

                            <div className="w-16 h-1 bg-sage rounded-full mb-6"></div>

                            <p className="text-bark text-lg leading-relaxed mb-6">
                                Für die Zubereitung feiner Aromagerichte empfiehlt Maria M. Kettenring die Produkte von 
                                <strong> Vegaroma</strong>. Als Expertin hat sie viele der biologischen Würzmischungen 
                                und Rezepturen selbst mitentwickelt.
                            </p>
                            <p className="text-bark leading-relaxed mb-8">
                                Die Würzöle von Vegaroma basieren auf 100% naturreinen, bio-zertifizierten ätherischen Ölen und 
                                eignen sich hervorragend zum schnellen und unkomplizierten Verfeinern von Speisen directly in der Küche.
                            </p>

                            <a
                                href="https://vegaroma.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Zu Vegaroma <ExternalLink size={16} className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CTA SECTION ═══════════ */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-forest" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <Sparkles size={48} className="text-sage-light mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Erleben Sie die Aromaküche live
                    </h2>
                    <p className="text-sage-light text-lg mb-10 max-w-2xl mx-auto">
                        In unseren Seminaren und Workshops — wie der beliebten Weihnachtsbäckerei — lernen Sie den 
                        fachgerechten Umgang und die kreative Dosierung ätherischer Öle beim Kochen und Backen.
                    </p>
                    <Link 
                        href="/seminare" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest rounded-full font-bold transition hover:bg-cream hover:scale-105"
                    >
                        Zu den Seminaren <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Re-usable Icon for External Links (Lucide)
function ExternalLink({ size = 16, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
    );
}
