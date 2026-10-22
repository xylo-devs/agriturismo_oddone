import { Link } from "react-router-dom";

export default function SiteNotice() {
    return (
        <aside className="site-notice" aria-label="Avviso sul sito">
            <span className="site-notice-dot" aria-hidden="true"></span>
            <strong>Sito in aggiornamento</strong>
            <span>Stiamo rinnovando i contenuti.</span>
            <Link to="/contatti">
                Per informazioni o prenotazioni, contattaci <span aria-hidden="true">→</span>
            </Link>
        </aside>
    );
}
