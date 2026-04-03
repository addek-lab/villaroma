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

export const parseDate = (dateStr: string) => {
    // Extract the first date part (e.g., "14" from "14. – 15.05.2026")
    const match = dateStr.match(/(\d{1,2})\./);
    const day = match ? parseInt(match[1]) : 1;
    
    // Extract the month (e.g., "05" from "14. – 15.05.2026")
    const monthMatch = dateStr.match(/\.(\d{2})\./);
    const month = monthMatch ? parseInt(monthMatch[1]) - 1 : 0;
    
    // Extract the year (e.g., "2026")
    const yearMatch = dateStr.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0]) : 2026;
    
    return new Date(year, month, day);
};

export const events: CalendarEvent[] = [
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
        title: "Waldmedizin — Heilkraft der Baumöle (Sonderedition)",
        description: "Erleben Sie die Heilkraft der Baumöle und die Magie alter Mythen in diesem besonderen Workshop. Wir trainieren unseren Geruchssinn durch sensorische Übungen, stellen eigene Wald-Roll-ons für den Winter her und stärken unsere Resilienz mit begleitenden Atem- und Qigong-Einheiten. Entdecken Sie Walddüfte als wertvolle psychische Anker für mehr Stärke und Schutz im Alltag.",
        location: "Weberstedt (Hainich)",
        date: "24. – 25.10.2026",
        duration: "2 Tage",
        type: "Seminar",
        price: "239,00 €",
        link: "https://waldbaden-akademie.com/veranstaltungen/waldmedizin-heilkraft-der-baumoele-sonderedition-2-tage/",
        featured: false,
        image: "/villaroma/seminare/seminar_baumoele_1773246261672.png",
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
