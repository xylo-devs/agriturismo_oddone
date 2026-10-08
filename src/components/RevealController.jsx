import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Adds the `.in` class to `.reveal` elements as they scroll into view.
// Re-runs on route changes so newly-rendered page content is observed.
export default function RevealController() {
    const pathname = useLocation().pathname;

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
        );
        document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [pathname]);

    return null;
}
