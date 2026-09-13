import Accommodations from "@/components/Accommodations";
import Lightbox from "@/components/Lightbox";

export const metadata = {
  title: "Alloggi — Agriturismo Oddone",
  description:
    "Comfort, calore e rigenerazione nella natura: alloggi classici con camino a legna e nuovi appartamenti premium tra pietra a vista e docce emozionali.",
};

export default function AlloggiPage() {
  return (
    <div className="route-alloggi">
      <header className="section container pres-intro reveal">
        <div className="overline">Soggiornare all&apos;Agriturismo Oddone</div>
        <h1>Comfort, calore e<br /><em>rigenerazione</em> nella natura.</h1>
        <p className="lede">Dormire all&apos;Agriturismo Oddone significa staccare la spina e immergersi in un&apos;atmosfera dove il tempo rallenta. Chi sceglie di passare qualche giorno da noi non trova semplicemente una camera, ma una vera e propria oasi di benessere progettata per rigenerare il corpo e lo spirito dopo una giornata passata all&apos;aria aperta, tra i sentieri da trekking o i percorsi in mountain bike di Bardineto.</p>
        <p className="body-text sub">La nostra accoglienza si divide in due anime distinte, nate per rispondere a ogni desiderio di comfort.</p>
      </header>

      <section className="section container" id="classica">
        <div className="pres-row reveal">
          <div className="pres-row-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pres-photo" src="/images/alloggi-tradizione.jfif" alt="Collage degli alloggi in pietra e legno dell'Agriturismo Oddone" />
          </div>
          <div>
            <div className="pres-num">Atmosfera classica</div>
            <h3>Il fascino della <em>tradizione</em>.</h3>
            <div className="body-text">
              <p>Per chi cerca il calore della tipica ospitalità di montagna, i nostri alloggi storici offrono un ambiente intimo e avvolgente. Caratterizzati da caldi soffitti in legno e arredi rustici curati nei minimi dettagli, custodiscono il fascino intramontabile del camino a legna in camera. È l&apos;esperienza perfetta per chi vuole addormentarsi con il crepitio del fuoco e svegliarsi circondato dalla quiete più assoluta.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="premium">
        <div className="pres-row flip reveal">
          <div className="pres-row-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pres-photo" src="/images/montaggio-benessere-2.jfif" alt="Collage degli alloggi, delle docce emozionali e dei boschi di Bardineto" />
          </div>
          <div>
            <div className="pres-num">Evoluzione premium</div>
            <h3>Tra <em>design</em> e benessere.</h3>
            <div className="body-text">
              <p>Per chi desidera un soggiorno esclusivo, la struttura si arricchisce di nuovissimi appartamenti rifiniti con materiali di pregio, dove l&apos;architettura d&apos;avanguardia incontra la tradizione del territorio.</p>
            </div>
          </div>
        </div>

        <div className="pres-features reveal">
          <div className="pres-feature">
            <div className="pres-num">Materiali vivi</div>
            <h4>Pietra e legno</h4>
            <p>Splendide pareti con pietra a vista si fondono con il calore del legno massiccio lavorato artigianalmente.</p>
          </div>
          <div className="pres-feature">
            <div className="pres-num">Spazi luminosi</div>
            <h4>Ambienti ampi</h4>
            <p>Zone giorno moderne e ampie camere dotate di letti king-size incastonati in strutture di design.</p>
          </div>
          <div className="pres-feature">
            <div className="pres-num">Docce emozionali</div>
            <h4>Una spa privata</h4>
            <p>Bagni moderni con sistemi di cromoterapia e illuminazione a LED integrata, per eliminare la stanchezza e regalare un relax profondo.</p>
          </div>
        </div>
      </section>

      <Accommodations />

      <section className="section pres-comfort" id="comfort">
        <div className="container">
          <div className="pres-head reveal">
            <span className="eyebrow">Tutto il comfort di cui hai bisogno</span>
            <h2 className="section-title">Indipendenza,<br />zero <em>pensieri</em>.</h2>
            <p className="lede">In ogni alloggio, classico o premium che sia, l&apos;ospite trova una struttura pensata per una totale indipendenza.</p>
          </div>

          <div className="pres-features reveal">
            <div className="pres-feature">
              <div className="pres-num">01 — Cucina</div>
              <h4>Cucine complete e indipendenti</h4>
              <p>Ogni appartamento è dotato di una cucina moderna e perfettamente attrezzata, con ampi frigoriferi e piani cottura, per gestire i propri ritmi in totale libertà.</p>
            </div>
            <div className="pres-feature">
              <div className="pres-num">02 — Connettività e clima</div>
              <h4>Sempre alla giusta temperatura</h4>
              <p>Riscaldamento perfetto e isolamento termico d&apos;avanguardia si uniscono al Wi-Fi ad alta velocità, ideale anche per qualche giorno di smart-working nella natura.</p>
            </div>
            <div className="pres-feature">
              <div className="pres-num">03 — Sport e outdoor</div>
              <h4>Servizi per chi vive il territorio</h4>
              <p>Ampi spazi di parcheggio e aree dedicate a chi vive il territorio in modo attivo, con la sicurezza di potersi rilassare al rientro.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container pres-closing reveal" id="chiusura">
        <span className="eyebrow">Un luogo dove l&apos;unico dovere è sentirsi a casa</span>
        <blockquote>Il perfetto equilibrio tra fascino rurale e moderni standard di <em>benessere</em>.</blockquote>
        <p className="lede" style={{ maxWidth: "60ch", margin: "32px auto 0" }}>
          Che si tratti di una fuga romantica di un fine settimana o di una vacanza più lunga con la famiglia o gli amici, l&apos;Agriturismo Oddone accoglie i suoi ospiti tra natura e comfort.
        </p>
      </section>

      <Lightbox groupSelector=".accom-collage" />
    </div>
  );
}
