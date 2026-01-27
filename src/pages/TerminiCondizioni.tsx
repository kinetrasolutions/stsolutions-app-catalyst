import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";

const TerminiCondizioni = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container-custom max-w-4xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Termini e Condizioni
          </h1>
          
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Ultimo aggiornamento: 27/01/2026
          </p>

          <div className="prose prose-sm sm:prose-lg max-w-none text-foreground/90 space-y-6 sm:space-y-8">
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">1. Premessa</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I presenti Termini e Condizioni regolano l'utilizzo del sito web di ST Solutions e dei servizi offerti. 
                Utilizzando il nostro sito, l'utente accetta integralmente le presenti condizioni.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">2. Identificazione del Titolare</h2>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Ragione Sociale:</strong> Stefano Taino</li>
                <li><strong className="text-foreground">P.IVA:</strong> 01744080191</li>
                <li><strong className="text-foreground">Sede:</strong> Italia</li>
                <li><strong className="text-foreground">Email:</strong> studio.stsolutions@protonmail.com</li>
                <li><strong className="text-foreground">Telefono:</strong> +39 345 283 8679</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">3. Servizi Offerti</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">ST Solutions offre:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Automazioni AI per attività locali e professionisti</li>
                <li>Sistemi di gestione appuntamenti e prenotazioni</li>
                <li>Integrazione WhatsApp Business e chatbot intelligenti</li>
                <li>Soluzioni per la riduzione dei no-show</li>
                <li>Consulenza personalizzata e assistenza post-vendita</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">4. Utilizzo del Sito</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">L'utente si impegna a:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Utilizzare il sito in conformità alle leggi vigenti</li>
                <li>Non utilizzare il sito per scopi illegali o non autorizzati</li>
                <li>Fornire informazioni veritiere nei moduli di contatto</li>
                <li>Non tentare di accedere a aree riservate del sito</li>
                <li>Non interferire con il funzionamento del sito</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">5. Richieste di Preventivo e Contatto</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Le richieste di preventivo inviate attraverso il sito non costituiscono un obbligo di acquisto. 
                I preventivi forniti hanno validità di 30 giorni dalla data di emissione, salvo diversa indicazione.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Compilando i moduli di contatto, l'utente autorizza ST Solutions a contattarlo per rispondere 
                alla richiesta e, previo consenso, per finalità di marketing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">6. Comunicazioni Marketing</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Con l'iscrizione alla newsletter o la compilazione dei moduli di contatto con consenso al marketing, 
                l'utente accetta di ricevere:
              </p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Comunicazioni promozionali via email</li>
                <li>SMS informativi e promozionali</li>
                <li>Pubblicità personalizzata su piattaforme Meta (Facebook e Instagram)</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
                L'utente può revocare il consenso in qualsiasi momento seguendo le istruzioni contenute in ogni 
                comunicazione o contattandoci direttamente.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">7. Proprietà Intellettuale</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tutti i contenuti del sito (testi, immagini, loghi, grafica) sono di proprietà esclusiva di 
                ST Solutions o dei rispettivi titolari e sono protetti dalle leggi sul diritto d'autore. 
                È vietata la riproduzione, anche parziale, senza autorizzazione scritta.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">8. Limitazione di Responsabilità</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                ST Solutions si impegna a mantenere il sito aggiornato e funzionante, ma non garantisce 
                l'assenza di errori o interruzioni. Non siamo responsabili per:
              </p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Danni derivanti dall'impossibilità di accedere al sito</li>
                <li>Errori o inesattezze nei contenuti</li>
                <li>Danni causati da virus o altri elementi dannosi</li>
                <li>Contenuti di siti terzi collegati</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">9. Garanzia sui Servizi</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I servizi offerti da ST Solutions sono coperti dalle garanzie previste dal contratto stipulato 
                con ciascun cliente. Le condizioni specifiche di garanzia sono indicate nella documentazione 
                fornita con ciascun servizio.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">10. Modifiche ai Termini</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                ST Solutions si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. 
                Le modifiche saranno efficaci dalla data di pubblicazione sul sito. L'uso continuato del sito 
                dopo le modifiche costituisce accettazione delle stesse.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">11. Legge Applicabile e Foro Competente</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia 
                sarà competente il Foro del luogo di residenza del consumatore, se applicabile, o in alternativa 
                il Foro di competenza secondo la legge italiana.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">12. Contatti</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Per qualsiasi domanda sui presenti Termini e Condizioni, contattaci a:
              </p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Email:</strong> studio.stsolutions@protonmail.com</li>
                <li><strong className="text-foreground">Telefono:</strong> +39 345 283 8679</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBar />
    </div>
  );
};

export default TerminiCondizioni;
