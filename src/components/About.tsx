import { CheckCircle2, Quote } from "lucide-react";

const differentiators = [
  {
    title: "Nessun abbonamento che ti lega a vita",
    description: "Progetti one-time. Paghi una volta, il sistema è tuo per sempre. Niente canoni mensili nascosti, niente dipendenza da terzi.",
  },
  {
    title: "Costruito su misura, non adattato",
    description: "Non ti vendo un software standard. Studio come lavori oggi, individuo i colli di bottiglia, costruisco la soluzione che si integra perfettamente.",
  },
  {
    title: "Persona reale, non call center",
    description: "Quando mi contatti, parli direttamente con me. Io analizzo il problema, io progetto la soluzione, io ti seguo nell'implementazione.",
  },
  {
    title: "Focus sui risultati misurabili",
    description: "Non ti vendo 'innovazione'. Ti vendo ore risparmiate, costi ridotti, clienti non persi. Numeri concreti che si vedono sul conto corrente.",
  },
];

const About = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Chi Siamo
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Stefano Taino
              <span className="block text-xl md:text-2xl font-normal text-muted-foreground mt-2">
                Founder & System Architect
              </span>
            </h2>

            {/* Quote */}
            <div className="relative pl-6 border-l-4 border-primary mb-8">
              <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary bg-muted/30" />
              <p className="text-xl italic text-foreground">
                "Dietro ogni automazione c'è una visione umana."
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Mi chiamo Stefano Taino e con ST Solutions aiuto le attività locali a uscire dal caos operativo.
              </p>
              <p>
                Non credo nei software 'copia e incolla' o negli abbonamenti infiniti che ti tengono prigioniero. 
                Il mio obiettivo è costruire l'infrastruttura digitale della tua azienda: sistemi intelligenti che 
                rispondono ai clienti, gestionali che ordinano i tuoi dati e automazioni che ti restituiscono il tempo che meriti.
              </p>
              <p className="font-semibold text-foreground">
                Con ST Solutions, il software è tuo, i dati sono tuoi e il risultato è garantito.
              </p>
            </div>
          </div>

          {/* Right Column - Differentiators */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Perché ST Solutions è diverso
            </h3>
            
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-dark text-secondary-foreground">
          <div className="max-w-3xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              A chi si rivolge ST Solutions?
            </h3>
            <p className="text-secondary-foreground/80 mb-6">
              Lavoro con attività locali che vogliono crescere senza impazzire. Se:
            </p>
            <ul className="space-y-3">
              {[
                "Passi ore al telefono per gestire appuntamenti invece di lavorare con i clienti",
                "Perdi clienti perché non riesci a rispondere a tutti in tempo reale",
                "Paghi commissioni del 20-30% a piattaforme che ti tengono ostaggio",
                "Gestisci tutto manualmente e vorresti automatizzare ma non sai da dove iniziare",
                "Hai provato software 'pronti' ma non si adattavano ai tuoi processi",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-semibold text-primary">
              ...allora posso aiutarti concretamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
