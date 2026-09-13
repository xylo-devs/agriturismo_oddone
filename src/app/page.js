import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata = {
  title: "Agriturismo Fratelli Oddone — Un'avventura lunga trent'anni",
  description:
    "Dal 1996 a Bardineto: 93 ettari di boschi e pascoli, cucina di territorio, ospitalità e avventura wild nel cuore della Liguria.",
};

export default function HomePage() {
  return (
    <div className="route-home">
      <Hero />

      <header className="container pres-intro reveal">
        <div className="overline">Agriturismo Fratelli Oddone</div>
        <h1>Un&apos;avventura lunga<br /><em>trent&apos;anni</em>.</h1>
        <p className="lede">
          Dal 1996, tra natura e sapori: novantatré ettari di boschi e pascoli a Bardineto,
          e l&apos;anima più autentica e &quot;wild&quot; della Liguria.
        </p>
        <div className="pres-rule" aria-hidden="true"></div>
      </header>

      <section className="section container" id="origini">
        <div className="pres-row reveal">
          <div className="pres-row-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pres-photo wide" src="/images/inizio.png" alt="La cascina e l'insegna Agriturismo Oddone a Bardineto" />
          </div>
          <div>
            <span className="eyebrow">Le origini</span>
            <h3>Dove tutto ha avuto <em>inizio</em>.</h3>
            <div className="body-text">
              <p>Nata a metà degli anni Novanta, la nostra avventura è iniziata come una scommessa d&apos;amore per il territorio di Bardineto. In un&apos;epoca in cui il turismo rurale muoveva i primi passi, abbiamo scelto di aprire le porte della nostra azienda agricola biologica per condividere non solo i nostri spazi, ma uno stile di vita.</p>
              <p>Da allora, i nostri 93 ettari di boschi e pascoli sono diventati la casa di chiunque cerchi l&apos;anima più autentica e &quot;wild&quot; della Liguria.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="oggi">
        <div className="pres-head reveal">
          <span className="eyebrow">L&apos;esperienza, oggi</span>
          <h2 className="section-title">Gusto, riposo e <em>adrenalina</em>.</h2>
        </div>

        <div style={{ marginTop: "clamp(56px, 7vw, 100px)" }}>
          <div className="pres-row reveal">
            <div className="pres-row-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pres-photo" src="/images/dsc-009-a.jfif" alt="Prodotti del territorio: porcini, olio e conserve della casa" />
            </div>
            <div>
              <div className="pres-num">01 — Ristorazione</div>
              <h3>Il sapore della <em>tradizione</em>.</h3>
              <div className="body-text">
                <p>La nostra cucina è il cuore pulsante del recupero post-avventura. Utilizziamo esclusivamente carne di nostra produzione — bovini di razza Piemontese allevati al pascolo — e ingredienti del nostro orto. Dalla polenta bianca ai funghi porcini raccolti nei nostri boschi, ogni piatto è un tributo alla storia gastronomica della Val Bormida.</p>
              </div>
            </div>
          </div>

          <div className="pres-row flip reveal">
            <div className="pres-row-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pres-photo" src="/images/confort.jpg" alt="La cascina restaurata in pietra, illuminata all'imbrunire" />
            </div>
            <div>
              <div className="pres-num">02 — Ospitalità</div>
              <h3>Il comfort della <em>semplicità</em>.</h3>
              <div className="body-text">
                <p>Il pernottamento all&apos;Agriturismo Oddone è pensato per rigenerare corpo e mente. I nostri alloggi, nati dal restauro dell&apos;antica cascina, offrono un rifugio caldo e silenzioso, dove la semplicità è sinonimo di benessere. Che tu sia un biker o un trekker, qui il risveglio è sempre accompagnato dal profumo della natura.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: "clamp(64px, 9vw, 120px)" }}>
          <div className="pres-num">03 — Attività</div>
          <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.01em", margin: "16px 0 0" }}>
            Il cuore <em style={{ fontStyle: "italic", color: "var(--terracotta-deep)" }}>wild</em> di Bardineto.
          </h3>
          <p className="lede" style={{ marginTop: 18, maxWidth: "52ch" }}>
            Siamo il punto di partenza per esplorare sentieri epici, lontano dalla folla.
          </p>

          <div className="pres-activities">
            <div className="pres-activity">
              <div className="pres-num">MTB &amp; E-Bike</div>
              <h4>Tour guidati</h4>
              <p>Itinerari con certificazione ANMB per ogni livello, dai principianti ai rider più esperti.</p>
            </div>
            <div className="pres-activity">
              <div className="pres-num">A Cavallo</div>
              <h4>Escursioni</h4>
              <p>Per vivere la montagna con un ritmo lento e nobile, tra pascoli e crinali.</p>
            </div>
            <div className="pres-activity">
              <div className="pres-num">Trekking &amp; Funghi</div>
              <h4>Tra i faggi</h4>
              <p>Chilometri di tracce nel bosco e la possibilità di raccogliere i tesori del sottobosco nella nostra proprietà.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pres-futuro" id="futuro">
        <div className="container">
          <div className="pres-futuro-intro reveal">
            <span className="eyebrow">Il futuro</span>
            <h2>Nuova aria,<br />servizi <em>esclusivi</em>.</h2>
            <p className="lede">L&apos;avventura iniziata nel 1996 non si ferma, ma respira una nuova aria. Stiamo lavorando a progetti di ampliamento ambiziosi per elevare ancora di più l&apos;esperienza dei nostri ospiti — per trasformare l&apos;Agriturismo Oddone in un&apos;oasi di relax totale.</p>
          </div>

          <div className="pres-futuro-grid reveal">
            <div className="pres-future">
              <div className="pres-num">01</div>
              <h4>Nuove strutture di ospitalità</h4>
              <p>Suite esclusive che fondono design moderno e materiali naturali, per un contatto ancora più intimo con il bosco.</p>
            </div>
            <div className="pres-future">
              <div className="pres-num">02</div>
              <h4>Area wellness rigenerante</h4>
              <p>Percorsi benessere dedicati al recupero muscolare degli sportivi e al relax dei sensi: ogni soggiorno diventa un&apos;esperienza di cura totale.</p>
            </div>
            <div className="pres-future">
              <div className="pres-num">03</div>
              <h4>Servizi su misura</h4>
              <p>Dallo shuttle professionale per le vette più alte a nuove esperienze enogastronomiche d&apos;eccellenza.</p>
            </div>
          </div>

          <div className="pres-cta-row reveal">
            <a href="#futuro" className="btn btn-light-solid">Scopri i nuovi progetti <span className="arrow">→</span></a>
            <Link href="/contatti" className="btn btn-light">Prenota la tua avventura</Link>
          </div>
        </div>
      </section>

      <section className="section container pres-closing reveal" id="perche">
        <span className="eyebrow">Perché scegliere noi</span>
        <blockquote>Non vendiamo una camera o un pasto. Vendiamo una <em>storia</em> iniziata trent&apos;anni fa.</blockquote>
        <p className="lede" style={{ maxWidth: "56ch", margin: "32px auto 0" }}>
          Una storia che continua a rinnovarsi ogni giorno, con lo stesso entusiasmo del primo momento. Benvenuti nell&apos;avventura.
        </p>
        <div className="sign">— I Fratelli Oddone</div>
      </section>
    </div>
  );
}
