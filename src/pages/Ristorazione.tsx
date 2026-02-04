import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import FoundersSection from "@/components/FoundersSection";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { Phone, CalendarX, CreditCard, Bot, ShieldX, UtensilsCrossed, ArrowRight, Check, X, Shield, Zap, Database, MessageSquare, CheckCircle2, ClipboardList, Clock, Package, type LucideIcon } from "lucide-react";

// Custom images for Ristorazione page
import ristorazioneHeroImage from "@/assets/ristorazione-hero-custom.webp";
import ristorazioneWhatsappAgent from "@/assets/ristorazione-whatsapp-ok.webp";
import ristorazioneAntiNoshow from "@/assets/ristorazione-noshow-custom.webp";
import ristorazioneMenuDigitale from "@/assets/ristorazione-menu-digitale.jpg";

const challenges = [{
  icon: Phone,
  title: "Telefono sempre occupato",
  description: "Durante il servizio è impossibile rispondere a tutti. Ogni chiamata persa è un tavolo regalato alla concorrenza.",
  problems: ["Telefono che squilla mentre servi", "Chiamate perse = tavoli vuoti", "Staff distratto durante il servizio"]
}, {
  icon: CalendarX,
  title: "Il danno dei No-Show",
  description: "Clienti che prenotano e non si presentano. Tavoli vuoti che pesano sul tuo incasso.",
  problems: ["Tavoli vuoti all'ultimo minuto", "Cibo preparato e sprecato", "Nessun sistema di recupero"]
}, {
  icon: CreditCard,
  title: "Dipendenza dalle piattaforme",
  description: "Commissioni su ogni cliente che prenota online mangiano i tuoi margini.",
  problems: ["Commissioni del 25-30%", "Clienti del portale, non tuoi", "Nessun controllo sui dati"]
}, {
  icon: ClipboardList,
  title: "Caos Ordini e Asporto",
  description: "Gestire comande, telefonate e sala contemporaneamente è un incubo operativo.",
  problems: ["Errori nelle comande", "Personale bloccato al telefono", "Ritardi e recensioni negative"]
}];

const solutions = [{
  icon: Bot,
  title: "Prenotazioni Asporto e Tavoli in automatico",
  subtitle: "Zero stress, massima efficienza",
  description: "L'AI gestisce l'intero flusso dell'asporto e delle prenotazioni su WhatsApp e telefono. Zero errori, zero tempi morti.",
  features: ["Risponde istantaneamente – Il cliente scrive o chiama, l'AI gestisce in automatico", "Gestisce prenotazioni in autonomia – Prenota, modifica, cancella senza intervento", "Ordini e Orari in Autopilota – Comande precise, coordinamento automatico", "Zero Attese, 100% Disponibilità – Risposta in tempo reale, staff libero", "Multilingue – Gestisce richieste in tutte le lingue"],
  highlight: "Tu servi i clienti. L'AI gestisce tutto il resto.",
  color: "from-orange-500 to-amber-500"
}, {
  icon: ShieldX,
  title: "Recupero No-Show e Taglio degli Sprechi",
  subtitle: "Ogni tavolo diventa incasso",
  description: "L'AI trasforma l'incertezza in incasso garantito: promemoria automatici e recupero istantaneo dei buchi.",
  features: ["Notifiche Anti-Dimenticanza – Promemoria a 48h, 24h e 2h", "Conferma Istantanea – Conferma via link, zero telefonate", "Recupero Coperti h24 – Lista d'attesa intelligente", "Protezione Fatturato – Blacklist automatica per i recidivi"],
  highlight: "💡 Zero tavoli vuoti, 100% incasso",
  color: "from-red-500 to-rose-500"
}, {
  icon: UtensilsCrossed,
  title: "Controllo Totale e Aumento del Margine",
  subtitle: "Zero commissioni, clienti tuoi",
  description: "Smetti di regalare il 25-30% alle piattaforme. Un sistema di proprietà che elimina le commissioni.",
  features: ["Azzeramento Commissioni – Ordini dalla tua app, ogni euro nel tuo cassetto", "Database Clienti Blindato – Email, preferenze, storico: dati tuoi", "Menu Digitale Intelligente – QR con descrizioni, foto, allergeni", "Fidelizzazione Automatica – Punti e offerte per trasformare in habitué", "Notifiche Push & WhatsApp – Messaggi mirati per far tornare i clienti"],
  highlight: "💰 Margini pieni, zero intermediari",
  color: "from-green-500 to-emerald-500"
}];

const benefits = [{
  icon: Shield,
  title: "Indipendenza Totale",
  subtitle: "Zero Commissioni, Zero Vincoli",
  description: "Non paghi commissioni. Il sistema è tuo, i clienti sono tuoi, i margini sono tuoi.",
  points: ["Zero commissioni su prenotazioni", "Proprietà di codice e dati", "Nessuna dipendenza da algoritmi"]
}, {
  icon: Zap,
  title: "Efficienza h24",
  subtitle: "Mai più chiamate perse",
  description: "L'Assistente AI risponde in 30 secondi, giorno e notte. Mentre cucini, il sistema riempie la sala.",
  points: ["Risposta immediata h24", "Gestione simultanea multipla", "Tasso di risposta 100%"]
}, {
  icon: Database,
  title: "Clienti Fidelizzati",
  subtitle: "Dati che fanno tornare",
  description: "Conosci cosa ordinano, quando vengono, le preferenze. Fai tornare i clienti con offerte mirate.",
  points: ["Database completo", "Preferenze memorizzate", "Programma fedeltà automatico"]
}];

const results: { metric: string; before: string; after: string; icon: LucideIcon }[] = [{
  metric: "No-show",
  before: "20-25%",
  after: "< 5%",
  icon: CalendarX
}, {
  metric: "Ordini",
  before: "Caos",
  after: "Auto",
  icon: Package
}, {
  metric: "Risposta",
  before: "5-10 min",
  after: "< 30 sec",
  icon: Clock
}, {
  metric: "Coperti",
  before: "Manuale",
  after: "Auto",
  icon: UtensilsCrossed
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
  description: "Test insieme a te"
}, {
  step: 5,
  title: "Attivazione",
  description: "Formazione staff"
}, {
  step: 6,
  title: "Supporto",
  description: "Assistenza continua"
}];

const Ristorazione = () => {
  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20il%20mio%20ristorante";
  
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
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-4">
                  L'AI al servizio del tuo ristorante
                </span>
                
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  L'AI che rivoluziona{" "}
                  <span className="text-cyan-400">prenotazioni</span> e{" "}
                  <span className="text-cyan-400">servizio</span>
                </h1>
                
                <div className="text-sm sm:text-base text-white/70 mb-4 space-y-2">
                  {["Basta telefoni occupati", "Basta no-show", "Elimina sprechi e disordine"].map((text, i) => (
                    <p key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </span>
                      {text}
                    </p>
                  ))}
                  <p className="mt-3 text-white/60 text-xs sm:text-sm">
                    Sistema proprietario per gestire tavoli e asporto h24, riducendo i costi operativi.
                  </p>
                </div>

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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-amber-500/30 to-transparent blur-3xl scale-105 animate-pulse-slow" />
                <div className="relative max-w-sm mx-auto" style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}>
                  <img src={ristorazioneHeroImage} alt="Ristorante AI" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium mb-3">
                Problemi Quotidiani
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                Le sfide che affronti ogni giorno
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Sfide studiate con decine di ristoratori come te.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {challenge.description}
                        </p>
                        <div className="space-y-1">
                          {challenge.problems.map((problem, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <X className="w-3 h-3 text-destructive shrink-0" />
                              <span className="truncate">{problem}</span>
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
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                Dallo stress alla sala sempre piena
              </h2>
            </ScrollAnimation>

            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const solutionImages = [ristorazioneWhatsappAgent, ristorazioneAntiNoshow, ristorazioneMenuDigitale];
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
                    <result.icon className="w-5 h-5 text-primary mx-auto mb-2" />
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
                Pronto a rivoluzionare il tuo locale?
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
        <FoundersSection accentColor="orange" />

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

export default Ristorazione;
