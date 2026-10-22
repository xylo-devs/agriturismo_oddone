import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import SiteNotice from "./components/SiteNotice";
import Footer from "./components/Footer";
import RevealController from "./components/RevealController";
import { PAGE_METADATA } from "./metadata.js";
import HomePage from "./pages/HomePage";
import AlloggiPage from "./pages/AlloggiPage";
import AttivitaPage from "./pages/AttivitaPage";
import BikeTourPage from "./pages/BikeTourPage";
import ContattiPage from "./pages/ContattiPage";
import OffersPage from "./pages/OffersPage";
import RistorantePage from "./pages/RistorantePage";

function RouteEffects() {
    const { pathname: currentPathname } = useLocation();
    const pathname = currentPathname.replace(/\/+$/, "") || "/";

    useEffect(() => {
        const metadata =
            PAGE_METADATA[pathname as keyof typeof PAGE_METADATA] ?? PAGE_METADATA["/"];
        document.title = metadata.title;

        document
            .querySelector<HTMLMetaElement>('meta[name="description"]')
            ?.setAttribute("content", metadata.description);
        document
            .querySelector<HTMLMetaElement>('meta[property="og:title"]')
            ?.setAttribute("content", metadata.title);
        document
            .querySelector<HTMLMetaElement>('meta[property="og:description"]')
            ?.setAttribute("content", metadata.description);

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export function Site() {
    return (
        <>
            <RouteEffects />
            <SiteNotice />
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/alloggi" element={<AlloggiPage />} />
                <Route path="/attivita" element={<AttivitaPage />} />
                <Route path="/bike-tour" element={<BikeTourPage />} />
                <Route path="/contatti" element={<ContattiPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/ristorante" element={<RistorantePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <RevealController />
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Site />
        </BrowserRouter>
    );
}
