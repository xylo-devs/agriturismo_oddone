import { Link } from "react-router-dom";

export default function BikeTourPage() {
    return (
        <div className="route-biketour">
            <header className="section container pres-intro reveal">
                <div className="overline">Esperienza MTB &amp; E-Bike</div>
                <h1>
                    L&apos;avventura su
                    <br />
                    misura, per <em>tutti</em>.
                </h1>
                <p className="lede">
                    L&apos;Agriturismo Oddone è la porta d&apos;accesso a un paradiso del
                    cicloturismo unico e autentico. Che tu sia un atleta in cerca di sfide
                    tecniche o una famiglia desiderosa di esplorare la natura a ritmo
                    lento, abbiamo l&apos;escursione perfetta per te.
                </p>
            </header>

            <section className="section container" id="filosofia">
                <div className="pres-row reveal">
                    <div className="pres-row-media">
                        <img
                            className="pres-photo"
                            src="/images/bike-tour-collage.jfif"
                            alt="Collage di percorsi mountain bike nei boschi di Bardineto e in Val Bormida"
                        />
                    </div>
                    <div>
                        <div className="pres-num">La filosofia</div>
                        <h3>
                            Sentieri per <em>ogni livello</em>, nel cuore della Val
                            Bormida.
                        </h3>
                        <div className="body-text">
                            <p>
                                Il bello del nostro territorio è la sua incredibile
                                varietà: i fitti boschi di Bardineto e le vette della Val
                                Bormida offrono tracciati perfetti per chiunque. Insieme
                                alle nostre Guide Certificate ANMB (Accademia Nazionale di
                                Mountain Bike), abbiamo disegnato percorsi divisi per
                                livello, per garantire a tutti il massimo del divertimento
                                in totale sicurezza.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container" id="livelli">
                <div className="levels-head reveal">
                    <span className="eyebrow">Le nostre uscite guidate</span>
                    <h2 className="section-title">
                        Scegli la tua <em>avventura</em>.
                    </h2>
                </div>

                <div className="levels-grid reveal">
                    <article className="level-card lvl-easy">
                        <span className="lvl-tag">
                            <span className="lvl-dot"></span>Easy &amp; Famiglie
                        </span>
                        <h3>
                            Passeggiate e <em>natura</em>
                        </h3>
                        <p className="level-audience">
                            <b>A chi è rivolto:</b> famiglie con bambini, principianti
                            assoluti o chi vuole semplicemente godersi il paesaggio senza
                            fatica.
                        </p>
                        <p className="desc">
                            Itinerari semplici, pianeggianti o con lievissimi dislivelli,
                            su strade bianche e sentieri d&apos;alta quota molto larghi.
                            Ritmo rilassato, ideale per ammirare i boschi di faggio, fare
                            foto e respirare aria pura, magari sfruttando la comodità
                            delle nostre E-Bike.
                        </p>
                    </article>

                    <article className="level-card lvl-mid">
                        <span className="lvl-tag">
                            <span className="lvl-dot"></span>Intermedio
                        </span>
                        <h3>
                            Alla scoperta del <em>territorio</em>
                        </h3>
                        <p className="level-audience">
                            <b>A chi è rivolto:</b> chi ha già un minimo di familiarità
                            con la bici, cicloturisti e amanti dell&apos;escursionismo
                            attivo.
                        </p>
                        <p className="desc">
                            Tour panoramici che collegano la vallata ai punti più
                            suggestivi dell&apos;entroterra. Salite accessibili, rese un
                            piacere dalla pedalata assistita, e discese divertenti ma mai
                            troppo tecniche, per vivere la vera essenza della Mountain
                            Bike.
                        </p>
                    </article>

                    <article className="level-card lvl-expert">
                        <span className="lvl-tag">
                            <span className="lvl-dot"></span>Expert · Wild &amp; Technical
                        </span>
                        <h3>
                            Adrenalina e <em>single track</em>
                        </h3>
                        <p className="level-audience">
                            <b>A chi è rivolto:</b> biker esperti, amanti del freeride,
                            del downhill e dei sentieri &quot;epici&quot;.
                        </p>
                        <p className="desc">
                            Uscite ad alto tasso di adrenalina sui single track più
                            tecnici, ripidi e selvaggi della zona. Passaggi tecnici, rock
                            garden e discese mozzafiato che dai crinali montani possono
                            spingersi, grazie al nostro servizio Shuttle, fino alle
                            storiche e sfidanti linee del litorale ligure.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section pres-services" id="servizi">
                <div className="container">
                    <div className="reveal" style={{ maxWidth: "64ch" }}>
                        <span className="eyebrow">A supporto della tua uscita</span>
                        <h2>
                            I nostri servizi <em>esclusivi</em>.
                        </h2>
                    </div>

                    <div className="pres-services-grid reveal">
                        <div className="pres-service">
                            <div className="pres-num">01</div>
                            <h4>Noleggio E-MTB di ultima generazione</h4>
                            <p>
                                Grazie alla tecnologia delle nostre mountain bike
                                elettriche, anche i dislivelli più impegnativi diventano
                                accessibili a chi ha meno allenamento, permettendo a
                                gruppi con livelli diversi di pedalare insieme con il
                                sorriso.
                            </p>
                        </div>
                        <div className="pres-service">
                            <div className="pres-num">02</div>
                            <h4>Servizio Shuttle &amp; recupero</h4>
                            <p>
                                Dedicato sia a chi vuole massimizzare le discese,
                                risparmiando le gambe per i tratti tecnici, sia come
                                supporto logistico per le escursioni più lunghe.
                            </p>
                        </div>
                        <div className="pres-service">
                            <div className="pres-num">03</div>
                            <h4>La struttura bike-friendly</h4>
                            <p>
                                Al rientro da ogni uscita, a disposizione di tutti ci sono
                                la nostra Bike Room sicura e videosorvegliata,
                                l&apos;officina attrezzata per le piccole regolazioni e
                                l&apos;area lavaggio per rimettere a nuovo i mezzi.
                            </p>
                        </div>
                        <div className="pres-service">
                            <div className="pres-num">04</div>
                            <h4>Guide certificate ANMB</h4>
                            <p>
                                Accompagnati da chi conosce ogni singola pietra del
                                percorso: professionisti dell&apos;Accademia Nazionale di
                                Mountain Bike, per il massimo del divertimento in totale
                                sicurezza.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container pres-match reveal" id="perfect-match">
                <span className="eyebrow">Il &quot;perfect match&quot;</span>
                <h2>
                    Sport e <em>rigenerazione</em>.
                </h2>
                <p className="lede">
                    Il vero punto di forza dell&apos;Agriturismo Oddone è l&apos;unione
                    tra l&apos;attività all&apos;aria aperta e l&apos;accoglienza rurale.
                    Dopo aver vissuto il sentiero perfetto per le tue capacità, la
                    struttura ti accoglie con alloggi confortevoli immersi nel silenzio e
                    una cucina della tradizione pensata per ricaricare le energie, con
                    ingredienti genuini della nostra azienda agricola biologica.
                </p>
                <div className="match-cta">
                    <Link to="/alloggi" className="btn">
                        Gli alloggi <span className="arrow">→</span>
                    </Link>
                    <Link to="/ristorante" className="btn btn-outline">
                        Il ristorante <span className="arrow">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
