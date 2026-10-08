import { useEffect, useState } from "react";

const PDF = "/menu-del-mese.pdf";

// The "Sfoglia il menù" CTA plus the in-page PDF viewer overlay.
// Rendered inside the restaurant page's feature banner.
export default function MenuModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && open) setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <div className="menu-feature-cta">
                <button
                    type="button"
                    className="btn btn-feature"
                    onClick={() => setOpen(true)}
                >
                    Sfoglia il menù <span className="arrow">→</span>
                </button>
                <span className="pdf-note">Si apre qui · PDF</span>
            </div>

            <div
                className={`pdf-modal${open ? " open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menù del mese"
                onClick={(e) => {
                    if (e.target === e.currentTarget) setOpen(false);
                }}
            >
                <div className="pdf-modal-bar">
                    <span className="t">Menù del mese</span>
                    <div className="acts">
                        <a href={PDF} target="_blank" rel="noopener">
                            Apri in una scheda
                        </a>
                        <button type="button" onClick={() => setOpen(false)}>
                            Chiudi ✕
                        </button>
                    </div>
                </div>
                <iframe title="Menù del mese" src={open ? PDF : undefined}></iframe>
            </div>
        </>
    );
}
