import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { Phone, CalendarX, UserMinus, TrendingDown, Bot, ShieldCheck, Megaphone, ArrowRight, Check, X, Shield, Zap, Database, MessageSquare, CheckCircle2, Quote, Clock, Scissors, type LucideIcon } from "lucide-react";

// Custom images for Parrucchieri/Estetica page
import parrucchieriHeroImage from "@/assets/parrucchieri-hero.webp";
import parrucchieriWhatsapp from "@/assets/parrucchieri-whatsapp.webp";
import parrucchieriAgenda from "@/assets/parrucchieri-agenda.webp";
import parrucchieriMarketing from "@/assets/parrucchieri-marketing.webp";

const challenges = [{
  icon: Phone,
  title: "Mani impegnate, chiamate perse",
  description: "Mentre lavori non puoi rispondere: ogni squillo a vuoto è un cliente che va altrove. Risultato? Clienti persi verso la concorrenza.",
  problems: ["Interruzioni continue durante i trattamenti", "Esperienza cliente compromessa", "Chiamate perse = agenda vuota", "Impossibile rispondere con le mani occupate"]
}, {
  icon: CalendarX,
  title: "Il costo dei buchi in agenda",
  description: "Un appuntamento saltato è un'ora persa per sempre. Ogni slot vuoto ti costa soldi.",
  problems: ["No-show del 15-25%", "Cancellazioni last-minute", "Mancato guadagno irrecuperabile", "Nessun sistema di recupero efficace"]
}, {
  icon: UserMinus,
  title: "Clienti che non tornano",
  description: "Senza richiami costanti, il cliente si dimentica di te. Devi richiamare manualmente per ogni appuntamento.",
  problems: ["Clienti che scompaiono dopo mesi", "Nessun richiamo automatico", "Perdita di clientela fidelizzata", "Tempo sprecato a rincorrere"]
}, {
  icon: TrendingDown,
  title: "Scontrino medio basso",
  description: "Difficoltà nell'upselling durante il lavoro. Opportunità perse per proporre trattamenti aggiuntivi.",
  problems: ["Solo servizio base venduto", "Nessun suggerimento personalizzato", "Valore cliente basso", "Potenziale inespresso"]
}];

const solutions = [{
  icon: Bot,
  title: "Receptionist AI h24",
  subtitle: "Tu lavori. L'AI riempie l'agenda.",
  description: "Gestisce prenotazioni su WhatsApp in tempo reale, senza distrazioni. Non perdi più clienti mentre sei impegnata con un trattamento.",
  features: ["Risponde h24 in 30 secondi – Mai più clienti persi fuori orario o durante i trattamenti", "Disponibilità real-time – L'AI conosce sempre gli slot liberi e prenota in autonomia", "Gestisce liste d'attesa – Se un cliente cancella, l'AI propone lo slot a chi è in coda", "Zero distrazioni – Non devi più correre al telefono con le mani nel colore"],
  highlight: "Tu lavori. L'AI riempie l'agenda.",
  color: "from-pink-500 to-rose-500"
}, {
  icon: ShieldCheck,
  title: "Recupero No-Show",
  subtitle: "Occupazione dal 70% al 95%",
  description: "Reminder automatici e lista d'attesa intelligente per riempire ogni slot. Mai più buchi in agenda che ti costano soldi.",
  features: ["Promemoria multi-livello – Notifiche a 48h, 24h e 2h che eliminano le dimenticanze", "Recupero slot automatico – Lista d'attesa che riempie i buchi in tempo reale", "Ottimizzazione orari – L'AI suggerisce orari alternativi per massimizzare l'occupazione", "Blacklist intelligente – Blocca automaticamente i clienti inaffidabili"],
  highlight: "Occupazione dal 70% al 95%.",
  color: "from-violet-500 to-purple-500"
}, {
  icon: Megaphone,
  title: "Marketing Automatico",
  subtitle: "Frequenza +40%. Scontrino +25%.",
  description: "L'AI invia messaggi personalizzati al momento giusto. Richiami, upselling e recupero clienti dormienti in automatico.",
  features: ["Richiami personalizzati – Messaggi automatici quando è ora del prossimo taglio o trattamento", "Upselling intelligente – Suggerimenti mirati basati sullo storico del cliente", "Recupero clienti dormienti – Campagne automatiche per chi non viene da mesi", "Offerte mirate – Promozioni personalizzate che aumentano la frequenza"],
  highlight: "Frequenza +40%. Scontrino +25%.",
  color: "from-amber-500 to-orange-500"
}];

const benefits = [{
  icon: Database,
  title: "Database Proprietario",
  subtitle: "I tuoi dati, zero commissioni",
  description: "I tuoi clienti restano tuoi. Storico completo, preferenze, contatti: tutto in un database di tua proprietà per campagne marketing efficaci.",
  points: ["Database clienti con storico completo", "Preferenze e trattamenti memorizzati", "Zero dipendenza da piattaforme esterne", "Piena libertà di marketing diretto"]
}, {
  icon: Zap,
  title: "Automazione Totale",
  subtitle: "10+ ore risparmiate/settimana",
  description: "L'AI lavora per te mentre tu ti concentri sui clienti. Prenotazioni, promemoria, richiami: tutto in autopilota.",
  points: ["Risposta immediata h24", "Zero interruzioni durante il lavoro", "Agenda sempre aggiornata", "Meno stress, più tempo per l'arte"]
}, {
  icon: Shield,
  title: "Aumento Valore Cliente",
  subtitle: "+20-30% scontrino medio",
  description: "Suggerimenti intelligenti e upselling automatico. L'AI propone il trattamento giusto al momento giusto.",
  points: ["Suggerimenti personalizzati pre-appuntamento", "Upselling basato sullo storico", "Promozioni mirate che convertono", "Fidelizzazione automatica"]
}];

const results: { metric: string; before: string; after: string; icon: LucideIcon }[] = [{
  metric: "No-show",
  before: "20-25%",
  after: "< 5%",
  icon: CalendarX
}, {
  metric: "Gestione",
  before: "12-18h/sett.",
  after: "< 2h/sett.",
  icon: Clock
}, {
  metric: "Risposta",
  before: "40-60%",
  after: "100%",
  icon: Phone
}, {
  metric: "Occupazione",
  before: "70-75%",
  after: "90-95%",
  icon: Scissors
}];

const processSteps = [{
  step: 1,
  title: "Contatto iniziale",
  description: "Prenoti una chiamata o ci scrivi su WhatsApp"
}, {
  step: 2,
  title: "Analisi gratuita",
  description: "Studiamo i tuoi flussi operativi e identifichiamo i colli di bottiglia"
}, {
  step: 3,
  title: "Proposta personalizzata",
  description: "Ti presentiamo la soluzione su misura con costi trasparenti"
}, {
  step: 4,
  title: "Sviluppo e Test",
  description: "Costruiamo il tuo ecosistema digitale e lo testiamo insieme a te prima dell'attivazione"
}, {
  step: 5,
  title: "Implementazione e formazione",
  description: "Ti affianchiamo nell'attivazione e formiamo te e il tuo staff"
}, {
  step: 6,
  title: "Supporto continuativo",
  description: "Rimaniamo disponibili per ottimizzazioni e aggiornamenti"
}];

const ParrucchieriEstetica = () => {
  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20il%20mio%20salone";
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="container-custom px-6 sm:px-8 lg:px-8 relative z-10 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-6 animate-fade-in">
                  L'Intelligenza Artificiale al servizio del tuo Salone
                </span>
                
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                  L'AI che rivoluziona{" "}
                  <span className="text-cyan-400">la gestione</span> e i{" "}
                  <span className="text-cyan-400">trattamenti</span>
                  <br />
                  <span className="text-white">nel tuo Salone</span>
                </h1>
                
                <div className="text-base sm:text-lg text-white/70 mb-4 animate-slide-up space-y-3 text-left" style={{
                  animationDelay: "0.1s"
                }}>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    Prenotazioni h24, gestione agenda intelligente.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    Richiami automatici e recupero no-show.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    Trasforma il tuo tempo in pura arte.
                  </p>
                  <p className="mt-4">
                    Un sistema di proprietà che gestisce appuntamenti e clienti h24, riducendo i tuoi costi operativi e garantendoti un'agenda sempre piena.
                  </p>
                </div>
                
                <p className="text-sm mb-8 sm:mb-10 animate-slide-up text-primary-foreground" style={{
                  animationDelay: "0.25s"
                }}>Ogni salone ha le sue regole: progettiamo funzionalità basate sul tuo flusso di lavoro.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{
                  animationDelay: "0.3s"
                }}>
                  <Button variant="hero" size="xl" className="group">
                    Prenota una Chiamata Gratuita
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="xl" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Scrivici su WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hero Image - Floating with gradient mask effect */}
              <div className="relative animate-fade-in hidden lg:block" style={{
                animationDelay: "0.4s"
              }}>
                {/* Glow effects behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-rose-500/30 to-transparent blur-3xl scale-105 animate-pulse-slow" />
                
                {/* Main image with mask fade - reduced size */}
                <div className="relative max-w-md mx-auto">
                  <div className="relative" style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskComposite: 'source-in'
                  }}>
                    <img src={parrucchieriHeroImage} alt="Salone moderno con sistema di prenotazione AI" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  {/* Subtle overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-rose-500/10 pointer-events-none" />
                </div>
                
                {/* Floating decorative orbs - smaller */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/40 rounded-full blur-2xl animate-float" />
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-rose-500/30 rounded-full blur-xl animate-pulse-slow" />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                I Problemi Quotidiani
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                I problemi che affronti ogni giorno
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Riconosciamo queste sfide perché le abbiamo studiate a fondo insieme a decine di saloni come il tuo.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <StaggerItem key={index}>
                  <div className="h-full rounded-3xl border border-border bg-card p-6 hover:shadow-xl hover:-translate-y-1 hover:border-destructive/40 transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                      <challenge.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {challenge.description}
                    </p>
                    <div className="space-y-2 mt-auto">
                      <span className="text-xs uppercase tracking-wider text-destructive font-semibold">I problemi concreti:</span>
                      <ul className="space-y-2">
                        {challenge.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="soluzioni" className="section-padding bg-muted/50">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Le Nostre Soluzioni
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Dallo stress delle chiamate alla tua agenda sempre piena
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Mettiamo fine al <strong className="text-foreground">caos delle prenotazioni e delle chiamate perse</strong>.
                <br />
                Implementiamo soluzioni AI che <strong className="text-foreground">riducono drasticamente i tuoi costi operativi</strong> e ti permettono
                <br />
                di concentrarti sulla <strong className="text-foreground">tua arte</strong>.
              </p>
            </ScrollAnimation>

            <div className="space-y-8 sm:space-y-12">
              {solutions.map((solution, index) => {
                const solutionImages = [parrucchieriWhatsapp, parrucchieriAgenda, parrucchieriMarketing];
                const imageAlts = ["Assistente AI per saloni", "Sistema di recupero no-show", "Marketing automatico"];
                return (
                  <ScrollAnimation key={index} variant={index % 2 === 0 ? "slideLeft" : "slideRight"}>
                    <div className="rounded-3xl border border-border bg-card overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
                      <div className="p-6 sm:p-8 lg:p-12">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 items-center`}>
                          {/* Image with gradient mask fade */}
                          <div className="w-full max-w-xs sm:max-w-sm lg:w-1/3">
                            <div className="relative group mx-auto">
                              {/* Glow effect behind image */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-20 blur-xl scale-105`} />
                              
                              {/* Image with mask fade */}
                              <div className="relative" style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
                                maskComposite: 'intersect',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                                WebkitMaskComposite: 'source-in'
                              }}>
                                <img src={solutionImages[index]} alt={imageAlts[index]} className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
                              </div>
                              
                              {/* Subtle overlay gradient */}
                              <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-5 pointer-events-none`} />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="w-full lg:w-2/3 text-center lg:text-left">
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 mx-auto lg:mx-0`}>
                              <solution.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                              {solution.title}
                            </h3>
                            <p className="text-primary font-medium mb-4">{solution.subtitle}</p>
                            <p className="text-muted-foreground mb-6">{solution.description}</p>
                            <ul className="space-y-3 mb-6 text-left">
                              {solution.features.map((feature, idx) => {
                                // Split feature at first " – " to bold the title
                                const dashIndex = feature.indexOf(' – ');
                                const hasTitle = dashIndex > -1;
                                const title = hasTitle ? feature.slice(0, dashIndex) : null;
                                const rest = hasTitle ? feature.slice(dashIndex) : feature;
                                return (
                                  <li key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground text-sm sm:text-base">
                                      {title && <strong>{title}</strong>}
                                      {rest}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs sm:text-sm font-medium`}>
                              💡 {solution.highlight}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>

            {/* Custom Solutions CTA */}
            <ScrollAnimation variant="fadeUp" className="mt-12 sm:mt-16">
              <div className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-transparent border border-pink-500/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground">
                  Ogni salone ha le sue regole:
                  <br />
                  <span className="text-gradient">
                    progettiamo e implementiamo qualsiasi funzionalità basata sul tuo flusso di lavoro.
                  </span>
                </p>
                <p className="text-foreground mt-6 max-w-2xl mx-auto text-lg sm:text-xl">
                  Se hai un problema nella gestione o semplicemente vuoi migliorare qualcosa, noi costruiamo l'automazione per risolverlo.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Perché Sceglierci
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Perché scegliere ST Solutions
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="h-full rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">{benefit.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Risultati Misurabili
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Risultati concreti che puoi misurare
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <StaggerItem key={index} className="h-full">
                    <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 text-center flex flex-col">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                        <p className="text-sm text-white/60">{result.metric}</p>
                      </div>
                      <div className="flex items-center justify-center gap-3 sm:gap-4 flex-1">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white/40 mb-1">Prima</p>
                          <p className="text-base sm:text-lg font-bold text-destructive break-words">{result.before}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white/40 mb-1">Dopo</p>
                          <p className="text-base sm:text-lg font-bold text-primary break-words">{result.after}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="section-padding bg-gradient-to-br from-pink-500/10 via-background to-rose-500/5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl" />
          </div>
          
          <div className="container-custom px-6 sm:px-8 relative z-10">
            <ScrollAnimation variant="fadeUp">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 text-pink-500 text-sm font-medium mb-6">
                  Inizia Ora
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pronto a rilanciare il tuo salone?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Prenota una chiamata gratuita di 10 minuti. Analizzeremo insieme i tuoi flussi operativi e ti mostreremo come possiamo aiutarti.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="group">
                    Prenota una Chiamata Gratuita
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Scrivici su WhatsApp
                    </a>
                  </Button>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Zero impegno
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Analisi gratuita
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Risposta rapida
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Process Section */}
        <section id="come-funziona" className="section-padding bg-background">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Il Nostro Processo
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Come funziona il nostro processo
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map(step => (
                <StaggerItem key={step.step} className="h-full">
                  <div className="relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="pt-4">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Chi Siamo Section */}
        <section id="chi-siamo" className="section-padding bg-muted/30">
          <div className="container-custom px-6 sm:px-8">
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
                <div className="relative pl-6 border-l-4 border-pink-500 mb-8">
                  <Quote className="absolute -left-3 -top-2 w-6 h-6 text-pink-500 bg-muted/30" />
                  <p className="text-xl italic text-foreground">
                    "Dietro ogni automazione c'è una visione umana."
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    Mi chiamo Stefano Taino e con ST Solutions aiuto i saloni a uscire dal caos operativo.
                  </p>
                  <p>
                    Non credo nei software 'copia e incolla' che vi tengono prigionieri. 
                    Il mio obiettivo è costruire l'infrastruttura digitale del tuo salone: sistemi intelligenti che 
                    gestiscono prenotazioni, riempiono l'agenda e ti restituiscono il tempo per la tua arte.
                  </p>
                  <p className="font-semibold text-foreground">
                    Con ST Solutions, non vendiamo solo software. Vendiamo libertà operativa.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Right Column - Differentiators */}
              <ScrollAnimation variant="slideRight">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Perché ST Solutions è diverso
                  </h3>
                  <p className="text-lg font-semibold text-pink-500 mb-6">
                    Non vendiamo software. Costruiamo sistemi che lavorano al posto tuo.
                  </p>
                  
                  <StaggerContainer staggerDelay={0.15}>
                    {[{
                      title: "Costruito su misura, non adattato",
                      description: "Non ti vendiamo un software standard. Studiamo come lavori oggi, individuiamo i colli di bottiglia, costruiamo la soluzione che si integra perfettamente."
                    }, {
                      title: "Persone reali, non call center",
                      description: "Quando ci contatti, parli direttamente con noi. Noi analizziamo il problema, noi progettiamo la soluzione, noi ti seguiamo nell'implementazione."
                    }, {
                      title: "Focus sui risultati misurabili",
                      description: "Non ti vendiamo 'innovazione'. Ti vendiamo agenda piena, clienti che tornano, scontrino medio più alto. Numeri concreti che si vedono sul conto corrente."
                    }].map((item, index) => (
                      <StaggerItem key={index}>
                        <div className="group p-5 rounded-xl border border-border bg-card hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 mb-4">
                          <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
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
          </div>
        </section>

        {/* A Chi Si Rivolge Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-4">
                Il Nostro Target
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                A chi si rivolge ST Solutions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le nostre soluzioni sono pensate per saloni che vogliono crescere senza sacrificare la qualità del servizio.
              </p>
            </ScrollAnimation>

            {/* Business Types List */}
            <ScrollAnimation variant="fadeUp" className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {["Parrucchieri", "Barbieri", "Centri Estetici", "Nail Salon", "Spa & Wellness", "Centri Massaggi", "Solarium", "Makeup Artist", "Hair Stylist Freelance", "Centri Depilazione"].map((profession, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 text-sm font-medium border border-pink-500/20 hover:bg-pink-500/20 transition-colors">
                    {profession}
                  </span>
                ))}
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[{
                title: "Perdi clienti durante i trattamenti",
                description: "Il telefono squilla mentre hai le mani occupate. Ogni chiamata persa è un cliente che va altrove."
              }, {
                title: "I no-show ti mangiano i margini",
                description: "Clienti che prenotano e non si presentano. Slot vuoti, tempo sprecato, incasso ridotto."
              }, {
                title: "Clienti che non tornano",
                description: "Senza richiami automatici, i clienti si dimenticano. Devi rincorrerli uno per uno."
              }, {
                title: "Non sfrutti l'upselling",
                description: "Non riesci a proporre trattamenti aggiuntivi durante il lavoro. Opportunità perse."
              }, {
                title: "Vuoi soluzioni su misura",
                description: "I software standard non si adattano al tuo modo di lavorare. Cerchi qualcosa costruito sulle tue esigenze."
              }].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group p-6 rounded-2xl border border-border bg-card hover:border-pink-500/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-2">
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
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Pronto a rilanciare il tuo salone?
              </h2>
              <div className="space-y-4 text-lg text-white/80 mb-10">
                <p>Smetti di perdere chiamate mentre lavori.</p>
                <p>Smetti di subire no-show e buchi in agenda.</p>
                <p>Smetti di rincorrere i clienti per farli tornare.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Prenota una Chiamata Gratuita
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="xl" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Scrivici su WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              <p className="text-white/60 mt-8">
                ST Solutions – Non vendiamo solo software. Vendiamo libertà operativa.
              </p>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
};

export default ParrucchieriEstetica;
