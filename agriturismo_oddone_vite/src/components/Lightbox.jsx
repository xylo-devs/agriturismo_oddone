import { useCallback, useEffect, useState } from "react";

// Reusable click-to-zoom gallery.
//  - groupSelector: images inside a matching wrapper open as a navigable set
//    (e.g. ".accom-collage" or "#galleryGrid")
//  - singleSelector: an image matching this opens on its own (e.g. ".pres-photo")
export default function Lightbox({ groupSelector, singleSelector }) {
    const [items, setItems] = useState([]);
    const [idx, setIdx] = useState(0);
    const [open, setOpen] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
        document.body.style.overflow = "";
    }, []);

    const go = useCallback(
        (d) => {
            setIdx((i) => (items.length ? (i + d + items.length) % items.length : 0));
        },
        [items.length],
    );

    useEffect(() => {
        const onClick = (e) => {
            if (groupSelector) {
                const groupImg = e.target.closest(`${groupSelector} img`);
                if (groupImg) {
                    e.preventDefault();
                    e.stopPropagation();
                    const wrap = groupImg.closest(groupSelector);
                    const imgs = [...wrap.querySelectorAll("img")];
                    setItems(
                        imgs.map((im) => ({ src: im.getAttribute("src"), alt: im.alt })),
                    );
                    setIdx(Math.max(0, imgs.indexOf(groupImg)));
                    setOpen(true);
                    document.body.style.overflow = "hidden";
                    return;
                }
            }
            if (singleSelector) {
                const single = e.target.closest(singleSelector);
                if (single && single.tagName === "IMG") {
                    e.preventDefault();
                    e.stopPropagation();
                    setItems([{ src: single.getAttribute("src"), alt: single.alt }]);
                    setIdx(0);
                    setOpen(true);
                    document.body.style.overflow = "hidden";
                }
            }
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [groupSelector, singleSelector]);

    useEffect(() => {
        const onKey = (e) => {
            if (!open) return;
            if (e.key === "Escape") close();
            else if (e.key === "ArrowLeft") go(-1);
            else if (e.key === "ArrowRight") go(1);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, close, go]);

    const cur = items[idx];

    return (
        <div
            className={`lightbox${open ? " open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Galleria foto"
            onClick={(e) => {
                if (e.target === e.currentTarget) close();
            }}
        >
            <button className="lb-btn lb-close" aria-label="Chiudi" onClick={close}>
                ✕
            </button>
            <button
                className="lb-btn lb-prev"
                aria-label="Precedente"
                onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                }}
            >
                ←
            </button>
            <img className="lightbox-img" src={cur?.src} alt={cur?.alt ?? ""} />
            <button
                className="lb-btn lb-next"
                aria-label="Successiva"
                onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                }}
            >
                →
            </button>
            <div className="lb-count">
                {items.length ? `${idx + 1} / ${items.length}` : ""}
            </div>
        </div>
    );
}
