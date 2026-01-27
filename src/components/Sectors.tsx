import { Stethoscope, Scissors, UtensilsCrossed, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: Stethoscope,
    title: "Professionisti della Salute",
    headline: "Segreteria AI che gestisce i vostri pazienti h24",
    problem: "Siete in visita con un paziente e il telefono squilla. Dovete interrompere, rispondere, segnare l'appuntamento a mano.",
    solution: "L'AI risponde alle chiamate h24, gestisce prenotazioni, fa triage delle richieste. Voi ricevete solo una notifica.",
    benefits: [
      "Segreteria AI h24",
      "Follow-up automatico pazienti",
      "Notifiche e recupero no-show",
      "Gestione dati e report automatizzati",
      "Creazione e invio fatture automatico",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Scissors,
    title: "Estetica e Parrucchieri",
    headline: "Agenda sempre piena con prenotazioni automatiche",
    problem: "Avete le mani impegnate nel trattamento e il telefono squilla. La cliente che state servendo aspetta, quella che chiama si spazientisce.",
    solution: "L'AI gestisce prenotazioni e modifiche su WhatsApp. Risponde in 30 secondi, anche quando siete occupati.",
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
    headline: "Gestite prenotazioni e asporto senza commissioni",
    problem: "Durante il servizio è il caos. Telefono che squilla, ordini asporto da gestire. Le piattaforme vi rubano il 25-30%.",
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
      <div className="container-custom px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Per Chi Lavoriamo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluzioni specifiche per ogni settore
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Costruiamo soluzioni specifiche perché sappiamo che ogni attività ha sfide diverse.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${sector.color}`} />
              
              <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center`}>
                    <sector.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    {sector.title}
                  </h3>
                </div>

                {/* Headline */}
                <p className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {sector.headline}
                </p>

                {/* Problem */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-xs uppercase tracking-wider text-destructive font-semibold">Il problema</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{sector.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">La soluzione</span>
                  <p className="text-xs sm:text-sm text-foreground mt-1">{sector.solution}</p>
                </div>

                {/* Benefits */}
                <div className="mt-auto pt-4 sm:pt-6 border-t border-border">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {sector.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${sector.color}`} />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
                {index === 0 ? (
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link to="/professionisti-salute">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                ) : index === 2 ? (
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link to="/ristorazione">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                ) : index === 1 ? (
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link to="/parrucchieri-estetica">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full group/btn">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other sectors mention */}
        <div className="mt-10 md:mt-12 text-center px-2">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Anche se sei titolare di officina, palestra o qualsiasi altra attività le nostre soluzioni possono fare al caso tuo in quanto sono costruite sul tuo modello di lavoro.
          </p>
          <Button variant="hero" className="group w-full sm:w-auto" asChild>
            <a href="https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività" target="_blank" rel="noopener noreferrer">
              Contattaci
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
