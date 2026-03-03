import Image from "next/image";
import { Award, BookOpen, Globe, TreePine, Leaf, GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Über Maria M. Kettenring | Villaroma",
    description: "Aromafachspezialistin, Dozentin, Autorin und Waldbaden-Trainerin mit über 40 Jahren Erfahrung.",
};

const credentials = [
    { icon: Leaf, title: "Aromafachspezialistin", desc: "Über 40 Jahre Erfahrung in Aromakultur und Aromatherapie" },
    { icon: GraduationCap, title: "Dozentin & Ernährungsberaterin", desc: "Fachvorträge im In- und Ausland seit 1989" },
    { icon: TreePine, title: "Waldbaden-Trainerin", desc: "Zertifizierte Trainerin für Waldbaden und Natur-Resilienz®" },
    { icon: BookOpen, title: "Autorin", desc: "Über 10 Fachbücher zu ätherischen Ölen und Waldmedizin" },
    { icon: Globe, title: "Internationale Reiseleiterin", desc: "Duft- und Studienreisen weltweit seit 1989" },
    { icon: Award, title: "Pionierin der Aromaküche", desc: "Erstes Kochbuch mit ätherischen Ölen 1987" },
];

export default function UeberMichPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Über Mich</span>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 wave-divider">
                                Maria M. Kettenring
                            </h1>
                            <p className="text-bark text-lg leading-relaxed mb-6">
                                Maria M. Kettenring ist eine der renommiertesten Aromafachspezialistinnen im deutschsprachigen Raum.
                                Als <strong>Duftbotschafterin</strong> mit über 40 Jahren praktischer Erfahrung widmet sie sich der
                                Aromakultur, Aromatherapie und der heilsamen Verbindung zwischen Mensch und Natur.
                            </p>
                            <p className="text-bark leading-relaxed mb-6">
                                Sie arbeitet als Ernährungsberaterin, Aroma- und Dufttrainerin sowie als zertifizierte Trainerin für
                                <strong> Waldbaden und Natur-Resilienz®</strong>. Ihre Ausbildung zur Dozentin für &ldquo;Waldbaden — Achtsamkeit
                                im Wald®&rdquo; absolvierte sie an der Deutschen Akademie für Waldbaden &amp; Gesundheit.
                            </p>
                            <p className="text-bark leading-relaxed">
                                Seit Mitte der 1980er Jahre entwickelt sie die Aroma- und Duftküche maßgeblich mit und hat mit
                                &ldquo;Phantasievoll kochen mit ätherischen Ölen&rdquo; (1987) das erste Kochbuch seiner Art veröffentlicht.
                                Seit 1989 leitet sie international Duft- und Studienreisen und hält Seminare und
                                Vorträge zu Aromatherapie und Aromapflege.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/aromatherapy.png"
                                    alt="Maria M. Kettenring - Aromatherapie"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Qualifikationen & Expertise</h2>
                        <p className="text-bark text-lg">Ein Lebenswerk im Dienste der Naturheilkunde und Aromatherapie.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {credentials.map((cred, i) => {
                            const Icon = cred.icon;
                            return (
                                <div key={i} className="card p-8 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-sage/15 flex items-center justify-center mx-auto mb-5">
                                        <Icon size={28} className="text-forest" />
                                    </div>
                                    <h3 className="text-lg font-bold text-earth mb-2">{cred.title}</h3>
                                    <p className="text-bark text-sm">{cred.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-forest text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <Leaf size={40} className="text-sage mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Meine Philosophie</h2>
                    <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                        Die Natur schenkt uns alles, was wir für Gesundheit und Wohlbefinden brauchen. Ätherische Öle
                        sind die konzentrierte Lebenskraft der Pflanzen — sie heilen, beruhigen und inspirieren.
                        Mein Ziel ist es, dieses uralte Wissen zugänglich und praktisch anwendbar zu machen,
                        damit jeder Mensch die Heilkraft der Natur in seinen Alltag integrieren kann.
                    </p>
                </div>
            </section>
        </div>
    );
}
