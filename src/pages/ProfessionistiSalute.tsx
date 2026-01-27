import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { Phone, Clock, CalendarX, Bot, Smartphone, FileText, ArrowRight, Check, X, Shield, Zap, Database, MessageSquare, CheckCircle2, Quote } from "lucide-react";

// Images
import healthHeroImage from "@/assets/health-hero-custom.webp";
import healthWhatsappAgent from "@/assets/health-whatsapp-custom.webp";
import healthManagementApp from "@/assets/health-management-custom.webp";
import healthInvoicing from "@/assets/health-invoicing-custom.webp";
const challenges = [{
  icon: Phone,
  title: "Il telefono squilla durante le visite",
  description: "Sei in studio con un paziente e il telefono squilla. Devi interrompere la visita, rispondere, segnare l'appuntamento a mano, poi riprendere il filo del discorso. Nel frattempo, altre chiamate vanno in segreteria telefonica.",
  problems: ["Interruzioni continue durante le visite", "Chiamate perse = pazienti persi", "Gestione manuale inefficiente dell'agenda", "Impossibilità di rispondere h24"]
}, {
  icon: Clock,
  title: "Tempo perso in attività ripetitive",
  description: "Passi ore ogni settimana a confermare appuntamenti, inviare promemoria, rispondere alle stesse domande. Il tuo tempo è prezioso, ma finisce intrappolato in task amministrativi che potrebbero essere automatizzati.",
  problems: ["Ore spese in conferme e promemoria manuali", "Risposte ripetitive alle stesse domande", "Gestione cartelle cliniche disordinata", "Follow-up post-visita dimenticati"]
}, {
  icon: CalendarX,
  title: "No-show e slot vuoti che costano caro",
  description: "I pazienti dimenticano l'appuntamento. Ogni slot vuoto è un'opportunità persa: un paziente che avresti potuto visitare, un guadagno che non entra. E quando qualcuno cancella all'ultimo minuto, non hai il tempo di riempire quel buco nell'agenda.",
  problems: ["Tasso di no-show tra il 15-30%", "Slot vuoti impossibili da recuperare", "Mancato guadagno mensile significativo", "Nessun sistema di lista d'attesa efficace"]
}];
const solutions = [{
  icon: Bot,
  title: "Agente AI WhatsApp/Voce",
  subtitle: "La tua segreteria h24",
  description: "Un assistente intelligente che risponde ai pazienti in tempo reale, gestisce prenotazioni, modifica appuntamenti, fa triage delle richieste urgenti. Disponibile 24/7, risponde in 30 secondi.",
  features: ["Risponde istantaneamente – Il paziente scrive o chiama, l'AI gestisce la richiesta in automatico", "Gestisce l'agenda in autonomia – Prenota, modifica, cancella appuntamenti senza il tuo intervento", "Triage intelligente – Distingue emergenze da visite di routine, raccoglie info preliminari", "Promemoria automatici multi-livello – 48h, 24h, 2h prima: il paziente non dimentica più", "Risposte a domande frequenti – Costi, durata visite, preparazione esami, documentazione"],
  highlight: "Tu lavori. L'AI gestisce tutto il resto.",
  color: "from-blue-500 to-cyan-500"
}, {
  icon: Smartphone,
  title: "App Gestionale Custom",
  subtitle: "Database clinico e CRM integrato",
  description: "Un'applicazione su misura per il tuo studio: gestione pazienti, storico clinico, agenda sincronizzata, sistema anti-noshow. Tutto sotto il tuo controllo, nessuna dipendenza da terzi.",
  features: ["Database pazienti GDPR-compliant – Storico visite, anamnesi, referti, documenti allegati", "Agenda intelligente – Visualizzazione real-time, gestione slot, integrazione con l'Agente AI", "Sistema anti-noshow automatico – Lista d'attesa attiva, recupero slot cancellati in tempo reale", "Dashboard performance – Tasso occupazione, ricavi mensili, pazienti attivi/dormienti", "Follow-up automatizzati – Controlli periodici, richiami, soddisfazione post-visita"],
  highlight: "Investi in un'infrastruttura digitale di tua proprietà, progettata su misura per il tuo studio.",
  color: "from-purple-500 to-pink-500"
}, {
  icon: FileText,
  title: "Fatturazione Automatica",
  subtitle: "Creazione e invio fatture senza pensieri",
  description: "Sistema integrato per la generazione automatica delle fatture a fine visita, con invio diretto al paziente e archiviazione conforme alle normative fiscali.",
  features: ["Generazione automatica dopo ogni visita", "Invio diretto via email al paziente", "Archiviazione digitale conforme", "Integrazione con il gestionale", "Report fiscali periodici"],
  highlight: "Zero lavoro manuale per la parte amministrativa.",
  color: "from-green-500 to-emerald-500"
}];
const benefits = [{
  icon: Shield,
  title: "Indipendenza Totale",
  subtitle: "Zero Commissioni, Zero Vincoli",
  description: "Non paghi canoni mensili infiniti. Non dipendi da piattaforme terze che cambiano le regole del gioco. Il sistema è tuo, i dati sono tuoi, il controllo è tuo. Investimento one-time, beneficio a vita.",
  points: ["Progetto one-time, nessun abbonamento ricorrente", "Piena proprietà del codice e dell'infrastruttura", "Nessuna commissione su prenotazioni o visite", "Libertà di scegliere hosting e aggiornamenti"]
}, {
  icon: Zap,
  title: "Efficienza h24",
  subtitle: "Mai più chiamate perse",
  description: "Il tuo Agente AI non dorme, non va in ferie, non si ammala. Risponde in 30 secondi, giorno e notte. Mentre tu dormi, il sistema prenota visite. Mentre sei in studio, l'AI gestisce le richieste.",
  points: ["Risposta immediata h24, anche nei weekend", "Gestione simultanea di più richieste", "Nessuna interruzione durante le visite", "Tasso di risposta del 100%"]
}, {
  icon: Database,
  title: "Gestione Dati Intelligente",
  subtitle: "Tutto sotto controllo",
  description: "Dimentica post-it, fogli Excel sparsi e agende cartacee. Tutte le informazioni cliniche centralizzate, sicure, accessibili. Storico completo di ogni paziente a portata di click.",
  points: ["Database centralizzato con storico clinico completo", "Ricerca veloce per nome, patologia, data ultima visita", "Backup automatici giornalieri cifrati", "Conformità GDPR e normative sanitarie"]
}];
const results = [{
  metric: "No-show",
  before: "20-30%",
  after: "< 5%"
}, {
  metric: "Tempo gestione agenda",
  before: "10-15 ore/sett.",
  after: "< 1 ora/sett."
}, {
  metric: "Tasso risposta chiamate",
  before: "40-60%",
  after: "100%"
}, {
  metric: "Occupazione agenda",
  before: "65-75%",
  after: "90-95%"
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
  title: "Sviluppo",
  description: "Costruiamo il tuo ecosistema digitale (2-4 settimane per soluzioni standard)"
}, {
  step: 5,
  title: "Implementazione e formazione",
  description: "Ti affianchiamo nell'attivazione e formiamo il tuo staff"
}, {
  step: 6,
  title: "Supporto continuativo",
  description: "Rimaniamo disponibili per ottimizzazioni e aggiornamenti"
}];
const ProfessionistiSalute = () => {
  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività";
  return <div className="min-h-screen">
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
                  Professionisti della Salute
                </span>
                
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                  L'Intelligenza Artificiale al Servizio del{" "}
                  <span className="text-gradient">Tuo Studio</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 animate-slide-up" style={{
                animationDelay: "0.1s"
              }}>
                  Il Tuo Ecosistema Digitale potenziato dall'AI
                </p>
                
                <p className="text-base sm:text-lg text-white/70 mb-4 animate-slide-up" style={{
                animationDelay: "0.2s"
              }}>
                  Basta lavoro manuale: un sistema AI proprietario gestisce appuntamenti e pazienti h24. Più efficienza per lo studio, più tempo libero per te.
                </p>
                
                <p className="text-sm text-white/50 mb-8 sm:mb-10 animate-slide-up" style={{
                animationDelay: "0.25s"
              }}>
                  E se hai esigenze particolari, sviluppiamo la soluzione su misura per risolverle.
                </p>

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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-cyan-500/30 to-transparent blur-3xl scale-105 animate-pulse-slow" />
                
                {/* Main image with mask fade - reduced size */}
                <div className="relative max-w-md mx-auto">
                  <div className="relative" style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                  WebkitMaskComposite: 'source-in'
                }}>
                    <img src={healthHeroImage} alt="Studio dentistico moderno Dr. Mozzicato" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  {/* Subtle overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-cyan-500/10 pointer-events-none" />
                </div>
                
                {/* Floating decorative orbs - smaller */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/40 rounded-full blur-2xl animate-float" />
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl animate-pulse-slow" />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                Le Sfide Quotidiane
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                I problemi che affronti ogni giorno
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Riconosciamo queste sfide perché le abbiamo studiate a fondo insieme a decine di professionisti come te.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {challenges.map((challenge, index) => <StaggerItem key={index}>
                  <div className="h-full rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                      <challenge.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {challenge.description}
                    </p>
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider text-destructive font-semibold">I problemi concreti:</span>
                      <ul className="space-y-2">
                        {challenge.problems.map((problem, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                            {problem}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>)}
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
                Come ST Solutions risolve questi problemi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Non vendiamo software preconfezionati. Costruiamo il tuo ecosistema digitale proprietario.
              </p>
            </ScrollAnimation>

            <div className="space-y-8 sm:space-y-12">
              {solutions.map((solution, index) => {
              const solutionImages = [healthWhatsappAgent, healthManagementApp, healthInvoicing];
              const imageAlts = ["Agente AI WhatsApp per prenotazioni mediche", "App gestionale per studi medici", "Sistema di fatturazione automatica"];
              return <ScrollAnimation key={index} variant={index % 2 === 0 ? "slideLeft" : "slideRight"}>
                    <div className="rounded-3xl border border-border bg-card overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
                      <div className="p-6 sm:p-8 lg:p-12">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 items-center`}>
                          {/* Image with gradient mask fade - reduced size */}
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
                            return <li key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground text-sm sm:text-base">
                                      {title && <strong>{title}</strong>}
                                      {rest}
                                    </span>
                                  </li>;
                          })}
                            </ul>
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs sm:text-sm font-medium`}>
                              💡 {solution.highlight}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>;
            })}
            </div>

            {/* Custom Solutions CTA */}
            <ScrollAnimation variant="fadeUp" className="mt-12 sm:mt-16">
              <div className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent border border-primary/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground">
                  Hai esigenze diverse?{" "}
                  <span className="text-gradient">
Sviluppiamo qualsiasi funzionalità su misura per il tuo studio.</span>
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
              {benefits.map((benefit, index) => <StaggerItem key={index}>
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
                      {benefit.points.map((point, idx) => <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{point}</span>
                        </li>)}
                    </ul>
                  </div>
                </StaggerItem>)}
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
              {results.map((result, index) => <StaggerItem key={index} className="h-full">
                  <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 text-center flex flex-col">
                    <p className="text-sm text-white/60 mb-4">{result.metric}</p>
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
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-cyan-500/5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />
          </div>
          
          <div className="container-custom px-6 sm:px-8 relative z-10">
            <ScrollAnimation variant="fadeUp">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  Inizia Ora
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pronto a trasformare il tuo studio?
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
              {processSteps.map(step => <StaggerItem key={step.step}>
                  <div className="relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="pt-4">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>)}
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
                <div className="relative pl-6 border-l-4 border-primary mb-8">
                  <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary bg-muted/30" />
                  <p className="text-xl italic text-foreground">
                    "Dietro ogni automazione c'è una visione umana."
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    Mi chiamo Stefano Taino e con ST Solutions aiuto i professionisti della salute a uscire dal caos operativo.
                  </p>
                  <p>
                    Non credo nei software 'copia e incolla' che vi tengono prigionieri. 
                    Il mio obiettivo è costruire l'infrastruttura digitale del tuo studio: sistemi intelligenti che 
                    rispondono ai pazienti, gestionali che ordinano i tuoi dati e automazioni che ti restituiscono il tempo che meriti.
                  </p>
                  <p className="font-semibold text-foreground">
                    Con ST Solutions, il software è tuo, i dati sono tuoi e il risultato è garantito.
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
                    Non vendiamo software. Costruiamo sistemi che lavorano al posto tuo.
                  </p>
                  
                  <StaggerContainer staggerDelay={0.15}>
                    {[
                      {
                        title: "Costruito su misura, non adattato",
                        description: "Non ti vendiamo un software standard. Studiamo come lavori oggi, individuiamo i colli di bottiglia, costruiamo la soluzione che si integra perfettamente.",
                      },
                      {
                        title: "Persone reali, non call center",
                        description: "Quando ci contatti, parli direttamente con noi. Noi analizziamo il problema, noi progettiamo la soluzione, noi ti seguiamo nell'implementazione.",
                      },
                      {
                        title: "Focus sui risultati misurabili",
                        description: "Non ti vendiamo 'innovazione'. Ti vendiamo ore risparmiate, costi ridotti, pazienti non persi. Numeri concreti che si vedono sul conto corrente.",
                      },
                    ].map((item, index) => (
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
          </div>
        </section>

        {/* A Chi Si Rivolge Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Il Nostro Target
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                A chi si rivolge ST Solutions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le nostre soluzioni sono pensate per professionisti della salute che vogliono crescere senza rinunciare al controllo.
              </p>
            </ScrollAnimation>

            {/* Professions List */}
            <ScrollAnimation variant="fadeUp" className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  "Medici di base", "Specialisti", "Chirurghi", "Dentisti", "Ortodontisti",
                  "Fisioterapisti", "Osteopati", "Dietologi", "Nutrizionisti", "Psicologi",
                  "Psicoterapeuti", "Logopedisti", "Oculisti", "Dermatologi", "Cardiologi",
                  "Ginecologi", "Pediatri", "Veterinari"
                ].map((profession, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {profession}
                  </span>
                ))}
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
              {[
                {
                  title: "Perdi tempo in coordinamento",
                  description: "Ore perse tra chiamate e conferme appuntamenti."
                },
                {
                  title: "Non riesci a rispondere subito",
                  description: "Chiamate perse = pazienti persi."
                },
                {
                  title: "Vuoi ottimizzare i costi",
                  description: "Staff impegnato in attività ripetitive a basso valore."
                },
                {
                  title: "Cerchi soluzioni su misura",
                  description: "I software standard non si adattano al tuo studio."
                }
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-semibold text-foreground text-sm sm:text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
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
                Pronto a trasformare il tuo studio?
              </h2>
              <div className="space-y-4 text-lg text-white/80 mb-10">
                <p>Smetti di perdere tempo in attività ripetitive.</p>
                <p>Smetti di perdere pazienti perché non riesci a rispondere.</p>
                <p>Smetti di subire no-show e slot vuoti.</p>
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
                Consulenza strategica di 10 minuti per analizzare il tuo studio e capire come automatizzare i processi chiave.
              </p>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBar />
    </div>;
};
export default ProfessionistiSalute;