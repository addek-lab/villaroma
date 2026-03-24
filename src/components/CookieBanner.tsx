"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Check } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [preferencesOpen, setPreferencesOpen] = useState(false);
    const [analyticsAccepted, setAnalyticsAccepted] = useState(false);
    const [marketingAccepted, setMarketingAccepted] = useState(false);

    useEffect(() => {
        // Check if consent has already been given
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const saveSettings = (consentString: string) => {
        localStorage.setItem("cookieConsent", consentString);
        setIsVisible(false);
        setPreferencesOpen(false);
        // Here you would normally initialize your tracking scripts based on 'consentString'
    };

    const handleAcceptAll = () => saveSettings("all");
    const handleAcceptEssential = () => saveSettings("essential");
    
    const handleSaveSelected = () => {
        const types = ["essential"];
        if (analyticsAccepted) types.push("analytics");
        if (marketingAccepted) types.push("marketing");
        saveSettings(types.join(","));
    };

    if (!isVisible) return null;

    if (preferencesOpen) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xl w-full relative max-h-[90vh] flex flex-col">
                    <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                        <button 
                            onClick={() => setPreferencesOpen(false)}
                            className="absolute top-6 right-6 p-2 text-bark hover:text-earth transition-colors rounded-full hover:bg-sage/10 bg-white"
                        >
                            <X size={20} />
                        </button>
                        
                        <h2 className="text-2xl font-bold text-earth mb-2 pr-10">Cookie-Einstellungen</h2>
                        <p className="text-bark mb-6 text-sm leading-relaxed">
                            Wir verwenden Cookies, unsere Datenschutzerklärung gibt Auskunft darüber, welche Daten von Dritten erhoben werden. Sie können hier Ihre individuellen Einstellungen vornehmen.
                        </p>

                        <div className="space-y-4 mb-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-sage/10 rounded-xl border border-sage/20 gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-earth flex items-center gap-2">
                                        Essenzielle Cookies
                                        <span className="text-[10px] uppercase tracking-wider font-bold bg-white text-forest px-2 py-0.5 rounded shadow-sm border border-forest/10">Immer aktiv</span>
                                    </h3>
                                    <p className="text-sm text-bark mt-1">Diese Cookies sind für die Grundfunktionen der Website zwingend erforderlich und können nicht deaktiviert werden.</p>
                                </div>
                                <div className="w-12 h-6 bg-forest rounded-full flex items-center p-1 cursor-not-allowed opacity-90 shrink-0">
                                    <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm flex items-center justify-center">
                                        <Check size={12} className="text-forest" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-sage/20 gap-4 hover:border-sage/40 transition-colors">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-earth">Analyse & Statistik</h3>
                                    <p className="text-sm text-bark mt-1">Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, um das Erlebnis zu verbessern.</p>
                                </div>
                                <button 
                                    onClick={() => setAnalyticsAccepted(!analyticsAccepted)}
                                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 shrink-0 p-1 ${analyticsAccepted ? "bg-forest" : "bg-gray-300"}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${analyticsAccepted ? "translate-x-6" : "translate-x-0"}`}>
                                        {analyticsAccepted && <Check size={12} className="text-forest" />}
                                    </div>
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-sage/20 gap-4 hover:border-sage/40 transition-colors">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-earth">Marketing & Tracking</h3>
                                    <p className="text-sm text-bark mt-1">Ermöglichen es uns, Ihnen relevantere Inhalte und personalisierte Werbung auf anderen Plattformen zu zeigen.</p>
                                </div>
                                <button 
                                    onClick={() => setMarketingAccepted(!marketingAccepted)}
                                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 shrink-0 p-1 ${marketingAccepted ? "bg-forest" : "bg-gray-300"}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${marketingAccepted ? "translate-x-6" : "translate-x-0"}`}>
                                        {marketingAccepted && <Check size={12} className="text-forest" />}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sage/5 p-6 border-t border-sage/20 mt-auto flex flex-col sm:flex-row gap-3">
                        <button 
                            onClick={handleSaveSelected}
                            className="flex-1 px-6 py-2.5 bg-white hover:bg-sage/10 text-earth font-medium rounded-full transition-colors border border-sage/30 order-2 sm:order-1"
                        >
                            Auswahl speichern
                        </button>
                        <button 
                            onClick={handleAcceptAll}
                            className="flex-1 px-6 py-2.5 bg-forest hover:bg-forest/90 text-white font-medium rounded-full transition-colors shadow-md order-1 sm:order-2"
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md w-full z-[100] animate-in slide-in-from-bottom-8 fade-in duration-500 pb-safe">
            <div className="bg-white border-t sm:border border-sage/20 sm:rounded-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)] sm:shadow-2xl overflow-hidden">
                <div className="bg-forest px-5 py-3.5 flex items-center justify-between">
                    <span className="text-white font-semibold flex items-center gap-2">
                        <span className="text-xl">🍪</span> Privatsphäre & Cookies
                    </span>
                    <button 
                        onClick={handleAcceptEssential}
                        className="text-white/60 hover:text-white transition-colors p-1"
                        aria-label="Nur essenzielle akzeptieren (Schließen)"
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className="p-5">
                    <p className="text-sm text-bark mb-5 leading-relaxed">
                        Wir verwenden Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern. 
                        Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="text-forest hover:text-leaf hover:underline font-semibold">Datenschutzerklärung</Link>.
                    </p>
                    
                    <div className="flex flex-col gap-2.5">
                        <button 
                            onClick={handleAcceptAll}
                            className="w-full px-4 py-2.5 bg-leaf hover:bg-forest text-white font-medium rounded-full transition-colors text-sm shadow-sm"
                        >
                            Alle akzeptieren
                        </button>
                        <div className="flex gap-2.5">
                            <button 
                                onClick={handleAcceptEssential}
                                className="flex-1 px-2 py-2.5 bg-white hover:bg-sage/10 text-earth border border-sage/30 font-medium rounded-full transition-colors text-sm text-center"
                            >
                                Nur essenzielle
                            </button>
                            <button 
                                onClick={() => setPreferencesOpen(true)}
                                className="flex-1 px-2 py-2.5 bg-white hover:bg-sage/10 text-earth border border-sage/30 font-medium rounded-full transition-colors text-sm text-center"
                            >
                                Einstellungen
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-4 flex justify-center gap-4 text-xs text-bark/80">
                        <Link href="/impressum" className="hover:text-forest hover:underline">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-forest hover:underline">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
