import { Phone, Headphones, FileSearch, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Primo Contatto",
    description: "Prenoti un appuntamento conoscitivo di 10 minuti tramite Calendly oppure ci scrivi su WhatsApp. Nessun impegno, nessuna pressione.",
  },
  {
    icon: Headphones,
    number: "02",
    title: "Chiamata Conoscitiva",
    description: "Ti ascolto. Raccontami della tua attività, dei problemi che affronti ogni giorno. Se posso aiutarti concretamente, passiamo allo step successivo.",
  },
  {
    icon: FileSearch,
    number: "03",
    title: "Analisi Flussi (Gratuita)",
    description: "Dedico 1-2 ore a studiare i tuoi processi. Ti presento un'analisi dettagliata: cosa automatizzare, come funzionerebbe, quanto risparmieresti.",
  },
  {
    icon: Code,
    number: "04",
    title: "Sviluppo Soluzione",
    description: "Costruisco la tua soluzione su misura. Ti tengo aggiornato costantemente, raccolgo feedback, perfeziono ogni dettaglio. Tempi: 2-8 settimane.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Attivazione e Formazione",
    description: "Ti affianco nell'implementazione. Configuro tutto, ti formo sull'uso, mi assicuro che funzioni perfettamente. Resto disponibile per supporto.",
  },
];

const HowItWorks = () => {
  return (
    <section id="come-funziona" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Come Funziona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Un processo semplice, trasparente
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Senza sorprese. Saprai sempre a che punto siamo e cosa stiamo facendo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 hover:bg-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-button group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Step number */}
                  <span className="text-xs font-bold text-primary tracking-widest">
                    STEP {step.number}
                  </span>

                  <h3 className="font-display text-lg font-bold mt-2 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust points */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Trasparenza totale", desc: "Costi chiari, tempi realistici" },
            { title: "Comunicazione costante", desc: "Sai sempre a che punto siamo" },
            { title: "Focus sui risultati", desc: "Se non migliora, non ha senso farlo" },
            { title: "Supporto continuativo", desc: "Non ti lasciamo solo dopo la consegna" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <h4 className="font-display font-semibold text-primary mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-secondary-foreground/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
