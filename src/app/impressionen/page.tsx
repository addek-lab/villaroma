"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Maximize2, Camera, ArrowRight, Filter } from "lucide-react";

type Category = "Alle" | "Waldbaden" | "Seminare" | "Natur & Pflanzen" | "Reisen & Exkursionen" | "Aromaküche";

interface GalleryImage {
  optimized: string;
  original: string;
  category: Category;
}

const images: GalleryImage[] = [
  { optimized: "img-6905.webp", original: "IMG_6905.jpeg", category: "Waldbaden" },
  { optimized: "img-5479.webp", original: "IMG_5479.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-6484.webp", original: "IMG_6484.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-6773.webp", original: "IMG_6773.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-6863.webp", original: "IMG_6863.jpeg", category: "Waldbaden" },
  { optimized: "img-7369.webp", original: "IMG_7369.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-7423.webp", original: "IMG_7423.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-7427.webp", original: "IMG_7427.jpeg", category: "Natur & Pflanzen" },
  { optimized: "fullsizerender.webp", original: "FullSizeRender.jpeg", category: "Seminare" },
  { optimized: "img-2694.webp", original: "IMG_2694.jpeg", category: "Aromaküche" },
  { optimized: "img-2715.webp", original: "IMG_2715.jpeg", category: "Aromaküche" },
  { optimized: "img-6524.webp", original: "IMG_6524.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-6878.webp", original: "IMG_6878.jpeg", category: "Waldbaden" },
  { optimized: "img-6949.webp", original: "IMG_6949.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-7089.webp", original: "IMG_7089.jpeg", category: "Waldbaden" },
  { optimized: "img-7144.webp", original: "IMG_7144.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-9540.webp", original: "IMG_9540.jpeg", category: "Seminare" },
  { optimized: "img-9679.webp", original: "IMG_9679.jpeg", category: "Seminare" },
  { optimized: "img-6064.webp", original: "IMG_6064.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-6870.webp", original: "IMG_6870.jpeg", category: "Waldbaden" },
  { optimized: "img-9677.webp", original: "IMG_9677.jpeg", category: "Seminare" },
  { optimized: "img-6048.webp", original: "IMG_6048.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-6047.webp", original: "IMG_6047.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-6950.webp", original: "IMG_6950.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-7215.webp", original: "IMG_7215.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-9490.webp", original: "IMG_9490.jpeg", category: "Seminare" },
  { optimized: "img-9724.webp", original: "IMG_9724.jpeg", category: "Seminare" },
  { optimized: "img-6900.webp", original: "IMG_6900.jpeg", category: "Waldbaden" },
  { optimized: "d1e87b3c-4fce-483e-be99-9e8967a27353.webp", original: "d1e87b3c-4fce-483e-be99-9e8967a27353.jpeg", category: "Aromaküche" },
  { optimized: "img-7143.webp", original: "IMG_7143.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-6481.webp", original: "IMG_6481.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-7357.webp", original: "IMG_7357.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-5440.webp", original: "IMG_5440.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-3919.webp", original: "IMG_3919.jpeg", category: "Aromaküche" },
  { optimized: "img-6998.webp", original: "IMG_6998.jpeg", category: "Waldbaden" },
  { optimized: "img-9541.webp", original: "IMG_9541.jpeg", category: "Seminare" },
  { optimized: "img-6483.webp", original: "IMG_6483.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "0bfc357c-d56a-4fd5-a2eb-5c8f9c0a16b4.webp", original: "0bfc357c-d56a-4fd5-a2eb-5c8f9c0a16b4.JPG", category: "Seminare" },
  { optimized: "img-5444.webp", original: "IMG_5444.jpeg", category: "Natur & Pflanzen" },
  { optimized: "img-7119.webp", original: "IMG_7119.jpeg", category: "Waldbaden" },
  { optimized: "img-3920.webp", original: "IMG_3920.jpeg", category: "Aromaküche" },
  { optimized: "img-6060.webp", original: "IMG_6060.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "img-7356.webp", original: "IMG_7356.jpeg", category: "Reisen & Exkursionen" },
  { optimized: "d897c1f4-04b2-405a-b744-6c2bb7395662.webp", original: "d897c1f4-04b2-405a-b744-6c2bb7395662.JPG", category: "Seminare" },
  { optimized: "d5a96963-6f2b-4951-80d9-c39e7dcdf236.webp", original: "d5a96963-6f2b-4951-80d9-c39e7dcdf236.jpeg", category: "Aromaküche" },
  { optimized: "807c7286-47b7-43e0-b56e-b8e182080952.webp", original: "807c7286-47b7-43e0-b56e-b8e182080952.JPG", category: "Seminare" },
  { optimized: "83744d23-b853-4732-8332-ae62262e8b7e.webp", original: "83744d23-b853-4732-8332-ae62262e8b7e.JPG", category: "Waldbaden" },
  { optimized: "img-6853.webp", original: "IMG_6853.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6869-2.webp", original: "IMG_6869 2.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6880.webp", original: "IMG_6880.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6896.webp", original: "IMG_6896.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6904-2.webp", original: "IMG_6904 2.jpg", category: "Natur & Pflanzen" },
  { optimized: "img-6912.webp", original: "IMG_6912.jpg", category: "Seminare" },
  { optimized: "img-6916.webp", original: "IMG_6916.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6919.webp", original: "IMG_6919.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6944.webp", original: "IMG_6944.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6948.webp", original: "IMG_6948.jpg", category: "Natur & Pflanzen" },
  { optimized: "img-6949-prov.webp", original: "IMG_6949.jpg", category: "Natur & Pflanzen" },
  { optimized: "img-6977-3.webp", original: "IMG_6977 3.jpg", category: "Natur & Pflanzen" },
  { optimized: "img-6993.webp", original: "IMG_6993.jpg", category: "Seminare" },
  { optimized: "img-6994.webp", original: "IMG_6994.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6995.webp", original: "IMG_6995.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-6996.webp", original: "IMG_6996.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7003.webp", original: "IMG_7003.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7010.webp", original: "IMG_7010.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7012.webp", original: "IMG_7012.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7087.webp", original: "IMG_7087.jpg", category: "Seminare" },
  { optimized: "img-7089-3.webp", original: "IMG_7089 3.jpg", category: "Seminare" },
  { optimized: "img-7095.webp", original: "IMG_7095.jpg", category: "Seminare" },
  { optimized: "img-7106.webp", original: "IMG_7106.jpg", category: "Seminare" },
  { optimized: "img-7112.webp", original: "IMG_7112.jpg", category: "Seminare" },
  { optimized: "img-7119-prov.webp", original: "IMG_7119.jpg", category: "Seminare" },
  { optimized: "img-7136.webp", original: "IMG_7136.jpg", category: "Seminare" },
  { optimized: "img-7151.webp", original: "IMG_7151.jpg", category: "Seminare" },
  { optimized: "img-7165.webp", original: "IMG_7165.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7166.webp", original: "IMG_7166.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7180.webp", original: "IMG_7180.jpg", category: "Seminare" },
  { optimized: "img-7184.webp", original: "IMG_7184.jpg", category: "Reisen & Exkursionen" },
  { optimized: "img-7186.webp", original: "IMG_7186.jpg", category: "Reisen & Exkursionen" },
];

const categories: Category[] = ["Alle", "Waldbaden", "Seminare", "Natur & Pflanzen", "Reisen & Exkursionen", "Aromaküche"];

const categoryColors: Record<Category, string> = {
  "Alle": "bg-forest text-white",
  "Waldbaden": "bg-forest/10 text-forest border-forest/20",
  "Seminare": "bg-lavender-dark/10 text-lavender-dark border-lavender-dark/20",
  "Natur & Pflanzen": "bg-leaf/10 text-leaf border-leaf/20",
  "Reisen & Exkursionen": "bg-bark/10 text-bark border-bark/20",
  "Aromaküche": "bg-amber-100 text-amber-800 border-amber-200",
};

const categoryActiveColors: Record<Category, string> = {
  "Alle": "bg-forest text-white shadow-lg shadow-forest/25",
  "Waldbaden": "bg-forest text-white shadow-lg shadow-forest/25",
  "Seminare": "bg-lavender-dark text-white shadow-lg shadow-lavender-dark/25",
  "Natur & Pflanzen": "bg-leaf text-white shadow-lg shadow-leaf/25",
  "Reisen & Exkursionen": "bg-bark text-white shadow-lg shadow-bark/25",
  "Aromaküche": "bg-amber-600 text-white shadow-lg shadow-amber-600/25",
};

export default function ImpressionenPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");

  const filteredImages = activeCategory === "Alle"
    ? images
    : images.filter(img => img.category === activeCategory);

  const categoryCount = (cat: Category) =>
    cat === "Alle" ? images.length : images.filter(i => i.category === cat).length;

  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* ═══════════ HERO ═══════════ */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
            <span className="flex items-center justify-center gap-2 text-leaf mb-4 animate-fade-in">
                <Camera size={20} />
                <span className="text-sm font-semibold uppercase tracking-widest">Impressionen</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                Einblicke in die <span className="text-forest">Natur & Arbeit</span>
            </h1>
            <p className="text-bark text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
                Momente aus dem Wald, Eindrücke von Seminaren und die Schönheit der Pflanzenwelt. 
                Lassen Sie sich von der heilsamen Atmosphäre inspirieren.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sage via-forest to-sage mx-auto rounded-full animate-fade-in delay-200" />
        </div>
      </section>

      {/* ═══════════ CATEGORY FILTER ═══════════ */}
      <section className="px-4 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Filter size={16} className="text-bark" />
            <span className="text-sm font-medium text-bark">Kategorie wählen</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300
                  ${activeCategory === cat
                    ? categoryActiveColors[cat]
                    : `${categoryColors[cat]} hover:scale-105`
                  }
                `}
              >
                {cat}
                <span className={`ml-1.5 text-xs font-normal ${activeCategory === cat ? "opacity-80" : "opacity-60"}`}>
                  ({categoryCount(cat)})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY GRID ═══════════ */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-bark text-lg">Keine Bilder in dieser Kategorie.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredImages.map((img) => (
                <div 
                  key={img.optimized} 
                  className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  onClick={() => setSelectedImage(img.optimized)}
                >
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${categoryColors[img.category]} border`}>
                      {img.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 size={20} className="text-forest" />
                      </div>
                  </div>
                  <Image
                    src={`/villaroma/images/gallery/${img.optimized}`}
                    alt={`Villaroma Impression — ${img.category}`}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ LIGHTBOX ═══════════ */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-earth/95 flex items-center justify-center p-4 sm:p-8 animate-fade-in"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                onClick={() => setSelectedImage(null)}
            >
                <X size={24} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <Image
                    src={`/villaroma/images/gallery/${selectedImage}`}
                    alt="Lightbox view"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
      )}

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-forest py-20 px-4 text-center text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-sage rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Möchten Sie dabei sein?</h2>
            <p className="text-white/80 text-lg mb-10">
                Erleben Sie die Waldmedizin und das Waldbaden hautnah in einem meiner Seminare.
            </p>
            <Link href="/seminare" className="btn-primary !bg-white !text-forest hover:!bg-sage-light">
                Zu den Seminaren <ArrowRight size={18} />
            </Link>
        </div>
      </section>
    </div>
  );
}
