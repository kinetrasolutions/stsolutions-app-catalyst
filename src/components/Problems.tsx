import { Phone, Clock, Settings, RefreshCw } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const problems = [
  {
    icon: Phone,
    title: "Il telefono squilla mentre lavori",
    description: "Ogni chiamata persa è un cliente che non torna. E intanto perdi tempo e concentrazione sul lavoro che stai facendo.",
  },
  {
    icon: Clock,
    title: "Perdi clienti se non rispondi subito",
    description: "I clienti non aspettano. Se non rispondi in pochi minuti, vanno dalla concorrenza. Tempo perso, soldi persi.",
  },
  {
    icon: Settings,
    title: "Senza di te tutto si blocca",
    description: "Ogni richiesta, decisione o problema passa da te. Non puoi delegare, non puoi staccare, non puoi crescere.",
  },
  {
    icon: RefreshCw,
    title: "Troppo lavoro manuale ripetitivo",
    description: "Copi, incolli, rispondi, aggiorni e controlli tutto a mano. Attività che un sistema automatico potrebbe gestire al posto tuo.",
  },
];

const Problems = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation variant="fadeUp" className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            I Problemi che Risolviamo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ti riconosci in queste situazioni?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Sono i problemi più comuni delle attività locali. E sono tutti risolvibili.
          </p>
        </ScrollAnimation>

        {/* Problems Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.15}>
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <div
                className="group p-5 sm:p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-destructive/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Problems;
