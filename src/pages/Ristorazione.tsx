import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { Phone, CalendarX, CreditCard, Bot, ShieldX, UtensilsCrossed, ArrowRight, Check, X, Shield, Zap, Database, MessageSquare, CheckCircle2, Quote, ClipboardList } from "lucide-react";

// Custom images for Ristorazione page
import ristorazioneHeroImage from "@/assets/ristorazione-hero-custom.webp";
import ristorazioneWhatsappAgent from "@/assets/ristorazione-whatsapp-ok.webp";
import ristorazioneAntiNoshow from "@/assets/ristorazione-noshow-custom.webp";
import ristorazioneMenuDigitale from "@/assets/ristorazione-menu-digitale.jpg";
const challenges = [{
  icon: Phone,
  title: "Telefono sempre occupato",
  description: "Durante il servizio è impossibile rispondere a tutti. Ogni chiamata persa è un tavolo o un ordine regalato alla concorrenza.",
  problems: ["Telefono che squilla mentre servi i clienti", "Chiamate perse = tavoli vuoti", "Staff distratto durante il servizio", "Impossibilità di gestire picchi di richieste"]
}, {
  icon: CalendarX,
  title: "Il danno dei No-Show",
  description: "Clienti che prenotano e non si presentano. Tavoli vuoti e cibo sprecato che pesano direttamente sul tuo incasso a fine serata.",
  problems: ["Tavoli vuoti all'ultimo minuto", "Cibo preparato e sprecato", "Incasso ridotto a fine serata", "Nessun sistema di recupero efficace"]
}, {
  icon: CreditCard,
  title: "Dipendenza dalle piattaforme",
  description: "Pagare commissioni su ogni cliente che prenota online mangia i tuoi margini. Il cliente deve essere tuo, non del portale.",
  problems: ["Commissioni del 25-30% sugli ordini", "Clienti che sono del portale, non tuoi", "Nessun controllo sui dati dei clienti", "Dipendenza da algoritmi esterni"]
}, {
  icon: ClipboardList,
  title: "Caos Ordini e Asporto",
  description: "Gestire a mano comande, telefonate per l'asporto e richieste della sala contemporaneamente è un incubo operativo. Il rischio di errori aumenta, il servizio rallenta e i tuoi margini svaniscono nel disordine.",
  problems: ["Errori nelle comande presi al volo al telefono", "Personale bloccato a scrivere ordini invece di servire", "Ritardi nelle consegne e recensioni negative", "Sprechi di tempo che bloccano la rotazione dei tavoli"]
}];
const solutions = [{
  icon: Bot,
  title: "Prenotazioni Asporto e Tavoli in automatico",
  subtitle: "Zero stress, massima efficienza",
  description: "L'AI gestisce l'intero flusso dell'asporto e delle prenotazioni su WhatsApp e telefono. Zero errori nelle comande, zero tempi morti e personale finalmente libero di gestire la sala.",
  features: ["Risponde istantaneamente – Il cliente scrive o chiama, l'AI gestisce la richiesta in automatico", "Gestisce prenotazioni in autonomia – Prenota, modifica, cancella tavoli senza il tuo intervento", "Ordini e Orari in Autopilota – Comande precise senza errori di trascrizione e coordinamento automatico dei tempi di consegna/ritiro grazie al calendario intelligente integrato", "Zero Attese, 100% Disponibilità – L'AI gestisce ogni richiesta in tempo reale, liberando lo staff dal telefono. Servizio impeccabile anche nei momenti di massimo stress", "Multilingue – Gestisce richieste in tutte le lingue per eventuali turisti"],
  highlight: "Tu servi i clienti. L'AI gestisce tutto il resto.",
  color: "from-orange-500 to-amber-500"
}, {
  icon: ShieldX,
  title: "Recupero No-Show e Taglio degli Sprechi",
  subtitle: "Ogni tavolo diventa incasso",
  description: "Smetti di perdere soldi per colpa di chi prenota e non si presenta. L'AI trasforma l'incertezza in incasso garantito: gestisce i promemoria al posto tuo e riempie istantaneamente i buchi dell'ultimo minuto, salvando il fatturato.",
  features: ["Notifiche Anti-Dimenticanza – Promemoria strategici a 48h, 24h e 2h che eliminano le dimenticanze", "Conferma Istantanea – Il cliente conferma via link, zero telefonate perse a rincorrere le persone", "Recupero Coperti h24 – Lista d'attesa intelligente che riempie i tavoli vuoti in automatico", "Protezione Fatturato – Blacklist automatica per bloccare i clienti recidivi e inaffidabili"],
  highlight: "💡 Obiettivo: Zero tavoli vuoti, 100% incasso",
  color: "from-red-500 to-rose-500"
}, {
  icon: UtensilsCrossed,
  title: "Controllo Totale e Aumento del Margine",
  subtitle: "Zero commissioni, clienti tuoi",
  description: "Smetti di regalare il 25-30% di ogni ordine alle piattaforme. L'AI ti restituisce il controllo: un sistema di proprietà che elimina le commissioni, cattura i dati dei clienti e trasforma ogni coperto in un'opportunità di fidelizzazione e remarketing.",
  features: ["Azzeramento Commissioni – Ordini asporto direttamente dalla tua app. Ogni euro resta nel tuo cassetto", "Database Clienti Blindato – Email, preferenze, storico ordini: dati tuoi per campagne che fanno tornare le persone", "Menu Digitale Intelligente – QR code al tavolo con descrizioni, foto e allergeni. Il cliente ordina, tu incassi", "Fidelizzazione Automatica – Programma punti e offerte personalizzate che trasformano clienti occasionali in habitué", "Notifiche Push & WhatsApp – Messaggi mirati che riportano i clienti al tuo locale con offerte e novità irresistibili"],
  highlight: "💰 Obiettivo: Margini pieni, zero intermediari",
  color: "from-green-500 to-emerald-500"
}];
const benefits = [{
  icon: Shield,
  title: "Indipendenza Totale",
  subtitle: "Zero Commissioni, Zero Vincoli",
  description: "Non paghi commissioni su ogni ordine. Non dipendi da TheFork o Deliveroo che cambiano le regole. Il sistema è tuo, i clienti sono tuoi, i margini sono tuoi.",
  points: ["Zero commissioni su prenotazioni e asporto", "Piena proprietà del codice e dei dati clienti", "Nessuna dipendenza da algoritmi esterni", "Libertà di scegliere come promuoverti"]
}, {
  icon: Zap,
  title: "Efficienza h24",
  subtitle: "Mai più chiamate perse",
  description: "Il tuo Assistente AI non dorme, non va in pausa pranzo, non si distrae durante il servizio. Risponde in 30 secondi, giorno e notte. Mentre tu cucini, il sistema riempie la sala.",
  points: ["Risposta immediata h24, anche nei weekend", "Gestione simultanea di più prenotazioni", "Nessuna interruzione durante il servizio", "Tasso di risposta del 100%"]
}, {
  icon: Database,
  title: "Clienti Fidelizzati",
  subtitle: "Dati che fanno tornare le persone",
  description: "Conosci i tuoi clienti: cosa ordinano, quando vengono, le loro preferenze. Usa questi dati per farli tornare con offerte mirate, non per regalarli alle piattaforme.",
  points: ["Database clienti con storico completo", "Preferenze e allergie memorizzate", "Campagne email/SMS personalizzate", "Programma fedeltà automatizzato"]
}];
const results = [{
  metric: "No-show",
  before: "20-25%",
  after: "< 5%"
}, {
  metric: "Commissioni",
  before: "25-30%",
  after: "0%"
}, {
  metric: "Tasso risposta",
  before: "50-60%",
  after: "100%"
}, {
  metric: "Occupazione sala",
  before: "65-75%",
  after: "85-95%"
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
  description: "Ti affianchiamo nell'attivazione e formiamo il tuo staff"
}, {
  step: 6,
  title: "Supporto continuativo",
  description: "Rimaniamo disponibili per ottimizzazioni e aggiornamenti"
}];
const Ristorazione = () => {
  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20il%20mio%20ristorante";
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-fade-in">
                  L'Intelligenza Artificiale al servizio del tuo ristorante
                </span>
                
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                  L'AI che rivoluziona{" "}
                  <span className="text-cyan-400">prenotazioni</span> e{" "}
                  <span className="text-cyan-400">servizio</span>
                  <br />
                  <span className="text-white">nel tuo locale</span>
                </h1>
                
                <div className="text-base sm:text-lg text-white/70 mb-4 animate-slide-up space-y-3 text-left" style={{
                animationDelay: "0.1s"
              }}>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    Basta telefoni occupati tra asporto e prenotazioni.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    Basta no-show.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    Elimina gli sprechi di tempo e il disordine degli ordini manuali.
                  </p>
                  <p className="mt-4">
                    Un sistema di proprietà che gestisce tavoli e asporto h24, riducendo i tuoi costi operativi e garantendoti una sala sempre piena e un servizio impeccabile.
                  </p>
                </div>
                
                <p className="text-sm mb-8 sm:mb-10 animate-slide-up text-primary-foreground" style={{
                animationDelay: "0.25s"
              }}>Ogni locale ha le sue regole: progettiamo funzionalità basate sul tuo flusso di lavoro.</p>

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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-amber-500/30 to-transparent blur-3xl scale-105 animate-pulse-slow" />
                
                {/* Main image with mask fade - reduced size */}
                <div className="relative max-w-md mx-auto">
                  <div className="relative" style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                  WebkitMaskComposite: 'source-in'
                }}>
                    <img src={ristorazioneHeroImage} alt="Ristorante moderno con sistema di prenotazione AI" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  {/* Subtle overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-amber-500/10 pointer-events-none" />
                </div>
                
                {/* Floating decorative orbs - smaller */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/40 rounded-full blur-2xl animate-float" />
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-amber-500/30 rounded-full blur-xl animate-pulse-slow" />
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
                Riconosciamo queste sfide perché le abbiamo studiate a fondo insieme a decine di ristoratori come te.
              </p>
            </ScrollAnimation>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => <StaggerItem key={index}>
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
                Dallo stress delle chiamate alla sala sempre piena
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Mettiamo fine al <strong className="text-foreground">caos delle prenotazioni e dell'asporto</strong>.
                <br />
                Implementiamo soluzioni AI che <strong className="text-foreground">riducono drasticamente i tuoi costi operativi</strong> e azzerano gli
                <br />
                <strong className="text-foreground">sprechi di tempo</strong>, massimizzando l'efficienza e il <strong className="text-foreground">fatturato del tuo locale.</strong>
              </p>
            </ScrollAnimation>

            <div className="space-y-8 sm:space-y-12">
              {solutions.map((solution, index) => {
              const solutionImages = [ristorazioneWhatsappAgent, ristorazioneAntiNoshow, ristorazioneMenuDigitale];
              const imageAlts = ["Assistente AI per ristoranti", "Sistema anti no-show", "Menu e ordini proprietari"];
              return <ScrollAnimation key={index} variant={index % 2 === 0 ? "slideLeft" : "slideRight"}>
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
              <div className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground">
                  Ogni locale ha le sue regole:{" "}
                  <span className="text-gradient">
                    progettiamo e implementiamo qualsiasi funzionalità basata sul tuo flusso di lavoro.
                  </span>
                </p>
                <p className="text-foreground mt-6 max-w-2xl mx-auto text-lg sm:text-xl">
                  Se hai un problema nel servizio o nella gestione O semplicemente vuoi migliorare qualcosa, noi costruiamo l'automazione per risolverlo.
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
        <section className="section-padding bg-gradient-to-br from-orange-500/10 via-background to-amber-500/5 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
          </div>
          
          <div className="container-custom px-6 sm:px-8 relative z-10">
            <ScrollAnimation variant="fadeUp">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-500 text-sm font-medium mb-6">
                  Inizia Ora
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pronto a riempire la sala senza stress?
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
              {processSteps.map(step => <StaggerItem key={step.step} className="h-full">
                  <div className="relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-lg">
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
                <div className="relative pl-6 border-l-4 border-orange-500 mb-8">
                  <Quote className="absolute -left-3 -top-2 w-6 h-6 text-orange-500 bg-muted/30" />
                  <p className="text-xl italic text-foreground">
                    "Dietro ogni automazione c'è una visione umana."
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    Mi chiamo Stefano Taino e con ST Solutions aiuto i ristoratori a uscire dal caos operativo.
                  </p>
                  <p>
                    Non credo nei software 'copia e incolla' che vi tengono prigionieri delle piattaforme. 
                    Il mio obiettivo è costruire l'infrastruttura digitale del tuo locale: sistemi intelligenti che 
                    gestiscono prenotazioni, riempiono la sala e ti restituiscono i margini che meriti.
                  </p>
                  <p className="font-semibold text-foreground">
                    Con ST Solutions, i clienti sono tuoi, i dati sono tuoi e il risultato è garantito.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Right Column - Differentiators */}
              <ScrollAnimation variant="slideRight">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Perché ST Solutions è diverso
                  </h3>
                  <p className="text-lg font-semibold text-orange-500 mb-6">
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
                    description: "Non ti vendiamo 'innovazione'. Ti vendiamo tavoli pieni, commissioni azzerate, clienti che tornano. Numeri concreti che si vedono sul conto corrente."
                  }].map((item, index) => <StaggerItem key={index}>
                        <div className="group p-5 rounded-xl border border-border bg-card hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 mb-4">
                          <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
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
                      </StaggerItem>)}
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
                Il Nostro Target
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                A chi si rivolge ST Solutions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le nostre soluzioni sono pensate per ristoratori che vogliono crescere senza dipendere dalle piattaforme.
              </p>
            </ScrollAnimation>

            {/* Business Types List */}
            <ScrollAnimation variant="fadeUp" className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {["Ristoranti", "Trattorie", "Pizzerie", "Osterie", "Bistrot", "Wine Bar", "Cocktail Bar", "Pub", "Sushi Bar", "Steakhouse", "Agriturismi", "B&B con ristorazione", "Catering", "Food Truck"].map((profession, index) => <span key={index} className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                    {profession}
                  </span>)}
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[{
              title: "Perdi clienti durante il servizio",
              description: "Il telefono squilla mentre servi i clienti. Ogni chiamata persa è un tavolo che va alla concorrenza."
            }, {
              title: "I no-show ti mangiano i margini",
              description: "Clienti che prenotano e non si presentano. Tavoli vuoti, cibo sprecato, incasso ridotto."
            }, {
              title: "Le commissioni erodono i profitti",
              description: "Paghi il 25-30% su ogni ordine alle piattaforme. I clienti sono loro, non tuoi."
            }, {
              title: "Non hai i dati dei tuoi clienti",
              description: "Le piattaforme tengono i contatti. Non puoi fare marketing diretto né fidelizzare."
            }, {
              title: "Vuoi soluzioni su misura",
              description: "I software standard non si adattano al tuo modo di lavorare. Cerchi qualcosa costruito sulle tue esigenze."
            }].map((item, index) => <StaggerItem key={index}>
                  <div className="group p-6 rounded-2xl border border-border bg-card hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
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
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom px-6 sm:px-8">
            <ScrollAnimation variant="fadeUp" className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Pronto a riempire la sala senza stress?
              </h2>
              <div className="space-y-4 text-lg text-white/80 mb-10">
                <p>Smetti di perdere chiamate durante il servizio.</p>
                <p>Smetti di regalare commissioni alle piattaforme.</p>
                <p>Smetti di subire no-show e tavoli vuoti.</p>
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
                Consulenza strategica di 10 minuti per analizzare il tuo locale e capire come automatizzare i processi chiave.
              </p>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBar />
    </div>;
};
export default Ristorazione;