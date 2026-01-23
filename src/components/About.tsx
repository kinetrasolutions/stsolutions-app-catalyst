import { CheckCircle2, Quote } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const differentiators = [
  {
    title: "Costruito su misura, non adattato",
    description: "Non vi vendiamo un software standard. Studiamo come lavorate oggi, individuiamo i colli di bottiglia, costruiamo la soluzione che si integra perfettamente.",
  },
  {
    title: "Persone reali, non call center",
    description: "Quando ci contattate, parlate direttamente con noi. Noi analizziamo il problema, noi progettiamo la soluzione, noi vi seguiamo nell'implementazione.",
  },
  {
    title: "Focus sui risultati misurabili",
    description: "Non vi vendiamo 'innovazione'. Vi vendiamo ore risparmiate, costi ridotti, clienti non persi. Numeri concreti che si vedono sul conto corrente.",
  },
];

const About = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <ScrollAnimation variant="slideLeft">
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
                Non credo nei software 'copia e incolla' che vi tengono prigionieri. 
                Il mio obiettivo è costruire l'infrastruttura digitale della vostra azienda: sistemi intelligenti che 
                rispondono ai clienti, gestionali che ordinano i vostri dati e automazioni che vi restituiscono il tempo che meritate.
              </p>
              <p className="font-semibold text-foreground">
                Con ST Solutions, il software è vostro, i dati sono vostri e il risultato è garantito.
              </p>
            </div>
          </ScrollAnimation>

          {/* Right Column - Differentiators */}
          <ScrollAnimation variant="slideRight">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Perché ST Solutions è diverso
              </h3>
              <p className="text-lg font-semibold text-primary mb-6">
                Non vendiamo software. Costruiamo sistemi che lavorano al posto vostro.
              </p>
              
              <StaggerContainer staggerDelay={0.15}>
                {differentiators.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 mb-4">
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
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollAnimation>
        </div>

        {/* Target Audience */}
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-dark text-secondary-foreground">
            <div className="max-w-4xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                A chi si rivolge ST Solutions?
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Lavoriamo a fianco di titolari d'azienda, professionisti e attività locali che vogliono scalare i propri risultati eliminando il caos operativo. Siete nel posto giusto se:
              </p>
              <StaggerContainer staggerDelay={0.08}>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Il lavoro gestionale vi assorbe troppo tempo",
                      desc: "Passate ore al telefono o al PC per coordinare appuntamenti invece di produrre valore per la vostra attività."
                    },
                    {
                      title: "La tempestività è il vostro punto debole",
                      desc: "Perdete potenziali clienti perché non riuscite a rispondere a ogni richiesta in tempo reale o fuori orario d'ufficio."
                    },
                    {
                      title: "Volete un canale diretto con i vostri clienti",
                      desc: "Desiderate un'app o un portale che gestisca ordini, prenotazioni e comunicazioni in totale autonomia, senza che dobbiate mai intervenire manualmente."
                    },
                    {
                      title: "Volete eliminare commissioni inutili",
                      desc: "Siete stanchi di regalare il 20-30% del vostro fatturato a piattaforme esterne che tengono in ostaggio i vostri dati e i vostri margini."
                    },
                    {
                      title: "Gestite tutto manualmente e cercate ordine",
                      desc: "I vostri flussi di lavoro sono frammentati e desiderate un sistema digitale unico, proprietario e automatico."
                    },
                    {
                      title: "Il software \"standard\" non si adatta a voi",
                      desc: "Avete provato soluzioni pronte all'uso, ma nessuna è in grado di ricalcare il vostro modello di business specifico."
                    },
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">{item.title}:</span>{" "}
                          <span className="text-secondary-foreground/80">{item.desc}</span>
                        </div>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <p className="mt-6 text-lg font-semibold text-primary">
                ...se vi riconoscete in queste sfide, possiamo aiutarvi concretamente.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
