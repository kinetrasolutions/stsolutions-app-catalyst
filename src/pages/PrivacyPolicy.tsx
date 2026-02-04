import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Kinetra Solutions"
        description="Informativa sulla privacy di Kinetra Solutions. Scopri come trattiamo i tuoi dati personali in conformità al GDPR."
        canonical="/privacy-policy"
        noindex={true}
      />
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container-custom max-w-4xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Ultimo aggiornamento: 27/01/2026
          </p>

          <div className="prose prose-sm sm:prose-lg max-w-none text-foreground/90 space-y-6 sm:space-y-8">
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">1. Titolare del Trattamento</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Il Titolare del trattamento dei dati personali è Stefano Taino (P.IVA 01744080191), 
                con sede in Italia. Per qualsiasi informazione riguardante il trattamento dei dati personali, 
                è possibile contattarci all'indirizzo email: <a href="mailto:info@kinetrasolutions.com" className="text-primary hover:underline">info@kinetrasolutions.com</a> o 
                al telefono: <a href="tel:+393452838679" className="text-primary hover:underline">+39 345 283 8679</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">2. Dati Raccolti</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Raccogliamo le seguenti categorie di dati personali:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Dati identificativi:</strong> nome, cognome, indirizzo email, numero di telefono</li>
                <li><strong className="text-foreground">Dati di contatto:</strong> indirizzo di residenza o domicilio</li>
                <li><strong className="text-foreground">Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate</li>
                <li><strong className="text-foreground">Dati forniti volontariamente:</strong> informazioni inserite nei moduli di contatto o richiesta preventivo</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">3. Finalità del Trattamento</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Gestire la relazione commerciale con i clienti</li>
                <li>Inviare comunicazioni di marketing tramite email, SMS e piattaforme pubblicitarie (Meta/Facebook, Instagram)</li>
                <li>Attività di lead generation attraverso campagne pubblicitarie su Meta (Facebook e Instagram)</li>
                <li>Invio di newsletter e comunicazioni promozionali via email</li>
                <li>Invio di SMS promozionali e informativi</li>
                <li>Migliorare i nostri servizi e l'esperienza utente</li>
                <li>Adempiere agli obblighi di legge</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">4. Marketing e Lead Generation</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Con il tuo consenso esplicito, i tuoi dati potranno essere utilizzati per:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-3 list-disc list-inside mb-4">
                <li><strong className="text-foreground">Campagne Meta (Facebook/Instagram):</strong> I tuoi dati potrebbero essere utilizzati per creare audience personalizzate e lookalike su Meta per mostrarti annunci pertinenti ai nostri servizi di automazione AI.</li>
                <li><strong className="text-foreground">Email Marketing:</strong> Invio di newsletter, promozioni, offerte speciali e aggiornamenti sui nostri servizi di automazione per attività locali.</li>
                <li><strong className="text-foreground">SMS Marketing:</strong> Invio di messaggi promozionali, reminder e comunicazioni commerciali al numero di telefono fornito.</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Potrai revocare il consenso al marketing in qualsiasi momento contattandoci o utilizzando 
                il link di disiscrizione presente in ogni comunicazione.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">5. Base Giuridica del Trattamento</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Il trattamento dei dati si basa su:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Consenso dell'interessato (per attività di marketing)</li>
                <li>Esecuzione di un contratto o misure precontrattuali</li>
                <li>Adempimento di obblighi legali</li>
                <li>Legittimo interesse del Titolare</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">6. Condivisione dei Dati</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">I tuoi dati potranno essere condivisi con:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside mb-4">
                <li>Piattaforme pubblicitarie (Meta/Facebook) per campagne di marketing</li>
                <li>Fornitori di servizi di email marketing</li>
                <li>Fornitori di servizi SMS</li>
                <li>Consulenti e professionisti per adempimenti fiscali e legali</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                I dati non saranno mai venduti a terzi.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">7. Conservazione dei Dati</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I dati personali saranno conservati per il tempo necessario al perseguimento delle finalità 
                per cui sono stati raccolti e comunque non oltre i termini di legge. I dati per finalità 
                di marketing saranno conservati fino alla revoca del consenso.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">8. Diritti dell'Interessato</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">Ai sensi del GDPR, hai diritto a:</p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 list-disc list-inside">
                <li>Accedere ai tuoi dati personali</li>
                <li>Rettificare dati inesatti o incompleti</li>
                <li>Cancellare i tuoi dati ("diritto all'oblio")</li>
                <li>Limitare il trattamento</li>
                <li>Portabilità dei dati</li>
                <li>Opporti al trattamento</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">9. Contatti</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Per esercitare i tuoi diritti o per qualsiasi domanda sulla presente Privacy Policy, puoi contattarci a:
              </p>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@kinetrasolutions.com" className="text-primary hover:underline break-all">info@kinetrasolutions.com</a></li>
                <li><strong className="text-foreground">Telefono:</strong> <a href="tel:+393452838679" className="text-primary hover:underline">+39 345 283 8679</a></li>
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

export default PrivacyPolicy;
