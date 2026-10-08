import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

export default function ContattiPage() {
    return (
        <div className="route-contatti">
            <PageHero
                crumb="Contatti"
                eyebrow="Vieni a trovarci"
                title={
                    <>
                        Parliamone
                        <br />
                        di <em>persona</em>.
                    </>
                }
                lede={
                    <>
                        Per prenotazioni del ristorante, prenotazione di alloggi o
                        informazioni delle attività, contattateci senza esitazione.
                        <br />
                        Siamo aperti tutto l&apos;anno.
                    </>
                }
                meta={[
                    { label: "Offerte attive", value: "0" },
                    { label: "In scadenza", value: "0" },
                    { label: "Pacchetti family", value: "0" },
                    { label: "Ultimo aggiornamento", value: "15 lug 2026" },
                ]}
            />
            <Contact />
        </div>
    );
}
