import { Phone, Clock, Wallet, CalendarX } from "lucide-react";

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
    icon: Wallet,
    title: "Le piattaforme ti mangiano i margini",
    description: "Commissioni del 20-30% su ogni ordine. Dipendi da terzi, perdi controllo dei tuoi dati e dei tuoi clienti.",
  },
  {
    icon: CalendarX,
    title: "I no-show ti fanno perdere soldi",
    description: "Slot vuoti che avresti potuto riempire. Mancati guadagni che si accumulano settimana dopo settimana.",
  },
];

const Problems = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            I Problemi che Risolviamo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ti riconosci in queste situazioni?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sono i problemi più comuni delle attività locali. E sono tutti risolvibili.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-destructive/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
