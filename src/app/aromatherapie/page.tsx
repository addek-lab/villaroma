import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Wind, BookOpen } from "lucide-react";

export default function AromatherapiePage() {
  return (
    <div className="pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/villaroma/hero_lavender.png"
            alt="Aromatherapie in traumhaftem Lavendelfeld"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Reverted to original lighter lavender gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[--color-lavender-dark]/80 via-[--color-lavender-dark]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[--color-lavender-light] mb-6 animate-fade-in-up drop-shadow-md">
              <Leaf size={18} />
              <span className="text-sm font-medium uppercase tracking-widest !text-white drop-shadow-md">Die Heilkraft der Natur</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white leading-tight mb-6 animate-fade-in-up delay-100 drop-shadow-xl" style={{ opacity: 0 }}>
              Aromatherapie
              <br />
              <span className="!text-white">&amp; Duftdesign</span>
            </h1>
            <p className="!text-white text-lg sm:text-xl max-w-lg mb-10 leading-relaxed animate-fade-in-up delay-200 drop-shadow-lg font-medium" style={{ opacity: 0 }}>
              Entdecken Sie die gesundheitsfördernde Wirkung natürlicher Düfte für Körper, Geist und Seele.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ INTRO ═══════════ */}
      <section className="section-padding bg-[--color-lavender-light]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[--color-lavender-dark] mb-4 block">Über 40 Jahre Erfahrung</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[--color-lavender-dark]">
              Ganzheitliche Aromapraxis
            </h2>
            <div className="w-20 h-1 bg-[--color-lavender] rounded-full mb-8"></div>
            <p className="text-bark text-lg leading-relaxed mb-4">
              Maria M. Kettenring ist seit vier Jahrzehnten eine anerkannte Aromaexpertin, Autorin und &raquo;Duftbotschafterin&laquo; mit tiefgreifendem Wissen und umfangreicher Praxiserfahrung in Aromatherapie.
            </p>
            <p className="text-bark leading-relaxed mb-8">
              Seit Mitte der 1980er-Jahre hat sie die Aroma- und Duftküche entwickelt. Als ausgebildete Trainerin für Waldbaden und Natur-Resilienz teilt sie ihre Leidenschaft für die Heilkraft ätherischer Öle und die Balance mit und in der Natur.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/villaroma/aromatherapy_skincare_v2.png"
                alt="Ätherische Öle Beratung"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-[--color-lavender-dark] mb-4 block">Schwerpunkte</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[--color-lavender-dark]">
              Die Welt der Düfte
            </h2>
            <p className="text-bark text-lg">
              Ätherische Öle sind vielseitig einsetzbar und begleiten uns auf unterschiedlichste Weise im Alltag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Duftberatung */}
            <div className="card p-8 border-t-4" style={{ borderColor: 'var(--color-lavender-dark)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[--color-lavender-light] mb-6">
                <Leaf size={28} className="text-[--color-lavender-dark]" />
              </div>
              <h3 className="text-xl font-bold text-[--color-lavender-dark] mb-3">Gesundheitsprävention</h3>
              <p className="text-bark leading-relaxed mb-6">
                Individuelle Beratung zur Auswahl und Kombination von Duftmischungen für das eigene Wohlbefinden, 
                Stressabbau und die Stärkung der inneren Balance.
              </p>
            </div>

            {/* Aromaküche */}
            <div className="card p-8 border-t-4" style={{ borderColor: 'var(--color-lavender-dark)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[--color-lavender-light] mb-6">
                <BookOpen size={28} className="text-[--color-lavender-dark]" />
              </div>
              <h3 className="text-xl font-bold text-[--color-lavender-dark] mb-3">Aromaküche</h3>
              <p className="text-bark leading-relaxed mb-6">
                Als Pionierin der Aromaküche verbindet Maria raffinierten Geschmack mit der Heilkraft der Öle. 
                Erleben Sie neue Geschmackswelten mit Zitrusölen und mehr.
              </p>
              <Link href="/buecher" className="text-sm font-bold text-[--color-lavender-dark] hover:text-[--color-lavender] flex items-center gap-1">
                Bücher entdecken <ArrowRight size={14} />
              </Link>
            </div>

            {/* Raumbeduftung */}
            <div className="card p-8 border-t-4" style={{ borderColor: 'var(--color-lavender-dark)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[--color-lavender-light] mb-6">
                <Wind size={28} className="text-[--color-lavender-dark]" />
              </div>
              <h3 className="text-xl font-bold text-[--color-lavender-dark] mb-3">Scent Design</h3>
              <p className="text-bark leading-relaxed mb-6">
                Professionelle Raum- und Objektbeduftung für Praxen, Wohnräume und Seminare, um eine 
                atmosphärische und heilsame Umgebung zu schaffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[--color-lavender-dark]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Sparkles size={48} className="text-[--color-lavender-light] mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Möchten Sie mehr über Aromatherapie lernen?
          </h2>
          <p className="text-[--color-lavender-light] text-lg mb-10 max-w-2xl mx-auto">
            Besuchen Sie eines der Seminare oder praxisnahen Webinare, um tiefer in die faszinierende Welt der Düfte einzutauchen.
          </p>
          <Link href="/seminare" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[--color-lavender-dark] rounded-full font-bold transition hover:bg-[--color-lavender-light] hover:scale-105">
            Zu den Seminaren <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ═══════════ DECORATIVE FOOTER ACCENT ═══════════ */}
      <div className="w-full relative h-[120px] sm:h-[180px] lg:h-[250px] bg-white border-t border-[--color-lavender-light] overflow-hidden">
        <Image
          src="/villaroma/lavender_floral_accent.png"
          alt="Dekoratives Lavendel-Element"
          fill
          className="object-cover object-center opacity-90 mix-blend-multiply"
        />
      </div>
    </div>
  );
}
