import { Phone, Headphones, FileSearch, Code, Rocket } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Primo Contatto",
    description: "Prenotate un appuntamento conoscitivo di 10 minuti tramite Calendly oppure scriveteci su WhatsApp. Nessun impegno, nessuna pressione.",
  },
  {
    icon: Headphones,
    number: "02",
    title: "Chiamata Conoscitiva",
    description: "Vi ascoltiamo. Raccontateci della vostra attività, dei problemi che affrontate ogni giorno. Se possiamo aiutarvi concretamente, passiamo allo step successivo.",
  },
  {
    icon: FileSearch,
    number: "03",
    title: "Analisi Flussi (Gratuita)",
    description: "Dedichiamo 1-2 ore a studiare i vostri processi. Vi presentiamo un'analisi dettagliata: cosa automatizzare, come funzionerebbe, quanto risparmiereste.",
  },
  {
    icon: Code,
    number: "04",
    title: "Sviluppo Soluzione",
    description: "Costruiamo la vostra soluzione su misura. Vi teniamo aggiornati costantemente, raccogliamo feedback, perfezioniamo ogni dettaglio.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Testing e Attivazione",
    description: "Testiamo insieme l'applicazione o l'automazione creata. Configuriamo tutto, vi formiamo sull'uso, ci assicuriamo che funzioni perfettamente. Restiamo disponibili per supporto.",
  },
];

const HowItWorks = () => {
  return (
    <section id="come-funziona" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimation variant="fadeUp" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Come Funziona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Un processo semplice, trasparente
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Senza sorprese. Saprete sempre a che punto siamo e cosa stiamo facendo.
          </p>
        </ScrollAnimation>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6" staggerDelay={0.1}>
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative group h-full">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Trust points */}
        <StaggerContainer className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {[
            { title: "Trasparenza totale", desc: "Costi chiari, tempi realistici" },
            { title: "Comunicazione costante", desc: "Sapete sempre a che punto siamo" },
            { title: "Focus sui risultati", desc: "Se non migliora, non ha senso farlo" },
            { title: "Supporto continuativo", desc: "Non vi lasciamo soli dopo la consegna" },
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="text-center p-4">
                <h4 className="font-display font-semibold text-primary mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-secondary-foreground/70">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HowItWorks;
