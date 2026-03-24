import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | Villaroma — Maria M. Kettenring",
    description: "Impressum und rechtliche Hinweise von Villaroma — Maria M. Kettenring.",
};

export default function Impressum() {
    return (
        <div className="pt-32 pb-24 section-padding min-h-screen bg-sage/5">
            <div className="max-w-3xl mx-auto prose prose-sage prose-a:text-forest hover:prose-a:text-leaf">
                <h1 className="text-4xl text-earth font-bold mb-8">Impressum</h1>

                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-bark mb-4">
                    <strong>Maria M. Kettenring</strong><br />
                    Villaroma<br />
                    [Straße und Hausnummer hier einfügen]<br />
                    [PLZ, Ort hier einfügen]
                </p>

                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Kontakt</h2>
                <p className="text-bark mb-4">
                    Telefon: [Telefonnummer hier einfügen]<br />
                    E-Mail: info@villaroma.de
                </p>

                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-bark mb-4">
                    Maria M. Kettenring<br />
                    [Adresse hier einfügen]
                </p>

                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
                <p className="text-bark mb-4 text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Haftung für Links</h2>
                <p className="text-bark mb-4 text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Urheberrecht</h2>
                <p className="text-bark mb-4 text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
                
                <h2 className="text-2xl text-earth font-semibold mt-8 mb-4">Bildnachweise</h2>
                <p className="text-bark mb-4">
                    Bilder und Fotos: Maria M. Kettenring, Primavera Akademie, KI-generierte Illustrationen.
                </p>
            </div>
        </div>
    );
}
