import Link from "next/link";
import { Mail, MapPin, Phone, Leaf } from "lucide-react";

const footerLinks = [
    { href: "/ueber-mich", label: "Über Mich" },
    { href: "/buecher", label: "Bücher" },
    { href: "/seminare", label: "Seminare" },
    { href: "/waldbaden", label: "Waldbaden" },
];

export function Footer() {
    return (
        <footer className="bg-forest text-white/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf className="text-sage" size={24} />
                            <span className="text-xl font-[family-name:var(--font-heading)] font-semibold text-white">
                                Villaroma
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Waldmedizin & Waldbaden — Die Heilkraft der Natur erleben mit über 40 Jahren Erfahrung in Aromatherapie und ätherischen Ölen.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-sage mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors text-sm no-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-sage mb-4">
                            Kontakt
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                                <Mail size={16} className="text-sage shrink-0" />
                                <span>info@villaroma.de</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                                <Phone size={16} className="text-sage shrink-0" />
                                <span>Auf Anfrage</span>
                            </div>
                            <div className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin size={16} className="text-sage shrink-0 mt-0.5" />
                                <span>Deutschland</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Villaroma — Maria M. Kettenring. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                        <Leaf size={12} />
                        <span>Mit Liebe zur Natur gestaltet</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
