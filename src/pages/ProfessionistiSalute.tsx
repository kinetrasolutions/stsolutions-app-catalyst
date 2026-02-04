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
  title: "Telefono durante le visite",
  description: "Devi interrompere la visita per rispondere. Altre chiamate vanno in segreteria.",
  problems: ["Interruzioni continue", "Chiamate perse = pazienti persi", "Gestione manuale inefficiente"]
}, {
  icon: Clock,
  title: "Tempo in attività ripetitive",
  description: "Ore a confermare appuntamenti e rispondere alle stesse domande.",
  problems: ["Conferme e promemoria manuali", "Risposte ripetitive", "Follow-up dimenticati"]
}, {
  icon: CalendarX,
  title: "No-show e slot vuoti",
  description: "Ogni slot vuoto è un'opportunità persa. Cancellazioni dell'ultimo minuto irrecuperabili.",
  problems: ["No-show 15-30%", "Slot impossibili da recuperare", "Mancato guadagno"]
}];

const solutions = [{
  icon: Bot,
  title: "Agente AI WhatsApp/Voce",
  subtitle: "La tua segreteria h24",
  description: "Assistente intelligente che risponde ai pazienti in tempo reale, gestisce prenotazioni e fa triage. Disponibile 24/7.",
  features: ["Risponde istantaneamente – Gestisce richieste in automatico", "Gestisce agenda in autonomia – Prenota, modifica, cancella", "Triage intelligente – Distingue emergenze da routine", "Promemoria automatici – 48h, 24h, 2h prima", "FAQ automatiche – Costi, durata, preparazione"],
  highlight: "Tu lavori. L'AI gestisce tutto il resto.",
  color: "from-blue-500 to-cyan-500"
}, {
  icon: Smartphone,
  title: "App Gestionale Custom",
  subtitle: "Database clinico e CRM integrato",
  description: "Applicazione su misura: gestione pazienti, storico clinico, agenda sincronizzata, sistema anti-noshow.",
  features: ["Database GDPR-compliant – Storico, anamnesi, referti", "Agenda intelligente – Real-time, integrata con AI", "Sistema anti-noshow – Lista d'attesa, recupero slot", "Dashboard performance – Occupazione, ricavi, pazienti", "Follow-up automatici – Controlli, richiami, soddisfazione"],
  highlight: "Infrastruttura digitale di tua proprietà.",
  color: "from-purple-500 to-pink-500"
}, {
  icon: FileText,
  title: "Fatturazione Automatica",
  subtitle: "Zero lavoro manuale",
  description: "Generazione automatica fatture a fine visita, invio diretto e archiviazione conforme.",
  features: ["Generazione automatica post-visita", "Invio diretto via email", "Archiviazione digitale conforme", "Integrazione gestionale", "Report fiscali periodici"],
  highlight: "Zero lavoro amministrativo.",
  color: "from-green-500 to-emerald-500"
}];

const benefits = [{
  icon: Shield,
  title: "Indipendenza Totale",
  subtitle: "Zero Vincoli",
  description: "Investimento one-time. Nessun canone, nessuna commissione. Sistema tuo.",
  points: ["Nessun abbonamento", "Proprietà del codice", "Zero commissioni"]
}, {
  icon: Zap,
  title: "Efficienza h24",
  subtitle: "Mai più chiamate perse",
  description: "L'AI risponde in 30 secondi, giorno e notte. Tasso di risposta 100%.",
  points: ["Risposta immediata h24", "Nessuna interruzione", "Gestione simultanea"]
}, {
  icon: Database,
  title: "Dati Intelligenti",
  subtitle: "Tutto sotto controllo",
  description: "Informazioni cliniche centralizzate, sicure, accessibili. Storico completo.",
  points: ["Database centralizzato", "Ricerca veloce", "Backup automatici"]
}];

const results = [{
  metric: "No-show",
  before: "20-30%",
  after: "< 5%"
}, {
  metric: "Tempo agenda",
  before: "10-15h/sett",
  after: "< 1h/sett"
}, {
  metric: "Risposta",
  before: "40-60%",
  after: "100%"
}, {
  metric: "Occupazione",
  before: "65-75%",
  after: "90-95%"
}];

const processSteps = [{
  step: 1,
  title: "Contatto",
  description: "Chiamata o WhatsApp"
}, {
  step: 2,
  title: "Analisi",
  description: "Studio dei flussi"
}, {
  step: 3,
  title: "Proposta",
  description: "Soluzione su misura"
}, {
  step: 4,
  title: "Sviluppo",
  description: "2-4 settimane"
}, {
  step: 5,
  title: "Attivazione",
  description: "Formazione staff"
}, {
  step: 6,
  title: "Supporto",
  description: "Assistenza continua"
}];

const targetAudience = [
  "Medici di base",
  "Chirurghi",
  "Dentisti",
  "Fisioterapisti",
  "Nutrizionisti",
  "Psicologi"
];

const ProfessionistiSalute = () => {
  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività";
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
          </div>

          <div className="container-custom px-4 sm:px-6 relative z-10 pt-20 pb-12">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-4">
                  Professionisti della Salute
                </span>
                
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  L'AI al Servizio del{" "}
                  <span className="text-gradient">Tuo Studio</span>
                </h1>
                
                <p className="text-base sm:text-lg text-white/80 mb-2">
                  Ecosistema Digitale potenziato dall'AI
                </p>
                
                <p className="text-sm text-white/60 mb-4">
                  Sistema proprietario che gestisce appuntamenti e pazienti h24. Più efficienza, più tempo libero.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-6">
                  <Button variant="hero" size="lg" className="group text-sm">
                    Chiamata Gratuita
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-cyan-500/30 to-transparent blur-3xl scale-105 animate-pulse-slow" />
                <div className="relative max-w-sm mx-auto" style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}>
                  <img src={healthHeroImage} alt="Studio medico AI" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-10 md:py-12 px-4 sm:px-6 bg-muted/50">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-6">
              <h2 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                A Chi Si Rivolge
              </h2>
            </ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-2">
              {targetAudience.map((target, index) => (
                <span key={index} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  {target}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium mb-3">
                Le Sfide Quotidiane
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                I problemi che affronti ogni giorno
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {challenges.map((challenge, index) => (
                <StaggerItem key={index}>
                  <div className="h-full rounded-xl border border-border bg-card p-4 hover:shadow-lg hover:border-destructive/30 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <challenge.icon className="w-4 h-4 text-destructive" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-sm sm:text-base font-bold text-foreground mb-1">
                          {challenge.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {challenge.description}
                        </p>
                        <div className="space-y-1">
                          {challenge.problems.map((problem, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <X className="w-3 h-3 text-destructive shrink-0" />
                              <span>{problem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="soluzioni" className="py-12 md:py-16 px-4 sm:px-6 bg-muted/50">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                Le Nostre Soluzioni
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Come risolviamo questi problemi
              </h2>
            </ScrollAnimation>

            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const solutionImages = [healthWhatsappAgent, healthManagementApp, healthInvoicing];
                return (
                  <ScrollAnimation key={index} variant="fadeUp">
                    <div className="rounded-xl border border-border bg-card overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${solution.color}`} />
                      <div className="p-4 sm:p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center shrink-0`}>
                            <solution.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                              {solution.title}
                            </h3>
                            <p className="text-xs text-primary font-medium">{solution.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                          {solution.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{feature.split(" – ")[0]}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs font-medium`}>
                          {solution.highlight}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                I Vantaggi
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Perché scegliere Kinetra Solutions
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="h-full rounded-xl border border-border bg-card p-4 text-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-2">{benefit.subtitle}</p>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-muted/50">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                Risultati Concreti
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Prima vs Dopo
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {results.map((result, index) => (
                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                  <div className="rounded-xl border border-border bg-card p-3 text-center">
                    <p className="text-xs font-medium text-foreground mb-2">{result.metric}</p>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <span className="text-destructive font-medium">{result.before}</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      <span className="text-primary font-bold">{result.after}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-dark text-white">
          <div className="container-custom text-center">
            <ScrollAnimation variant="fadeUp">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                Pronto a trasformare il tuo studio?
              </h2>
              <p className="text-sm text-white/70 mb-6 max-w-lg mx-auto">
                Chiamata gratuita di 10 minuti – senza impegno
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" className="group text-sm">
                  Prenota Chiamata
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white text-sm" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-white/50">
                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Zero impegno</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Analisi gratuita</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Risposta rapida</span>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Process Section */}
        <section id="come-funziona" className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                Come Funziona
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Il nostro processo
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.05}>
                  <div className="text-center p-3 rounded-xl border border-border bg-card">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xs font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="chi-siamo" className="py-12 md:py-16 px-4 sm:px-6 bg-muted/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <ScrollAnimation variant="slideLeft">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium mb-4 border border-blue-200">
                  Chi Siamo
                </span>

                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Stefano Taino
                  <span className="block text-base sm:text-lg font-normal text-muted-foreground mt-1">
                    Founder & System Architect
                  </span>
                </h2>

                {/* Quote */}
                <div className="relative pl-4 sm:pl-5 border-l-4 border-blue-500 mb-5">
                  <Quote className="absolute -left-2.5 -top-1 w-4 h-4 text-blue-500 bg-muted/50" />
                  <p className="text-base sm:text-lg italic text-foreground">
                    "Dietro ogni automazione c'è una visione umana."
                  </p>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground mb-5">
                  <p>
                    Mi chiamo Stefano Taino e con Kinetra Solutions aiuto le attività locali a uscire dal caos operativo.
                  </p>
                  <p>
                    Non credo nei software 'copia e incolla' che vi tengono prigionieri. 
                    Il mio obiettivo è costruire l'infrastruttura digitale della vostra azienda: sistemi intelligenti che 
                    rispondono ai clienti, gestionali che ordinano i vostri dati e automazioni che vi restituiscono il tempo che meritate.
                  </p>
                  <p className="font-semibold text-foreground">
                    Con Kinetra Solutions, il software è vostro, i dati sono vostri e il risultato è garantito.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Right Column - Differentiators */}
              <ScrollAnimation variant="slideRight">
                <div className="space-y-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                    Perché Kinetra Solutions è diverso
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-blue-500 mb-4">
                    Non vendiamo software. Costruiamo sistemi che lavorano al posto vostro.
                  </p>
                  
                  <StaggerContainer staggerDelay={0.15}>
                    {[
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
                    ].map((item, index) => (
                      <StaggerItem key={index}>
                        <div className="group p-4 rounded-xl border border-border bg-card hover:border-blue-300 hover:shadow-lg transition-all duration-300 mb-3">
                          <div className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                                {item.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">
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
              <div className="mt-12 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white">
                <div className="max-w-3xl">
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
                    A chi si rivolge Kinetra Solutions?
                  </h3>
                  <p className="text-sm text-white/80 mb-5">
                    Titolari e professionisti che vogliono eliminare il caos operativo.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { 
                        title: "Il lavoro gestionale vi ruba tempo", 
                        desc: "Ore perse al telefono invece di produrre valore." 
                      },
                      { 
                        title: "Perdete clienti per risposte lente", 
                        desc: "Non riuscite a rispondere in tempo reale." 
                      },
                      { 
                        title: "Pagate troppe commissioni", 
                        desc: "Il 20-30% va alle piattaforme esterne." 
                      },
                      { 
                        title: "Il software standard non basta", 
                        desc: "Nessuna soluzione si adatta al vostro business." 
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                        <div className="flex gap-3 items-start">
                          <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-sm text-white mb-0.5">
                              {item.title}
                            </h4>
                            <p className="text-xs text-white/70">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-5 text-base font-semibold text-white">
                    Ti riconosci? Possiamo aiutarti.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-dark text-white">
          <div className="container-custom text-center">
            <ScrollAnimation variant="fadeUp">
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
                Inizia oggi
              </h2>
              <p className="text-sm text-white/70 mb-6">
                10 minuti per scoprire come possiamo aiutarti
              </p>
              <Button variant="hero" size="lg" className="group text-sm">
                Prenota Chiamata Gratuita
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
};

export default ProfessionistiSalute;
