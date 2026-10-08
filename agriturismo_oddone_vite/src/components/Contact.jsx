export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact-inner">
                    <div className="contact-side reveal">
                        <span className="eyebrow">Vieni a trovarci</span>
                        <h2 className="section-title">
                            Tra i paesaggi
                            <br />
                            della <em>Val Bormida</em>.
                        </h2>

                        <div className="contact-detail">
                            <span className="lbl">Indirizzo</span>
                            <div className="val">
                                Via Martino 13
                                <br />
                                Bardineto (SV)
                                <small>Val Bormida · Liguria · Italia</small>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="lbl">Telefono</span>
                            <div className="val">
                                <a href="tel:+390197907115">019 790 7115</a>
                                <small>Linea fissa</small>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="lbl">Info &amp; prenotazioni</span>
                            <div className="val">
                                <a href="tel:+393286423895">328 642 3895</a>
                                <small>WhatsApp disponibile</small>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="lbl">Stagione</span>
                            <div className="val">
                                Aperti tutto l&apos;anno
                                <small>Reception 8:00 – 22:00</small>
                            </div>
                        </div>

                        <a href="#" className="btn contact-btn">
                            Richiedi disponibilità <span className="arrow">→</span>
                        </a>
                    </div>

                    <div
                        className="contact-map reveal"
                        aria-label="Mappa di Agriturismo Oddone, Via Martino 13, Bardineto (SV)"
                    >
                        <iframe
                            src="https://www.google.com/maps?q=Via+Martino+13,+17057+Bardineto+SV,+Italia&z=14&output=embed"
                            title="Mappa: Agriturismo Oddone, Via Martino 13, Bardineto (SV)"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        ></iframe>
                        <div className="pin">
                            <div className="pin-marker"></div>
                            <div className="pin-label">Agriturismo Oddone</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
