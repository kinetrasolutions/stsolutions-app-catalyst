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
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8 sm:mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs sm:text-sm font-medium mb-3">
                Le Sfide Quotidiane
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                I problemi che affronti ogni giorno
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Riconosciamo queste sfide perché le abbiamo studiate a fondo insieme a decine di professionisti come te.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-3 gap-3 sm:gap-4">
              {challenges.map((challenge, index) => <StaggerItem key={index}>
                  <div className="h-full rounded-xl border border-border bg-card p-4 sm:p-5 hover:shadow-lg hover:border-destructive/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                      <challenge.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1.5">
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-3">
                      {challenge.description}
                    </p>
                    <div className="space-y-1">
                      {challenge.problems.slice(0, 3).map((problem, idx) => <div key={idx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <X className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{problem}</span>
                        </div>)}
                    </div>
                  </div>
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="soluzioni" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8 sm:mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3">
                Le Nostre Soluzioni
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Come ST Solutions risolve questi problemi
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Non vendiamo software preconfezionati. Costruiamo il tuo ecosistema digitale proprietario.
              </p>
            </ScrollAnimation>

            <div className="space-y-5 sm:space-y-6">
              {solutions.map((solution, index) => {
              const solutionImages = [healthWhatsappAgent, healthManagementApp, healthInvoicing];
              const imageAlts = ["Agente AI WhatsApp per prenotazioni mediche", "App gestionale per studi medici", "Sistema di fatturazione automatica"];
              return <ScrollAnimation key={index} variant={index % 2 === 0 ? "slideLeft" : "slideRight"}>
                    <div className="rounded-2xl border border-border bg-card overflow-hidden">
                      <div className={`h-1.5 bg-gradient-to-r ${solution.color}`} />
                      <div className="p-4 sm:p-6 lg:p-8">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:gap-6 items-center`}>
                          {/* Image with gradient mask fade - reduced size */}
                          <div className="w-full max-w-[200px] sm:max-w-[240px] lg:w-1/4">
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
                                <img src={solutionImages[index]} alt={imageAlts[index]} className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
                              </div>
                              
                              {/* Subtle overlay gradient */}
                              <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-5 pointer-events-none`} />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="w-full lg:w-3/4 text-center lg:text-left">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-3 mx-auto lg:mx-0`}>
                              <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-0.5">
                              {solution.title}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-2">{solution.subtitle}</p>
                            <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                            <ul className="space-y-2 mb-4 text-left">
                              {solution.features.map((feature, idx) => {
                            // Split feature at first " – " to bold the title
                            const dashIndex = feature.indexOf(' – ');
                            const hasTitle = dashIndex > -1;
                            const title = hasTitle ? feature.slice(0, dashIndex) : null;
                            const rest = hasTitle ? feature.slice(dashIndex) : feature;
                            return <li key={idx} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground text-xs sm:text-sm">
                                      {title && <strong>{title}</strong>}
                                      {rest}
                                    </span>
                                  </li>;
                          })}
                            </ul>
                            <div className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs font-medium`}>
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
            <ScrollAnimation variant="fadeUp" className="mt-8 sm:mt-10">
              <div className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent border border-primary/20">
                <p className="text-base sm:text-lg md:text-xl font-display font-semibold text-foreground">
                  Hai esigenze diverse?{" "}
                  <span className="text-gradient">
Sviluppiamo qualsiasi funzionalità su misura per il tuo studio.</span>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8 sm:mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3">
                Perché Sceglierci
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Perché scegliere ST Solutions
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-3 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => <StaggerItem key={index}>
                  <div className="h-full rounded-xl border border-border bg-card p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-primary font-medium text-xs sm:text-sm mb-2">{benefit.subtitle}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">{benefit.description}</p>
                    <ul className="space-y-1.5">
                      {benefit.points.map((point, idx) => <li key={idx} className="flex items-start gap-1.5 text-xs">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{point}</span>
                        </li>)}
                    </ul>
                  </div>
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-6 sm:mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3">
                Risultati Misurabili
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Risultati concreti che puoi misurare
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {results.map((result, index) => <StaggerItem key={index} className="h-full">
                  <div className="h-full rounded-lg sm:rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 text-center flex flex-col">
                    <p className="text-[10px] sm:text-xs text-white/60 mb-2 font-medium">{result.metric}</p>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-1">
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] text-white/40 mb-0.5">Prima</p>
                        <p className="text-xs sm:text-sm font-bold text-destructive">{result.before}</p>
                      </div>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] text-white/40 mb-0.5">Dopo</p>
                        <p className="text-xs sm:text-sm font-bold text-primary">{result.after}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-cyan-500/5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <ScrollAnimation variant="fadeUp">
              <div className="max-w-2xl mx-auto text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-4">
                  Inizia Ora
                </span>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Pronto a trasformare il tuo studio?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
                  Prenota una chiamata gratuita di 10 minuti. Analizzeremo insieme i tuoi flussi operativi e ti mostreremo come possiamo aiutarti.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero" size="default" className="group">
                    Prenota una Chiamata Gratuita
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="default" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Scrivici su WhatsApp
                    </a>
                  </Button>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    Zero impegno
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    Analisi gratuita
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    Risposta rapida
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Process Section */}
        <section id="come-funziona" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-6 sm:mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3">
                Il Nostro Processo
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Come funziona il nostro processo
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {processSteps.map(step => <StaggerItem key={step.step}>
                  <div className="relative rounded-xl border border-border bg-card p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                    <div className="pt-3">
                      <h3 className="font-display text-sm sm:text-base font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>

        {/* Chi Siamo Section */}
        <section id="chi-siamo" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <ScrollAnimation variant="slideLeft">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
                  Chi Siamo
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Stefano Taino
                  <span className="block text-base sm:text-lg font-normal text-muted-foreground mt-1">
                    Founder & System Architect
                  </span>
                </h2>

                {/* Quote */}
                <div className="relative pl-4 border-l-3 border-primary mb-5">
                  <Quote className="absolute -left-2.5 -top-1.5 w-5 h-5 text-primary bg-muted/30" />
                  <p className="text-base sm:text-lg italic text-foreground">
                    "Dietro ogni automazione c'è una visione umana."
                  </p>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground mb-5">
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
                <div className="space-y-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
                    Perché ST Solutions è diverso
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-primary mb-4">
                    Non vendiamo software. Costruiamo sistemi che lavorano al posto tuo.
                  </p>
                  
                  <StaggerContainer staggerDelay={0.1}>
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
                        <div className="group p-3 sm:p-4 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 mb-2">
                          <div className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-display font-semibold text-sm sm:text-base text-foreground mb-0.5">
                                {item.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
        <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-6 sm:mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3">
                Il Nostro Target
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                A chi si rivolge ST Solutions?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                Professionisti della salute pronti a crescere.
              </p>
            </ScrollAnimation>

            {/* Professions - Compact Chips */}
            <ScrollAnimation variant="fadeUp" className="mb-6 sm:mb-8">
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto">
                {[
                  "Medici", "Dentisti", "Fisioterapisti", "Psicologi",
                  "Nutrizionisti", "Veterinari", "Specialisti", "...e altri"
                ].map((profession, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium border border-primary/20"
                  >
                    {profession}
                  </span>
                ))}
              </div>
            </ScrollAnimation>

            {/* Target Cards - Compact Design */}
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {[
                {
                  title: "Tempo perso in gestione",
                  description: "Ore spese al telefono invece che con i pazienti"
                },
                {
                  title: "Chiamate perse",
                  description: "Pazienti che vanno altrove se non rispondi subito"
                },
                {
                  title: "Costi fissi elevati",
                  description: "Canoni mensili e commissioni che erodono i margini"
                },
                {
                  title: "Software inadeguati",
                  description: "Soluzioni standard che non si adattano a te"
                }
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group p-3 sm:p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-semibold text-xs sm:text-sm text-foreground mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
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
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto a trasformare il tuo studio?
              </h2>
              <div className="space-y-2 text-sm sm:text-base text-white/80 mb-6">
                <p>Smetti di perdere tempo in attività ripetitive.</p>
                <p>Smetti di perdere pazienti perché non riesci a rispondere.</p>
                <p>Smetti di subire no-show e slot vuoti.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" className="group">
                  Prenota una Chiamata Gratuita
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Scrivici su WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              <p className="text-white/60 mt-5 text-xs sm:text-sm">
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