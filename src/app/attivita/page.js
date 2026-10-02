import Link from "next/link";

export const metadata = {
  title: "Attività — Agriturismo Oddone",
  description:
    "Vivi l'outdoor a Bardineto: mountain bike & e-bike, trekking e cammini, passeggiate a cavallo e raccolta funghi nei 93 ettari della nostra tenuta privata in Val Bormida.",
};

export default function AttivitaPage() {
  return (
    <div className="route-attivita">
      <header className="container attivita-opening reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/jpeg-1a.jfif" alt="" />
        <div className="attivita-opening-text">
          <h1>Emozioni su misura nella natura di Bardineto.</h1>
          <p>All&apos;Agriturismo Oddone, la natura non si guarda solo dal finestrino: si vive sulla propria pelle. I nostri 93 ettari di tenuta privata — incastonati nella splendida cornice della Val Bormida e all&apos;ombra del Monte Carmo — sono un immenso parco giochi naturale a tua completa disposizione.</p>
          <p>Che tu stia cercando una scarica di adrenalina in sella, una cavalcata nel silenzio o la pace dei nostri boschi, abbiamo l&apos;avventura perfetta per farti innamorare di questo territorio sospeso tra il mare e le Alpi Liguri.</p>
        </div>
      </header>

      <section className="section container act" id="mtb">
        <div className="act-row reveal">
          <div className="act-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="act-photo" src="/images/attivita-mtb.jfif" alt="Collage di escursioni in mountain bike nei boschi e sui crinali di Bardineto" />
          </div>
          <div>
            <span className="act-kicker">01 · Su due ruote</span>
            <h3>Mountain Bike &amp; E-Bike: <em>sentieri epici</em> per tutti.</h3>
            <div className="body-text">
              <p>Sali in sella e sfida i crinali tra i monti e il mare. Bardineto e la Val Bormida sono un paradiso indiscusso per le due ruote, lontano dal caos dei bike park affollati. Accompagnato dalle nostre Guide Certificate ANMB, potrai esplorare tracce uniche disegnate su misura per te.</p>
            </div>
            <div className="act-tiers">
              <div className="act-tier">
                <b>Per le famiglie e i principianti</b>
                <span>Passeggiate rilassanti su sentieri larghi all&apos;ombra dei faggi, perfette da godersi con la spinta dolce delle nostre E-Bike a noleggio.</span>
              </div>
              <div className="act-tier">
                <b>Per gli esperti</b>
                <span>Single track tecnici e discese adrenaliniche che dai boschi d&apos;alta quota possono spingersi — grazie al nostro servizio Shuttle privato — fino alle storiche linee del litorale ligure.</span>
              </div>
            </div>
            <div className="act-cta">
              <Link href="/bike-tour" className="btn">Scegli il tuo tour guidato <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container act" id="trekking">
        <div className="act-row flip reveal">
          <div className="act-media">
            <video
              className="act-video"
              width="848"
              height="480"
              controls
              playsInline
              preload="none"
              poster="/images/attivita-trekking.jfif"
              aria-label="Video delle escursioni trekking a Bardineto"
            >
              <source src="/videos/trekking.mp4" type="video/mp4" />
              Il tuo browser non supporta la riproduzione video. <a href="/videos/trekking.mp4">Scarica il video del trekking</a>.
            </video>
          </div>
          <div>
            <span className="act-kicker">02 · A piedi</span>
            <h3>Trekking &amp; Cammini: sulle orme della <em>storia</em>.</h3>
            <div className="body-text">
              <p>Allaccia gli scarponi e lascia che il sentiero ti guidi. Dimentica le auto: all&apos;Agriturismo Oddone i percorsi partono direttamente dalla tua camera.</p>
              <p>Camminerai all&apos;ombra della seconda faggeta più grande d&apos;Europa, respirando aria purissima e scoprendo la storia del territorio, tra antiche fortificazioni napoleoniche e i ruderi del suggestivo castello medievale dei Marchesi Del Carretto. Dai sentieri pianeggianti per tutta la famiglia fino alle ascese più panoramiche sulle vette della valle, ogni passo è una scoperta.</p>
            </div>
            <div className="act-cta">
              <Link href="/contatti" className="btn">Esplora le nostre tracce <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container act" id="cavallo">
        <div className="act-row reveal">
          <div className="act-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="act-photo" src="/images/montaggio-cavalli-2.jfif" alt="Collage delle passeggiate a cavallo nella tenuta dell'Agriturismo Oddone" />
          </div>
          <div>
            <span className="act-kicker">03 · Il ritmo lento del &quot;wild&quot;</span>
            <h3>Passeggiate a cavallo, nel modo più <em>nobile</em> e antico.</h3>
            <div className="body-text">
              <p>Connettiti con la natura nel modo più nobile e antico. C&apos;è un modo speciale di esplorare i nostri boschi, ed è farlo a passo di cavallo. In collaborazione con centri ippici locali e guide esperte, organizziamo escursioni su misura pensate anche per chi non è mai salito in sella.</p>
              <p>Sentire il passo regolare del cavallo sul sentiero, attraversare radure silenziose e fitti boschi di faggio è un&apos;esperienza profondamente rigenerante per staccare completamente la spina.</p>
            </div>
            <div className="act-cta">
              <Link href="/contatti" className="btn">Prenota un&apos;escursione in sella <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container act" id="funghi">
        <div className="act-row flip reveal">
          <div className="act-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="act-photo" src="/images/attivita-funghi.jfif" alt="Collage della raccolta dei funghi porcini nei boschi di Bardineto" />
          </div>
          <div>
            <span className="act-kicker">04 · La caccia al &quot;tesoro&quot;</span>
            <h3>Raccolta funghi <em>esclusiva</em>, nei boschi privati.</h3>
            <div className="body-text">
              <p>Il brivido della ricerca nei nostri boschi privati. Bardineto è famosa in tutta Italia per la qualità dei suoi funghi, ma con noi avrai un privilegio unico: la possibilità di cercare il pregiato fungo porcino direttamente nei 93 ettari di boschi privati della nostra tenuta. Un&apos;esperienza intima, rilassante e rispettosa dell&apos;ambiente.</p>
              <p>E la parte migliore? Al rientro, quel profumo di bosco lo ritroverai direttamente a tavola, cucinato secondo la tradizione nella nostra cucina biologica.</p>
            </div>
            <div className="act-cta">
              <Link href="/contatti" className="btn">Richiedi il tuo pass riservato <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pres-finale" id="dalla-terra">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "64ch" }}>
            <span className="eyebrow">Il finale perfetto · sport e rigenerazione</span>
            <h2>Dalla terra <em>alla tavola</em>.</h2>
            <p className="lede">Ogni singola avventura della giornata trova il suo finale perfetto attorno alla nostra tavola conviviale. Dopo i sentieri, le camminate o le cavalcate, ti aspettano i piatti genuini della nostra tradizione preparati con la carne biologica del nostro allevamento e i frutti della nostra terra, ideali per ricaricare le energie.</p>
          </div>
        </div>
      </section>

      <section className="section container pres-invite reveal" id="invito">
        <span className="eyebrow">Ti aspettiamo a Bardineto</span>
        <h2>La tua fuga <em>&quot;wild&quot;</em> ti aspetta.</h2>
        <p className="lede">Sei pronto a vivere la tua fuga &quot;wild&quot; sospeso tra il mare e la montagna? Scegli la tua esperienza ideale: un weekend d&apos;azione in sella, una sosta rigenerante all&apos;insegna del buon cibo o una vacanza di totale relax nel verde.</p>
        <div className="invite-cta">
          <Link href="/contatti" className="btn">Scegli la tua esperienza <span className="arrow">→</span></Link>
        </div>
      </section>
    </div>
  );
}
