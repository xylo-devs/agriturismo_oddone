import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const LINKS = [
    {
        href: "/alloggi",
        route: "alloggi",
        label: "Alloggi",
        num: "01",
        sub: "Cinque appartamenti",
    },
    {
        href: "/ristorante",
        route: "ristorante",
        label: "Ristorante",
        num: "02",
        sub: "Cucina di valle",
    },
    {
        href: "/bike-tour",
        route: "bike-tour",
        label: "Bike Tour",
        num: "03",
        sub: "100 km di sentieri",
    },
    {
        href: "/attivita",
        route: "attivita",
        label: "Attività",
        num: "04",
        sub: "Cosa fare in valle",
    },
    {
        href: "/offers",
        route: "offers",
        label: "Offerte",
        num: "05",
        sub: "Pacchetti stagionali",
    },
    {
        href: "/contatti",
        route: "contatti",
        label: "Contatti",
        num: "06",
        sub: "Prenota o scrivi",
    },
];

export default function Nav() {
    const pathname = useLocation().pathname;
    const solid = pathname !== "/";
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = (href) => pathname === href;

    useEffect(() => {
        const heroEl = document.querySelector(".hero, .page-hero");
        const update = () => {
            const threshold = heroEl ? heroEl.offsetHeight - 100 : 400;
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, [pathname]);

    useEffect(() => {
        document.body.classList.toggle("nav-open", open);
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", onKey);
        return () => {
            document.body.classList.remove("nav-open");
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const navClass = `nav${solid ? " solid" : ""}${scrolled ? " scrolled" : ""}`;

    return (
        <>
            <nav className={navClass} id="nav">
                <Link to="/" className="nav-brand">
                    <span className="nav-brand-text">
                        {" "}
                        Agriturismo Oddone <small>Tra Natura e Sapori</small>
                    </span>
                </Link>

                <div className="nav-links">
                    {LINKS.map((l) => (
                        <Link
                            key={l.route}
                            to={l.href}
                            data-route={l.route}
                            className={isActive(l.href) ? "active" : undefined}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div className="nav-tools">
                    <Link to="/contatti" className="btn btn-light nav-cta">
                        Prenota <span className="arrow">→</span>
                    </Link>

                    <button
                        className="nav-burger"
                        aria-label="Apri menu"
                        aria-expanded={open}
                        aria-controls="mobileMenu"
                        onClick={() => setOpen(true)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <aside className="mobile-menu" id="mobileMenu" aria-hidden={!open}>
                <div className="mobile-menu-head">
                    <Link
                        to="/"
                        className="mobile-menu-brand"
                        onClick={() => setOpen(false)}
                    >
                        <span className="mobile-menu-mark">O</span>
                        <span>Agriturismo Oddone</span>
                    </Link>

                    <button
                        className="mobile-menu-close"
                        aria-label="Chiudi menu"
                        onClick={() => setOpen(false)}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <nav className="mobile-menu-links" aria-label="Navigazione principale">
                    {LINKS.map((l) => (
                        <Link
                            key={l.route}
                            to={l.href}
                            data-route={l.route}
                            className={isActive(l.href) ? "active" : undefined}
                            onClick={() => setOpen(false)}
                        >
                            <span className="mobile-link-num">{l.num}.</span>
                            <span className="mobile-link-title">{l.label}</span>
                            <span className="mobile-link-sub">{l.sub}</span>
                        </Link>
                    ))}
                </nav>

                <div className="mobile-menu-foot">
                    <a href="tel:+393286423895" className="mobile-menu-phone">
                        328 642 3895
                    </a>
                    <Link
                        to="/contatti"
                        className="btn mobile-menu-cta"
                        onClick={() => setOpen(false)}
                    >
                        Prenota il soggiorno <span className="arrow">→</span>
                    </Link>
                </div>
            </aside>

            <div
                className="mobile-menu-backdrop"
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            ></div>
        </>
    );
}
