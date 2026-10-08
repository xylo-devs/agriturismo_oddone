import Lightbox from "../components/Lightbox";
import MenuModal from "../components/MenuModal";

export default function RistorantePage() {
    return (
        <div className="route-ristorante">
            <section className="menu-feature">
                <div className="container menu-feature-inner">
                    <div>
                        <span className="eyebrow">Aggiornato ogni mese</span>
                        <h2>
                            Il menù <em>del mese</em>.
                        </h2>
                        <p>
                            Le proposte di stagione, scritte a mano dalla nostra cucina.
                            Sfoglialo qui, senza cambiare pagina.
                        </p>
                    </div>
                    <MenuModal />
                </div>
            </section>

            <header className="section container pres-intro reveal">
                <div className="overline">Benvenuti all&apos;Agriturismo Oddone</div>
                <h1>
                    Dove la terra
                    <br />
                    detta il <em>ritmo</em>.
                </h1>
                <p className="lede">
                    Immaginate un luogo dove il menù non è una lista fissa, ma un
                    algoritmo naturale che si aggiorna costantemente in base al sole, alla
                    pioggia e al bosco. La nostra cucina è una sinergia perfetta tra il
                    rispetto della tradizione ligure-piemontese e un&apos;esperienza
                    sensoriale dinamica, scandita dall&apos;autentica produzione naturale
                    a filiera zero.
                </p>
                <p className="body-text sub">
                    Ecco come si evolve la nostra tavola attraverso le stagioni, unendo il
                    calore dell&apos;ospitalità a un viaggio del gusto in continua
                    evoluzione.
                </p>
            </header>

            <section className="section container" id="primavera-estate">
                <div className="pres-row reveal">
                    <div className="pres-row-media">
                        <img
                            className="pres-photo"
                            src="/images/food_5.jpeg"
                            alt="Taglieri di antipasti misti: torte verdi, salumi, vitello tonnato"
                        />
                    </div>
                    <div>
                        <div className="pres-num">Primavera &amp; Estate</div>
                        <h3>
                            La rinascita della <em>terra</em>.
                        </h3>
                        <div className="body-text">
                            <p>
                                Quando la natura si risveglia a Bardineto, la nostra
                                cucina si accende di freschezza, colori e profumi intensi.
                                È il momento della leggerezza e della celebrazione
                                dell&apos;orto.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="menu reveal">
                    <div className="menu-course">
                        <span className="course-label">L&apos;inizio</span>
                        <div>
                            <p className="dish">Frittate di stagione</p>
                            <p className="dish">
                                Torte verdi{" "}
                                <span>Custodi di erbe spontanee e sapori delicati.</span>
                            </p>
                        </div>
                    </div>
                    <div className="menu-course">
                        <span className="course-label">I primi del sole</span>
                        <div>
                            <p className="dish">Crepes con ricotta e spinaci</p>
                            <p className="dish">
                                Risotti con verdure di stagione{" "}
                                <span>
                                    Pasta fresca fatta in casa, profumi d&apos;estate.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="menu-course">
                        <span className="course-label">I secondi</span>
                        <div>
                            <p className="dish">Roast-beef d&apos;autore</p>
                            <p className="dish">
                                Coniglio alla ligure{" "}
                                <span>Cucinato con olive e aromi del territorio.</span>
                            </p>
                        </div>
                    </div>
                    <div className="menu-course">
                        <span className="course-label">Il dolce</span>
                        <div>
                            <p className="dish">Panna cotta ai frutti di bosco</p>
                            <p className="dish">Tiramisù</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section season-winter" id="autunno-inverno">
                <div className="container">
                    <div className="pres-row flip reveal">
                        <div className="pres-row-media">
                            <img
                                className="pres-photo"
                                src="/images/food_3.jpeg"
                                alt="Sformato con crema e funghi porcini affettati"
                            />
                        </div>
                        <div>
                            <div className="pres-num">Autunno &amp; Inverno</div>
                            <h3>
                                Il calore del <em>bosco</em>.
                            </h3>
                            <div className="body-text">
                                <p>
                                    Quando le foglie cambiano colore e l&apos;aria si fa
                                    frizzante, la tavola si trasforma in un rifugio
                                    accogliente, che celebra i sapori intensi della terra
                                    e della caccia.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="menu reveal">
                        <div className="menu-course">
                            <span className="course-label">Antipasti</span>
                            <div>
                                <p className="dish">
                                    Cuori di polenta con cardo e gorgonzola
                                </p>
                                <p className="dish">Panizza dorata e croccante</p>
                                <p className="dish">Voul au vent con funghi porcini</p>
                            </div>
                        </div>
                        <div className="menu-course">
                            <span className="course-label">Pasta &amp; polenta</span>
                            <div>
                                <p className="dish">Polenta bianca al sugo di porcini</p>
                                <p className="dish">Tagliatelle al sugo della casa</p>
                                <p className="dish">Panseotti con funghi</p>
                            </div>
                        </div>
                        <div className="menu-course">
                            <span className="course-label">I secondi</span>
                            <div>
                                <p className="dish">Brasato al Barolo</p>
                                <p className="dish">Cinghiale in umido</p>
                                <p className="dish">Capra in salmì</p>
                                <p className="dish">Bollito misto con salse varie</p>
                            </div>
                        </div>
                        <div className="menu-course">
                            <span className="course-label">Dolci da meditazione</span>
                            <div>
                                <p className="dish">Bunèt piemontese</p>
                                <p className="dish">Salame dolce</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pres-capisaldi" id="capisaldi">
                <div className="container">
                    <div className="reveal" style={{ maxWidth: "64ch" }}>
                        <span className="eyebrow">
                            Il filo conduttore · tutto l&apos;anno
                        </span>
                        <h2>
                            I nostri <em>capisaldi</em>.
                        </h2>
                        <p className="lede">
                            Ci sono certezze che non cambiano mai, pilastri della nostra
                            identità gastronomica disponibili in ogni stagione.
                        </p>
                    </div>

                    <div className="pres-capisaldi-grid reveal">
                        <div className="pres-caposaldo">
                            <div className="pres-num">Il nostro oro</div>
                            <h4>Le patate tipiche di Bardineto</h4>
                            <p>
                                Il vero tesoro del nostro territorio, servite e
                                valorizzate &quot;in tutte le salse&quot; per accompagnare
                                ogni secondo piatto.
                            </p>
                        </div>
                        <div className="pres-caposaldo">
                            <div className="pres-num">Il sigillo finale</div>
                            <h4>I digestivi di nostra produzione</h4>
                            <p>
                                Un viaggio liquido che chiude ogni pranzo o cena, tra
                                dolcezza e radici amare del bosco.
                            </p>
                            <div className="liquids">
                                <span>Limoncino</span>
                                <span>Genzianella</span>
                                <span>Oddonino</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container" id="galleria">
                <div className="gallery-head reveal">
                    <span className="eyebrow">Dalla nostra cucina</span>
                    <h2 className="section-title">
                        Un assaggio, <em>in foto</em>.
                    </h2>
                </div>
                <div className="gallery-grid reveal" id="galleryGrid">
                    <figure>
                        <img
                            src="/images/food_1.jpeg"
                            alt="Filoncini di pane fatto in casa"
                        />
                        <figcaption className="gallery-cap">
                            Il pane della casa
                        </figcaption>
                    </figure>
                    <figure className="tall">
                        <img
                            src="/images/food_4.jpeg"
                            alt="Costata con patate arrosto e verdure"
                        />
                        <figcaption className="gallery-cap">
                            La costata e le patate di Bardineto
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                            src="/images/food_2.jpeg"
                            alt="Tagliata con verdure grigliate"
                        />
                        <figcaption className="gallery-cap">
                            Tagliata e verdure grigliate
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="/images/food_6.jpeg" alt="Pizze nel forno a legna" />
                        <figcaption className="gallery-cap">
                            Le pizze nel forno a legna
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                            src="/images/food_5.jpeg"
                            alt="Taglieri di antipasti misti"
                        />
                        <figcaption className="gallery-cap">
                            Il tagliere di antipasti
                        </figcaption>
                    </figure>
                    <figure className="tall">
                        <img
                            src="/images/food_3.jpeg"
                            alt="Sformato con crema di funghi porcini"
                        />
                        <figcaption className="gallery-cap">
                            Crema e funghi porcini
                        </figcaption>
                    </figure>
                    <figure>
                        <img
                            src="/images/food_7.jpeg"
                            alt="Dolci: tiramisù, bonet e budín"
                        />
                        <figcaption className="gallery-cap">
                            I dolci fatti in casa
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="section container pres-closing reveal" id="chiusura">
                <span className="eyebrow">
                    L&apos;esperienza dell&apos;Agriturismo Oddone
                </span>
                <blockquote>
                    Non venite solo a mangiare. Venite a vivere il <em>ritmo</em> delle
                    stagioni.
                </blockquote>
                <p className="lede" style={{ maxWidth: "60ch", margin: "32px auto 0" }}>
                    Dove ogni piatto racconta la storia del territorio di Bardineto,
                    reinterpretata con la passione di chi, da trent&apos;anni, coltiva
                    l&apos;autenticità.
                </p>
            </section>

            <Lightbox groupSelector="#galleryGrid" singleSelector=".pres-photo" />
        </div>
    );
}
