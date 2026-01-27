import { Phone, Headphones, FileSearch, Code, Rocket } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => (
  <div className="relative group h-full">
    <div className="relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-5 sm:p-6 hover:bg-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 h-full min-h-[280px] flex flex-col">
      {/* Number badge */}
      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-button group-hover:scale-110 transition-transform">
        <step.icon className="w-6 h-6 text-primary-foreground" />
      </div>

      {/* Step number */}
      <span className="text-xs font-bold text-primary tracking-widest">
        STEP {step.number}
      </span>

      <h3 className="font-display text-base sm:text-lg font-bold mt-2 mb-3">
        {step.title}
      </h3>

      <p className="text-base text-secondary-foreground/70 leading-relaxed flex-grow">
        {step.description}
      </p>
    </div>
  </div>
);

const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section id="come-funziona" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation variant="fadeUp" className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Come Funziona
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Un processo semplice, trasparente
          </h2>
          <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto px-2">
            Senza sorprese. Saprete sempre a che punto siamo e cosa stiamo facendo.
          </p>
        </ScrollAnimation>

        {/* Steps - Carousel on mobile, Grid on desktop */}
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {isMobile ? (
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {steps.map((step, index) => (
                  <CarouselItem key={index} className="pl-3 basis-[85%]">
                    <StepCard step={step} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Scroll indicator */}
              <div className="flex justify-center gap-1.5 mt-6">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary/30"
                  />
                ))}
              </div>
            </Carousel>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {steps.map((step, index) => (
                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                  <StepCard step={step} index={index} />
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>

        {/* Trust points */}
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Trasparenza totale", desc: "Costi chiari, tempi realistici" },
              { title: "Comunicazione costante", desc: "Sapete sempre a che punto siamo" },
              { title: "Focus sui risultati", desc: "Se non migliora, non ha senso farlo" },
              { title: "Supporto continuativo", desc: "Non vi lasciamo soli dopo la consegna" },
            ].map((item, index) => (
              <div key={index} className="text-center p-3 sm:p-4">
                <h4 className="font-display text-base sm:text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-secondary-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HowItWorks;
