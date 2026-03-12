import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bücher | Villaroma — Maria M. Kettenring",
  description: "Entdecken Sie die Fachbücher von Maria M. Kettenring über ätherische Öle, Waldmedizin, Aromaküche und mehr.",
};

interface ShopLink {
  label: string;
  url: string;
}

interface Book {
  title: string;
  subtitle: string;
  coAuthor: string;
  publisher: string;
  description: string;
  cover?: string;
  year: string;
  edition?: string;
  badge?: string;
  featured: boolean;
  highlights?: string[];
  shops?: ShopLink[];
}

const books: Book[] = [
  {
    title: "Natur-Resilienz",
    subtitle: "Finde deine innere Balance mit der Kraft der Natur",
    coAuthor: "mit Jasmin Schlimm-Thierjung",
    publisher: "Mankau Verlag",
    description:
      "Das neueste Werk verbindet die heilsame Kraft der Natur mit praktischen Übungen zur Stärkung der inneren Widerstandskraft. Erfahren Sie, wie Sie durch achtsame Naturerfahrungen, ätherische Öle und Waldbaden-Techniken Ihre Resilienz nachhaltig aufbauen können.",
    cover: "/villaroma/buch-naturresilienz.webp",
    year: "Frühjahr 2026",
    badge: "Neu",
    featured: true,
    shops: [],
  },
  {
    title: "Zitrusdüfte",
    subtitle: "Die Heilkraft der ätherischen Öle von Orange, Zitrone, Limette & Co.",
    coAuthor: "mit Anusati Thumm",
    publisher: "Joy Verlag",
    edition: "1. Auflage 2021",
    description:
      "Zitrusdüfte verbreiten Lebensfreude und lassen die Sonne des Südens in unser Herz einziehen. Sie aktivieren körpereigene Botenstoffe und können unserer Seele Flügel verleihen.",
    highlights: [
      "Streifzug durch Botanik und Geschichte der Zitruspflanzen",
      "Infos zu Qualität und Ölgewinnung",
      "Anwendung, Inhaltsstoffe und Wirkweisen",
      "150 Rezepturen (DIY) für Psyche, Körper und Genuss",
    ],
    year: "2021",
    featured: false,
    shops: [
      { label: "Amazon", url: "https://www.amazon.de/Zitrusdüfte-Heilkraft-ätherischen-Zitrone-Limette/dp/396199014X/" },
    ],
  },
  {
    title: "Ätherische Öle in der Erkältungszeit",
    subtitle: "Schnelle Hilfe bei Husten, Schnupfen und grippalen Infekten",
    coAuthor: "mit Anusati Thumm",
    publisher: "Joy Verlag",
    edition: "4. Auflage 2023",
    description:
      "Viren und Bakterien plagen uns vor allem in der kalten Jahreszeit mit Schnupfen, entzündeten Atemwegen und Fieber. Hier bietet die Naturheilkunde mit der Aromatherapie besonders wirkungsvolle Möglichkeiten des Schutzes und der Behandlung.",
    highlights: [
      "Die häufigsten Erkrankungen der Atemwege",
      "Wie ätherische Öle die Abwehrkräfte und das Immunsystem stärken",
      "Viele Rezepturen zur Behandlung von Halsschmerzen, Husten, Schnupfen, Heiserkeit, Bronchitis, grippalen Infekten u.v.m.",
      "Die fachgerechte Anwendung ätherischer Öle bei Kindern",
    ],
    cover: "/villaroma/buch-erkaeltungszeit.webp",
    year: "2023",
    featured: false,
    shops: [
      { label: "Amazon", url: "https://www.amazon.de/Ätherische-Öle-Erkältungszeit-Schnupfen-grippalen/dp/3961990131/" },
      { label: "Primavera", url: "https://www.primaveralife.com/buch-aetherische-oele-in-der-erkaeltungszeit.html" },
      { label: "Thalia", url: "https://www.thalia.de/shop/home/artikeldetails/ID148377404.html" },
    ],
  },
  {
    title: "Waldmedizin",
    subtitle: "Die Heilkraft der ätherischen Baumöle",
    coAuthor: "mit Anusati Thumm",
    publisher: "Joy Verlag",
    edition: "6. Auflage 2023",
    description:
      "Ausführlich beschreiben die Autorinnen in ihrem Buch die gesundheitsfördernden Wirkungen ausgewählter ätherischer Baumöle und geben Anleitungen, wie diese gezielt zur Vorbeugung und bei Erkrankungen eingesetzt werden können. Unterstützende kurze Atem- und Yogaübungen runden das Thema Waldmedizin ab.",
    highlights: [
      "Der Wald – ein großer Organismus",
      "Bäume in der Volksmedizin",
      "Waldtherapie, Waldbaden",
      "Ätherische Baumöle – heilende Walddüfte",
      "Grundlagen, Inhaltsstoffe, Wirkungen",
      "Die Anwendung ätherischer Baumöle",
      "Symptome-Register zum schnellen Auffinden der Rezepturen",
    ],
    cover: "/villaroma/buch-waldmedizin.jpg",
    year: "2023",
    featured: false,
    shops: [
      { label: "Amazon", url: "https://www.amazon.de/Waldmedizin-Die-Heilkraft-ätherischen-Baumöle/dp/3961990042/" },
      { label: "Bücher.de", url: "https://www.buecher.de/shop/meditation/waldmedizin/thumm-anusati-kettenring-maria-m-/products_products/detail/prod_id/52628710/" },
      { label: "Hugendubel", url: "https://www.hugendubel.de/de/buch_kartoniert/anusati_thumm_maria_m_kettenring-waldmedizin-33142502-product-details.html" },
      { label: "Thalia", url: "https://www.thalia.de/shop/home/artikeldetails/ID122239875.html" },
      { label: "Primavera", url: "https://www.primaveralife.com/waldmedizin.html" },
    ],
  },
  {
    title: "Hausapotheke Ätherische Öle",
    subtitle: "Schnelle Hilfe für jeden Tag",
    coAuthor: "",
    publisher: "Joy Verlag",
    edition: "11. Auflage 2023",
    description:
      "Maria M. Kettenring stellt in ihrem Buch 15 ätherische Öle vor, die sich für die Haus- und Reiseapotheke besonders gut eignen. Sie bieten schnelle Hilfe bei Unwohlsein und kleineren Erkrankungen, zudem sind sie ein idealer Begleiter im Urlaub und auf Reisen.",
    highlights: [
      "Ausführliche Informationen zu den 15 wichtigsten ätherischen Ölen für die Hausapotheke",
      "Nützliche Informationen zu Inhaltsstoffen, Heilkräften und Anwendungsgebieten",
      "Schnelle Hilfe bei: Erkältungen, Insektenstichen, Sportverletzungen, Muskelverspannungen, Rückenschmerzen, Übelkeit, Jetlag u.v.m.",
      "Mit einem umfangreichen Symptome-Register von A-Z zum schnellen Auffinden von over 200 Rezepturen",
    ],
    cover: "/villaroma/buch-hausapotheke.jpg",
    year: "2023",
    featured: false,
    shops: [
      { label: "Amazon", url: "https://www.amazon.de/Hausapotheke-Ätherische-Öle-Schnelle-Hilfe/dp/3928554867" },
      { label: "Bücher.de", url: "https://www.buecher.de/shop/fachbuecher/hausapotheke-aetherische-oele/kettenring-maria-m-/products_products/detail/prod_id/38616421/" },
      { label: "Primavera", url: "https://www.primaveralife.com/hausapotheke-aetherische-oele-schnelle-hilfe-fuer-jeden-tag.html" },
      { label: "Thalia", url: "https://www.thalia.de/shop/home/artikeldetails/ID35344652.html" },
    ],
  },
  {
    title: "Ätherische Öle",
    subtitle: "Ganzheitlich anwenden mit zahlreichen Rezepturen",
    coAuthor: "",
    publisher: "Bassermann Verlag",
    edition: "4. Auflage 2023",
    description:
      "Ätherische Öle wirken erfrischend und stresslösend. So schaffen sie kleine Wohlfühloasen im Alltag. Dieses sinnliche und zugleich praktische Buch stellt die wichtigsten Aromaöle und ihre Wirkung auf Körper und Seele vor. Im Zentrum steht dabei die einfache und kreative Anwendung ätherischer Öle.",
    highlights: [
      "Rezepte für Duftapotheke, Massageöle, Aromaküche und natürliche Raumdüfte",
      "Zahlreiche praktische Tipps sowie erprobte Rezepte für Massageöle, Raumdüfte, Aromaküche und vieles mehr",
    ],
    cover: "/villaroma/buch-aetherische-oele.jpg",
    year: "2023",
    featured: false,
    shops: [
      { label: "Amazon", url: "https://www.amazon.de/Ätherische-Öle-ganzheitlich-zahlreichen-Rezepturen/dp/3424151580" },
      { label: "Primavera", url: "https://www.primaveralife.com/buch-aetherische-oele-ganzheitlich-anwenden.html" },
      { label: "Bassermann", url: "https://www.penguinrandomhouse.de/Buch/Aetherische-OEle/Maria-M-Kettenring/Bassermann/e549314.rhd" },
      { label: "Bücher.de", url: "https://www.buecher.de/shop/massage/aetherische-oele-ganzheitlich-anwenden-mit-zahlreichen-rezepturen/kettenring-maria-m-/products_products/detail/prod_id/38036420/" },
    ],
  },
  {
    title: "Duftküche",
    subtitle: "80 Vitalrezepte mit ätherischen Ölen",
    coAuthor: "",
    publisher: "",
    description:
      "Natureine Aromaöle eignen sich nicht nur für Duftlampen und Aromatherapie, man kann auch wunderbar mit ihnen kochen. Die anerkannte Aromaexpertin Maria M. Kettenring zeigt in ihrem Kochbuch, wie man mit aromatischen Würzölen, Würzbalsam, Würzungen und Würzpestos jedes Gericht auf köstliche Art verfeinert.",
    highlights: [
      "Lustvolles Kochen mit Bergamotte, Mandarine, Orange, Pfeffer, Vanille etc.",
      "Mehr als 80 bewährte und geprüfte Rezepte",
      "Gesundheitsaspekte durch die Vielfalt an wirkungsvollen Inhaltsstoffen in den ätherischen Ölen",
      "Tipps zu Qualität, Einkauf und Umgang mit ätherischen Ölen (Würzessenzen)",
    ],
    cover: "/villaroma/buch-duftkueche.jpg",
    edition: "2. Auflage 2014",
    year: "2014",
    featured: false,
    shops: [
      { label: "Vegaroma", url: "https://www.vegaroma.de/shop/koch-backbuecher/kochbuch-duftkueche" },
      { label: "Amazon", url: "https://www.amazon.de/Duftküche-Vitalrezepte-mit-ätherischen-Ölen/dp/3708806301/" },
      { label: "Thalia", url: "https://www.thalia.de/shop/home/artikeldetails/ID39352332.html" },
      { label: "Bücher.de", url: "https://www.buecher.de/shop/desserts--suessspeisen/duftkueche/kettenring-maria-m-/products_products/detail/prod_id/40893003/" },
    ],
  },
  {
    title: "Rosenküche",
    subtitle: "Feine Rezepte mit Blütenblättern und Essenzen",
    coAuthor: "",
    publisher: "",
    description:
      "Wie wäre es mit einem Rosen-Kir als Aperitif? Die Rosenküche bietet eine erlesene Auswahl an Rezepten für erfrischende Getränke, Salate, Suppen, Hauptgerichte, Desserts und Kuchen mit Rosenblüten und Essenzen. Mit Tipps für selbstgemachten Rosenlikör und Rosenpesto als Geschenk.",
    highlights: [
      "Kleine Rosenkunde",
      "Elegante Rezepte für Gäste und besondere Anlässe",
      "Schnelle Geschenke mit Rosenprodukten",
      "Porträt der Duftrosen",
      "Heilkräfte der Rose",
    ],
    cover: "/villaroma/buch-rosenkueche.jpg",
    year: "",
    featured: false,
    shops: [
      { label: "Vegaroma", url: "https://www.vegaroma.de/shop/vegaroma-aromakueche/koch-backbuecher/kochbuch-rosenkueche" },
      { label: "Amazon", url: "https://www.amazon.de/ROSENKÜCHE-Feine-Rezepte-Blütenblättern-Essenzen/dp/392855493X" },
      { label: "Bücher.de", url: "https://www.buecher.de/shop/buecher/rosenkueche/kettenring-maria-m-/products_products/detail/prod_id/44994082/" },
    ],
  },
  {
    title: "Handbook of Essential Oils",
    subtitle: "Science, Technology and Applications",
    coAuthor: "Hrsg. K. Hüsnü Can Başer & Gerhard Buchbauer (Mitautorin)",
    publisher: "CRC Press",
    edition: "3. Auflage",
    description:
      "Edited by two renowned experts, the Handbook of Essential Oils covers all aspects of essential oils from chemistry, pharmacology, and biological activity, to production and trade, to uses and regulation. This comprehensive handbook provides a much-needed compilation of information related to the development, use, and marketing of essential oils.",
    cover: "/villaroma/buch-essential-oils.jpg",
    year: "",
    featured: false,
    shops: [
      { label: "Amazon", url: "https://www.amazon.de/Handbook-Essential-Oils-Technology-Applications-dp-0815370962/dp/0815370962/" },
    ],
  },
];

export default function BuecherPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-leaf mb-4 block">Publikationen</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 wave-divider">
              Bücher & Ratgeber
            </h1>
            <p className="text-bark text-lg leading-relaxed">
              Maria M. Kettenring hat zahlreiche praxisnahe Fachbücher über ätherische Öle,
              Waldmedizin und Aromaküche veröffentlicht. Jedes Buch verbindet wissenschaftliches
              Fachwissen mit leicht umsetzbaren Rezepten und Anleitungen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Book: Natur-Resilienz */}
      <section className="section-padding !pt-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-cream rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ring-2 ring-forest/10">
            <div className="flex justify-center">
              <div className="relative w-[240px] sm:w-[280px] drop-shadow-2xl">
                <Image
                  src="/villaroma/buch-naturresilienz.webp"
                  alt="Natur-Resilienz — Buchcover"
                  width={400}
                  height={560}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-forest text-white text-xs font-bold mb-4 uppercase tracking-wider">
                Neuerscheinung 2026
              </span>
              <h2 className="text-3xl font-bold mb-2">Natur-Resilienz</h2>
              <p className="text-leaf font-semibold mb-1">Finde deine innere Balance mit der Kraft der Natur</p>
              <p className="text-sm text-soft-grey mb-4">Maria M. Kettenring & Jasmin Schlimm-Thierjung · Mankau Verlag</p>
              <p className="text-bark leading-relaxed mb-6">
                Das neueste Werk verbindet die heilsame Kraft der Natur mit praktischen Übungen zur Stärkung
                der inneren Widerstandskraft. Erfahren Sie, wie Sie durch achtsame Naturerfahrungen und
                Waldbaden-Techniken Ihre Resilienz nachhaltig aufbauen können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Books List */}
      <section className="section-padding !pt-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">Weitere Bücher</h2>
          <div className="space-y-10">
            {books.filter(b => !b.featured).map((book, i) => (
              <div key={i} className="card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
                  {/* Cover */}
                  {book.cover ? (
                    <div className="relative aspect-[3/4] md:aspect-auto bg-cream">
                      <Image
                        src={book.cover}
                        alt={`${book.title} — Buchcover`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[3/4] md:aspect-auto bg-cream-dark flex items-center justify-center min-h-[200px]">
                      <span className="text-6xl">📖</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-earth mb-1">{book.title}</h3>
                    <p className="text-leaf font-semibold text-sm mb-1">{book.subtitle}</p>
                    {book.coAuthor && (
                      <p className="text-xs text-soft-grey mb-1">{book.coAuthor}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {book.publisher && (
                        <span className="text-xs text-bark bg-cream px-2.5 py-1 rounded-full">
                          {book.publisher}
                        </span>
                      )}
                      {book.edition && (
                        <span className="text-xs text-forest bg-sage/15 px-2.5 py-1 rounded-full font-medium">
                          {book.edition}
                        </span>
                      )}
                    </div>
                    <p className="text-bark text-sm leading-relaxed mb-4">{book.description}</p>
                    {book.highlights && book.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {book.highlights.map((h, j) => (
                          <li key={j} className="text-xs text-bark flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-1.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Shop Links */}
                    {book.shops && book.shops.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-earth mb-2 flex items-center gap-1.5">
                          <ShoppingBag size={12} className="text-leaf" />
                          Erhältlich bei
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {book.shops.map((shop, k) => (
                            <a
                              key={k}
                              href={shop.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs px-3 py-1.5 rounded-full border border-sage-light/60 text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-200 font-medium"
                            >
                              {shop.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
