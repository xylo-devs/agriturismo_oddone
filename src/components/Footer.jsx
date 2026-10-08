import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    <div className="footer-brand">
                        Agriturismo
                        <br />
                        <em>Oddone</em>
                    </div>
                    <p className="footer-blurb">
                        Tra natura e sapori, dal 1996. Una cascina di famiglia a
                        Bardineto, in Val Bormida.
                    </p>
                </div>
                <div>
                    <h4>Esperienza</h4>
                    <ul>
                        <li>
                            <Link to="/alloggi">Alloggi</Link>
                        </li>
                        <li>
                            <Link to="/ristorante">Ristorante</Link>
                        </li>
                        <li>
                            <Link to="/bike-tour">Bike Tour</Link>
                        </li>
                        <li>
                            <Link to="/attivita">Attività</Link>
                        </li>
                        <li>
                            <Link to="/offers">Offerte</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 1996–2026 Agriturismo Oddone · P.IVA 02784560983</span>
            </div>
        </footer>
    );
}
