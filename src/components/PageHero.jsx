import { Link } from "react-router-dom";

// Shared sub-page hero. title/lede accept JSX (they may contain <em>/<br/>).
// meta: array of { label, value }, up to 4 shown in the stat strip.
export default function PageHero({ crumb, eyebrow, title, lede, meta = [] }) {
    return (
        <header className="page-hero">
            <div className="container">
                <div className="page-hero-crumbs">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span>{crumb}</span>
                </div>
                <div className="page-hero-inner">
                    <div>
                        <span className="eyebrow">{eyebrow}</span>
                        <h1 className="page-hero-title">{title}</h1>
                    </div>
                    <p className="lede page-hero-lede">{lede}</p>
                </div>
                {meta.length > 0 && (
                    <div className="page-hero-meta">
                        {meta.map((m, i) => (
                            <div key={i}>
                                <span className="mono-caps">{m.label}</span>
                                <strong>{m.value}</strong>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
