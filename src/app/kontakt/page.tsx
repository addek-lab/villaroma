import { Mail, Phone, MapPin, Send, Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt | Villaroma — Maria M. Kettenring",
    description: "Kontaktieren Sie Maria M. Kettenring für Seminar-Buchungen, Vortragsanfragen oder allgemeine Fragen zu Aromatherapie und Waldbaden.",
};

export default function KontaktPage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Kontakt</span>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 wave-divider">
                            Schreiben Sie mir
                        </h1>
                        <p className="text-bark text-lg leading-relaxed">
                            Ob Buchungsanfragen für Seminare, Vortragseinladungen oder allgemeine Fragen —
                            Maria freut sich auf Ihre Nachricht.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form + Info */}
            <section className="section-padding !pt-0 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-earth mb-2">Vorname</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Ihr Vorname"
                                        className="w-full px-4 py-3.5 rounded-xl bg-cream border border-forest/10 text-earth placeholder:text-soft-grey focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-earth mb-2">Nachname</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Ihr Nachname"
                                        className="w-full px-4 py-3.5 rounded-xl bg-cream border border-forest/10 text-earth placeholder:text-soft-grey focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-earth mb-2">E-Mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ihre@email.de"
                                    className="w-full px-4 py-3.5 rounded-xl bg-cream border border-forest/10 text-earth placeholder:text-soft-grey focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-earth mb-2">Betreff</label>
                                <select
                                    name="subject"
                                    className="w-full px-4 py-3.5 rounded-xl bg-cream border border-forest/10 text-earth focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all"
                                >
                                    <option value="">Bitte wählen...</option>
                                    <option value="seminar">Seminar-Buchung</option>
                                    <option value="vortrag">Vortragsanfrage</option>
                                    <option value="buch">Frage zu einem Buch</option>
                                    <option value="waldbaden">Waldbaden-Anfrage</option>
                                    <option value="sonstiges">Sonstiges</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-earth mb-2">Nachricht</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    placeholder="Ihre Nachricht an Maria..."
                                    className="w-full px-4 py-3.5 rounded-xl bg-cream border border-forest/10 text-earth placeholder:text-soft-grey focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all resize-none"
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full sm:w-auto">
                                <Send size={18} /> Nachricht senden
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6">
                        <div className="card p-8">
                            <Leaf size={24} className="text-forest mb-4" />
                            <h3 className="text-lg font-bold text-earth mb-4">Kontaktdaten</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail size={18} className="text-leaf shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-earth">E-Mail</div>
                                        <a href="mailto:info@villaroma.de" className="text-sm text-bark hover:text-forest transition-colors">
                                            info@villaroma.de
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone size={18} className="text-leaf shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-earth">Telefon</div>
                                        <span className="text-sm text-bark">Auf Anfrage</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-leaf shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-earth">Standort</div>
                                        <span className="text-sm text-bark">Deutschland</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card p-8 bg-forest text-white">
                            <h3 className="text-lg font-bold text-white mb-3">Schnellantwort</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Maria antwortet in der Regel innerhalb von 2–3 Werktagen auf Ihre Anfrage.
                                Für dringende Seminar-Buchungen nutzen Sie bitte den Betreff &ldquo;Seminar-Buchung&rdquo;.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
