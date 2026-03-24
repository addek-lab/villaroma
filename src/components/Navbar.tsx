"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ueber-mich", label: "Über Mich" },
    { href: "/buecher", label: "Bücher" },
    { href: "/seminare", label: "Seminare" },
    { href: "/waldbaden", label: "Waldbaden" },
    { href: "/aromatherapie", label: "Aromatherapie" },
    { href: "/impressionen", label: "Impressionen" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-forest/5">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 no-underline">
                        <Image src="/villaroma/logo-villaroma-horizontal-1773619919275.webp" alt="Villaroma — Maria M. Kettenring" width={572} height={132} priority className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-[0.9rem] font-medium text-earth hover:text-forest transition-colors rounded-lg hover:bg-forest/5 no-underline"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="w-px h-5 bg-forest/20 mx-2"></div>
                        <Link href="https://www.instagram.com/maria.kettenring/" target="_blank" rel="noopener noreferrer" className="p-2 text-earth hover:text-forest transition-colors rounded-lg hover:bg-forest/5" aria-label="Folge Maria auf Instagram">
                            <Instagram size={20} strokeWidth={1.5} />
                        </Link>
                    </div>

                    <div className="flex items-center gap-1 lg:hidden">
                        <Link href="https://www.instagram.com/maria.kettenring/" target="_blank" rel="noopener noreferrer" className="p-2 text-earth hover:text-forest transition-colors rounded-lg hover:bg-forest/5" aria-label="Folge Maria auf Instagram">
                            <Instagram size={24} strokeWidth={1.5} />
                        </Link>
                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-earth hover:text-forest transition-colors"
                            aria-label="Navigation öffnen"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t border-forest/5 animate-fade-in">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-earth hover:text-forest hover:bg-forest/5 rounded-lg transition-colors no-underline font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
