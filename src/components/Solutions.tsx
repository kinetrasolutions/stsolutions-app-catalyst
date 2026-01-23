import { MessageSquare, Smartphone, CheckCircle2 } from "lucide-react";
const solutions = [{
  icon: MessageSquare,
  title: "Assistenti AI per Clienti e Prenotazioni",
  description: "Assistenti intelligenti che gestiscono WhatsApp e telefono, rispondono ai clienti, fissano appuntamenti e riducono le interruzioni durante il lavoro.",
  features: ["Per medici: Triage pazienti, conferma appuntamenti, riduzione no-show", "Per parrucchieri: Gestione prenotazioni automatizzata, promemoria trattamenti", "Per ristoratori: Gestione prenotazioni automatizzata, ordini asporto, info menu", "Per palestre: Gestione prenotazioni automatizzata, promemoria abbonamenti, info orari", "Per officine: Gestione appuntamenti automatizzata, notifiche auto pronta, preventivi", "Per ecommerce: Tracking ordini, assistenza clienti, recupero carrelli abbandonati"]
}, {
  icon: Smartphone,
  title: "Automazioni Operative AI su Misura",
  description: "Sistemi e agenti AI che eseguono azioni reali: invio comunicazioni, aggiornamento dati, gestione documenti, follow-up automatici e processi interni.",
  features: ["Database clienti intelligenti con storico e preferenze", "Sistemi di notifiche automatiche e follow-up", "Dashboard di controllo per monitorare performance"]
}];
const Solutions = () => {
  return <section id="soluzioni" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Le Nostre Soluzioni
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Come ST Solutions risolve questi problemi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Non vendo software standard che devi adattare alla tua attività. 
            Creo soluzioni su misura che si integrano perfettamente nei tuoi flussi di lavoro.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => <div key={index} className="group relative p-8 lg:p-10 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-button">
                  <solution.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>

        {/* Custom solution note */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground bg-muted/50 inline-block px-6 py-3 rounded-xl text-center">
            <span className="font-semibold text-foreground">Ogni soluzione viene progettata sul tuo metodo di lavoro</span>, non adattata a un software standard.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-12">
            Il nostro approccio
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            step: "01",
            title: "Analisi del flusso operativo reale",
            desc: "Studio come lavori oggi e dove stai perdendo tempo e soldi"
          }, {
            step: "02",
            title: "Progettazione della soluzione su misura",
            desc: "Sviluppo assistenti AI e automazioni che risolvono i tuoi problemi specifici"
          }, {
            step: "03",
            title: "Implementazione guidata",
            desc: "Ti affianco nell'attivazione e ti formo sull'uso"
          }, {
            step: "04",
            title: "Risultati misurabili e controllo totale",
            desc: "Ore risparmiate, costi ridotti, sistema tuo. Numeri concreti."
          }].map((item, index) => <div key={index} className="text-center p-6">
                <span className="inline-block text-5xl font-display font-bold text-gradient mb-4">
                  {item.step}
                </span>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Solutions;