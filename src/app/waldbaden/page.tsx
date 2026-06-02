import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Brain, Wind, Leaf, TreePine } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Waldbaden — Shinrin-Yoku | Villaroma — Maria M. Kettenring",
    description: "Waldbaden (Shinrin-Yoku) mit Maria M. Kettenring: Entdecken Sie die heilende Kraft des Waldbadens für Körper, Geist und Seele.",
};

const benefits = [
    { icon: Shield, title: "Immunsystem stärken", desc: "Phytonzide der Bäume aktivieren natürliche Killerzellen und stärken die Abwehrkräfte." },
    { icon: Heart, title: "Blutdruck senken", desc: "Studien belegen: Waldbaden senkt den Blutdruck und reguliert die Herzfrequenz." },
    { icon: Brain, title: "Stress reduzieren", desc: "Der Aufenthalt im Wald senkt den Cortisolspiegel messbar und fördert die Entspannung." },
    { icon: Wind, title: "Atemwege befreien", desc: "Die saubere Waldluft und ätherische Baumöle unterstützen die Atemwegsgesundheit." },
];

export default function WaldbadenPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/waldbaden.webp`} alt="Waldbaden im Wald" fill className="object-cover object-center" priority />
                    <div className="absolute inset-0 bg-forest/50 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/60 to-forest/20" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-widest text-cream mb-4 block drop-shadow-md">Shinrin-Yoku · 森林浴</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg" style={{ color: "white" }}>
                            Waldbaden
                        </h1>
                        <p className="text-white text-lg leading-relaxed drop-shadow-md font-medium">
                            Die japanische Praxis des &ldquo;Waldbadens&rdquo; — ein achtsames Eintauchen in die
                            Atmosphäre des Waldes. Wissenschaftlich belegt, therapeutisch wirksam,
                            zutiefst heilsam.
                        </p>
                    </div>
                </div>
            </section>

            {/* What is Waldbaden */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Die Praxis</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 wave-divider">
                            Was ist Waldbaden?
                        </h2>
                        <p className="text-bark text-lg leading-relaxed mb-4">
                            Waldbaden (japanisch: Shinrin-Yoku) bedeutet &ldquo;in der Atmosphäre des Waldes baden&rdquo;.
                            Es ist keine sportliche Aktivität, sondern ein bewusstes, langsames Eintauchen in die
                            Natur mit allen Sinnen.
                        </p>
                        <p className="text-bark leading-relaxed mb-4">
                            In Japan ist Waldbaden seit den 1980er Jahren eine anerkannte Methode zur
                            Gesundheitsvorsorge. Zahlreiche wissenschaftliche Studien belegen die positiven
                            Auswirkungen auf das Immunsystem, den Blutdruck, den Stresshormonspiegel und
                            die psychische Gesundheit.
                        </p>
                        <p className="text-bark leading-relaxed">
                            Maria M. Kettenring verbindet als zertifizierte <strong>Waldbaden- und Natur-Resilienz®-Trainerin</strong> die
                            traditionelle Praxis des Waldbadens mit dem modernen Wissen über ätherische Baumöle
                            und Aromatherapie zu einem einzigartigen, ganzheitlichen Erlebnis.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-forest.webp`} alt="Waldweg" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Wissenschaftlich belegt</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Wirkungen des Waldbadens
                        </h2>
                        <p className="text-bark text-lg">
                            Die gesundheitlichen Vorteile des Waldbadens sind durch zahlreiche Studien wissenschaftlich belegt.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <div key={i} className="card p-8 flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-sage/15 flex items-center justify-center shrink-0">
                                        <Icon size={28} className="text-forest" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-earth mb-2">{b.title}</h3>
                                        <p className="text-bark text-sm leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Waldmedizin Book CTA */}
            <section className="section-padding bg-forest text-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Buchcover */}
                        <div className="shrink-0 w-48 sm:w-56 drop-shadow-2xl">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/buch-waldmedizin-new.webp`}
                                alt="Waldmedizin — Buchcover"
                                width={280}
                                height={400}
                                className="rounded-lg"
                                priority
                            />
                        </div>
                        {/* Text */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <TreePine size={28} className="text-sage shrink-0" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Waldmedizin — Das Buch</h2>
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                Vertiefen Sie Ihr Wissen über die Heilkraft der Baumöle. &ldquo;Waldmedizin&rdquo; enthält
                                15 detailliert beschriebene Baumöle, 108 Rezepte und praktische Naturtherapieübungen.
                            </p>
                            <a href="/buecher/#waldmedizin" className="btn-primary !bg-sage !text-earth hover:!bg-sage-light inline-flex items-center gap-2">
                                Zum Buch <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-cream-dark">
                <div className="max-w-3xl mx-auto text-center">
                    <Leaf size={32} className="text-leaf mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Waldbaden erleben</h2>
                    <p className="text-bark text-lg mb-8">
                        Nehmen Sie an einem von Marias Waldbaden-Seminaren teil und erleben Sie die heilsame Kraft des Waldes am eigenen Körper.
                    </p>
                    <Link href="/seminare" className="btn-primary">
                        Seminare ansehen <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* Deutsche Akademie für Waldbaden — Partner */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Mein Partner</span>
                            <div className="mb-8 inline-block bg-forest rounded-2xl px-6 py-4">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Akademie_Waldbaden.webp`}
                                    alt="Deutsche Akademie für Waldbaden &amp; Gesundheit"
                                    width={280}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-20 h-1 bg-sage rounded-full mb-8"></div>
                            <p className="text-bark text-lg leading-relaxed mb-4">
                                Entdecken Sie weitere Seminare, Workshops und Webinare bei meinem Partner, der Deutschen
                                Akademie für Waldbaden &amp; Gesundheit — Qualifizierungen und Ausbildungen rund um
                                Waldbaden, Natur-Resilienz &amp; Gesundheitsförderung in der Natur.
                            </p>
                            <a
                                href="https://waldbaden-akademie.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                Zur Akademie <ArrowRight size={16} />
                            </a>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-forest.webp`}
                                alt="Waldbaden — Deutsche Akademie für Waldbaden &amp; Gesundheit"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
