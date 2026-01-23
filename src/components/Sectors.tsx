import { Stethoscope, Scissors, UtensilsCrossed, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: Stethoscope,
    title: "Medici e Fisioterapisti",
    headline: "Segreteria AI che gestisce i tuoi pazienti h24",
    problem: "Sei in visita con un paziente e il telefono squilla. Devi interrompere, rispondere, segnare l'appuntamento a mano.",
    solution: "L'AI risponde alle chiamate h24, gestisce prenotazioni, fa triage delle richieste. Tu ricevi solo una notifica.",
    benefits: [
      "Segreteria AI h24",
      "Follow-up automatico pazienti",
      "Notifiche e recupero no-show",
      "Gestione dati e report automatizzati",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Scissors,
    title: "Estetica e Parrucchieri",
    headline: "Agenda sempre piena con prenotazioni automatiche",
    problem: "Hai le mani impegnate nel trattamento e il telefono squilla. La cliente che stai servendo aspetta, quella che chiama si spazientisce.",
    solution: "L'AI gestisce prenotazioni e modifiche su WhatsApp. Risponde in 30 secondi, anche quando sei occupata.",
    benefits: [
      "Prenotazioni automatiche h24",
      "Promemoria e follow-up clienti",
      "Recupero automatico no-show",
      "Gestione storico trattamenti",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Ristorazione",
    headline: "Gestisci prenotazioni e asporto senza commissioni",
    problem: "Durante il servizio è il caos. Telefono che squilla, ordini asporto da gestire. Le piattaforme ti rubano il 25-30%.",
    solution: "L'AI gestisce prenotazioni tavoli e ordini asporto. Zero commissioni, pieno controllo.",
    benefits: [
      "Prenotazioni e ordini automatizzati",
      "Zero commissioni su asporto",
      "Follow-up e fidelizzazione clienti",
      "Report vendite automatici",
    ],
    color: "from-orange-500 to-amber-500",
  },
];

const Sectors = () => {
  return (
    <section id="settori" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Per Chi Lavoriamo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluzioni specifiche per ogni settore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Costruiamo soluzioni specifiche perché sappiamo che ogni attività ha sfide diverse.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${sector.color}`} />
              
              <div className="p-8 flex-1 flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center`}>
                    <sector.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {sector.title}
                  </h3>
                </div>

                {/* Headline */}
                <p className="font-display text-2xl font-semibold text-foreground mb-4">
                  {sector.headline}
                </p>

                {/* Problem */}
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-destructive font-semibold">Il problema</span>
                  <p className="text-sm text-muted-foreground mt-1">{sector.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">La soluzione</span>
                  <p className="text-sm text-foreground mt-1">{sector.solution}</p>
                </div>

                {/* Benefits */}
                <div className="mt-auto pt-6 border-t border-border">
                  <ul className="space-y-2">
                    {sector.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${sector.color}`} />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <Button variant="outline" className="w-full group/btn">
                  Scopri di più
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other sectors mention */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Altre attività?</span>{" "}
            Palestre, officine, nutrizionisti: soluzioni custom per ogni esigenza.{" "}
            <a href="#contatti" className="text-primary hover:underline">Contattaci →</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
